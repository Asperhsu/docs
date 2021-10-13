(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{312:function(n,l){n.exports='<h1 id="spinners"><span class="bd-content-title">Spinners</span></h1>\n<p class="bd-lead">The <code translate="no" class="notranslate text-nowrap">&lt;b-spinner&gt;</code> component can be used to show the loading state in your projects. They&#39;re\nrendered only with basic HTML and CSS as a lightweight Vue functional component. Their appearance,\nalignment, and sizing can be easily customized with a few built-in props and/or Bootstrap v4\nutility classes.</p>\n<p>Spinners can be placed just about anywhere, including inside buttons, alerts, and even <code translate="no" class="notranslate text-nowrap">&lt;b-table&gt;</code>&#39;s\nbusy slot.</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-spinner</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Spinning"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-spinner</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-spinner</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"grow"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Spinning"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-spinner</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-spinner</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Spinning"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-spinner</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-spinner</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"grow"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Spinning"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-spinner</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-spinner</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"success"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Spinning"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-spinner</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-spinner</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"success"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"grow"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Spinning"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-spinner</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-spinners.vue --&gt;</span></pre><h2 id="spinner-types"><span class="bd-content-title">Spinner types<a class="anchorjs-link" href="#spinner-types" aria-label="Anchor"></a></span></h2>\n<p>Bootstrap includes two types of spinners. The default spinner type is called <code translate="no" class="notranslate text-nowrap">border</code> (spinning\ncircle border), and the optional type <code translate="no" class="notranslate text-nowrap">grow</code> (a throbber style indicator).</p>\n<h3 id="border-spinner"><span class="bd-content-title">Border spinner<a class="anchorjs-link" href="#border-spinner" aria-label="Anchor"></a></span></h3>\n<p>Use the default <code translate="no" class="notranslate text-nowrap">border</code> type spinners for a lightweight loading indicator.</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-spinner</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Loading..."</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-spinner</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-spinner-border.vue --&gt;</span></pre><h3 id="grow-spinner"><span class="bd-content-title">Grow spinner<a class="anchorjs-link" href="#grow-spinner" aria-label="Anchor"></a></span></h3>\n<p>If you don&#39;t fancy a <code translate="no" class="notranslate text-nowrap">border</code> spinner, switch to the <code translate="no" class="notranslate text-nowrap">grow</code> spinner by setting the prop <code translate="no" class="notranslate text-nowrap">type</code> to\n<code translate="no" class="notranslate text-nowrap">&#39;grow&#39;</code>. While it doesn&#39;t technically spin, it does repeatedly grow!</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-spinner</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"grow"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Loading..."</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-spinner</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-spinner-grow.vue --&gt;</span></pre><h2 id="spinner-color-variants"><span class="bd-content-title">Spinner color variants<a class="anchorjs-link" href="#spinner-color-variants" aria-label="Anchor"></a></span></h2>\n<p>Spinners use <code translate="no" class="notranslate text-nowrap">currentColor</code> for their color, meaning it inherits the current font color. You can\ncustomize the color using the standard text color variants using the <code translate="no" class="notranslate text-nowrap">variant</code> prop, or place\nclasses or styles on the component to change it&#39;s color.</p>\n<p>The <code translate="no" class="notranslate text-nowrap">variant</code> prop translates the variant name to the Bootstrap v4 class <code translate="no" class="notranslate text-nowrap">.text-{variant}</code>, so if\nyou have custom defined text color variants, feel free to use them via the <code translate="no" class="notranslate text-nowrap">variant</code> prop.</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center mb-3 d-flex justify-content-between"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-spinner</span>\n        <span class="hljs-attr">v-for</span>=<span class="hljs-string">"variant in variants"</span>\n        <span class="hljs-attr">:variant</span>=<span class="hljs-string">"variant"</span>\n        <span class="hljs-attr">:key</span>=<span class="hljs-string">"variant"</span>\n      &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-spinner</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center d-flex justify-content-between"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-spinner</span>\n        <span class="hljs-attr">v-for</span>=<span class="hljs-string">"variant in variants"</span>\n        <span class="hljs-attr">:variant</span>=<span class="hljs-string">"variant"</span>\n        <span class="hljs-attr">:key</span>=<span class="hljs-string">"variant"</span>\n        <span class="hljs-attr">type</span>=<span class="hljs-string">"grow"</span>\n      &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-spinner</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    data() {\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">variants</span>: [<span class="hljs-string">\'primary\'</span>, <span class="hljs-string">\'secondary\'</span>, <span class="hljs-string">\'danger\'</span>, <span class="hljs-string">\'warning\'</span>, <span class="hljs-string">\'success\'</span>, <span class="hljs-string">\'info\'</span>, <span class="hljs-string">\'light\'</span>, <span class="hljs-string">\'dark\'</span>]\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-spinner-variants.vue --&gt;</span></pre><p><strong>Why not use <code translate="no" class="notranslate text-nowrap">border-color</code> utilities?</strong> Each <code translate="no" class="notranslate text-nowrap">border</code> spinner specifies a <code translate="no" class="notranslate text-nowrap">transparent</code> border for\nat least one side, so <code translate="no" class="notranslate text-nowrap">.border-{color}</code> utilities would override that.</p>\n<h2 id="size"><span class="bd-content-title">Size<a class="anchorjs-link" href="#size" aria-label="Anchor"></a></span></h2>\n<p>Set the prop <code translate="no" class="notranslate text-nowrap">small</code> to <code translate="no" class="notranslate text-nowrap">true</code> to make a smaller spinner that can quickly be used within other\ncomponents.</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-spinner</span> <span class="hljs-attr">small</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Small Spinner"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-spinner</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-spinner</span> <span class="hljs-attr">small</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Small Spinner"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"grow"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-spinner</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-spinner-sizes.vue --&gt;</span></pre><p>Or, use custom CSS or inline styles to change the dimensions as needed.</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-spinner</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"width: 3rem; height: 3rem;"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Large Spinner"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-spinner</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-spinner</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"width: 3rem; height: 3rem;"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Large Spinner"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"grow"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-spinner</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-spinner-sizes-custom.vue --&gt;</span></pre><h2 id="alignment"><span class="bd-content-title">Alignment<a class="anchorjs-link" href="#alignment" aria-label="Anchor"></a></span></h2>\n<p>Spinners in Bootstrap are built with <code translate="no" class="notranslate text-nowrap">rem</code>s, <code translate="no" class="notranslate text-nowrap">currentColor</code>, and <code translate="no" class="notranslate text-nowrap">display: inline-flex</code>. This means\nthey can easily be resized, recolored, and quickly aligned.</p>\n<h3 id="margin"><span class="bd-content-title">Margin<a class="anchorjs-link" href="#margin" aria-label="Anchor"></a></span></h3>\n<p>Use margin utilities like <code translate="no" class="notranslate text-nowrap">.m-5</code> for easy spacing.</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-spinner</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"m-5"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Busy"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-spinner</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-spinner-margin.vue --&gt;</span></pre><h2 id="placement"><span class="bd-content-title">Placement<a class="anchorjs-link" href="#placement" aria-label="Anchor"></a></span></h2>\n<p>Use flexbox utilities, float utilities, or text alignment utility classes to place spinners exactly\nwhere you need them in any situation.</p>\n<h3 id="flex"><span class="bd-content-title">Flex<a class="anchorjs-link" href="#flex" aria-label="Anchor"></a></span></h3>\n<p>Using flex utility classes:</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"d-flex justify-content-center mb-3"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-spinner</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Loading..."</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-spinner</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"d-flex align-items-center"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>Loading...<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-spinner</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"ml-auto"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-spinner</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-spinner-flex.vue --&gt;</span></pre><h3 id="floats"><span class="bd-content-title">Floats<a class="anchorjs-link" href="#floats" aria-label="Anchor"></a></span></h3>\n<p>Using float utility classes:</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"clearfix"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-spinner</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"float-right"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Floated Right"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-spinner</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-spinner-floats.vue --&gt;</span></pre><h3 id="text-align"><span class="bd-content-title">Text align<a class="anchorjs-link" href="#text-align" aria-label="Anchor"></a></span></h3>\n<p>Using text alignment utility classes:</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-spinner</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Text Centered"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-spinner</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-spinner-text-align.vue --&gt;</span></pre><h2 id="spinners-in-buttons"><span class="bd-content-title">Spinners in buttons<a class="anchorjs-link" href="#spinners-in-buttons" aria-label="Anchor"></a></span></h2>\n<p>Use spinners within buttons to indicate an action is currently processing or taking place. You may\nalso swap the label text out of the spinner element and utilize button text as needed.</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">disabled</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-spinner</span> <span class="hljs-attr">small</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-spinner</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"sr-only"</span>&gt;</span>Loading...<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">disabled</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-spinner</span> <span class="hljs-attr">small</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"grow"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-spinner</span>&gt;</span>\n    Loading...\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-spinner-buttons.vue --&gt;</span></pre><h2 id="spinner-accessibility"><span class="bd-content-title">Spinner accessibility<a class="anchorjs-link" href="#spinner-accessibility" aria-label="Anchor"></a></span></h2>\n<p>Place a hidden label text inside the spinner for screen reader users, via the <code translate="no" class="notranslate text-nowrap">label</code> prop or\n<code translate="no" class="notranslate text-nowrap">label</code> slot. The content will be placed <em>inside</em> the spinner wrapped in a <code translate="no" class="notranslate text-nowrap">&lt;span&gt;</code> element that has\nthe class <code translate="no" class="notranslate text-nowrap">sr-only</code>, which will make the label available to screen reader users.</p>\n<p>For accessibility purposes, each spinner will automatically have a <code translate="no" class="notranslate text-nowrap">role=&quot;status&quot;</code> attribute when a\nlabel is provided. You can easily customize the role if required via prop <code translate="no" class="notranslate text-nowrap">role</code>. The specified\n<code translate="no" class="notranslate text-nowrap">role</code> will not be applied when no label is provided.</p>\n<p>As well, when no label is provided, the spinner will automatically have the attribute\n<code translate="no" class="notranslate text-nowrap">aria-hidden=&quot;true&quot;</code> to hide the spinner from screen reader users.</p>\n\x3c!-- Component reference added automatically from component package.json --\x3e\n'}}]);