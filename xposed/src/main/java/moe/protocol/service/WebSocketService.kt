@file:OptIn(DelicateCoroutinesApi::class)

package moe.protocol.service

import com.tencent.qqnt.kernel.nativeinterface.MsgElement
import com.tencent.qqnt.kernel.nativeinterface.MsgRecord
import kotlinx.coroutines.DelicateCoroutinesApi
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import moe.fuqiuluo.xposed.helper.Level
import moe.fuqiuluo.xposed.helper.LogCenter
import moe.fuqiuluo.xposed.tools.ifNullOrEmpty
import moe.fuqiuluo.xposed.tools.json
import moe.protocol.service.api.WebSocketPushServlet
import moe.protocol.service.data.push.MemberRole
import moe.protocol.service.data.push.MsgSubType
import moe.protocol.service.data.push.MsgType
import moe.protocol.service.data.push.NoticeSubType
import moe.protocol.service.data.push.NoticeType
import moe.protocol.service.data.push.PushMessage
import moe.protocol.service.data.push.PushNotice
import moe.protocol.service.data.push.Sender
import moe.protocol.service.config.ShamrockConfig
import moe.protocol.service.data.BotStatus
import moe.protocol.service.data.Self
import moe.protocol.service.data.push.MetaEventType
import moe.protocol.service.data.push.MetaSubType
import moe.protocol.service.data.push.PostType
import moe.protocol.service.data.push.PushMetaEvent
import moe.protocol.servlet.msg.toSegment
import moe.protocol.servlet.GroupSvc
import moe.protocol.servlet.helper.ErrorTokenException
import mqq.app.MobileQQ
import org.java_websocket.WebSocket
import org.java_websocket.handshake.ClientHandshake
import java.net.URI

internal class WebSocketService(port: Int): WebSocketPushServlet(port) {
    fun pushMetaLifecycle() {
        GlobalScope.launch {
            val runtime = MobileQQ.getMobileQQ().waitAppRuntime()
            val curUin = runtime.currentAccountUin
            pushTo(PushMetaEvent(
                time = System.currentTimeMillis() / 1000,
                selfId = app.longAccountUin,
                postType = PostType.Meta,
                type = MetaEventType.LifeCycle,
                subType = MetaSubType.Connect,
                status = BotStatus(
                    Self("qq", curUin), runtime.isLogin, status = "正常", good = true
                ),
                interval = 15000
            ))
        }
    }

    override fun pushSelfPrivateSentMsg(
        record: MsgRecord,
        elements: List<MsgElement>,
        raw: String,
        msgHash: Int
    ) {
        pushMsg(
            record,
            elements,
            raw,
            msgHash,
            MsgType.Private,
            MsgSubType.Friend,
            postType = PostType.MsgSent
        )
    }

    override fun pushSelfGroupSentMsg(
        record: MsgRecord,
        elements: List<MsgElement>,
        raw: String,
        msgHash: Int
    ) {
        pushMsg(
            record,
            elements,
            raw,
            msgHash,
            MsgType.Group,
            MsgSubType.NORMAL,
            postType = PostType.MsgSent
        )
    }

    override fun pushPrivateMsg(
        record: MsgRecord,
        elements: List<MsgElement>,
        raw: String,
        msgHash: Int
    ) {
        pushMsg(record, elements, raw, msgHash, MsgType.Private, MsgSubType.Friend)
    }

    override fun pushGroupMsg(
        record: MsgRecord,
        elements: List<MsgElement>,
        raw: String,
        msgHash: Int
    ) {
        pushMsg(
            record, elements, raw, msgHash, MsgType.Group, MsgSubType.NORMAL,
            role = when (record.senderUin) {
                GroupSvc.getOwner(record.peerUin.toString()) -> MemberRole.Owner
                in GroupSvc.getAdminList(record.peerUin.toString()) -> MemberRole.Admin
                else -> MemberRole.Member
            }
        )
    }

    override fun pushGroupPoke(time: Long, operation: Long, userId: Long, groupId: Long) {
        pushNotice(
            time = time,
            type = NoticeType.Notify,
            subType = NoticeSubType.Poke,
            operation = operation,
            userId = operation,
            groupId = groupId,
            target = userId
        )
    }

