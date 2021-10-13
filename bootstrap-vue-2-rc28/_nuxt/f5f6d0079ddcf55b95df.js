(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{284:function(n,t){n.exports='<h1 id="button-toolbar"><span class="bd-content-title">Button toolbar</span></h1>\n<p class="bd-lead">Group a series of button-groups and/or input-groups together on a single line, with optional\nkeyboard navigation</p>\n<p><strong>Example 1:</strong> with button groups &amp; Keyboard navigation</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button-toolbar</span> <span class="hljs-attr">key-nav</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">"Toolbar with button groups"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-button-group</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mx-1"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span><span class="hljs-symbol">&amp;laquo;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span><span class="hljs-symbol">&amp;lsaquo;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-button-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-button-group</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mx-1"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span>Edit<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span>Undo<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span>Redo<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-button-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-button-group</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mx-1"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span><span class="hljs-symbol">&amp;rsaquo;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span><span class="hljs-symbol">&amp;raquo;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-button-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-button-toolbar</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-button-toolbar.vue --&gt;</span></pre><p><strong>Example 2:</strong> with mixture of small button group and small input group</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button-toolbar</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">"Toolbar with button groups and input groups"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-button-group</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"sm"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mr-1"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span>Save<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span>Cancel<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-button-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"sm"</span> <span class="hljs-attr">prepend</span>=<span class="hljs-string">"$"</span> <span class="hljs-attr">append</span>=<span class="hljs-string">".00"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-form-input</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"100"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-right"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-form-input</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-button-toolbar</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-button-toolbar-input.vue --&gt;</span></pre><p><strong>Example 3:</strong> with button groups and dropdown menu</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button-toolbar</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">"Toolbar with button groups and dropdown menu"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-button-group</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mx-1"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span>New<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span>Edit<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span>Undo<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-button-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mx-1"</span> <span class="hljs-attr">right</span> <span class="hljs-attr">text</span>=<span class="hljs-string">"menu"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown-item</span>&gt;</span>Item 1<span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown-item</span>&gt;</span>Item 2<span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown-item</span>&gt;</span>Item 3<span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-button-group</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mx-1"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span>Save<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span>Cancel<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-button-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-button-toolbar</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-button-toolbar-dropdown.vue --&gt;</span></pre><h2 id="usage"><span class="bd-content-title">Usage<a class="anchorjs-link" href="#usage" aria-label="Anchor"></a></span></h2>\n<p>Feel free to mix input groups and dropdowns with button groups in your toolbars. Similar to the\nexample above, you&#39;ll likely need some utility classes though to space things properly.</p>\n<h2 id="sizing"><span class="bd-content-title">Sizing<a class="anchorjs-link" href="#sizing" aria-label="Anchor"></a></span></h2>\n<p>Note, if you want smaller or larger buttons or controls, set the <code translate="no" class="notranslate text-nowrap">size</code> prop directly on the\n<code translate="no" class="notranslate text-nowrap">&lt;b-button-group&gt;</code>, <code translate="no" class="notranslate text-nowrap">&lt;b-input-group&gt;</code>, and <code translate="no" class="notranslate text-nowrap">&lt;b-dropdown&gt;</code> components.</p>\n<h2 id="justify"><span class="bd-content-title">Justify<a class="anchorjs-link" href="#justify" aria-label="Anchor"></a></span></h2>\n<p>Make the toolbar span the maximum available width, by increasing spacing between the button groups,\ninput groups and dropdowns, by setting the prop <code translate="no" class="notranslate text-nowrap">justify</code>.</p>\n<h2 id="keyboard-navigation"><span class="bd-content-title">Keyboard navigation<a class="anchorjs-link" href="#keyboard-navigation" aria-label="Anchor"></a></span></h2>\n<p>Enable optional keyboard navigation by setting the prop <code translate="no" class="notranslate text-nowrap">key-nav</code>.</p>\n<div class="table-responsive-sm"><table class="b-table table table-bordered table-striped bv-docs-table">\n<thead class="thead-default">\n<tr>\n<th>Keypress</th>\n<th>Action</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><kbd class="notranslate" translate="no">LEFT</kbd> or <kbd class="notranslate" translate="no">UP</kbd></td>\n<td>Move to the previous non-disabled item in the toolbar</td>\n</tr>\n<tr>\n<td><kbd class="notranslate" translate="no">RIGHT</kbd> or <kbd class="notranslate" translate="no">DOWN</kbd></td>\n<td>Move to the next non-disabled item in the toolbar</td>\n</tr>\n<tr>\n<td><kbd class="notranslate" translate="no">SHIFT</kbd>+<kbd class="notranslate" translate="no">LEFT</kbd> or <kbd class="notranslate" translate="no">SHIFT</kbd>+<kbd class="notranslate" translate="no">UP</kbd></td>\n<td>Move to the first non-disabled item in the toolbar</td>\n</tr>\n<tr>\n<td><kbd class="notranslate" translate="no">SHIFT</kbd>+<kbd class="notranslate" translate="no">RIGHT</kbd> or <kbd class="notranslate" translate="no">SHIFT</kbd>+<kbd class="notranslate" translate="no">DOWN</kbd></td>\n<td>Move to the last non-disabled item in the toolbar</td>\n</tr>\n<tr>\n<td><kbd class="notranslate" translate="no">TAB</kbd></td>\n<td>Move to the next control on the page</td>\n</tr>\n<tr>\n<td><kbd class="notranslate" translate="no">SHIFT</kbd>+<kbd class="notranslate" translate="no">TAB</kbd></td>\n<td>Move to the previous control on the page</td>\n</tr>\n</tbody></table>\n</div><p><strong>Caution:</strong> If you have text or text-like inputs in your toolbar, leave keyboard navigation off, as\nit is not possible to use key presses to jump out of a text (or test-like) inputs.</p>\n<h2 id="see-also"><span class="bd-content-title">See also<a class="anchorjs-link" href="#see-also" aria-label="Anchor"></a></span></h2>\n<ul>\n<li><a href="/docs/components/button-group" class="font-weight-bold"><code translate="no" class="notranslate text-nowrap">&lt;b-button-group&gt;</code></a></li>\n<li><a href="/docs/components/dropdown" class="font-weight-bold"><code translate="no" class="notranslate text-nowrap">&lt;b-dropdown&gt;</code></a></li>\n</ul>\n\x3c!-- Component reference added automatically from component package.json --\x3e\n'}}]);