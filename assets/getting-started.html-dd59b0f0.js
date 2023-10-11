import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as h,c as d,a as e,b as a,d as t,w as l,e as r}from"./app-b68ace64.js";const s={},p=r('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>Shamrock 的更新会围绕一个稳定的版本，如果盲目升级，可能导致 Shamrock 不可用。<br> Shamrock 仍然处于快速开发阶段，可能会有大量API在未来版本中被删除或修改。<br> 请不要过度依赖实验室中的功能，以免造成不必要的损失。</p></div><h2 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>目前推荐您下载 开发版本 的 Shamrock</p></div><h3 id="稳定版本" tabindex="-1"><a class="header-anchor" href="#稳定版本" aria-hidden="true">#</a> 稳定版本</h3>',4),u={href:"https://github.com/linxinrao/Shamrock/releases",target:"_blank",rel:"noopener noreferrer"},_=e("h3",{id:"开发版本",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#开发版本","aria-hidden":"true"},"#"),a(" 开发版本")],-1),m={href:"https://github.com/linxinrao/Shamrock/actions/workflows/build-apk.yml",target:"_blank",rel:"noopener noreferrer"},k=e("h2",{id:"部署",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#部署","aria-hidden":"true"},"#"),a(" 部署")],-1),S={class:"hint-container warning"},Q=e("p",{class:"hint-container-title"},"注意",-1),f=e("br",null,null,-1),b=e("br",null,null,-1),x=e("br",null,null,-1),v=r('<h3 id="有-xp-环境" tabindex="-1"><a class="header-anchor" href="#有-xp-环境" aria-hidden="true">#</a> 有 XP 环境</h3><ul><li>打开 QQ 客户端，登录你的 QQ 账号</li><li>安装 Shamrock 并在 Xposed 启用 Shamrock 模块，如果使用 LSPosed 则需要勾选模块作用域(默认QQ)</li><li>启动 Shamrock 并<code>重新启动 QQ 客户端</code>，如果环境为 Xposed 则需要重启手机</li><li>此时 Shamrock 会显示已激活</li></ul><h3 id="无-root-环境" tabindex="-1"><a class="header-anchor" href="#无-root-环境" aria-hidden="true">#</a> 无 Root 环境</h3><h4 id="使用-lspatch" tabindex="-1"><a class="header-anchor" href="#使用-lspatch" aria-hidden="true">#</a> 使用 LSPatch</h4><ul><li>打开 LSPatch 并在<code>管理</code>页面选择 <code>+</code> 新建修补，可以选择从存储目录选择QQAPK或者直接使用已经安装过的QQ</li><li>修补模式默认且应该优先选择<code>本地模式</code>，这样方便直接更新 Shamrock 模块而不用重新修补，缺点是需要 LSPatch 保持后台运行</li><li>其他配置保持默认，然后点击<code>开始修补</code>，修补完成后会提示安装(如果已经安装会提示卸载)</li><li>安装 Shamrock 模块后在<code>管理</code>页面点击修补好的 QQ 选择<code>模块作用域</code> 勾选上 Shamrock 模块然后保存</li><li>启动 Shamrock 并<code>重新启动 QQ 客户端</code></li><li>此时 Shamrock 会显示已激活</li></ul><div class="hint-container warning"><p class="hint-container-title">注意</p><p>使用<code>本地模式</code>修补后需要保持LSPatch在后台运行，优点是模块更新无需重新修补QQ 使用<code>集成模式</code>修补后无需保持LSPatch在后台运行，缺点是模块更新后需要重新修补QQ</p></div><h4 id="使用-virtualxposed" tabindex="-1"><a class="header-anchor" href="#使用-virtualxposed" aria-hidden="true">#</a> 使用 VirtualXposed</h4><div class="hint-container warning"><p class="hint-container-title">注意</p><p>在 Android 12 以上的系统中，使用 VirtualXposed 会导致闪退。</p></div><h4 id="使用-太极" tabindex="-1"><a class="header-anchor" href="#使用-太极" aria-hidden="true">#</a> 使用 太极</h4><div class="hint-container warning"><p class="hint-container-title">注意</p><p>暂不支持太极使用，正在申请。</p></div>',10);function g(L,w){const i=o("ExternalLinkIcon"),n=o("RouterLink");return h(),d("div",null,[p,e("ul",null,[e("li",null,[a("要下载 Shamrock 的稳定版本，请访问 "),e("a",u,[a("GitHub Releases"),t(i)])])]),_,e("ul",null,[e("li",null,[a("要下载 Shamrock 的开发版本，请访问 "),e("a",m,[a("GitHub Actions"),t(i)])])]),k,e("div",S,[Q,e("p",null,[a("请使用Shamrock兼容的QQ客户端部署，见 "),t(n,{to:"/guide/faq.html#%E6%94%AF%E6%8C%81%E7%9A%84qq%E7%89%88%E6%9C%AC"},{default:l(()=>[a("支持的QQ版本")]),_:1}),a(" 如果您使用了 QRSpeed/ShamrockNative 有关的插件，请确保 Shamrock 存活。"),f,a(" 无论什么情况都请确保 QQ 客户端 存活。"),b,a(" 禁止对 QQ 客户端 隐藏 Shamrock，这将导致无法运行。"),x,a(" 首次启动，必须打开 Shamrock，否则无法推送配置文件导致失败。")])]),v])}const A=c(s,[["render",g],["__file","getting-started.html.vue"]]);export{A as default};