    override fun pushPrivateMsgRecall(time: Long, operation: Long, msgHash: Int, tip: String) {
        pushNotice(
            time = time,
            type = NoticeType.FriendRecall,
            operation = operation,
            userId = operation,
            msgHash = msgHash,
            tip = tip
        )
    }

    override fun pushGroupMsgRecall(
        time: Long,
        operation: Long,
        userId: Long,
        groupId: Long,
        msgHash: Int,
        tip: String
    ) {
        pushNotice(
            time = time,
            type = NoticeType.GroupRecall,
            operation = operation,
            userId = userId,
            groupId =  groupId,
            msgHash = msgHash,
            tip = tip
        )
    }

    override fun pushGroupBan(
        time: Long,
        operation: Long,
        userId: Long,
        groupId: Long,
        duration: Int
    ) {
        pushNotice(time, NoticeType.GroupBan, if (duration == 0) NoticeSubType.LiftBan else NoticeSubType.Ban, operation, userId, groupId, duration)
    }

    override fun pushGroupMemberDecreased(
        time: Long,
        target: Long,
        groupId: Long,
        operation: Long,
        type: NoticeType,
        subType: NoticeSubType
    ) {
        pushNotice(time, type, subType, operation, target, groupId)
    }

    override fun pushGroupAdminChange(time: Long, target: Long, groupId: Long, setAdmin: Boolean) {
        pushNotice(time, NoticeType.GroupAdminChange, if (setAdmin) NoticeSubType.Set else NoticeSubType.UnSet, 0, target, groupId)
    }

    private fun pushNotice(
        time: Long,
        type: NoticeType,
        subType: NoticeSubType = NoticeSubType.Set,
        operation: Long,
        userId: Long,
        groupId: Long = 0,
        duration: Int = 0,
        msgHash: Int = 0,
        target: Long = 0,
        tip: String = ""
    ) {
        pushTo(
            PushNotice(
                time = time,
                selfId = app.longAccountUin,
                postType = PostType.Notice,
                type = type,
                subType = subType,
                operatorId = operation,
                userId = userId,
                groupId = groupId,
                duration = duration,
                target = target,
                msgId = msgHash,
                tip = tip
            )
        )
    }

    private fun pushMsg(
        record: MsgRecord,
        elements: List<MsgElement>,
        raw: String,
        msgHash: Int,
        msgType: MsgType,
        subType: MsgSubType,
        role: MemberRole = MemberRole.Member,
        postType: PostType = PostType.Msg
    ) {
        GlobalScope.launch {
            pushTo(PushMessage(
                time = record.msgTime,
                selfId = app.longAccountUin,
                postType = postType,
                messageType = msgType,
                subType = subType,
                messageId = msgHash,
                groupId = record.peerUin,
                userId = record.senderUin,
                message = if (ShamrockConfig.useCQ()) raw.json else elements.toSegment(record.chatType).json,
                rawMessage = raw,
                font = 0,
                sender = Sender(
                    userId = record.senderUin,
                    nickname = record.sendNickName,
                    card = record.sendMemberName,
                    role = role,
                    title = "",
                    level = "",
                )
            ))
        }
    }

    override fun onOpen(conn: WebSocket, handshake: ClientHandshake) {
        val token = ShamrockConfig.getToken()
        if (token.isNotBlank()) {
            var accessToken = handshake.getFieldValue("access_token")
                .ifNullOrEmpty(handshake.getFieldValue("ticket"))
                .ifNullOrEmpty(handshake.getFieldValue("Authorization"))
                ?: throw ErrorTokenException
            if (accessToken.startsWith("Bearer ")) {
                accessToken = accessToken.substring(7)
            }
            if (token != accessToken) {
                conn.close()
                LogCenter.log({ "WSServer连接错误(${conn.remoteSocketAddress.address.hostAddress}:${conn.remoteSocketAddress.port}) 没有提供正确的token, $accessToken。" }, Level.ERROR)
                return
            }
        }
        val path = URI.create(handshake.resourceDescriptor).path
        if (path != "/api") {
            pushMetaLifecycle()
            eventReceivers.add(conn)
        }
        LogCenter.log({ "WSServer连接(${conn.remoteSocketAddress.address.hostAddress}:${conn.remoteSocketAddress.port}$path)" }, Level.DEBUG)
    }
}