(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{306:function(n,t){n.exports='<h1 id="navs"><span class="bd-content-title">Navs</span></h1>\n<p class="bd-lead">Navigation available in Bootstrap share general markup and styles, from the base <code translate="no" class="notranslate text-nowrap">&lt;b-nav&gt;</code> class\nto the <code translate="no" class="notranslate text-nowrap">active</code> and <code translate="no" class="notranslate text-nowrap">disabled</code> states. Swap modifier props to switch between each style.</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-nav</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span> <span class="hljs-attr">active</span>&gt;</span>Active<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span>&gt;</span>Link<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span>&gt;</span>Another Link<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span> <span class="hljs-attr">disabled</span>&gt;</span>Disabled<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-nav</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-nav.vue --&gt;</span></pre><h2 id="overview"><span class="bd-content-title">Overview<a class="anchorjs-link" href="#overview" aria-label="Anchor"></a></span></h2>\n<p>The base <code translate="no" class="notranslate text-nowrap">&lt;b-nav&gt;</code> component is built with flexbox and provides a strong foundation for building all\ntypes of navigation components. It includes some style overrides (for working with lists), some link\npadding for larger hit areas, and basic disabled styling. No active states are included in the base\nnav.</p>\n<h2 id="link-appearance"><span class="bd-content-title">Link appearance<a class="anchorjs-link" href="#link-appearance" aria-label="Anchor"></a></span></h2>\n<p>Two style variations are supported: <code translate="no" class="notranslate text-nowrap">tabs</code> and <code translate="no" class="notranslate text-nowrap">pills</code>, which support <code translate="no" class="notranslate text-nowrap">active</code> state styling. These\nvariants are mutually exclusive - use only one style or the other.</p>\n<h3 id="tab-style"><span class="bd-content-title">Tab style<a class="anchorjs-link" href="#tab-style" aria-label="Anchor"></a></span></h3>\n<p>Make the nav look like tabs by setting the <code translate="no" class="notranslate text-nowrap">tabs</code> prop.</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-nav</span> <span class="hljs-attr">tabs</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span> <span class="hljs-attr">active</span>&gt;</span>Active<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span>&gt;</span>Link<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span>&gt;</span>Another Link<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span> <span class="hljs-attr">disabled</span>&gt;</span>Disabled<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-nav</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-nav-tabs.vue --&gt;</span></pre><h3 id="pill-style"><span class="bd-content-title">Pill style<a class="anchorjs-link" href="#pill-style" aria-label="Anchor"></a></span></h3>\n<p>Use the pill style by setting the <code translate="no" class="notranslate text-nowrap">pills</code> prop.</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-nav</span> <span class="hljs-attr">pills</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span> <span class="hljs-attr">active</span>&gt;</span>Active<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span>&gt;</span>Link<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span>&gt;</span>Another Link<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span> <span class="hljs-attr">disabled</span>&gt;</span>Disabled<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-nav</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-nav-pills.vue --&gt;</span></pre><h3 id="small"><span class="bd-content-title">Small<a class="anchorjs-link" href="#small" aria-label="Anchor"></a></span></h3>\n<p>Make the nav smaller by setting the <code translate="no" class="notranslate text-nowrap">small</code> prop.</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-nav</span> <span class="hljs-attr">small</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span> <span class="hljs-attr">active</span>&gt;</span>Active<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span>&gt;</span>Link<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span>&gt;</span>Another Link<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span> <span class="hljs-attr">disabled</span>&gt;</span>Disabled<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-nav</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-nav-small.vue --&gt;</span></pre><h2 id="fill-and-justify"><span class="bd-content-title">Fill and justify<a class="anchorjs-link" href="#fill-and-justify" aria-label="Anchor"></a></span></h2>\n<p><span class="badge badge-info small">NEW in 2.0.0-rc19</span></p>\n<p>Force your <code translate="no" class="notranslate text-nowrap">&lt;b-nav&gt;</code> content to extend the full available width.</p>\n<h3 id="fill"><span class="bd-content-title">Fill<a class="anchorjs-link" href="#fill" aria-label="Anchor"></a></span></h3>\n<p>To proportionately fill all available space with your <code translate="no" class="notranslate text-nowrap">&lt;b-nav-item&gt;</code> components, set the <code translate="no" class="notranslate text-nowrap">fill</code>\nprop. Notice that all horizontal space is occupied, but not every nav item has the same width.</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-nav</span> <span class="hljs-attr">tabs</span> <span class="hljs-attr">fill</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span> <span class="hljs-attr">active</span>&gt;</span>Active<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span>&gt;</span>Link<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span>&gt;</span>Link with a long name <span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span> <span class="hljs-attr">disabled</span>&gt;</span>Disabled<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-nav</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-nav-fill.vue --&gt;</span></pre><h3 id="justified"><span class="bd-content-title">Justified<a class="anchorjs-link" href="#justified" aria-label="Anchor"></a></span></h3>\n<p>For equal-width elements, set the <code translate="no" class="notranslate text-nowrap">justified</code> prop instead. All horizontal space will be occupied by\nnav links, but unlike <code translate="no" class="notranslate text-nowrap">fill</code> above, every <code translate="no" class="notranslate text-nowrap">&lt;b-nav-item&gt;</code> will be the same width.</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-nav</span> <span class="hljs-attr">tabs</span> <span class="hljs-attr">justified</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span> <span class="hljs-attr">active</span>&gt;</span>Active<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span>&gt;</span>Link<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span>&gt;</span>Link with a long name <span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span> <span class="hljs-attr">disabled</span>&gt;</span>Disabled<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-nav</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-nav-justified.vue --&gt;</span></pre><h2 id="alignment"><span class="bd-content-title">Alignment<a class="anchorjs-link" href="#alignment" aria-label="Anchor"></a></span></h2>\n<p><span class="badge badge-info small">NEW in 2.0.0-rc19</span></p>\n<p>To align your <code translate="no" class="notranslate text-nowrap">&lt;b-nav-item&gt;</code> components, use the <code translate="no" class="notranslate text-nowrap">align</code> prop. Available values are <code translate="no" class="notranslate text-nowrap">left</code>, <code translate="no" class="notranslate text-nowrap">center</code>\nand <code translate="no" class="notranslate text-nowrap">right</code>.</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-nav</span> <span class="hljs-attr">tabs</span> <span class="hljs-attr">align</span>=<span class="hljs-string">"center"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span> <span class="hljs-attr">active</span>&gt;</span>Active<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span>&gt;</span>Link<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span>&gt;</span>Link with a long name <span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span> <span class="hljs-attr">disabled</span>&gt;</span>Disabled<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-nav</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-nav-alignment.vue --&gt;</span></pre><h2 id="vertical-variation"><span class="bd-content-title">Vertical variation<a class="anchorjs-link" href="#vertical-variation" aria-label="Anchor"></a></span></h2>\n<p>By default <code translate="no" class="notranslate text-nowrap">&lt;b-nav&gt;</code> appear on a horizontal line. Stack your navigation by setting the <code translate="no" class="notranslate text-nowrap">vertical</code>\nprop.</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-nav</span> <span class="hljs-attr">vertical</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"w-25"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span> <span class="hljs-attr">active</span>&gt;</span>Active<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span>&gt;</span>Link<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span>&gt;</span>Another Link<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span> <span class="hljs-attr">disabled</span>&gt;</span>Disabled<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-nav</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-nav-vertical.vue --&gt;</span></pre><h2 id="dropdown-support"><span class="bd-content-title">Dropdown support<a class="anchorjs-link" href="#dropdown-support" aria-label="Anchor"></a></span></h2>\n<p>Use <code translate="no" class="notranslate text-nowrap">&lt;b-nav-item-dropdown&gt;</code> to place dropdown items within your nav.</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-nav</span> <span class="hljs-attr">pills</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span> <span class="hljs-attr">active</span>&gt;</span>Active<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item</span>&gt;</span>Link<span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-nav-item-dropdown</span>\n      <span class="hljs-attr">id</span>=<span class="hljs-string">"my-nav-dropdown"</span>\n      <span class="hljs-attr">text</span>=<span class="hljs-string">"Dropdown"</span>\n      <span class="hljs-attr">toggle-class</span>=<span class="hljs-string">"nav-link-custom"</span>\n      <span class="hljs-attr">right</span>\n    &gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown-item</span>&gt;</span>one<span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown-item</span>&gt;</span>two<span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown-divider</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown-divider</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown-item</span>&gt;</span>three<span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-nav-item-dropdown</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-nav</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-nav-dropdown.vue --&gt;</span></pre><p>Sometimes you want to add your own class names to the generated dropdown toggle button, that by\ndefault have the classes <code translate="no" class="notranslate text-nowrap">nav-link</code> and <code translate="no" class="notranslate text-nowrap">dropdown-toggle</code>. Use the <code translate="no" class="notranslate text-nowrap">toggle-class</code> prop to add them\n(like above) which will produce something like:</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"my-nav-dropdown"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"nav-item b-nav-dropdown dropdown"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">a</span>\n    <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span>\n    <span class="hljs-attr">id</span>=<span class="hljs-string">"my-nav-dropdown__BV_button_"</span>\n    <span class="hljs-attr">aria-haspopup</span>=<span class="hljs-string">"true"</span>\n    <span class="hljs-attr">aria-expanded</span>=<span class="hljs-string">"false"</span>\n    <span class="hljs-attr">class</span>=<span class="hljs-string">"nav-link dropdown-toggle nav-link-custom"</span>\n  &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>\n  ...\n<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span></pre><p>Refer to <a href="/docs/components/dropdown" class="font-weight-bold"><code translate="no" class="notranslate text-nowrap">&lt;b-dropdown&gt;</code></a> for a list of supported sub-components.</p>\n<h3 id="optionally-scoped-default-slot"><span class="bd-content-title">Optionally scoped default slot<a class="anchorjs-link" href="#optionally-scoped-default-slot" aria-label="Anchor"></a></span></h3>\n<p><span class="badge badge-info small">NEW in 2.0.0-rc.20</span></p>\n<p>The dropdown default slot is optionally scoped with the following scope available:</p>\n<div class="table-responsive-sm"><table class="b-table table table-bordered table-striped bv-docs-table">\n<thead class="thead-default">\n<tr>\n<th>Property or Method</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code translate="no" class="notranslate text-nowrap">hide()</code></td>\n<td>Can be used to close the dropdown menu. Accepts an optional boolean argument, which if <code translate="no" class="notranslate text-nowrap">true</code> returns focus to the toggle button</td>\n</tr>\n</tbody></table>\n</div><h3 id="lazy-dropdown"><span class="bd-content-title">Lazy dropdown<a class="anchorjs-link" href="#lazy-dropdown" aria-label="Anchor"></a></span></h3>\n<p><span class="badge badge-info small">NEW in 2.0.0-rc.26</span></p>\n<p>By default, <code translate="no" class="notranslate text-nowrap">&lt;b-nav-item-dropdown&gt;</code> renders the menu contents in the DOM even when the menu is not\nshown. When there are a large number of dropdowns rendered on the same page, performance could be\nimpacted due to larger overall memory utilization. You can instruct <code translate="no" class="notranslate text-nowrap">&lt;b-nav-item-dropdown&gt;</code> to\nrender the menu contents only when it is shown by setting the <code translate="no" class="notranslate text-nowrap">lazy</code> prop to true.</p>\n<h2 id="using-in-navbar"><span class="bd-content-title">Using in navbar<a class="anchorjs-link" href="#using-in-navbar" aria-label="Anchor"></a></span></h2>\n<p>Prop <code translate="no" class="notranslate text-nowrap">is-nav-bar</code> has been deprecated and will be removed in a future release.</p>\n<h2 id="tabbed-local-content-support"><span class="bd-content-title">Tabbed local content support<a class="anchorjs-link" href="#tabbed-local-content-support" aria-label="Anchor"></a></span></h2>\n<p>See the <a href="/docs/components/tabs" class="font-weight-bold"><code translate="no" class="notranslate text-nowrap">&lt;b-tabs&gt;</code></a> component for creating tabbable panes of local content\n(not suited for navigation).</p>\n<h2 id="accessibility"><span class="bd-content-title">Accessibility<a class="anchorjs-link" href="#accessibility" aria-label="Anchor"></a></span></h2>\n<p>If you&#39;re using <code translate="no" class="notranslate text-nowrap">&lt;b-nav&gt;</code> to provide a navigation bar, be sure to add a <code translate="no" class="notranslate text-nowrap">role=&quot;navigation&quot;</code> to the\nmost logical parent container of <code translate="no" class="notranslate text-nowrap">&lt;b-nav&gt;</code>, or wrap a <code translate="no" class="notranslate text-nowrap">&lt;nav&gt;</code> element around <code translate="no" class="notranslate text-nowrap">&lt;b-nav&gt;</code>. Do <strong>not</strong>\nadd the role to the <code translate="no" class="notranslate text-nowrap">&lt;b-nav&gt;</code> itself, as this would prevent it from being announced as an actual\nlist by assistive technologies.</p>\n<p>When using a <code translate="no" class="notranslate text-nowrap">&lt;b-nav-item-dropdown&gt;</code> in your <code translate="no" class="notranslate text-nowrap">&lt;b-nav&gt;</code>, be sure to assign a unique <code translate="no" class="notranslate text-nowrap">id</code> prop value\nto the <code translate="no" class="notranslate text-nowrap">&lt;b-nav-dropdown&gt;</code> so that the appropriate <code translate="no" class="notranslate text-nowrap">aria-*</code> attributes can be automatically\ngenerated.</p>\n<h2 id="see-also"><span class="bd-content-title">See also<a class="anchorjs-link" href="#see-also" aria-label="Anchor"></a></span></h2>\n<ul>\n<li><a href="/docs/components/tabs" class="font-weight-bold"><code translate="no" class="notranslate text-nowrap">&lt;b-tabs&gt;</code></a> to create tabbable panes of local content, even via dropdown\nmenus.</li>\n<li><a href="/docs/components/navbar" class="font-weight-bold"><code translate="no" class="notranslate text-nowrap">&lt;b-navbar&gt;</code></a> a wrapper that positions branding, navigation, and other\nelements in a concise header.</li>\n<li><a href="/docs/components/dropdown" class="font-weight-bold"><code translate="no" class="notranslate text-nowrap">&lt;b-dropdown&gt;</code></a> for sub-components that you can place inside\n<code translate="no" class="notranslate text-nowrap">&lt;b-nav-item-dropdown&gt;</code></li>\n<li><a href="/docs/reference/router-links" class="font-weight-bold">Router Link Support reference</a> for information about router-link\nspecific props available on <code translate="no" class="notranslate text-nowrap">&lt;b-nav-item&gt;</code></li>\n</ul>\n\x3c!-- Component reference added automatically from component package.json --\x3e\n'}}]);