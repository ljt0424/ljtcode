import{_ as l,o as i,c as a,U as t}from"./chunks/framework.afdf1834.js";const u=JSON.parse('{"title":"W3C标准","description":"","frontmatter":{},"headers":[],"relativePath":"audition/html/w3c.md","filePath":"audition/html/w3c.md","lastUpdated":null}'),e={name:"audition/html/w3c.md"},o=t('<h1 id="w3c标准" tabindex="-1">W3C标准 <a class="header-anchor" href="#w3c标准" aria-label="Permalink to &quot;W3C标准&quot;">​</a></h1><h2 id="概念" tabindex="-1">概念 <a class="header-anchor" href="#概念" aria-label="Permalink to &quot;概念&quot;">​</a></h2><p>web标准简单来说可以分为结构、表现和行为</p><ol><li>结构，主要是有HTML标签组成</li><li>表现，即指css样式表</li><li>行为，主要是有js、dom组成</li></ol><h2 id="体现" tabindex="-1">体现 <a class="header-anchor" href="#体现" aria-label="Permalink to &quot;体现&quot;">​</a></h2><ol><li>需要声明（DOCTYPE）</li><li>需要定义语言编码</li><li>JavaScript定义<code>&lt;script&gt;</code></li><li>CSS定义<code>&lt;style type=“text/css”&gt;</code>和数量单位</li><li>不要在注释内容中使用’’–’’</li><li>所有标签的元素和属性的名字都必须使用小写</li><li>所有的属性必须用引号&quot;&quot;括起来</li><li>把所有&lt;和&amp;特殊符号用编码表示 <ul><li>任何小于号（&lt;），不是标签的一部分，都必须被编码为 <code>&amp;lt</code>; 任何大于号（&gt;），不是标签的一部分，都必须被编码为 <code>&amp;gt</code>; 任何与号（&amp;），不是实体的一部分的，都必须被编码为 <code>&amp;amp</code>;</li></ul></li><li>所有属性必须有属性值</li><li>所有的标签都必须有相应的结束标签</li><li>所有的标签都必须合理嵌套</li><li>图片添加有意义的alt属性</li><li>在form表单中增加label，以增加用户友好度</li></ol><h2 id="意义" tabindex="-1">意义 <a class="header-anchor" href="#意义" aria-label="Permalink to &quot;意义&quot;">​</a></h2><ul><li>标签规范可以提高搜索引擎对页面的抓取效率，对SEO（搜索引擎优化）很有帮助</li><li>尽量使用外链css样式表和js脚本：</li><li>结构、表现和行为分为三块，符合规范，同时提高页面渲染速度，提高用户的体验</li><li>样式尽量少用行间样式表，使结构与表现分离，标签的id和class等属性命名要做到见文知义，标签越少，加载越快，用户体验提高，代码维护简单，便于改版</li></ul>',8),c=[o];function d(r,s,n,h,_,m){return i(),a("div",null,c)}const f=l(e,[["render",d]]);export{u as __pageData,f as default};
