import{_ as s,o as n,c as a,U as l}from"./chunks/framework.afdf1834.js";const d=JSON.parse('{"title":"加油特种兵","description":"","frontmatter":{},"headers":[],"relativePath":"audition/实习经验/记录.md","filePath":"audition/实习经验/记录.md","lastUpdated":null}'),p={name:"audition/实习经验/记录.md"},o=l(`<h1 id="加油特种兵" tabindex="-1">加油特种兵 <a class="header-anchor" href="#加油特种兵" aria-label="Permalink to &quot;加油特种兵&quot;">​</a></h1><h2 id="vxe-grid" tabindex="-1">vxe-grid <a class="header-anchor" href="#vxe-grid" aria-label="Permalink to &quot;vxe-grid&quot;">​</a></h2><p>vxe-grid的slots插槽内容:row行信息就是data的数据，rowIndex行索引</p><p>input是jsx语法，<code>v-model={row.inputvalue}</code>用来<code>row.inputvalue</code>进行双向绑定，input输入值时，有关当前row的data就会绑定一个inputvalue值</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">field</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">threshold</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">title</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">阈值</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">align</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">center</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">minWidth</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">150</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">slots</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">({</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;font-style:italic;">row</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;font-style:italic;">rowIndex</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">})</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">rowIndex</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null;</span><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">// 第一行不渲染输入框</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span></span>
<span class="line"><span style="color:#89DDFF;">                    </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">row</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">inputvalue</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">                    </span><span style="color:#C792EA;">ref</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">input</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">                    </span><span style="color:#C792EA;">placeholder</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">请输入阈值</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">                    </span><span style="color:#C792EA;">required</span><span style="color:#89DDFF;">={this.</span><span style="color:#A6ACCD;">isRowSelected</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">                /&gt;</span></span>
<span class="line"><span style="color:#F07178;">            ]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">},</span></span></code></pre></div><h2 id="jsx语法遍历" tabindex="-1">jsx语法遍历 <a class="header-anchor" href="#jsx语法遍历" aria-label="Permalink to &quot;jsx语法遍历&quot;">​</a></h2><p>不能用v-for，只能用map来循环</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">field</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">inspectionLevel</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">title</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">检查级别</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">align</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">center</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">minWidth</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">150</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">slots</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">({</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;font-style:italic;">row</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">})</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">inspectionList</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                    inspectionId</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                    name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">警告</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                    inspectionId</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                    name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">提醒</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">            ]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">select</span></span>
<span class="line"><span style="color:#89DDFF;">                    </span><span style="color:#C792EA;">clearable</span></span>
<span class="line"><span style="color:#89DDFF;">                    </span><span style="color:#C792EA;">transfer</span></span>
<span class="line"><span style="color:#89DDFF;">                    </span><span style="color:#C792EA;">filterable</span></span>
<span class="line"><span style="color:#89DDFF;">                    </span><span style="color:#C792EA;">placeholder</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">请选择检查级别</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">                    </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">row</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">inspectionLevel</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">                &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">inspectionList</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">map</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">item</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> (</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">option</span></span>
<span class="line"><span style="color:#89DDFF;">                            </span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">                            </span><span style="color:#C792EA;">key</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">inspectionId</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">                            </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">                        &gt;&lt;/</span><span style="color:#F07178;">option</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    ))</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">select</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F07178;">            ]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="getcheckboxrecords" tabindex="-1">getCheckboxRecords <a class="header-anchor" href="#getcheckboxrecords" aria-label="Permalink to &quot;getCheckboxRecords&quot;">​</a></h2><p>需求：当checkbox选中时，对应行的input为必填</p><p>思考：没有用到required，判断当checkbox选中时，对应行的input的inputvalue是否为空。</p><p>解决：vxe-grid有一个<code>getCheckboxRecords</code>函数用于拿到选取行的信息，循环遍历如果里面inputvalue为空或者undefined就弹出弹框</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">vxe-grid</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">ref</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ruleType</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-bind</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ruleoptions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">max-height</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">600</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">margin: 10px 0</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">            @checkbox-change=&quot;handleRowSelection&quot; @checkbox-all=&quot;handleRowSelection&quot;&gt;&lt;/vxe-grid&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">handleRowSelection() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let Data </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$refs</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ruleType</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getCheckboxRecords</span><span style="color:#A6ACCD;">(</span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;">)</span><span style="color:#676E95;font-style:italic;">//用于 type=checkbox，获取当前已选中的行数据（当前列表，如果 isFull=true 则获取全表已选中的数据）</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">selectarr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Data</span></span>
<span class="line"><span style="color:#89DDFF;">},</span></span></code></pre></div><h2 id="弹框子组件用v-if" tabindex="-1">弹框子组件用v-if <a class="header-anchor" href="#弹框子组件用v-if" aria-label="Permalink to &quot;弹框子组件用v-if&quot;">​</a></h2><p>弹框子组件用v-if包起来，这样不用了的话就会销毁</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">AddAndEditModal</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">ref</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">addAndEditModal</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :operFlag=&quot;operFlag&quot; @getTableList=&quot;getTableList&quot; </span><span style="color:#C792EA;">v-if</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">showAddAndEditModal</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    @close=&quot;showAddAndEditModal = false&quot; :ruleListOrigin=&quot;ruleList&quot; :selectRow=&quot;selectRow&quot;&gt;&lt;/AddAndEditModal&gt;</span></span></code></pre></div><p>组件的template里要加上div把内容包起来包起来，这样如果v-if销毁modal时template里面就没有东西了</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//AddAndEditModal</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Modal</span><span style="color:#89DDFF;"> :title=&quot;operFlagTitle&quot; </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">createModal</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">width</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1000</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> @on-cancel=&quot;cancelHandler&quot;&gt;&lt;/Modal&gt;               </span></span>
<span class="line"><span style="color:#89DDFF;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/template&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">created() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">createModal </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#89DDFF;">},</span></span></code></pre></div><p>Modal组件v-model双向绑定createModal，在created里设置<code>this.createModal = true</code></p>`,19),e=[o];function t(c,r,F,D,y,i){return n(),a("div",null,e)}const u=s(p,[["render",t]]);export{d as __pageData,u as default};
