import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as i,c as r,a,b as t,d as o,w as c,e}from"./app-b68ace64.js";const l={},p=e(`<div class="hint-container tip"><p class="hint-container-title">提示</p><p>对于下述消息类型, 涉及 <code>文件地址</code> 的参数规则如下:</p><ul><li>可以是本地文件路径, 以 <code>file://</code> 开头。</li><li>可以是 http(s) 链接, 以 <code>http://</code> 或 <code>https://</code> 开头。</li><li>可以是 base64 编码的数据, 但是必须以 <code>base64://</code> 开头。</li></ul></div><h2 id="图片" tabindex="-1"><a class="header-anchor" href="#图片" aria-hidden="true">#</a> 图片</h2><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>收</th><th>发</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>file</td><td>string</td><td>✓</td><td>✓</td><td>是</td><td>图片文件地址</td></tr><tr><td>url</td><td>string</td><td>✓</td><td>✓</td><td>否</td><td>图片链接地址</td></tr></tbody></table><h3 id="cq-码" tabindex="-1"><a class="header-anchor" href="#cq-码" aria-hidden="true">#</a> CQ 码</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[CQ:image,file=file:///sdcard/Pictures/shamrock.png]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="消息段" tabindex="-1"><a class="header-anchor" href="#消息段" aria-hidden="true">#</a> 消息段</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;image&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;file&quot;</span><span class="token operator">:</span> <span class="token string">&quot;file:///sdcard/Pictures/shamrock.png&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="语音" tabindex="-1"><a class="header-anchor" href="#语音" aria-hidden="true">#</a> 语音</h2><h3 id="参数-1" tabindex="-1"><a class="header-anchor" href="#参数-1" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>收</th><th>发</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>file</td><td>string</td><td>×</td><td>✓</td><td>是</td><td>语音文件地址</td></tr><tr><td>url</td><td>string</td><td>✓</td><td>✓</td><td>否</td><td>语音链接地址</td></tr><tr><td>magic</td><td>bool</td><td>×</td><td>✓</td><td>否</td><td>是否为魔法语音</td></tr></tbody></table><h3 id="cq-码-1" tabindex="-1"><a class="header-anchor" href="#cq-码-1" aria-hidden="true">#</a> CQ 码</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[CQ:record,file=file:///sdcard/Music/shamrock.mp3]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="消息段-1" tabindex="-1"><a class="header-anchor" href="#消息段-1" aria-hidden="true">#</a> 消息段</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;record&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;file&quot;</span><span class="token operator">:</span> <span class="token string">&quot;file:///sdcard/Music/shamrock.mp3&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),h={class:"hint-container warning"},u=a("p",{class:"hint-container-title"},"注意",-1),v=e(`<h2 id="视频" tabindex="-1"><a class="header-anchor" href="#视频" aria-hidden="true">#</a> 视频</h2><h3 id="参数-2" tabindex="-1"><a class="header-anchor" href="#参数-2" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>收</th><th>发</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>file</td><td>string</td><td>×</td><td>✓</td><td>是</td><td>视频文件地址</td></tr></tbody></table><h3 id="cq-码-2" tabindex="-1"><a class="header-anchor" href="#cq-码-2" aria-hidden="true">#</a> CQ 码</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[CQ:video,file=file:///sdcard/Movies/shamrock.mp4]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="消息段-2" tabindex="-1"><a class="header-anchor" href="#消息段-2" aria-hidden="true">#</a> 消息段</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;video&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;file&quot;</span><span class="token operator">:</span> <span class="token string">&quot;file:///sdcard/Movies/shamrock.mp4&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function m(b,k){const n=d("RouterLink");return i(),r("div",null,[p,a("div",h,[u,a("p",null,[t("发送语音消息需要安装语音引擎，可以在 "),o(n,{to:"/advanced/voice.html"},{default:c(()=>[t("这里")]),_:1}),t(" 查看。")])]),v])}const q=s(l,[["render",m],["__file","media.html.vue"]]);export{q as default};
