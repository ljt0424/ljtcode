import{_ as s,o as a,c as n,U as l}from"./chunks/framework.afdf1834.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"audition/react/state&props.md","filePath":"audition/react/state&props.md","lastUpdated":null}'),p={name:"audition/react/state&props.md"},o=l(`<h2 id="setstate" tabindex="-1">setState <a class="header-anchor" href="#setstate" aria-label="Permalink to &quot;setState&quot;">​</a></h2><p>setState()会对一个组件的 state 对象安排一次更新。当 state 改变了，该组件就会重新渲染。</p><p>调用 setState 其实是异步的，在调用 setState 之后，this.state 会立即映射为新的值。如果你需要基于当前的 state 来计算出新的值，那你应该传递一个函数，而不是一个对象</p><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">incrementCount</span><span style="color:#A6ACCD;">() </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 注意：这样 *不会* 像预期的那样工作。</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">setState</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">count</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">count</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">handleSomething</span><span style="color:#A6ACCD;">() </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 假设 \`this.state.count\` 从 0 开始。</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">incrementCount</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">incrementCount</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">incrementCount</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 当 React 重新渲染该组件时，\`this.state.count\` 会变为 1，而不是你期望的 3。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 这是因为上面的 \`incrementCount()\` 函数是从 \`this.state.count\` 中读取数据的，</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 但是 React 不会更新 \`this.state.count\`，直到该组件被重新渲染。</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 所以最终 \`incrementCount()\` 每次读取 \`this.state.count\` 的值都是 0，并将它设为 1。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 问题的修复参见下面的说明。</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>给 setState 传递一个函数，而不是一个对象，就可以确保每次的调用都是使用最新版的 state。传递一个函数可以让你在函数内访问到当前的 state 的值。因为 setState 的调用是分批的，所以你可以链式地进行更新，并确保它们是一个建立在另一个之上的，这样才不会发生冲突：</p><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">incrementCount</span><span style="color:#A6ACCD;">() </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">setState</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">state</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 重要：在更新的时候读取 \`state\`，而不是 \`this.state\`。</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">count</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">count</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">handleSomething</span><span style="color:#A6ACCD;">() </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 假设 \`this.state.count\` 从 0 开始。</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">incrementCount</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">incrementCount</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">incrementCount</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 如果你现在在这里读取 \`this.state.count\`，它还是会为 0。</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 但是，当 React 重新渲染该组件时，它会变为 3。</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="传入-setstate-函数的第二个参数的作用是什么" tabindex="-1">传入 setState 函数的第二个参数的作用是什么？ <a class="header-anchor" href="#传入-setstate-函数的第二个参数的作用是什么" aria-label="Permalink to &quot;传入 setState 函数的第二个参数的作用是什么？&quot;">​</a></h2><p>该函数会在 setState 函数<strong>调用完成并且组件开始重渲染的时候被调用</strong>，我们可以用该函数来<strong>监听渲染是否完成</strong>：</p><h2 id="关于setstate是同步还是异步的问题" tabindex="-1">关于setState是同步还是异步的问题 <a class="header-anchor" href="#关于setstate是同步还是异步的问题" aria-label="Permalink to &quot;关于setState是同步还是异步的问题&quot;">​</a></h2><p>在 React 的 setState 函数实现中，会根据一个变量 <code>isBatchingUpdates</code> 判断是直接更新 this.state 还是放到一个updateQueue中延时更新。而 isBatchingUpdates 默认是 false，表示 setState 会同步更新 this.state。</p><p>但是，有一个函数 <code>batchedUpdates</code>，该函数会把 isBatchingUpdates 修改为 true。</p><p>而当 React 在调用事件处理函数之前就会先调用这个 batchedUpdates将isBatchingUpdates修改为true。这样由 React 控制的事件处理过程 setState 不会同步更新 this.state，而是异步的。</p><h2 id="setstate-同步、异步总结" tabindex="-1">setState()同步、异步总结 <a class="header-anchor" href="#setstate-同步、异步总结" aria-label="Permalink to &quot;setState()同步、异步总结&quot;">​</a></h2><ul><li><p>异步的情况： 由React控制的<strong>事件处理函数，以及生命周期函数</strong>调用setState时表现为异步 。（会触发batchedUpdates把 isBatchingUpdates 修改为 true） 大部分开发中用到的都是React封装的事件，比如<strong>onChange、onClick、onTouchMove</strong>等（合成事件中），这些事件处理函数中的setState都是异步处理的。</p></li><li><p>同步的情况： React控制之外的事件中调用setState是同步更新的。 比如原生js绑定的事件，setTimeout/setInterval，ajax，promise.then内等 React 无法掌控的 APIs情况下，setState是同步更新state的</p></li></ul><h2 id="setstate-异步的好处-为什么要设计成异步的" tabindex="-1">setState()异步的好处，为什么要设计成异步的 <a class="header-anchor" href="#setstate-异步的好处-为什么要设计成异步的" aria-label="Permalink to &quot;setState()异步的好处，为什么要设计成异步的&quot;">​</a></h2><p>例如，如果 Parent 和 Child 在同一个 click 事件中都调用了 setState ，这样就可以<strong>确保 Child 不会被重新渲染两次</strong>。取而代之的是，React 会将该 state 等到<strong>浏览器事件结束的时候，再统一地进行更新</strong>。这种机制可以在大型应用中得到很好的性能提升。</p><h2 id="react的state和props区别" tabindex="-1">react的state和props区别 <a class="header-anchor" href="#react的state和props区别" aria-label="Permalink to &quot;react的state和props区别&quot;">​</a></h2><p>props（“properties” 的缩写）和 state 都是普通的 JavaScript 对象。它们都是用来保存信息的，这些信息可以控制组件的渲染输出，而它们的几个重要的不同点就是：</p><ol><li>props 是<code>传递给组件</code>的（类似于函数的形参），而 state 是在<code>组件内被组件自己管理</code>的（类似于在一个函数内声明的变量）。</li><li><code>props 是不可修改</code>的，所有 React 组件都必须像纯函数一样保护它们的 props 不被更改。 由于 props 是传入的，并且它们不能更改，因此我们可以将任何仅使用 props 的 React 组件视为 pureComponent，也就是说，在相同的输入下，它将始终呈现相同的输出。</li><li>state 是在组件中创建的，一般在 constructor中初始化 state，<code>state 是多变的、可以修改</code>，<code>事件处理函数内部setState都异步更新</code>的。</li></ol><h2 id="react的props的验证" tabindex="-1">react的props的验证 <a class="header-anchor" href="#react的props的验证" aria-label="Permalink to &quot;react的props的验证&quot;">​</a></h2><p>React 为我们提供了 PropTypes 以供验证使用。当我们向 Props 传入 的数据无效（向 Props 传入的数据类型和验证的数据类型不符）就会 在控制台发出警告信息。它可以避免随着应用越来越复杂从而出现的 问题。并且，它还可以让程序变得更易读。当然，如果项目汇中使用了 TypeScript，那么就可以不用 PropTypes 来校验，而使用 TypeScript 定义接口来校验 props。</p><h2 id="父组件props发生变化时调用的生命周期函数" tabindex="-1">父组件props发生变化时调用的生命周期函数 <a class="header-anchor" href="#父组件props发生变化时调用的生命周期函数" aria-label="Permalink to &quot;父组件props发生变化时调用的生命周期函数&quot;">​</a></h2><ol><li>组件第一次渲染时不会执行componentWillReceiveProps；</li><li>当props发生变化的时时候会执行componentWillReceiveProps；</li><li>在componentWillReceiveProps里面，旧的属性可以通过this.props来获取，新的属性则可以通过参数nextProps来获取；</li><li>此函数可以通过调用this.setState()来更新组件状态，并且不会引起第二次的渲染</li><li>也可在此函数内根据需要调用自己的自定义函数，来对prop的改变做出一些响应。</li></ol><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">componentWillReceiveProps</span><span style="color:#A6ACCD;">(nextProps) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//判断如果props发生改变</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">nextProps</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">keys</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">props</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">keys</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">setState</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        keys</span><span style="color:#89DDFF;">:this.</span><span style="color:#A6ACCD;">props</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">keys</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span></code></pre></div><p>react17之后有了hooks可以用useEffect()钩子来实现在父组件的 props 发生变化时调用的功能。</p><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> React</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useEffect</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">react</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ParentComponent</span><span style="color:#89DDFF;">({</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">prop</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">})</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">useEffect</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 在 prop 发生变化时执行的操作</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">父组件的 prop 发生变化</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 这里可以执行你希望在 prop 变化时进行的其他操作</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> [</span><span style="color:#A6ACCD;">prop</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> (</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 父组件的 JSX</span></span>
<span class="line"><span style="color:#F07178;">  )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><ul><li>使用了 useEffect 钩子函数，它接收两个参数：一个是回调函数，另一个是依赖数组。依赖数组是一个包含需要监视的变量的数组。当数组中的变量发生变化时，useEffect 将会运行回调函数。</li><li>可以根据需要在回调函数中执行任何操作，比如更新组件的状态、触发网络请求等。</li><li>由于 useEffect 也会在<strong>组件首次渲染时运行一次</strong>，你可能还需要添加一些条件语句来判断是否是首次渲染，以便执行不同的操作。</li></ul><h2 id="控制是否首次渲染" tabindex="-1">控制是否首次渲染 <a class="header-anchor" href="#控制是否首次渲染" aria-label="Permalink to &quot;控制是否首次渲染&quot;">​</a></h2><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> React</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useEffect</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useState</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">react</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">MyComponent</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">isFirstRender</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">setIsFirstRender</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">useState</span><span style="color:#F07178;">(</span><span style="color:#FF9CAC;">true</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">useEffect</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">isFirstRender</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// 首次渲染的操作</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">首次渲染</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// 这里可以执行你希望在首次渲染时进行的其他操作</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// 将 isFirstRender 设置为 false，表示首次渲染已经完成</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">setIsFirstRender</span><span style="color:#F07178;">(</span><span style="color:#FF9CAC;">false</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// 非首次渲染的操作</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">非首次渲染</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// 这里可以执行你希望在非首次渲染时进行的其他操作</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> [])</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 依赖数组为空</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> (</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 组件的 JSX</span></span>
<span class="line"><span style="color:#F07178;">  )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,29),t=[o];function e(c,r,F,y,i,D){return a(),n("div",null,t)}const h=s(p,[["render",e]]);export{C as __pageData,h as default};
