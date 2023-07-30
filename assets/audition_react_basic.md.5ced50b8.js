import{_ as s,o as a,c as n,U as l}from"./chunks/framework.afdf1834.js";const C=JSON.parse('{"title":"基础知识","description":"","frontmatter":{},"headers":[],"relativePath":"audition/react/basic.md","filePath":"audition/react/basic.md","lastUpdated":null}'),e={name:"audition/react/basic.md"},o=l(`<h1 id="基础知识" tabindex="-1">基础知识 <a class="header-anchor" href="#基础知识" aria-label="Permalink to &quot;基础知识&quot;">​</a></h1><h2 id="react-特性有很多" tabindex="-1">React 特性有很多 <a class="header-anchor" href="#react-特性有很多" aria-label="Permalink to &quot;React 特性有很多&quot;">​</a></h2><ul><li>JSX 语法</li><li><code>单向数据绑定</code>,用户操作action，触发setstate更新seate</li><li>虚拟 DOM</li><li>声明式编程</li><li>Component</li></ul><h2 id="如何避免不必要的render" tabindex="-1">如何避免不必要的render？ <a class="header-anchor" href="#如何避免不必要的render" aria-label="Permalink to &quot;如何避免不必要的render？&quot;">​</a></h2><ul><li>在React 中，<code>类组件只要执行了setState 方法</code>，就一定会触发 render 函数执行</li><li>函数组件useState会<code>判断当前值有无发生改变确定是否执行render方法</code>，一旦父组件发生渲染，子组件也会渲染</li><li>在一个组件中, 其state变化会引起render的重新执行, 函数式组件中, 使用setHook更新state也会引起render的重新执行 <ul><li>shouldComponentUpdate，比对 state和 props，确定是否要重新渲染，使用 <code>Immutable</code>，我们会<code>在shouldComponentUpdate()中使用Immutable</code>，通过<code>is方法</code>则可以完成对比</li><li>PureComponent，对 props 和 state的浅比较结果来实现</li><li>React.memo，缓存子组件，配合usecallback</li></ul></li><li>避免使用内联函数，使用内联函数，则每次调用render函数时都会创建一个新的函数实例</li><li>Fragments 避免额外标记</li><li>在<code>render方法中</code>使用bind和render方法中使用箭头函数这两种形式在每次组件render的时候都会生成新的方法实例，<code>constructor中</code>bind事件与定义阶段使用箭头函数绑定这两种形式只会生成一个方法实例</li><li>React.lazy</li><li>服务端渲染</li></ul><h2 id="请求数据的时机" tabindex="-1">请求数据的时机 <a class="header-anchor" href="#请求数据的时机" aria-label="Permalink to &quot;请求数据的时机&quot;">​</a></h2><ul><li>vue是在组件实例创建之后DOM挂载之前拿数据，<code>created</code>,<code>setup</code><ul><li><code>模板与数据的绑定</code>，确保数据在DOM挂载时已经准备好了，通过Vue的响应式系统来实现数据的自动更新。</li></ul></li><li>react是在组件挂载到DOM后拿数据,<code>componentDidMounted</code>,<code>useEffect的回调函数</code><ul><li>React将组件的数据绑定和更新放在<code>setState</code>中，需要手动调用来进行状态更新。</li></ul></li></ul><h2 id="函数组件和类组件" tabindex="-1">函数组件和类组件 <a class="header-anchor" href="#函数组件和类组件" aria-label="Permalink to &quot;函数组件和类组件&quot;">​</a></h2><p>函数组件和类组件是 React 中两种主要的组件类型，它们在语法和用法上有一些区别。</p><ol><li>语法：函数组件是以函数的形式定义的组件，使用函数声明或函数表达式的方式创建。而类组件是以 ES6 类的形式定义的组件，使用 class 关键字创建。</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">FunctionComponent</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Hello, World!</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ClassComponent</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">React</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Component</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">render</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Hello, World!</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><ol start="2"><li>组件状态管理：在 React 16.8 版本之前，函数组件只能是无状态的（即没有组件状态），只能依赖传入的 props 进行渲染。但是，自 React 16.8 版本引入 Hooks 后，<strong>函数组件可以使用 useState 等 Hook 来管理状态</strong>，使得函数组件具有了状态管理的能力，称为有状态函数组件。</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> React</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useState</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">react</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">StatefulFunctionComponent</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">setCount</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">useState</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> (</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Count: </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">}&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onClick</span><span style="color:#89DDFF;">={()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">setCount</span><span style="color:#A6ACCD;">(count </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">}&gt;</span><span style="color:#A6ACCD;">Increment</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F07178;">  )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>类组件可以使用 this.state 和 this.setState 来管理组件的状态。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">StatefulClassComponent</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">React</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Component</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">props</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">super</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">props</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">state</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      count</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">incrementCount</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">setState</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> count</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">count</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">render</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> (</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Count: </span><span style="color:#89DDFF;">{this.</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">}&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onClick</span><span style="color:#89DDFF;">={()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">incrementCount</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">}&gt;</span><span style="color:#A6ACCD;">Increment</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F07178;">    )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><ol start="3"><li><p>生命周期：<code>类组件提供了一系列的生命周期方法</code>（如 componentDidMount、componentDidUpdate、componentWillUnmount 等）用于处理组件的不同生命周期阶段。而<code>函数组件没有生命周期方法</code>，但可以使用 useEffect Hook 来处理组件的副作用操作。</p></li><li><p>性能：由于<code>函数组件没有实例化的过程</code>，相比类组件来说，函数组件的创建和渲染效率更高。在 React 16.8 版本引入的 Hooks 中，函数组件可以使用 React.memo 和其他优化方法来提升性能。</p></li></ol><h2 id="类组件的生命周期" tabindex="-1">类组件的生命周期 <a class="header-anchor" href="#类组件的生命周期" aria-label="Permalink to &quot;类组件的生命周期&quot;">​</a></h2><p>挂载阶段：componentWillMount <code>（17废弃）</code>- render - componentDidMount 更新阶段：componentWillReceiveProps <code>（17废弃）</code>- shouldComponentUpdate - componentWillUpdate <code>（17废弃）</code>- render - componentDidUpdate 卸载阶段：componentWillUnmount</p><ul><li><p>componentWillMount componentWillMount发生在render之前，此时还没有挂载DOM，有可能会被执行多次</p></li><li><p>componentDidMount 常用的钩子，在组件挂载成功之后调用，该过程组件已经成功挂载到了真实 DOM 上。 一般在这个钩子中做一些初始化的事，例如：开启定时器、发送网络请求、订阅消息</p></li><li><p>componentWillReceiveProps(newProps) 在props发生改变（父组件重新render或者更新props）时调用，这个钩子<strong>提供对 props 的监听</strong>，在 props 发生改变后，相应改变组件的一些 state。在这个方法中改变 state 不会二次渲染，而是直接合并 state。</p></li><li><p>shouldComponentUpdate(nextProps, nextState) 这个钩子相当于一个阀门，<strong>返回一个布尔值，决定是否更新组件</strong>。 由于 react 父组件更新，必然会导致子组件更新，因此我们可以<strong>在子组件中通过手动对比 props 与 nextProps，state 与 nextState 来确定是否需要重新渲染子组件</strong>，如果需要则返回true，不需要则返回 false。该函数默认返回 true。</p></li><li><p>componentWillUpdate 组件更新前调用的钩子</p></li><li><p>componentDidUpdate 组件更新完成后调用的钩子</p></li><li><p>componentWillUnmount 卸载阶段唯一的生命周期钩子，通常在这里处理一些善后工作，例如关闭定时器、取消监听等等</p></li></ul><h2 id="react17之后" tabindex="-1">react17之后 <a class="header-anchor" href="#react17之后" aria-label="Permalink to &quot;react17之后&quot;">​</a></h2><ul><li><strong>挂载阶段</strong>（Mounting Phase）： <ul><li><code>constructor</code>：组件被创建时调用，用于初始化状态和绑定方法。</li><li><code>static getDerivedStateFromProps</code>：在组件实例化和更新时被调用，接收 props 和 state，并返回一个新的状态。</li><li><code>render</code>：根据组件的状态和属性，返回要渲染的元素结构。</li><li><code>componentDidMount</code>：在组件挂载到 DOM 后调用，可以进行一次性的数据获取、订阅事件等操作。</li></ul></li><li><strong>更新阶段</strong>（Updating Phase）： <ul><li><code>static getDerivedStateFromProps</code>：在更新时被调用，接收 props 和 state，并返回一个新的状态。</li><li><code>shouldComponentUpdate</code>：在更新前被调用，用于<code>确定组件是否需要重新渲染</code>，默认返回 true。可以通过比较新旧 props 和 state，优化渲染性能。</li><li><code>render</code>：根据组件的状态和属性，返回要渲染的元素结构。</li><li><code>getSnapshotBeforeUpdate</code> ,用于在组件更新前获取 DOM 快照（snapshot）。它在 render 方法执行后、DOM 更新前被调用，并且返回一个值作为componentDidUpdate第三个参数。</li><li><code>componentDidUpdate</code>：在组件更新后调用，可以进行 DOM 操作、网络请求等副作用操作。</li></ul></li><li><strong>卸载阶段</strong>（Unmounting Phase）： <ul><li><code>componentWillUnmount</code>：在组件卸载前调用，可以进行清理工作，如取消订阅、清除计时器等。</li></ul></li></ul><h2 id="static-getderivedstatefromprops-nextprops-prevstate" tabindex="-1">static getDerivedStateFromProps(nextProps, prevState) <a class="header-anchor" href="#static-getderivedstatefromprops-nextprops-prevstate" aria-label="Permalink to &quot;static getDerivedStateFromProps(nextProps, prevState)&quot;">​</a></h2><ul><li>该生命周期在 render方法之前调用，在初始化和后续更新都会被调用</li><li>它接收两个参数，一个是传进来的 nextProps 和之前的 prevState。</li><li>他应该返回一个对象来更新 state。如果返回 null 则不更新任何内容。</li><li>这个生命周期主要为我们提供了一个可以在组件实例化或 props、state 发生变化后根据 props 修改 state 的一个时机。</li></ul><h2 id="getsnapshotbeforeupdate-prevprops-prevstate" tabindex="-1">getSnapshotBeforeUpdate(prevProps, prevState) <a class="header-anchor" href="#getsnapshotbeforeupdate-prevprops-prevstate" aria-label="Permalink to &quot;getSnapshotBeforeUpdate(prevProps, prevState)&quot;">​</a></h2><p>在更新阶段 render 后挂载到真实 DOM 前进行的操作，它使得组件能在发生更改之前从 DOM 中捕获一些信息。此组件返回的任何值将作为 componentDidUpdate 的第三个参数。</p><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">getSnapshotBeforeUpdate</span><span style="color:#A6ACCD;">(prevProps</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> prevState)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">getSnapshotBeforeUpdate</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 组件更新成功钩子</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">componentDidUpdate</span><span style="color:#A6ACCD;">(prevProps</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> prevState</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> snapshot) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">snapshot</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// &quot;getSnapshotBeforeUpdate&quot;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="有状态组件和无状态组件" tabindex="-1">有状态组件和无状态组件 <a class="header-anchor" href="#有状态组件和无状态组件" aria-label="Permalink to &quot;有状态组件和无状态组件&quot;">​</a></h2><ul><li><p>有状态组件是指在其内部维护了状态（<code>state</code>）的组件。这种组件通常是通过继承 React.Component 或 React.PureComponent 来创建的，也可以使用 React Hooks 来管理状态。有状态组件可以通过 <code>this.state 来存储和更新状态，并且可以通过 setState 方法来更新状态</code>，并重新渲染组件。有状态组件通常用于处理复杂的业务逻辑、需要管理状态或包含生命周期方法的场景。</p></li><li><p>无状态组件是指没有自己的状态（state）的组件。这种组件<code>通常是一个纯函数</code>，接收一些输入（即props），并返回一个 JSX 元素。由于无状态组件没有状态，所以它的性能通常比有状态组件高，因为它<code>不需要进行额外的状态管理和更新</code>。无状态组件主要用于表示简单的 UI 展示组件，通常仅负责展示传入的数据。</p></li></ul><h2 id="react的响应式原理" tabindex="-1">react的响应式原理 <a class="header-anchor" href="#react的响应式原理" aria-label="Permalink to &quot;react的响应式原理&quot;">​</a></h2><ul><li>从底层实现来看修改数据：在react中，组件的状态是不能被修改的，setState没有修改原来那块内存中的变量，而是去<code>新开辟一块内存</code>； 而vue则是直接修改保存状态的那块<code>原始内存</code>。</li><li>数据修改了，接下来要解决视图的更新：react中，调用setState方法后，会自顶向下重新渲染组件，自顶向下的含义是，<code>该组件以及它的子组件全部需要渲染</code>；而vue使用Object.defineProperty（vue@3迁移到了Proxy）对数据的设置（setter）和获取（getter）做了劫持，也就是说，<code>vue能准确知道视图模版中哪一块用到了这个数据</code>，并且在这个数据修改时，告诉这个视图，你需要重新渲染了。react的组件渲染是很消耗性能的——父组件的状态更新了，所有的子组件得跟着一起渲染，它不能像vue一样，精确到当前组件的粒度。</li></ul><h2 id="react-fiber" tabindex="-1">react fiber <a class="header-anchor" href="#react-fiber" aria-label="Permalink to &quot;react fiber&quot;">​</a></h2><p>react fiber使得diff的过程被分成一小段一小段的，因为它有了“保存工作进度”的能力。<code>js会比较一部分虚拟dom，然后让渡主线程，给浏览器去做其他工作，然后继续比较，依次往复，等到最后比较完成，一次性更新到视图上。</code></p><p>react fiber使得diff阶段有了被保存工作进度的能力:</p><ul><li><p>在老的架构中，节点以树的形式被组织起来：<code>每个节点上有多个指针指向子节点</code>。要找到两棵树的变化部分，最容易想到的办法就是<code>深度优先遍历</code>，这种遍历有一个特点，必须一次性完成。假设遍历发生了中断，虽然可以保留当下进行中节点的索引，下次继续时，我们的确可以继续遍历该节点下面的所有子节点，但是<code>没有办法找到其父节点——因为每个节点只有其子节点的指向</code>。断点没有办法恢复，只能从头再来一遍。</p></li><li><p>在新的架构中，<code>每个节点有三个指针：分别指向第一个子节点、下一个兄弟节点、父节点</code>。这种数据结构就是fiber，它的遍历规则如下：</p><ul><li>从根节点开始，依次遍历该节点的子节点、兄弟节点，如果两者都遍历了，则回到它的父节点；</li><li>当一个节点的所有子节点遍历完成，才认为该节点遍历完成；</li></ul></li></ul><p>根据这个规则，同样在图中标出了节点遍历完成的顺序。跟树结构对比会发现，虽然数据结构不同，但是节点的遍历开始和完成顺序一模一样。不同的是，当遍历发生中断时，只要保留下当前节点的索引，断点是可以恢复的——因为<code>每个节点都保持着对其父节点的索引。</code></p><p>树和fiber虽然看起来很像，但本质上来说，一个是树，一个是链表。</p><h2 id="为什么vue不用fiber" tabindex="-1">为什么vue不用fiber <a class="header-anchor" href="#为什么vue不用fiber" aria-label="Permalink to &quot;为什么vue不用fiber&quot;">​</a></h2><ul><li>react因为先天的不足——无法精确更新，所以需要react fiber把组件渲染工作切片；而vue基于数据劫持，更新粒度很小，没有这个压力；</li><li>react fiber这种数据结构使得节点可以回溯到其父节点，只要保留下中断的节点索引，就可以恢复之前的工作进度；</li></ul><h2 id="react的事件机制" tabindex="-1">react的事件机制 <a class="header-anchor" href="#react的事件机制" aria-label="Permalink to &quot;react的事件机制&quot;">​</a></h2><p>react自身实现了一套自己的事件机制，包括事件注册、事件的合成、事件冒泡、事件派发</p><ul><li>react 的所有事件并没有绑定到具体的dom节点上而是绑定在了document 上，然后由统一的事件处理程序<code>dispatchEvent</code>来处理，同时也是基于冒泡，所有节点的事件都会在 document 上触发。</li><li>合成事件的执行是在冒泡阶段，通过这种处理，进行浏览器兼容，引入事件池避免频繁创建和回收，方便事件统一管理</li><li>在 React 17 中，React 将不再向 document 附加事件处理器。而会将事件处理器附加到渲染 React 树的根 DOM 容器中</li></ul><h2 id="react事件机制流程" tabindex="-1">React事件机制流程 <a class="header-anchor" href="#react事件机制流程" aria-label="Permalink to &quot;React事件机制流程&quot;">​</a></h2><p>注册过程要进行两件事：事件注册；事件存储(react17废除)。</p><ol><li><code>虚拟DOM阶段，处理组件的props是否有声明为事件</code>，得到事件类型 click,change 和对应的事件处理程序，</li><li><code>将这些事件在document上注册</code>，</li><li><code>事件存储(react17废除)</code>：<code>在组件挂载完成后</code>，将事件处理函数存储到<code>listenerBank</code>（映射表）中</li></ol><p>事件执行：</p><ol><li>当事件冒泡到document时，触发统一的事件回调函数ReactEventListener.<code>dispatchEvent</code></li><li>根据原生事件对象（nativeEvent）<code>找到事件触发节点对应的组件</code></li><li>开始事件的合成 <ul><li>根据当前事件类型生成指定的合成对象</li><li>封装原生事件和冒泡机制</li><li>查找当前元素以及它所有父级</li><li>在<code>listenerBank</code>事件池中查找事件回调并合成到<code>event</code>(合成事件结束)</li></ul></li><li>处理合成事件内的回调事件（事件触发完成 end）</li></ol><h2 id="合成事件" tabindex="-1">合成事件 <a class="header-anchor" href="#合成事件" aria-label="Permalink to &quot;合成事件&quot;">​</a></h2><p>React 合成事件（SyntheticEvent）是 React 模拟原生 DOM 事件所有能力的一个事件对象，即在react中，我们绑定的事件onClick等，并不是原生事件，而是由原生事件合成的React事件，比如 click事件合成为onClick事件。比如blur , change , input , keydown , keyup等 , 合成为onChange。 4 那么 React 为什么使用合成事件？其主要有三个目的：</p><ul><li>进行浏览器兼容，实现更好的跨平台，采用的是顶层事件代理机制，能够保证冒泡一致性</li><li>避免垃圾回收，事件对象可能会被频繁创建和回收，因此 React 引入事件池，在事件池中获取或释放事件对象。即 React 事件对象不会被释放掉，而是存放进一个数组中，当事件触发，就从这个数组中弹出，避免频繁地去创建和销毁(垃圾回收) 。</li><li>方便事件统一管理和事务机制</li></ul><h2 id="原生事件和合成事件是如何对应起来的" tabindex="-1">原生事件和合成事件是如何对应起来的 <a class="header-anchor" href="#原生事件和合成事件是如何对应起来的" aria-label="Permalink to &quot;原生事件和合成事件是如何对应起来的&quot;">​</a></h2><p>这个对应关系存放在 React 事件插件中EventPlugin，React 在一开始就将事件插件全部加载进来，</p><ul><li>registrationNameModule， 它包含了 React 事件到它对应的 plugin 的映射，</li><li>registrationNameDependencies，合成事件到原生事件的映射</li><li>plugins， 这个对象就是上面注册的所有插件列表。</li></ul><h2 id="listenerbank事件池" tabindex="-1">listenerBank事件池 <a class="header-anchor" href="#listenerbank事件池" aria-label="Permalink to &quot;listenerBank事件池&quot;">​</a></h2><ul><li>事件对象可能会被频繁创建和回收，因此 React16之前(17废除) 引入事件池，在事件池中获取或释放事件对象。</li><li>即 React 事件对象不会被释放掉，而是存放进一个数组中，当事件触发，就从这个数组中弹出，避免频繁地去创建和销毁(垃圾回收)。</li><li>在事件处理函数执行完毕后,会释放事件源到事件池中，清空属性，这时，在事件处理函数运行之后获取不到事件对象的属性，需要用<code>e.persist()</code>方法</li></ul><h2 id="react的事件和普通的html事件有什么不同" tabindex="-1">React的事件和普通的HTML事件有什么不同？ <a class="header-anchor" href="#react的事件和普通的html事件有什么不同" aria-label="Permalink to &quot;React的事件和普通的HTML事件有什么不同？&quot;">​</a></h2><ul><li>原生事件阻止冒泡肯定会阻止合成事件的触发。</li><li>合成事件的阻止冒泡不会影响原生事件。</li></ul><p>节点上的原生事件的执行是在目标阶段，然而合成事件的执行是在冒泡阶段，所以原生事件会先合成事件执行，然后再往父节点冒泡，所以原生事件阻止冒泡会阻止合成事件的触发，而合成事件的阻止冒泡不会影响原生事件。</p><h2 id="执行顺序" tabindex="-1">执行顺序 <a class="header-anchor" href="#执行顺序" aria-label="Permalink to &quot;执行顺序&quot;">​</a></h2><ul><li>React 所有事件都挂载在 document 对象上当真实 DOM 元素触发事件，会冒泡到 document 对象后，再处理 React 事件</li><li>所以会先执行<code>原生事件</code>，然后处理<code> React 事件</code>最后真正执行 <code>document 上挂载的事件</code></li></ul><h2 id="react17-的事件机制" tabindex="-1">React17 的事件机制 <a class="header-anchor" href="#react17-的事件机制" aria-label="Permalink to &quot;React17 的事件机制&quot;">​</a></h2><ol><li>事件统一绑定container上，ReactDOM.render(app， container);而不是document上，这样好处是有利于微前端的，微前端一个前端系统中可能有多个应用，如果继续采取全部绑定在document上，那么可能多应用下会出现问题。</li><li>取消事件池 React 17 取消事件池复用</li></ol><h2 id="react的高阶组件" tabindex="-1">react的高阶组件 <a class="header-anchor" href="#react的高阶组件" aria-label="Permalink to &quot;react的高阶组件&quot;">​</a></h2><p>HOC是一种用于组件重用逻辑的技术，本质上是一个函数，接受一个组件作为参数并返回一个新的增强组件，</p><p>HOC可以通过将一些通用的功能、状态或行为添加到现有组件中，从而提供一种灵活的复制方式。它可以用于在不修改原始组的情况下件代码的情况添加新的功能或修改现有的功能。</p><p>使用HOC，你可以将共享的逻辑从组件中提取出来，以便在多个组件之间共享。这样可以避免重复代码，净化代码更加可维护和可扩展。</p><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> React </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">react</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 创建一个高阶组件</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">withLogger</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">WrappedComponent</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">//withLogger是一个接受一个组件作为参数的 HOC</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">class</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">extends</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">React</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Component</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    componentDidMount</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">组件被挂载了</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    componentWillUnmount</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">组件将被卸载了</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    render</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// 返回原始组件，并将所有传入的props传递下去</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">WrappedComponent</span><span style="color:#89DDFF;"> {...this.</span><span style="color:#A6ACCD;">props</span><span style="color:#89DDFF;">} /&gt;;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 创建一个普通组件</span></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MyComponent</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">React</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Component</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">render</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Hello, World!</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 使用高阶组件包装原始组件</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//将原始组件传递MyComponent给withLogger函数，获得了增强后的组件EnhancedComponent。</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> EnhancedComponent </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">withLogger</span><span style="color:#A6ACCD;">(MyComponent)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 渲染增强后的组件</span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDOM</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">render</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">EnhancedComponent</span><span style="color:#89DDFF;"> /&gt;,</span><span style="color:#A6ACCD;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">root</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>通过使用 HOC，我们可以在不修改MyComponent的情况下，为它添加额外的功能，比如日志记录。这样，我们可以在多个组件中重复使用这个增项逻辑强，提高代码的可复用性和可维护性。</p><h2 id="react-createclass和extends-component的区别" tabindex="-1">React.createClass和extends Component的区别 <a class="header-anchor" href="#react-createclass和extends-component的区别" aria-label="Permalink to &quot;React.createClass和extends Component的区别&quot;">​</a></h2><ol><li>语法区别，extends Component是ES6语法，用constructor构造器来构造默认的属性和状态。</li><li>propType 和 getDefaultProps</li><li>React.createClass：通过getInitialState()方法返回一个包含初始值的对象，React.Component：通过constructor设置初始状态</li><li>React.createClass：会正确绑定this，React.Component：由于使用了 ES6，这里会有些微不同，属性并不会自动绑定到 React 类的实例上。</li><li>React.createClass：使用 React.createClass 的话，我们可以在创建组件时添加一个叫做 mixins 的属性，并将可供混合的类的集合以数组的形式赋给 mixins。</li></ol><h2 id="组件渲染的时机" tabindex="-1">组件渲染的时机 <a class="header-anchor" href="#组件渲染的时机" aria-label="Permalink to &quot;组件渲染的时机&quot;">​</a></h2><p>React 组件在组件的状态 state 或者组件的属性 props 改变的时候，会重新渲染 shouldComponentUpdate方法默认返回true，这就是导致每次更新都重新渲染的原因。</p><h2 id="react可以在render阶段访问refs吗" tabindex="-1">react可以在render阶段访问refs吗 <a class="header-anchor" href="#react可以在render阶段访问refs吗" aria-label="Permalink to &quot;react可以在render阶段访问refs吗&quot;">​</a></h2><p>三个阶段，render阶段，pre-commit阶段，commit阶段 DOM的读取在pre-commit阶段，DOM的使用在commit阶段</p><p>不可以，render阶段dom还没生成，无法获取dom 不能在函数组件上使用 ref 属性，因为他们没有实例。</p><h2 id="react-中-keys-的作用" tabindex="-1">React 中 keys 的作用 <a class="header-anchor" href="#react-中-keys-的作用" aria-label="Permalink to &quot;React 中 keys 的作用&quot;">​</a></h2><p>keys 是 React 用于追踪哪些列表中元素被修改、被添加或者被移出的辅助标识 在开发过程中，我们需要保证某个元素的 key 在其同级元素中具有唯一性。在 React Diff 算法中 React 会借助元素的 key 值来判断元素是新近创建的还是被移动而来的元素，从而减少不必要的元素重渲染。此外，React 还需要借助 key 值来判断元素与本地状态的关联关系，因此我们决不可忽视转换函数中 key 的重要性</p><h2 id="父子组件生命周期执行顺序" tabindex="-1">父子组件生命周期执行顺序 <a class="header-anchor" href="#父子组件生命周期执行顺序" aria-label="Permalink to &quot;父子组件生命周期执行顺序&quot;">​</a></h2><p>父子组件初始化</p><ul><li>父组件 constructor</li><li>父组件 getDerivedStateFromProps</li><li>父组件 render</li><li>子组件 constructor</li><li>子组件 getDerivedStateFromProps</li><li>子组件 render</li><li>子组件 componentDidMount</li><li>父组件 componentDidMount</li></ul><p>子组件修改自身state</p><ul><li>子组件 getDerivedStateFromProps</li><li>子组件 shouldComponentUpdate</li><li>子组件 render</li><li>子组件 getSnapShotBeforeUpdate</li><li>子组件 componentDidUpdate</li></ul><p>父组件修改props</p><ul><li><p>父组件 getDerivedStateFromProps</p></li><li><p>父组件 shouldComponentUpdate</p></li><li><p>父组件 render</p></li><li><p>子组件 getDerivedStateFromProps</p></li><li><p>子组件 shouldComponentUpdate</p></li><li><p>子组件 render</p></li><li><p>子组件 getSnapShotBeforeUpdate</p></li><li><p>父组件 getSnapShotBeforeUpdate</p></li><li><p>子组件 componentDidUpdate</p></li><li><p>父组件 componentDidUpdate</p><p>卸载子组件</p></li><li><p>父组件 getDerivedStateFromProps</p></li><li><p>父组件 shouldComponentUpdate</p></li><li><p>父组件 render</p></li><li><p>父组件 getSnapShotBeforeUpdate</p></li><li><p>子组件 componentWillUnmount</p></li><li><p>父组件 componentDidUpdate</p></li></ul><h2 id="高阶函数" tabindex="-1">高阶函数 <a class="header-anchor" href="#高阶函数" aria-label="Permalink to &quot;高阶函数&quot;">​</a></h2><ul><li><p>接受一个或多个函数作为输入</p></li><li><p>输出一个函数 高阶组件的主要功能是封装并分离组件的通用逻辑，让通用逻辑在组件间更好地被复用</p></li><li><p>props 保持一致</p></li><li><p>不要再 render() 方法中使用高阶组件</p><ul><li>性能问题：在render()方法中使用高阶组件可能导致性能问题。<code>每当组件重新渲染时，高阶组件都会重新生成一个新的包装组件</code>，即使传入的props没有发生变化。这可能导致不必要的渲染，增加了渲染的开销。</li><li>如果在HOC中对props做了某些变换，会导致组件的props变化，从而导致组件不断地重新渲染，进而导致无限循环。</li></ul></li><li><p>使用 compose 组合高阶组件</p></li></ul><h2 id="react中引入css的方式有哪几种-区别" tabindex="-1">react中引入css的方式有哪几种？区别？ <a class="header-anchor" href="#react中引入css的方式有哪几种-区别" aria-label="Permalink to &quot;react中引入css的方式有哪几种？区别？&quot;">​</a></h2><ul><li>在组件内直接使用 <code>&lt;div style={div1}&gt;123&lt;/div&gt;</code></li><li>组件中引入 .css 文件，<code>样式是全局生效</code>，样式之间会互相影响</li><li>组件中引入 .module.css 文件，<code>只作用于当前组件</code>。不会影响当前组件的后代组件,对于类选择器有效，元素选择器无效</li><li>CSS in JS <ul><li>本质是通过函数的调用，最终创建出一个组件：</li><li>这个组件会被自动添加上一个不重复的class</li><li>给样式组件传值可以修改样式</li></ul></li></ul><h2 id="在react中组件间过渡动画如何实现" tabindex="-1">在react中组件间过渡动画如何实现？ <a class="header-anchor" href="#在react中组件间过渡动画如何实现" aria-label="Permalink to &quot;在react中组件间过渡动画如何实现？&quot;">​</a></h2><ul><li>CSSTransition：在前端开发中，结合 CSS 来完成过渡动画效果 <ul><li>in属性置为true时，CSSTransition首先会给其子组件加上xxx-enter、xxx-enter-active的class执行动画</li><li>in属性置为false时，CSSTransition会给子组件加上xxx-exit和xxx-exit-active的class</li></ul></li><li>SwitchTransition：两个组件显示和隐藏切换时，使用该组件 <ul><li>in-out：表示新组件先进入，旧组件再移除；</li><li>out-in：表示就组件先移除，新组建再进入</li><li>SwitchTransition组件里面要有CSSTransition，key取代in</li></ul></li><li>TransitionGroup：将多个动画组件包裹在其中，一般用于列表中元素的动画 <ul><li>当有一组动画的时候，就可将这些CSSTransition放入到一个TransitionGroup中来完成动画</li><li>用到了key属性</li><li>插入的节点，先渲染dom，然后再做动画</li><li>删除的节点，先做动画，然后再删除dom</li></ul></li></ul><h2 id="按功能组织" tabindex="-1">按功能组织 <a class="header-anchor" href="#按功能组织" aria-label="Permalink to &quot;按功能组织&quot;">​</a></h2><ul><li>每个功能模块对应一个目录，每个目录下包含同样的角色文件：</li><li>index.js 把所有的角色导入，统一导出</li><li>views 包含功能模块中所有的React组件，包括展示组件和容器组件</li></ul><h2 id="react项目是如何捕获错误的" tabindex="-1">React项目是如何捕获错误的？ <a class="header-anchor" href="#react项目是如何捕获错误的" aria-label="Permalink to &quot;React项目是如何捕获错误的？&quot;">​</a></h2><p>错误边界是一种 React 组件，这种组件可以捕获发生在其子组件树任何位置的 JavaScript 错误，并打印这些错误，同时展示降级 UI，而并不会渲染那些发生崩溃的子组件</p><p>形成错误边界组件的两个条件：</p><ul><li>使用了 <code>static getDerivedStateFromError</code>()</li><li>使用了 <code>componentDidCatch</code>()</li></ul>`,95),p=[o];function t(c,r,i,F,D,y){return a(),n("div",null,p)}const u=s(e,[["render",t]]);export{C as __pageData,u as default};
