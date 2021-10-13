(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{330:function(n,e){n.exports='<h1 id="theming-bootstrap--bootstrapvue"><span class="bd-content-title">Theming Bootstrap &amp; BootstrapVue</span></h1>\n<p class="bd-lead">Theming is accomplished by Sass variables, Sass maps, and custom CSS. There&#39;s no dedicated theme\nstylesheet; instead, you can enable the built-in theme to add gradients, shadows, and more.</p>\n<p>While BootstrapVue uses Bootstrap&#39;s CSS, certain features of BootstrapVue uses custom CSS (i.e.\nstacked tables, etc). Our custom CSS relies on variables defined the Bootstrap v4.x SCSS. The\n<code translate="no" class="notranslate text-nowrap">bootstrap-vue/dist/bootstrap-vue.css</code> is compiled using the default Bootstrap v4.x variables. By\nusing the BootstrapVue source SCSS, you can have your variable overrides (such as breakpoints, theme\ncolors, etc) adjust the custom BootstrapVue css generation.</p>\n<h2 id="sass-variable-defaults"><span class="bd-content-title">SASS variable defaults<a class="anchorjs-link" href="#sass-variable-defaults" aria-label="Anchor"></a></span></h2>\n<p>Every Sass variable in Bootstrap v4 includes the <code translate="no" class="notranslate text-nowrap">!default</code> flag allowing you to override the\nvariable’s default value in your own Sass without modifying Bootstrap and BootstrapVue&#39;s source SCSS\ncode. Copy and paste variables as needed, modify their values, and remove the <code translate="no" class="notranslate text-nowrap">!default</code> flag. If a\nvariable has already been assigned, then it won’t be re-assigned by the default values in Bootstrap\nand BootstrapVue.</p>\n<p>You will find the complete list of Bootstrap’s variables in <code translate="no" class="notranslate text-nowrap">bootstrap/scss/_variables.scss</code>. Some\nvariables are set to <code translate="no" class="notranslate text-nowrap">null</code>, these variables don’t output the property unless they are overridden in\nyour configuration.</p>\n<p>Variable overrides within the same Sass file can come before or after the default variables.\nHowever, when overriding across Sass files, your overrides must come <em>before</em> you import Bootstrap\nand BootstrapVue&#39;s Sass (SCSS) files.</p>\n<p>Here’s an example that changes the <code translate="no" class="notranslate text-nowrap">background-color</code> and <code translate="no" class="notranslate text-nowrap">color</code> for the <code translate="no" class="notranslate text-nowrap">&lt;body&gt;</code> when importing\nand compiling Bootstrap and BootstrapVue SCSS:</p>\n<pre class="hljs scss text-monospace p-2 notranslate" translate="no"><span class="hljs-comment">// Your variable overrides</span>\n<span class="hljs-variable">$body-bg</span>: <span class="hljs-number">#000</span>;\n<span class="hljs-variable">$body-color</span>: <span class="hljs-number">#111</span>;\n\n<span class="hljs-comment">// Bootstrap and its default variables</span>\n<span class="hljs-keyword">@import</span> <span class="hljs-string">\'../node_modules/bootstrap/scss/bootstrap\'</span>;\n<span class="hljs-comment">// BootstrapVue and its default variables</span>\n<span class="hljs-keyword">@import</span> <span class="hljs-string">\'../node_modules/bootstrap-vue/src/index.scss\'</span>;</pre><h2 id="default-theme-colors"><span class="bd-content-title">Default theme colors<a class="anchorjs-link" href="#default-theme-colors" aria-label="Anchor"></a></span></h2>\n<p>The default them colors defined in the Bootstrap v4.3 SCSS are as follows:</p>\n<div class="row">\n  <div class="col-md-4">\n    <div class="p-3 mb-3 bg-primary text-light">Primary</div>\n  </div>\n  <div class="col-md-4">\n    <div class="p-3 mb-3 bg-secondary text-light">Secondary</div>\n  </div>\n  <div class="col-md-4">\n    <div class="p-3 mb-3 bg-success text-light">Success</div>\n  </div>\n  <div class="col-md-4">\n    <div class="p-3 mb-3 bg-danger text-light">Danger</div>\n  </div>\n  <div class="col-md-4">\n    <div class="p-3 mb-3 bg-warning text-dark">Warning</div>\n  </div>\n  <div class="col-md-4">\n    <div class="p-3 mb-3 bg-info text-light">Info</div>\n  </div>\n  <div class="col-md-4">\n    <div class="p-3 mb-3 bg-light text-dark">Light</div>\n  </div>\n  <div class="col-md-4">\n    <div class="p-3 mb-3 bg-dark text-light">Dark</div>\n  </div>\n</div>\n\n<p>Various components will use variations (intensities) of these default theme colors.</p>\n<p>You can alter the theme colors, and create additional theme colors, as needed via SASS variables and\nmaps. Refer to the <a href="https://getbootstrap.com/docs/4.3/getting-started/theming/" target="_blank" rel="noopener">Bootstrap theming</a>\ndocs for more details. All theme colors automatically become available as\n<a href="/docs/reference/color-variants" class="font-weight-bold">color variants</a> to all BootstrapVue components.</p>\n<h2 id="sass-options"><span class="bd-content-title">SASS options<a class="anchorjs-link" href="#sass-options" aria-label="Anchor"></a></span></h2>\n<p>Customize Bootstrap 4 with the built-in custom variables file and easily toggle global CSS\npreferences with Bootstrap&#39;s <code translate="no" class="notranslate text-nowrap">$enable-*</code> Sass variables.</p>\n<p>Some commonly used Bootstrap v4 variables are:</p>\n<div class="table-responsive-sm"><table class="b-table table table-bordered table-striped bv-docs-table">\n<thead class="thead-default">\n<tr>\n<th>Variable</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code translate="no" class="notranslate text-nowrap">$enable-rounded</code></td>\n<td>Boolean</td>\n<td><code translate="no" class="notranslate text-nowrap">true</code></td>\n<td>Enables predefined <code translate="no" class="notranslate text-nowrap">border-radius</code> styles on various components</td>\n</tr>\n<tr>\n<td><code translate="no" class="notranslate text-nowrap">$enable-shadows</code></td>\n<td>Boolean</td>\n<td><code translate="no" class="notranslate text-nowrap">false</code></td>\n<td>Enables predefined <code translate="no" class="notranslate text-nowrap">box-shadow</code> styles on various components</td>\n</tr>\n<tr>\n<td><code translate="no" class="notranslate text-nowrap">$enable-gradients</code></td>\n<td>Boolean</td>\n<td><code translate="no" class="notranslate text-nowrap">false</code></td>\n<td>Enables predefined gradients via <code translate="no" class="notranslate text-nowrap">background-image</code> styles on various components</td>\n</tr>\n<tr>\n<td><code translate="no" class="notranslate text-nowrap">$enable-transitions</code></td>\n<td>Boolean</td>\n<td><code translate="no" class="notranslate text-nowrap">true</code></td>\n<td>Enables predefined <code translate="no" class="notranslate text-nowrap">transition</code>s on various components</td>\n</tr>\n<tr>\n<td><code translate="no" class="notranslate text-nowrap">$enable-responsive-font-sizes</code></td>\n<td>Boolean</td>\n<td><code translate="no" class="notranslate text-nowrap">false</code></td>\n<td>Enables <a href="https://getbootstrap.com/docs/4.3/content/typography/#responsive-font-sizes" target="_blank" rel="noopener">responsive font sizes</a></td>\n</tr>\n<tr>\n<td><code translate="no" class="notranslate text-nowrap">$enable-validation-icons</code></td>\n<td>Boolean</td>\n<td><code translate="no" class="notranslate text-nowrap">true</code></td>\n<td>Enables <code translate="no" class="notranslate text-nowrap">background-image</code> icons within textual inputs and some custom forms for validation states</td>\n</tr>\n</tbody></table>\n</div><p>Refer to <a href="https://getbootstrap.com/docs/4.3/getting-started/theming/" target="_blank" rel="noopener">Bootstrap&#39;s theming</a> docs for\nadditional Bootstrap v4 variable information.</p>\n<p>BootstrapVue also defines several Sass variables for controlling BootstrapVue&#39;s custom CSS\ngeneration. If you are not using these features in your project, you can disable the feature&#39;s CSS\ngeneration to reduce the size of BootstrapVue&#39;s custom CSS bundle:</p>\n<div class="table-responsive-sm"><table class="b-table table table-bordered table-striped bv-docs-table">\n<thead class="thead-default">\n<tr>\n<th>Variable</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code translate="no" class="notranslate text-nowrap">$bv-enable-table-stacked</code></td>\n<td>Boolean</td>\n<td><code translate="no" class="notranslate text-nowrap">true</code></td>\n<td>Enables stacked table CSS generation</td>\n</tr>\n<tr>\n<td><code translate="no" class="notranslate text-nowrap">$bv-enable-table-sticky</code></td>\n<td>Boolean</td>\n<td><code translate="no" class="notranslate text-nowrap">true</code></td>\n<td>Enables sticky table header and column CSS generation</td>\n</tr>\n<tr>\n<td><code translate="no" class="notranslate text-nowrap">$bv-enable-tooltip-variants</code></td>\n<td>Boolean</td>\n<td><code translate="no" class="notranslate text-nowrap">true</code></td>\n<td>Enables tooltip variant CSS generation</td>\n</tr>\n<tr>\n<td><code translate="no" class="notranslate text-nowrap">$bv-enable-popover-variants</code></td>\n<td>Boolean</td>\n<td><code translate="no" class="notranslate text-nowrap">true</code></td>\n<td>Enables popover variant CSS generation</td>\n</tr>\n</tbody></table>\n</div><p>You can find additional variables that control various aspects of BootstrapVue&#39;s custom CSS at\n<a href="https://github.com/bootstrap-vue/bootstrap-vue/blob/master/src/_variables.scss" target="_blank" rel="noopener"><code translate="no" class="notranslate text-nowrap">bootstrap-vue/src/_variables.scss</code></a>.\nNote that BootstrapVue&#39;s custom SCSS relies on Bootstrap&#39;s SASS variables, functions, and mixins.</p>\n<h2 id="generating-custom-themes"><span class="bd-content-title">Generating custom themes<a class="anchorjs-link" href="#generating-custom-themes" aria-label="Anchor"></a></span></h2>\n<p>To use your own theme and colors in BootstrapVue, you will need to create a <code translate="no" class="notranslate text-nowrap">custom.scss</code> file in\nyour project, which you can include in your main app:</p>\n<p><strong>Via template:</strong></p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">"scss"</span>&gt;</span>\n  // Import custom SASS variable overrides\n  @import \'assets/custom.scss\';\n  // Import Bootstrap and BootstrapVue source SCSS files\n  @import \'~bootstrap/scss/bootstrap.scss\';\n  @import \'~bootstrap-vue/src/index.scss\';\n\n  // General style overrides and custom classes\n  body {\n    margin: 0;\n  }\n  // ...\n<span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span></pre><p>The <code translate="no" class="notranslate text-nowrap">custom.scss</code> file, which needs to be loaded before Bootstrap&#39;s SCSS and BootstrapVue&#39;s SCSS,\nwill include your Bootstrap v4 variable overrides (i.e. colors, shadows, font sizes, breakpoints,\netc).</p>\n<p><strong>Via app main entry point:</strong></p>\n<p>Create an SCSS file with your custom theme variables:</p>\n<pre class="hljs scss text-monospace p-2 notranslate" translate="no"><span class="hljs-comment">// File: custom.scss</span>\n\n<span class="hljs-comment">// Define your variable overrides here</span>\n<span class="hljs-variable">$enable-shadows</span>: true;\n<span class="hljs-variable">$enable-gradients</span>: true;\n<span class="hljs-variable">$grid-breakpoints</span>: (\n  xs: <span class="hljs-number">0</span>,\n  sm: <span class="hljs-number">456px</span>,\n  md: <span class="hljs-number">789px</span>,\n  lg: <span class="hljs-number">999px</span>,\n  xl: <span class="hljs-number">1234px</span>\n);\n<span class="hljs-variable">$bv-enable-table-stacked</span>: false;\n\n<span class="hljs-comment">// Include Bootstrap and BootstrapVue SCSS files</span>\n<span class="hljs-keyword">@import</span> <span class="hljs-string">\'~bootstrap/scss/bootstrap.scss\'</span>;\n<span class="hljs-keyword">@import</span> <span class="hljs-string">\'~bootstrap-vue/src/index.scss\'</span>;\n\n<span class="hljs-comment">// General style overrides and custom classes</span>\n<span class="hljs-selector-tag">body</span> {\n  <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span>;\n}\n<span class="hljs-comment">// ...</span></pre><p>Then import that single SCSS file into your app code entry point:</p>\n<pre class="hljs js text-monospace p-2 notranslate" translate="no"><span class="hljs-comment">// app.js</span>\n<span class="hljs-keyword">import</span> <span class="hljs-string">\'custom.scss\'</span></pre><p>You can find all of the possible variables in <code translate="no" class="notranslate text-nowrap">node_modules/bootstrap/scss/_variables.scss</code>.</p>\n<p>Do not forget to include <code translate="no" class="notranslate text-nowrap">node-sass</code> and <code translate="no" class="notranslate text-nowrap">sass-loader</code> to use <code translate="no" class="notranslate text-nowrap">scss</code> in Vue:</p>\n<pre class="hljs sh text-monospace p-2 notranslate" translate="no">npm install --save-dev node-sass sass-loader</pre><p><strong>Note:</strong> You may need to adjust the SCSS import paths based on your build environment.</p>\n<p>For an example of creating custom theme colors, see the\n<a href="/docs/reference/color-variants#creating-custom-variants" class="font-weight-bold">Creating custom variants</a> section in the\n<a href="/docs/reference/color-variants" class="font-weight-bold">Color variants</a> reference page.</p>\n<h2 id="css-variables"><span class="bd-content-title">CSS variables<a class="anchorjs-link" href="#css-variables" aria-label="Anchor"></a></span></h2>\n<p>Bootstrap&#39;s SCSS generates around two dozen\n<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables" target="_blank" rel="noopener">CSS custom properties (variables)</a>\nin the compiled CSS. These provide easy access to commonly used values like theme colors,\nbreakpoints, and primary font stacks when working in your browser’s Inspector, a code sandbox, or\ngeneral prototyping.</p>\n<h3 id="available-bootstrap-css-variables"><span class="bd-content-title">Available Bootstrap CSS variables<a class="anchorjs-link" href="#available-bootstrap-css-variables" aria-label="Anchor"></a></span></h3>\n<p>Here are the variables that are generated. The values shown are based on the Bootstrap v4 defaults:</p>\n<pre class="hljs scss text-monospace p-2 notranslate" translate="no"><span class="hljs-selector-pseudo">:root</span> {\n  --blue: <span class="hljs-number">#007bff</span>;\n  --indigo: <span class="hljs-number">#6610f2</span>;\n  --purple: <span class="hljs-number">#6f42c1</span>;\n  --pink: <span class="hljs-number">#e83e8c</span>;\n  --red: <span class="hljs-number">#dc3545</span>;\n  --orange: <span class="hljs-number">#fd7e14</span>;\n  --yellow: <span class="hljs-number">#ffc107</span>;\n  --green: <span class="hljs-number">#28a745</span>;\n  --teal: <span class="hljs-number">#20c997</span>;\n  --cyan: <span class="hljs-number">#17a2b8</span>;\n  --white: <span class="hljs-number">#fff</span>;\n  --gray: <span class="hljs-number">#6c757d</span>;\n  --gray-dark: <span class="hljs-number">#343a40</span>;\n  --primary: <span class="hljs-number">#007bff</span>;\n  --secondary: <span class="hljs-number">#6c757d</span>;\n  --success: <span class="hljs-number">#28a745</span>;\n  --info: <span class="hljs-number">#17a2b8</span>;\n  --warning: <span class="hljs-number">#ffc107</span>;\n  --danger: <span class="hljs-number">#dc3545</span>;\n  --light: <span class="hljs-number">#f8f9fa</span>;\n  --dark: <span class="hljs-number">#343a40</span>;\n  --breakpoint-xs: <span class="hljs-number">0</span>;\n  --breakpoint-sm: <span class="hljs-number">576px</span>;\n  --breakpoint-md: <span class="hljs-number">768px</span>;\n  --breakpoint-lg: <span class="hljs-number">992px</span>;\n  --breakpoint-xl: <span class="hljs-number">1200px</span>;\n  --<span class="hljs-attribute">font-family</span>-sans-serif: -apple-system, BlinkMacSystemFont, <span class="hljs-string">\'Segoe UI\'</span>, Roboto, <span class="hljs-string">\'Helvetica Neue\'</span>,\n    Arial, sans-serif, <span class="hljs-string">\'Apple Color Emoji\'</span>, <span class="hljs-string">\'Segoe UI Emoji\'</span>, <span class="hljs-string">\'Segoe UI Symbol\'</span>;\n  --<span class="hljs-attribute">font-family</span>-monospace: SFMono-Regular, Menlo, Monaco, Consolas, <span class="hljs-string">\'Liberation Mono\'</span>,\n    <span class="hljs-string">\'Courier New\'</span>, monospace;\n}</pre><p>By setting SASS variables and maps, and recompiling the SCSS, the above generated SCSS variables\nwill also be updated.</p>\n<h3 id="example"><span class="bd-content-title">Example<a class="anchorjs-link" href="#example" aria-label="Anchor"></a></span></h3>\n<p>CSS variables offer similar flexibility to SASS’s variables, but without the need for compilation\nbefore being served to the browser. For example, here we are resetting our page’s font and link\nstyles, as well as creating a custom class that uses theme colors, via the use of CSS variables.</p>\n<pre class="hljs scss text-monospace p-2 notranslate" translate="no"><span class="hljs-selector-tag">body</span> {\n  <span class="hljs-attribute">font</span>: <span class="hljs-number">1rem</span>/<span class="hljs-number">1.5</span> var(--font-family-sans-serif);\n}\n\n<span class="hljs-selector-tag">a</span> {\n  <span class="hljs-attribute">color</span>: var(--blue);\n}\n\n<span class="hljs-selector-class">.custom-class</span> {\n  <span class="hljs-attribute">color</span>: var(--primary);\n  <span class="hljs-attribute">background-color</span>: var(--dark);\n}</pre><h2 id="see-also"><span class="bd-content-title">See also<a class="anchorjs-link" href="#see-also" aria-label="Anchor"></a></span></h2>\n<ul>\n<li>If you are defining custom breakpoint names, please see the\n<a href="/docs/misc/settings" class="font-weight-bold">BootstrapVue settings</a> page on how to update BootstrapVue <code translate="no" class="notranslate text-nowrap">&lt;b-col&gt;</code> and\n<code translate="no" class="notranslate text-nowrap">&lt;b-form-group&gt;</code> breakpoint specific props.</li>\n<li>For more details on theming Bootstrap&#39;s SCSS/CSS, refer to the\n<a href="https://getbootstrap.com/docs/4.3/getting-started/theming/" target="_blank" rel="noopener"><strong>Official Bootstrap v4 Theming Documentation</strong></a>.</li>\n</ul>\n'}}]);