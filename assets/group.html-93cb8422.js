import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as n,c,a as t,b as d,d as e,e as a}from"./app-b68ace64.js";const s={},p={class:"hint-container warning"},l=t("p",{class:"hint-container-title"},"注意",-1),b=a('<h2 id="设置群名" tabindex="-1"><a class="header-anchor" href="#设置群名" aria-hidden="true">#</a> 设置群名</h2><p>该接口用于设置群名。</p><h3 id="api-端点" tabindex="-1"><a class="header-anchor" href="#api-端点" aria-hidden="true">#</a> API 端点</h3><p><code>/set_group_name</code></p><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段名</th><th>数据类型</th><th>说明</th></tr></thead><tbody><tr><td><code>group_id</code></td><td>int64</td><td>群号</td></tr><tr><td><code>group_name</code></td><td>string</td><td>新群名</td></tr></tbody></table><div class="hint-container tip"><p class="hint-container-title">提示</p><p>该 API 无响应数据</p></div><h3 id="api-端点-1" tabindex="-1"><a class="header-anchor" href="#api-端点-1" aria-hidden="true">#</a> API 端点</h3><p><code>/set_group_name</code></p><h3 id="参数-1" tabindex="-1"><a class="header-anchor" href="#参数-1" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>必须</th><th>说明</th></tr></thead><tbody><tr><td>group_id</td><td><code>int64</code></td><td>是</td><td>群号</td></tr><tr><td>group_name</td><td><code>string</code></td><td>是</td><td>群名</td></tr></tbody></table><h3 id="响应" tabindex="-1"><a class="header-anchor" href="#响应" aria-hidden="true">#</a> 响应</h3><p>该接口将返回处理结果。</p>',13),_={id:"设置群头像",tabindex:"-1"},u=t("a",{class:"header-anchor",href:"#设置群头像","aria-hidden":"true"},"#",-1),g=a('<p>该接口用于设置群头像。</p><h3 id="api-端点-2" tabindex="-1"><a class="header-anchor" href="#api-端点-2" aria-hidden="true">#</a> API 端点</h3><p><code>/set_group_portrait</code></p><h3 id="参数-2" tabindex="-1"><a class="header-anchor" href="#参数-2" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td><code>group_id</code></td><td>int64</td><td>群号</td></tr><tr><td><code>file</code></td><td>string</td><td>图片文件名</td></tr><tr><td><code>cache</code></td><td>int</td><td>表示是否使用已缓存的文件</td></tr></tbody></table><p>[1] <code>file</code> <strong>参数</strong>支持以下几种格式：</p>',6),f=t("code",null,"file:///C:\\\\Users\\Richard\\Pictures\\1.png",-1),x={href:"https://tools.ietf.org/html/rfc8089",target:"_blank",rel:"noopener noreferrer"},A=t("code",null,"file",-1),y=t("li",null,[d("网络 URL, 例如 "),t("code",null,"http://i1.piimg.com/567571/fdd6e7b6d93f1ef0.jpg")],-1),m=t("li",null,[d("Base64 编码, 例如 "),t("code",null,"base64://iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAIAAADJt1n/AAAAKElEQVQ4EWPk5+RmIBcwkasRpG9UM4mhNxpgowFGMARGEwnBIEJVAAAdBgBNAZf+QAAAAABJRU5ErkJggg==")],-1),I=a('<p>[2] <code>cache</code><strong>参数</strong>: 通过网络 URL 发送时有效, <code>1</code>表示使用缓存, <code>0</code>关闭关闭缓存, 默认 为<code>1</code></p><h2 id="设置群管理员" tabindex="-1"><a class="header-anchor" href="#设置群管理员" aria-hidden="true">#</a> 设置群管理员</h2><p>该接口用于设置群管理员。</p><h3 id="api-端点-3" tabindex="-1"><a class="header-anchor" href="#api-端点-3" aria-hidden="true">#</a> API 端点</h3><p><code>/set_group_admin</code></p><h3 id="参数-3" tabindex="-1"><a class="header-anchor" href="#参数-3" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>必须</th><th>说明</th></tr></thead><tbody><tr><td>group_id</td><td><code>int64</code></td><td>是</td><td>群号</td></tr><tr><td>user_id</td><td><code>int64</code></td><td>是</td><td>QQ 号</td></tr><tr><td>enable</td><td><code>bool</code></td><td>是</td><td>是否设置</td></tr></tbody></table><h3 id="响应-1" tabindex="-1"><a class="header-anchor" href="#响应-1" aria-hidden="true">#</a> 响应</h3><p>该接口将返回处理结果。</p>',9),P={id:"设置群备注",tabindex:"-1"},v=t("a",{class:"header-anchor",href:"#设置群备注","aria-hidden":"true"},"#",-1),Q=a('<p>该接口用于设置群备注。</p><h3 id="api-端点-4" tabindex="-1"><a class="header-anchor" href="#api-端点-4" aria-hidden="true">#</a> API 端点</h3><p><code>/set_group_card</code></p><h3 id="参数-4" tabindex="-1"><a class="header-anchor" href="#参数-4" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段名</th><th>数据类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td><code>group_id</code></td><td>int64</td><td>-</td><td>群号</td></tr><tr><td><code>user_id</code></td><td>int64</td><td>-</td><td>要设置的 QQ 号</td></tr><tr><td><code>card</code></td><td>string</td><td>空</td><td>群名片内容, 不填或空字符串表示删除群名片</td></tr></tbody></table><div class="hint-container tip"><p class="hint-container-title">提示</p><p>该 API 无响应数据</p></div><h2 id="设置群组专属头衔" tabindex="-1"><a class="header-anchor" href="#设置群组专属头衔" aria-hidden="true">#</a> 设置群组专属头衔</h2><p>该接口用于设置群组专属头衔。</p><h3 id="api-端点-5" tabindex="-1"><a class="header-anchor" href="#api-端点-5" aria-hidden="true">#</a> API 端点</h3><p><code>/set_group_special_title</code></p><h3 id="参数-5" tabindex="-1"><a class="header-anchor" href="#参数-5" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段名</th><th>数据类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td><code>group_id</code></td><td>int64</td><td>-</td><td>群号</td></tr><tr><td><code>user_id</code></td><td>int64</td><td>-</td><td>要设置的 QQ 号</td></tr><tr><td><code>special_title</code></td><td>string</td><td>空</td><td>专属头衔, 不填或空字符串表示删除专属头衔</td></tr><tr><td><code>duration</code></td><td>uint32</td><td><code>-1</code></td><td>专属头衔有效期, 单位秒, -1 表示永久, 不过此项似乎没有效果, 可能是只有某些特殊的时间长度有效, 有待测试</td></tr></tbody></table><div class="hint-container tip"><p class="hint-container-title">提示</p><p>该 API 无响应数据</p></div><h3 id="api-端点-6" tabindex="-1"><a class="header-anchor" href="#api-端点-6" aria-hidden="true">#</a> API 端点</h3><p><code>/set_group_special_title</code></p><h3 id="参数-6" tabindex="-1"><a class="header-anchor" href="#参数-6" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>必须</th><th>说明</th></tr></thead><tbody><tr><td>group_id</td><td><code>int64</code></td><td>是</td><td>群号</td></tr><tr><td>user_id</td><td><code>int64</code></td><td>是</td><td>QQ 号</td></tr><tr><td>special_title</td><td><code>string</code></td><td>是</td><td>头衔</td></tr></tbody></table><h3 id="响应-2" tabindex="-1"><a class="header-anchor" href="#响应-2" aria-hidden="true">#</a> 响应</h3><p>该接口将返回处理结果。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>该api可能返回了例子响应中没有的参数，请不要作为参考使用。</p></div><h2 id="群单人禁言" tabindex="-1"><a class="header-anchor" href="#群单人禁言" aria-hidden="true">#</a> 群单人禁言</h2><p>该接口用于群单人禁言。</p><h3 id="api-端点-7" tabindex="-1"><a class="header-anchor" href="#api-端点-7" aria-hidden="true">#</a> API 端点</h3><p><code>/set_group_ban</code></p><h3 id="参数-7" tabindex="-1"><a class="header-anchor" href="#参数-7" aria-hidden="true">#</a> 参数</h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p>当 <code>duration</code> 为 <code>0</code> 时，将解除禁言。</p></div><table><thead><tr><th>字段</th><th>类型</th><th>必须</th><th>说明</th></tr></thead><tbody><tr><td>group_id</td><td><code>int64</code></td><td>是</td><td>群号</td></tr><tr><td>user_id</td><td><code>int64</code></td><td>是</td><td>QQ 号</td></tr><tr><td>duration</td><td><code>int64</code></td><td>是</td><td>禁言时长</td></tr></tbody></table><h3 id="响应-3" tabindex="-1"><a class="header-anchor" href="#响应-3" aria-hidden="true">#</a> 响应</h3><p>该接口将返回处理结果。</p><h2 id="群全员禁言" tabindex="-1"><a class="header-anchor" href="#群全员禁言" aria-hidden="true">#</a> 群全员禁言</h2><p>该接口用于群全员禁言。</p><h3 id="api-端点-8" tabindex="-1"><a class="header-anchor" href="#api-端点-8" aria-hidden="true">#</a> API 端点</h3><p><code>/set_group_whole_ban</code></p><h3 id="参数-8" tabindex="-1"><a class="header-anchor" href="#参数-8" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段名</th><th>数据类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td><code>group_id</code></td><td>int64</td><td>-</td><td>群号</td></tr><tr><td><code>enable</code></td><td>boolean</td><td><code>true</code></td><td>是否禁言</td></tr></tbody></table><div class="hint-container tip"><p class="hint-container-title">提示</p><p>该 API 无响应数据</p></div><h3 id="api-端点-9" tabindex="-1"><a class="header-anchor" href="#api-端点-9" aria-hidden="true">#</a> API 端点</h3><p><code>/set_group_whole_ban</code></p><h3 id="参数-9" tabindex="-1"><a class="header-anchor" href="#参数-9" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>必须</th><th>说明</th></tr></thead><tbody><tr><td>group_id</td><td><code>int64</code></td><td>是</td><td>群号</td></tr><tr><td>enable</td><td><code>bool</code></td><td>是</td><td>是否禁言</td></tr></tbody></table><h3 id="响应-4" tabindex="-1"><a class="header-anchor" href="#响应-4" aria-hidden="true">#</a> 响应</h3><p>该接口将返回处理结果。</p>',42),B={id:"设置精华消息",tabindex:"-1"},k=t("a",{class:"header-anchor",href:"#设置精华消息","aria-hidden":"true"},"#",-1),E=a('<p>该接口用于设置精华消息。</p><h3 id="api-端点-10" tabindex="-1"><a class="header-anchor" href="#api-端点-10" aria-hidden="true">#</a> API 端点</h3><p><code>/set_essence_msg</code></p><h3 id="参数-10" tabindex="-1"><a class="header-anchor" href="#参数-10" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td><code>message_id</code></td><td>int32</td><td>消息ID</td></tr></tbody></table><div class="hint-container tip"><p class="hint-container-title">提示</p><p>该 API 没有响应数据</p></div>',6),w={id:"移出精华消息",tabindex:"-1"},R=t("a",{class:"header-anchor",href:"#移出精华消息","aria-hidden":"true"},"#",-1),U=a('<p>该接口用于移出精华消息。</p><h3 id="api-端点-11" tabindex="-1"><a class="header-anchor" href="#api-端点-11" aria-hidden="true">#</a> API 端点</h3><p><code>/delete_essence_msg</code></p><h3 id="参数-11" tabindex="-1"><a class="header-anchor" href="#参数-11" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td><code>message_id</code></td><td>int32</td><td>消息ID</td></tr></tbody></table><div class="hint-container tip"><p class="hint-container-title">提示</p><p>该 API 没有响应数据</p></div>',6),V={id:"群打卡",tabindex:"-1"},N=t("a",{class:"header-anchor",href:"#群打卡","aria-hidden":"true"},"#",-1),D=a('<p>该接口用于群打卡。</p><h3 id="api-端点-12" tabindex="-1"><a class="header-anchor" href="#api-端点-12" aria-hidden="true">#</a> API 端点</h3><p><code>/send_group_sign</code></p><h3 id="参数-12" tabindex="-1"><a class="header-anchor" href="#参数-12" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段名</th><th>数据类型</th><th>说明</th></tr></thead><tbody><tr><td><code>group_id</code></td><td>int64</td><td>群号</td></tr></tbody></table><div class="hint-container tip"><p class="hint-container-title">提示</p><p>该 API 无响应数据</p></div>',6),G={id:"发送群公告",tabindex:"-1"},J=t("a",{class:"header-anchor",href:"#发送群公告","aria-hidden":"true"},"#",-1),L=a('<p>该接口用于发送群公告。</p><h3 id="api-端点-13" tabindex="-1"><a class="header-anchor" href="#api-端点-13" aria-hidden="true">#</a> API 端点</h3><p><code>/_send_group_notice</code></p><h3 id="参数-13" tabindex="-1"><a class="header-anchor" href="#参数-13" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段名</th><th>数据类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td><code>group_id</code></td><td>int64</td><td></td><td>群号</td></tr><tr><td><code>content</code></td><td>string</td><td></td><td>公告内容</td></tr><tr><td><code>image</code></td><td>string</td><td></td><td>图片路径（可选）</td></tr></tbody></table><div class="hint-container tip"><p class="hint-container-title">提示</p><p>该 API 没有响应数据</p></div>',6),j={id:"获取群公告",tabindex:"-1"},C=t("a",{class:"header-anchor",href:"#获取群公告","aria-hidden":"true"},"#",-1),M=a('<p>该接口用于获取群公告。</p><h3 id="api-端点-14" tabindex="-1"><a class="header-anchor" href="#api-端点-14" aria-hidden="true">#</a> API 端点</h3><p>终结点： <code>/_get_group_notice</code></p><h3 id="参数-14" tabindex="-1"><a class="header-anchor" href="#参数-14" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段名</th><th>数据类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td><code>group_id</code></td><td>int64</td><td></td><td>群号</td></tr></tbody></table><h3 id="响应数据" tabindex="-1"><a class="header-anchor" href="#响应数据" aria-hidden="true">#</a> 响应数据</h3><p>响应内容为 json 数组，每个元素内容如下：</p><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td><code>sender_id</code></td><td>int64</td><td>公告发表者</td></tr><tr><td><code>publish_time</code></td><td>int64</td><td>公告发表时间</td></tr><tr><td><code>message</code></td><td><a href="#message">Message对象</a></td><td>公告内容</td></tr></tbody></table><h4 id="message" tabindex="-1"><a class="header-anchor" href="#message" aria-hidden="true">#</a> message</h4><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td><code>text</code></td><td>string</td><td>公告内容</td></tr><tr><td><code>images</code></td><td><a href="#images">Images列表</a></td><td>公告图片</td></tr></tbody></table><h4 id="images" tabindex="-1"><a class="header-anchor" href="#images" aria-hidden="true">#</a> images</h4><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td><code>height</code></td><td>string</td><td>图片高度</td></tr><tr><td><code>width</code></td><td>string</td><td>图片宽度</td></tr><tr><td><code>id</code></td><td>string</td><td>图片ID</td></tr></tbody></table><h2 id="群组踢人" tabindex="-1"><a class="header-anchor" href="#群组踢人" aria-hidden="true">#</a> 群组踢人</h2><p>该接口用于群组踢人。</p><h3 id="api-端点-15" tabindex="-1"><a class="header-anchor" href="#api-端点-15" aria-hidden="true">#</a> API 端点</h3><p><code>/set_group_kick</code></p><h3 id="参数-15" tabindex="-1"><a class="header-anchor" href="#参数-15" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>必须</th><th>说明</th></tr></thead><tbody><tr><td>group_id</td><td><code>int64</code></td><td>是</td><td>群号</td></tr><tr><td>user_id</td><td><code>int64</code></td><td>是</td><td>QQ 号</td></tr><tr><td>reject_add_request</td><td><code>bool</code></td><td>否</td><td>是否拒绝再次加群</td></tr></tbody></table><h3 id="响应-5" tabindex="-1"><a class="header-anchor" href="#响应-5" aria-hidden="true">#</a> 响应</h3><p>该接口将返回处理结果。</p><h2 id="退出群组" tabindex="-1"><a class="header-anchor" href="#退出群组" aria-hidden="true">#</a> 退出群组</h2><p>该接口用于退出群组。</p><h3 id="api-端点-16" tabindex="-1"><a class="header-anchor" href="#api-端点-16" aria-hidden="true">#</a> API 端点</h3><p><code>/set_group_leave</code></p><h3 id="参数-16" tabindex="-1"><a class="header-anchor" href="#参数-16" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>必须</th><th>说明</th></tr></thead><tbody><tr><td>group_id</td><td><code>int64</code></td><td>是</td><td>群号</td></tr></tbody></table><h3 id="响应-6" tabindex="-1"><a class="header-anchor" href="#响应-6" aria-hidden="true">#</a> 响应</h3><p>该接口将返回处理结果。</p><h2 id="群戳一戳" tabindex="-1"><a class="header-anchor" href="#群戳一戳" aria-hidden="true">#</a> 群戳一戳</h2><p>该接口用于群戳一戳。</p><h3 id="api-端点-17" tabindex="-1"><a class="header-anchor" href="#api-端点-17" aria-hidden="true">#</a> API 端点</h3><p><code>/group_touch</code></p><h3 id="参数-17" tabindex="-1"><a class="header-anchor" href="#参数-17" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>必须</th><th>说明</th></tr></thead><tbody><tr><td>group_id</td><td><code>int64</code></td><td>是</td><td>群号</td></tr><tr><td>user_id</td><td><code>int64</code></td><td>是</td><td>QQ 号</td></tr></tbody></table><h3 id="响应-7" tabindex="-1"><a class="header-anchor" href="#响应-7" aria-hidden="true">#</a> 响应</h3><p>该接口将返回处理结果。</p>',36);function S(K,q){const h=r("Badge"),i=r("ExternalLinkIcon");return n(),c("div",null,[t("div",p,[l,t("p",null,[d("对于 Shamrock 尚未实现的 API，会在标题添加标记 "),e(h,{text:"未实现",type:"danger",vertical:"baseline"})])]),b,t("h2",_,[u,d(" 设置群头像 "),e(h,{text:"未实现",type:"danger"})]),g,t("ul",null,[t("li",null,[d("绝对路径, 例如 "),f,d(", 格式使用 "),t("a",x,[A,d(" URI"),e(i)])]),y,m]),I,t("h2",P,[v,d(" 设置群备注 "),e(h,{text:"未实现",type:"danger"})]),Q,t("h2",B,[k,d(" 设置精华消息 "),e(h,{text:"未实现",type:"danger"})]),E,t("h2",w,[R,d(" 移出精华消息 "),e(h,{text:"未实现",type:"danger"})]),U,t("h2",V,[N,d(" 群打卡 "),e(h,{text:"未实现",type:"danger"})]),D,t("h2",G,[J,d(" 发送群公告 "),e(h,{text:"未实现",type:"danger"})]),L,t("h2",j,[C,d(" 获取群公告 "),e(h,{text:"未实现",type:"danger"})]),M])}const T=o(s,[["render",S],["__file","group.html.vue"]]);export{T as default};
