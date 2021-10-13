webpackJsonp([36],{sC5x:function(s,a){s.exports='<h1 id="jumbotron">Jumbotron</h1>\n<blockquote>\n<p> A lightweight, flexible component that can optionally extend the entire viewport to\n   showcase key marketing messages on your site.</p>\n</blockquote>\n<p>You can set the heading and lead text via the <code>header</code> and <code>lead</code> props, or use the\nnamed slots <code>header</code> and <code>lead</code> if you need HTML support.</p>\n<p>Anything else between the opening and closing tags will be rendered at the bottom of the\njumbotron.</p>\n<p><strong>Usage with props:</strong></p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">b-jumbotron</span> <span class="hljs-attr">header</span>=<span class="hljs-string">&quot;Bootstrap Vue&quot;</span> <span class="hljs-attr">lead</span>=<span class="hljs-string">&quot;Bootstrap 4 Components for Vue.js 2&quot;</span> &gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>For more information visit website<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-btn</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#&quot;</span>&gt;</span>More Info<span class="hljs-tag">&lt;/<span class="hljs-name">b-btn</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">b-jumbotron</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- jumbotron-1.vue --&gt;</span>\n</pre>\n<p><strong>Usage with slots:</strong></p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">b-jumbotron</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;header&quot;</span>&gt;</span>\n    Bootstrap Vue\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;lead&quot;</span>&gt;</span>\n    This is a simple hero unit, a simple jumbotron-style component for\n    calling extra attention to featured content or information.\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">hr</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;my-4&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\n    It uses utility classes for typography and spacing to space content\n    out within the larger container.\n  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-btn</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#&quot;</span>&gt;</span>Do Something<span class="hljs-tag">&lt;/<span class="hljs-name">b-btn</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-btn</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;success&quot;</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#&quot;</span>&gt;</span>Do Something Else<span class="hljs-tag">&lt;/<span class="hljs-name">b-btn</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">b-jumbotron</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- jumbotron-2.vue --&gt;</span>\n</pre>\n<h2 id="options">Options</h2>\n<h3 id="header">Header</h3>\n<p>Control which tag is rendered for the header by setting the <code>header-tag</code> to the\napproriate HTML element. The default is <code>h1</code>. Both the prop <code>header</code> and slot <code>header</code>\nwill be rendered inside this tag. If both the prop and the slot are specified, the\nslot will be shown.</p>\n<p>Control the overall size of the header text by setting the <code>header-level</code> prop to\na value between <code>1</code> and <code>4</code> - with <code>1</code> being the largest and <code>4</code> being smallest. The\ndefault value is <code>3</code>.</p>\n<h3 id="lead-text">Lead Text</h3>\n<p>Control which tag is rendered for the lead text by setting the <code>lead-tag</code> to the\ndesired HTML element. The default is <code>p</code>. Both the prop <code>lead</code> and slot <code>lead</code>\nwill be rendered inside this tag. If both the prop and the slot are specified, the\nslot will be shown.</p>\n<h2 id="fluid-width">Fluid width</h2>\n<p>To make <code>&lt;b-jumbotron&gt;</code> full width, and without rounded corners, set the <code>fluid</code>\nprop. The inner content will automatically be placed into a <code>&lt;b-container&gt;</code>\n(fixed width at the various breakpoints). To change this to a fluid container,\nset the <code>container-fluid</code> prop. The <code>container-fluid</code> prop has no effect if\nthe <code>fluid</code> prop is not set</p>\n<h2 id="component-tag">Component tag</h2>\n<p>By default, <code>&lt;b-jumbotron&gt;</code> will render it&apos;s root element as a <code>div</code>. Change\nthe element tag to any other appropriate element by setting the <code>tag</code> prop\nto the desired element tag name.</p>\n<h2 id="variants">Variants</h2>\n<p>Control the overall background variant with the <code>bg-variant</code> prop ( set to <code>info</code>,\n<code>danger</code>, <code>warning</code>, <code>light</code>, <code>dark</code>, etc), the border variant with the\n<code>border-variant</code> prop, and the text variant with <code>text-variant</code> prop. All\nthree props default to <code>null</code>, which will instruct the jumbotron to use the\ndefault styling.</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">b-jumbotron</span> <span class="hljs-attr">bg-variant</span>=<span class="hljs-string">&quot;info&quot;</span> <span class="hljs-attr">text-variant</span>=<span class="hljs-string">&quot;white&quot;</span> <span class="hljs-attr">border-variant</span>=<span class="hljs-string">&quot;dark&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;header&quot;</span>&gt;</span>\n    Bootstrap Vue\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;lead&quot;</span>&gt;</span>\n    This is a simple hero unit, a simple jumbotron-style component for\n    calling extra attention to featured content or information.\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">hr</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;my-4&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\n    It uses utility classes for typography and spacing to space content\n    out within the larger container.\n  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">b-jumbotron</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- jumbotron-3.vue --&gt;</span>\n</pre>\n<h2 id="component-reference">Component Reference</h2>\n'}});
//# sourceMappingURL=components21.dd9a84e9c793a9c02298.js.map