(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{328:function(t,n){t.exports='<h1 id="spacing"><span class="bd-content-title">Spacing</span></h1>\n<p class="bd-lead">Bootstrap v4 CSS includes a wide range of shorthand responsive margin and padding utility classes\nto modify an element&#39;s appearance.</p>\n<h2 id="how-it-works"><span class="bd-content-title">How it works<a class="anchorjs-link" href="#how-it-works" aria-label="Anchor"></a></span></h2>\n<p>Assign responsive-friendly margin or padding values to an element or a subset of its sides with\nshorthand classes. Includes support for individual properties, all properties, and vertical and\nhorizontal properties. Classes are built from a default Sass map ranging from .25rem to 3rem.</p>\n<h2 id="notation"><span class="bd-content-title">Notation<a class="anchorjs-link" href="#notation" aria-label="Anchor"></a></span></h2>\n<p>Spacing utilities that apply to all breakpoints, from xs to xl, have no breakpoint abbreviation in\nthem. This is because those classes are applied from <code translate="no" class="notranslate text-nowrap">min-width: 0</code> and up, and thus are not bound\nby a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.</p>\n<p>The classes are named using the format <code translate="no" class="notranslate text-nowrap">{property}{sides}-{size}</code> for <code translate="no" class="notranslate text-nowrap">xs</code> and\n<code translate="no" class="notranslate text-nowrap">{property}{sides}-{breakpoint}-{size}</code> for <code translate="no" class="notranslate text-nowrap">sm</code>, <code translate="no" class="notranslate text-nowrap">md</code>, <code translate="no" class="notranslate text-nowrap">lg</code>, and <code translate="no" class="notranslate text-nowrap">xl</code>.</p>\n<p>Where <em><code translate="no" class="notranslate text-nowrap">property</code></em> is one of:</p>\n<ul>\n<li><code translate="no" class="notranslate text-nowrap">m</code> - for classes that set margin</li>\n<li><code translate="no" class="notranslate text-nowrap">p</code> - for classes that set padding</li>\n</ul>\n<p>Where <em><code translate="no" class="notranslate text-nowrap">sides</code></em> is one of:</p>\n<ul>\n<li><code translate="no" class="notranslate text-nowrap">t</code> - for classes that set <code translate="no" class="notranslate text-nowrap">margin-top</code> or <code translate="no" class="notranslate text-nowrap">padding-top</code></li>\n<li><code translate="no" class="notranslate text-nowrap">b</code> - for classes that set <code translate="no" class="notranslate text-nowrap">margin-bottom</code> or <code translate="no" class="notranslate text-nowrap">padding-bottom</code></li>\n<li><code translate="no" class="notranslate text-nowrap">l</code> - for classes that set <code translate="no" class="notranslate text-nowrap">margin-left</code> or <code translate="no" class="notranslate text-nowrap">padding-left</code></li>\n<li><code translate="no" class="notranslate text-nowrap">r</code> - for classes that set <code translate="no" class="notranslate text-nowrap">margin-right</code> or <code translate="no" class="notranslate text-nowrap">padding-right</code></li>\n<li><code translate="no" class="notranslate text-nowrap">x</code> - for classes that set both <code translate="no" class="notranslate text-nowrap">*-left</code> and <code translate="no" class="notranslate text-nowrap">*-right</code></li>\n<li><code translate="no" class="notranslate text-nowrap">y</code> - for classes that set both <code translate="no" class="notranslate text-nowrap">*-top</code> and <code translate="no" class="notranslate text-nowrap">*-bottom</code></li>\n<li>blank - for classes that set <code translate="no" class="notranslate text-nowrap">margin</code> or <code translate="no" class="notranslate text-nowrap">padding</code> on all 4 sides of the element</li>\n</ul>\n<p>Where <em><code translate="no" class="notranslate text-nowrap">size</code></em> is one of:</p>\n<ul>\n<li><code translate="no" class="notranslate text-nowrap">0</code> - for classes that eliminate the margin or padding by setting it to <code translate="no" class="notranslate text-nowrap">0</code></li>\n<li><code translate="no" class="notranslate text-nowrap">1</code> - (by default) for classes that set the <code translate="no" class="notranslate text-nowrap">margin</code> or <code translate="no" class="notranslate text-nowrap">padding</code> to <code translate="no" class="notranslate text-nowrap">$spacer * .25</code></li>\n<li><code translate="no" class="notranslate text-nowrap">2</code> - (by default) for classes that set the <code translate="no" class="notranslate text-nowrap">margin</code> or <code translate="no" class="notranslate text-nowrap">padding</code> to <code translate="no" class="notranslate text-nowrap">$spacer * .5</code></li>\n<li><code translate="no" class="notranslate text-nowrap">3</code> - (by default) for classes that set the <code translate="no" class="notranslate text-nowrap">margin</code> or <code translate="no" class="notranslate text-nowrap">padding</code> to <code translate="no" class="notranslate text-nowrap">$spacer</code></li>\n<li><code translate="no" class="notranslate text-nowrap">4</code> - (by default) for classes that set the <code translate="no" class="notranslate text-nowrap">margin</code> or <code translate="no" class="notranslate text-nowrap">padding</code> to <code translate="no" class="notranslate text-nowrap">$spacer * 1.5</code></li>\n<li><code translate="no" class="notranslate text-nowrap">5</code> - (by default) for classes that set the <code translate="no" class="notranslate text-nowrap">margin</code> or <code translate="no" class="notranslate text-nowrap">padding</code> to <code translate="no" class="notranslate text-nowrap">$spacer * 3</code></li>\n</ul>\n<p><em>(You can add more sizes by adding entries to the <code translate="no" class="notranslate text-nowrap">$spacers</code> Sass map variable.)</em></p>\n<h2 id="examples"><span class="bd-content-title">Examples<a class="anchorjs-link" href="#examples" aria-label="Anchor"></a></span></h2>\n<p>Here are some representative examples of these classes:</p>\n<pre class="hljs css text-monospace p-2 notranslate" translate="no"><span class="hljs-selector-class">.mt-0</span> {\n  <span class="hljs-attribute">margin-top</span>: <span class="hljs-number">0</span> <span class="hljs-meta">!important</span>;\n}\n\n<span class="hljs-selector-class">.ml-1</span> {\n  <span class="hljs-attribute">margin-left</span>: ($spacer * <span class="hljs-number">0.25</span>) <span class="hljs-meta">!important</span>;\n}\n\n<span class="hljs-selector-class">.px-2</span> {\n  <span class="hljs-attribute">padding-left</span>: ($spacer * <span class="hljs-number">0.5</span>) <span class="hljs-meta">!important</span>;\n  <span class="hljs-attribute">padding-right</span>: ($spacer * <span class="hljs-number">0.5</span>) <span class="hljs-meta">!important</span>;\n}\n\n<span class="hljs-selector-class">.p-3</span> {\n  <span class="hljs-attribute">padding</span>: $spacer <span class="hljs-meta">!important</span>;\n}</pre><h2 id="horizontal-centering"><span class="bd-content-title">Horizontal centering<a class="anchorjs-link" href="#horizontal-centering" aria-label="Anchor"></a></span></h2>\n<p>Additionally, Bootstrap also includes an <code translate="no" class="notranslate text-nowrap">.mx-auto</code> class for horizontally centering fixed-width\nblock level content — that is, content that has <code translate="no" class="notranslate text-nowrap">display: block</code> and a <code translate="no" class="notranslate text-nowrap">width</code> set—by setting the\nhorizontal margins to <code translate="no" class="notranslate text-nowrap">auto</code>.</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mx-auto bg-info"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"width: 200px;"</span>&gt;</span>Centered element<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- horizontal-centering.vue --&gt;</span></pre>'}}]);