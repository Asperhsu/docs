webpackJsonp([63],{"s+jy":function(s,a){s.exports='<h1 id="router-link-support">Router link support</h1>\n<blockquote>\n<p>Several Bootstrap-Vue components support rendering <code>&lt;router-link&gt;</code> components compatible with\n<em>Vue-Router</em> and <em>Nuxt</em>. For more information, see the <a href="https://router.vuejs.org/">official Vue-Router docs</a>\nand <a href="https://nuxtjs.org/">official Nuxt docs</a>.</p>\n</blockquote>\n<h2 id="common-router-link-props">Common router link props</h2>\n<p>In the following sections, we are using the <code>&lt;b-link&gt;</code> component to render router links.\n<code>&lt;b-link&gt;</code> is the building block of most of Bootstrap-Vue&apos;s  <em>actionable</em> components.\nYou could use any other component that supports link generation such as <a href="/docs/components/link"><code>&lt;b-link&gt;</code></a>,\n<a href="/docs/components/button"><code>&lt;b-button&gt;</code></a>, <a href="/docs/components/breadcrumb"><code>&lt;b-breadcrumb-item&gt;</code></a>,\n<a href="/docs/components/list-group"><code>&lt;b-list-group-item&gt;</code></a>, <a href="/docs/components/nav"><code>&lt;b-nav-item&gt;</code></a>,\n<a href="/docs/components/dropdown"><code>&lt;b-dropdown-item&gt;</code></a>, and <a href="/docs/components/pagination-nav"><code>&lt;b-pagination-nav&gt;</code></a>.\nNote that not all props are available on all components. Refer to the respective component\ndocumentation for details.</p>\n<h3 id="to"><code>to</code></h3>\n<ul>\n<li>type: <code>string | Location</code></li>\n<li>required to generate a <code>&lt;router-link&gt;</code></li>\n</ul>\n<p>Denotes the target route of the link. When clicked, the value of the <code>to</code> prop will be passed to\n<code>router.push()</code> internally, so the value can be either a string or a location descriptor object.</p>\n<pre class="hljs"><span class="hljs-comment">&lt;!-- literal string --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">b-link</span> <span class="hljs-attr">to</span>=<span class="hljs-string">&quot;home&quot;</span>&gt;</span>Home<span class="hljs-tag">&lt;/<span class="hljs-name">b-link</span>&gt;</span>\n<span class="hljs-comment">&lt;!-- renders to --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;home&quot;</span>&gt;</span>Home<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- javascript expression using `v-bind` --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">b-link</span> <span class="hljs-attr">v-bind:to</span>=<span class="hljs-string">&quot;&apos;home&apos;&quot;</span>&gt;</span>Home<span class="hljs-tag">&lt;/<span class="hljs-name">b-link</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- Omitting `v-bind` is fine, just as binding any other prop --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">b-link</span> <span class="hljs-attr">:to</span>=<span class="hljs-string">&quot;&apos;home&apos;&quot;</span>&gt;</span>Home<span class="hljs-tag">&lt;/<span class="hljs-name">b-link</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- same as above --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">b-link</span> <span class="hljs-attr">:to</span>=<span class="hljs-string">&quot;{ path: &apos;home&apos; }&quot;</span>&gt;</span>Home<span class="hljs-tag">&lt;/<span class="hljs-name">b-link</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- named route --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">b-link</span> <span class="hljs-attr">:to</span>=<span class="hljs-string">&quot;{ name: &apos;user&apos;, params: { userId: 123 }}&quot;</span>&gt;</span>User<span class="hljs-tag">&lt;/<span class="hljs-name">b-link</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- with query, resulting in `/register?plan=private` --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">b-link</span> <span class="hljs-attr">:to</span>=<span class="hljs-string">&quot;{path:&apos;register&apos;, query:{ plan:&apos;private&apos;}}&quot;</span>&gt;</span>Register<span class="hljs-tag">&lt;/<span class="hljs-name">b-link</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- render a non-router link iby omitting &apos;to&apos;and specifying an href --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">b-link</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;/home&quot;</span>&gt;</span>Home<span class="hljs-tag">&lt;/<span class="hljs-name">b-link</span>&gt;</span>\n</pre>\n<h3 id="replace"><code>replace</code></h3>\n<ul>\n<li>type: <code>boolean</code></li>\n<li>default: <code>false</code></li>\n</ul>\n<p>Setting <code>replace</code> prop will call <code>router.replace()</code> instead of <code>router.push()</code> when clicked,\nso the navigation will not leave a history record.</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">b-link</span> <span class="hljs-attr">:to</span>=<span class="hljs-string">&quot;{ path: &apos;/abc&apos;}&quot;</span> <span class="hljs-attr">replace</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-link</span>&gt;</span>\n</pre>\n<h3 id="append"><code>append</code></h3>\n<ul>\n<li>type: <code>boolean</code></li>\n<li>default: <code>false</code></li>\n</ul>\n<p>Setting <code>append</code> prop always appends the relative path to the current path. For example,\nassuming we are navigating from <code>/a</code> to a relative link <code>b</code>, without <code>append</code> we will end \nup at <code>/b</code>, but with <code>append</code> we will end up at <code>/a/b</code>.</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">b-link</span> <span class="hljs-attr">:to</span>=<span class="hljs-string">&quot;{ path: &apos;relative/path&apos;}&quot;</span> <span class="hljs-attr">append</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-link</span>&gt;</span>\n</pre>\n<h3 id="router-tag"><code>router-tag</code></h3>\n<ul>\n<li>type: <code>string</code></li>\n<li>default: <code>&apos;a&apos;</code></li>\n</ul>\n<p>Sometimes we want <code>&lt;router-link&gt;</code> to render as another tag, e.g <code>&lt;li&gt;</code>. Then we can use <code>router-tag</code>\nprop to specify which tag to render to, and it will still listen to click events for navigation.\n<code>routr-tag</code> translates to the <code>tag</code> prop on the final rendered <code>&lt;router-link&gt;</code>.</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">b-link</span> <span class="hljs-attr">to</span>=<span class="hljs-string">&quot;/foo&quot;</span> <span class="hljs-attr">router-tag</span>=<span class="hljs-string">&quot;li&quot;</span>&gt;</span>foo<span class="hljs-tag">&lt;/<span class="hljs-name">b-link</span>&gt;</span>\n<span class="hljs-comment">&lt;!-- renders as --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>foo<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>\n</pre>\n<p><strong>Note:</strong> Changing the tag from anything other than <code>&lt;a&gt;</code> is discouraged, as it hinders accessibility\nof keyboard and/or screen-reader users, and is also not very SEO friendly.</p>\n<h3 id="active-class"><code>active-class</code></h3>\n<ul>\n<li>type: <code>string</code></li>\n<li>default: <code>&apos;router-link-active&apos;</code></li>\n</ul>\n<p>Configure the active CSS class applied when the link is active. Note the default value can also\nbe configured globally via the <code>linkActiveClass</code> router constructor option.</p>\n<h3 id="exact"><code>exact</code></h3>\n<ul>\n<li>type: <code>boolean</code></li>\n<li>default: <code>false</code></li>\n</ul>\n<p>The default active class matching behavior is <strong>inclusive match</strong>. For example, <code>&lt;b-link to=&quot;/a&quot;&gt;</code>\nwill get this class applied as long as the current path starts with <code>/a/</code> or is <code>/a</code>.</p>\n<p>One consequence of this is that <code>&lt;b-link to=&quot;/&quot;&gt;</code> will be active for every route! To force the\nlink into &quot;exact match mode&quot;, use the <code>exact</code> prop:</p>\n<pre class="hljs"><span class="hljs-comment">&lt;!-- this link will only be active at `/` --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">b-link</span> <span class="hljs-attr">to</span>=<span class="hljs-string">&quot;/&quot;</span> <span class="hljs-attr">exact</span>&gt;</span>\n</pre>\n<p>Check out more examples explaining active link class <a href="https://jsfiddle.net/8xrk1n9f/">live</a>.</p>\n<h3 id="exact-active-class"><code>exact-active-class</code></h3>\n<ul>\n<li>type: <code>string</code></li>\n<li>default: <code>&apos;router-link-exact-active&apos;</code></li>\n<li>availablity: Vue-Router 2.5.0+</li>\n</ul>\n<p>Configure the active CSS class applied when the link is active with exact match. Note the\ndefault value can also be configured globally via the <code>linkExactActiveClass</code> router constructor option.</p>\n'}});
//# sourceMappingURL=reference2.c2138968d95cc11c632f.js.map