import{_ as s,o as a,c as l,U as n}from"./chunks/framework.afdf1834.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"audition/面试/萌泰.md","filePath":"audition/面试/萌泰.md","lastUpdated":null}'),o={name:"audition/面试/萌泰.md"},e=n(`<h2 id="数组去重" tabindex="-1">数组去重 <a class="header-anchor" href="#数组去重" aria-label="Permalink to &quot;数组去重&quot;">​</a></h2><ol><li>使用Set数据结构：</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> newarr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">...new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Set</span><span style="color:#A6ACCD;">(arr)]</span></span></code></pre></div><ol start="2"><li>使用filter()方法和indexOf()方法</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> newarr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">filter</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">item</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">index</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">self</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">indexOf</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">item</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">index</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">setarr</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">arr</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">filter</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">item</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">index</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">indexOf</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">item</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">index</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><ol start="3"><li>使用reduce()方法：</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> newarr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">reduce</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">result</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">current</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">result</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">includes</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">current</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">result</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">current</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">result</span></span>
<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;">[])</span></span></code></pre></div><ol start="4"><li>使用includes()方法：遍历数组，</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> newarr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> []</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">newarr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">includes</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">arr</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">]))</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">newarr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">arr</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">])</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><ol start="5"><li>map</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> uniqueArr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Array</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">from</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Map</span><span style="color:#A6ACCD;">(arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">map</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;font-style:italic;">value</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> [value</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> value]))</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">values</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="数组有那些属性" tabindex="-1">数组有那些属性 <a class="header-anchor" href="#数组有那些属性" aria-label="Permalink to &quot;数组有那些属性&quot;">​</a></h2><h2 id="computed和watch区别" tabindex="-1">computed和watch区别 <a class="header-anchor" href="#computed和watch区别" aria-label="Permalink to &quot;computed和watch区别&quot;">​</a></h2><ol><li>用途不同：watch用于监听数据的变化并执行相应的操作，而computed用于根据数据的变化动态计算衍生出的属性值。</li><li>触发时机不同：watch是在数据变化时立即执行相应的操作，而computed是在依赖的数据发生变化时才进行计算，并将计算结果缓存起来。只有在依赖的数据发生变化时，computed会重新计算，而当没有相关数据变化时，computed会返回之前缓存的计算结果。</li><li>返回值不同：watch的回调函数接收两个参数，新值和旧值，没有返回值；而computed定义的计算属性会返回计算的结果，可以像访问普通属性一样使用。</li></ol><p>综上所述，watch用于监听数据的变化并执行操作，适用于当需要在数据变化时执行异步或复杂的操作时；computed用于根据依赖的数据动态计算属性值，并缓存计算结果，适用于根据已有数据派生出新的数据，以及在模板中使用计算结果。</p><h2 id="那些地方可以用到watch" tabindex="-1">那些地方可以用到watch <a class="header-anchor" href="#那些地方可以用到watch" aria-label="Permalink to &quot;那些地方可以用到watch&quot;">​</a></h2><p>watch可以在以下几个方面使用：</p><ol><li>数据监听：watch最常见的用途是监听数据的变化。当数据发生变化时，可以执行相应的操作，如发送网络请求、更新其他数据、触发其他函数等。这对于需要在数据变化时执行一些异步或复杂的操作非常有用。</li><li>表单输入验证：在表单中，可以使用watch来监听输入字段的变化，并根据输入的值进行验证或格式化。当用户输入发生变化时，可以立即进行验证并给出实时反馈。</li><li>深度监听：通过设置deep: true选项，可以在watch中进行深度监听，即递归地监听对象或数组内部属性的变化。这对于需要监听嵌套对象或数组的变化非常有用。</li><li>异步操作：由于watch是在数据变化后立即执行的，可以利用它来处理异步操作。例如，在监听到某个数据变化后，可以发送异步请求到服务器获取数据，并在数据返回后更新其他相关数据或界面。</li><li>路由监听：在Vue路由中，可以使用watch来监听路由的变化。当路由发生变化时，可以执行相应的操作，如更新页面内容、请求新的数据、记录路由历史等。</li></ol><p>通过使用watch，可以监视数据的变化，并在数据变化时执行相应的操作，从而实现对数据的动态响应和处理。</p><h2 id="vue3的生命周期" tabindex="-1">vue3的生命周期 <a class="header-anchor" href="#vue3的生命周期" aria-label="Permalink to &quot;vue3的生命周期&quot;">​</a></h2><h2 id="在哪个生命周期拿数据" tabindex="-1">在哪个生命周期拿数据 <a class="header-anchor" href="#在哪个生命周期拿数据" aria-label="Permalink to &quot;在哪个生命周期拿数据&quot;">​</a></h2><p>vue2在created中vue3在onmounted中</p><h2 id="css-flex布局" tabindex="-1">css flex布局 <a class="header-anchor" href="#css-flex布局" aria-label="Permalink to &quot;css flex布局&quot;">​</a></h2><p>flex弹性布局，通过在父设置display：flex或inline-flex设置，常用属性flex-direction,justify-content,align-items,flex</p><h2 id="flex布局的常用属性" tabindex="-1">flex布局的常用属性 <a class="header-anchor" href="#flex布局的常用属性" aria-label="Permalink to &quot;flex布局的常用属性&quot;">​</a></h2><h2 id="垂直居中的方式" tabindex="-1">垂直居中的方式 <a class="header-anchor" href="#垂直居中的方式" aria-label="Permalink to &quot;垂直居中的方式&quot;">​</a></h2><p>三种</p><h2 id="vue的通讯方式" tabindex="-1">vue的通讯方式 <a class="header-anchor" href="#vue的通讯方式" aria-label="Permalink to &quot;vue的通讯方式&quot;">​</a></h2><h2 id="position的属性" tabindex="-1">position的属性 <a class="header-anchor" href="#position的属性" aria-label="Permalink to &quot;position的属性&quot;">​</a></h2><ol><li>static（默认值）元素按照其在文档流中的顺序进行布局，不进行任何特殊的定位。此时 top、right、bottom、left 和 z-index 属性无效。</li><li>relative：元素的定位相对于其正常位置进行偏移，但仍然保留其原有的空间占位。</li><li>absolute：元素的定位相对于其最近的已定位（非 static）的祖先元素进行定位，如果没有已定位的祖先元素，则相对于最初的包含块（一般是 <code>&lt;html&gt; </code>元素）。元素脱离了文档流，不保留原有的空间占位。</li><li>fixed：元素的定位相对于浏览器窗口进行定位，即使页面滚动，元素仍然固定在相同的位置。元素脱离了文档流，不保留原有的空间占位。</li><li>sticky：元素在滚动时表现为 relative 和 fixed 的混合。元素在滚动到指定阈值前表现为 relative 定位，滚动超过阈值后表现为 fixed 定位</li><li>对于 display 属性为 inline 的元素，设置 position 会被忽略。</li></ol><h2 id="vue的单向数据流" tabindex="-1">vue的单向数据流 <a class="header-anchor" href="#vue的单向数据流" aria-label="Permalink to &quot;vue的单向数据流&quot;">​</a></h2><p>Vue 的单向数据流是指数据在 Vue 组件中的传递是单向的，从父组件向子组件传递。这意味着父组件可以通过 props 将数据传递给子组件，但子组件不能直接修改父组件的数据。任何修改都必须通过向父组件发送事件来触发。 简化了组件之间的数据传递和维护,减少数据的混乱和意外的副作用，提高代码的可维护性和可预测性。</p><h2 id="为什么要用异步任务" tabindex="-1">为什么要用异步任务 <a class="header-anchor" href="#为什么要用异步任务" aria-label="Permalink to &quot;为什么要用异步任务&quot;">​</a></h2><ol><li>避免阻塞：代码在执行这些操作期间将无法进行其他任务，导致程序停滞。通过使用异步操作，可以在等待这些操作完成的同时，继续执行其他任务，从而避免阻塞。</li><li>提升性能和响应性：在网络请求中，异步操作允许在等待响应期间继续处理其他用户交互，而不会使界面冻结。</li><li>并发和并行执行异步操作使得在同一时间可以执行多个操作，从而实现并发和并行处理</li><li>处理外部事件和回调：异步操作还用于处理外部事件和回调函数。例如，当用户点击按钮、定时器触发或某个操作完成时，可以使用异步操作来响应这些事件并执行相应的操作。这种机制允许程序与外部环境进行交互，并根据需要作出反应。</li></ol><h2 id="为什么要用promise" tabindex="-1">为什么要用promise <a class="header-anchor" href="#为什么要用promise" aria-label="Permalink to &quot;为什么要用promise&quot;">​</a></h2><p>在JavaScript中，Promise（承诺）是一种用于处理异步操作的对象。它被广泛用于处理网络请求、文件读写、数据库操作等需要等待一段时间才能获取结果的任务。使用Promise可以更好地组织和控制异步操作的流程，使代码更具可读性和可维护性。</p><ol><li>链式调用：将异步操作封装在一个Promise对象中，并通过链式调用来处理操作的完成或失败。</li><li>处理异步操作的结果：pending（进行中）、fulfilled（已完成）和rejected（已失败）</li><li>并行和串行操作：通过Promise.all方法，可以等待多个Promise同时完成。通过Promise.race方法，可以等待多个Promise中的任何一个完成。</li></ol><h2 id="同步任务异步任务任务队列是一个什么样的关系" tabindex="-1">同步任务异步任务任务队列是一个什么样的关系 <a class="header-anchor" href="#同步任务异步任务任务队列是一个什么样的关系" aria-label="Permalink to &quot;同步任务异步任务任务队列是一个什么样的关系&quot;">​</a></h2><ol><li>同步任务：是按照代码顺序依次执行的任务，会阻塞主线程的执行，直到任务完成</li><li>异步任务：是在特定条件下触发并在后台执行的任务，触发和执行是非阻塞的，通常是一些比较耗时的任务，它们的执行通常由底层的操作系统或浏览器的相应组件处理。</li><li>任务队列：存储异步任务的队列，常见的有宏任务队列如settimeout，setinterval，dom事件，和微任务队列如promise的回调函数，异步任务完成后他们的回调函数或者结果会被放入相应的任务队列中</li><li>事件循环：负责协调同步任务和异步任务和任务队列之间的关系的机制，不断地从任务队列中取出任务，按照一定顺序执行，一定事件循环周期内，先处理微任务队列中的任务在处理宏任务</li></ol><h2 id="事件循环" tabindex="-1">事件循环 <a class="header-anchor" href="#事件循环" aria-label="Permalink to &quot;事件循环&quot;">​</a></h2><p>事件循环：负责协调同步任务和异步任务和任务队列之间的关系的机制，不断地从任务队列中取出任务，按照一定顺序执行，一定事件循环周期内，先处理微任务队列中的任务在处理宏任务</p><h2 id="css选择器排序" tabindex="-1">css选择器排序 <a class="header-anchor" href="#css选择器排序" aria-label="Permalink to &quot;css选择器排序&quot;">​</a></h2><ul><li>内联样式的权重为1000。</li><li>ID选择器的权重为100。</li><li>类选择器、属性选择器和伪类选择器的权重为10。</li><li>元素选择器和伪元素选择器的权重为1。</li></ul>`,43),p=[e];function t(r,c,i,y,F,D){return a(),l("div",null,p)}const d=s(o,[["render",t]]);export{C as __pageData,d as default};
