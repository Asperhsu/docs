(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{351:function(n,t){n.exports='<h1 id="form"><span class="bd-content-title">Form</span></h1>\n<p class="bd-lead">BootstrapVue form component and helper components that optionally support inline form styles and\nvalidation states. Pair them up with other BootstrapVue form control components for an easy\ncustomized, and responsive, layout with a consistent look and feel.</p>\n<h2 id="introduction-to-forms-and-controls"><span class="bd-content-title">Introduction to forms and controls<a class="anchorjs-link" href="#introduction-to-forms-and-controls" aria-label="Anchor"></a></span></h2>\n<p>Be sure to use an appropriate <code translate="no" class="notranslate text-nowrap">type</code> on all inputs (e.g., <code translate="no" class="notranslate text-nowrap">email</code> for email address or <code translate="no" class="notranslate text-nowrap">number</code> for\nnumerical information) to take advantage of newer input controls like email verification, number\nselection, and more.</p>\n<p>Here&#39;s a quick example to demonstrate BootstrapVue&#39;s form styles. Keep reading for documentation on\nsupported components, form layout, and more.</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-form</span> @<span class="hljs-attr">submit</span>=<span class="hljs-string">"onSubmit"</span> @<span class="hljs-attr">reset</span>=<span class="hljs-string">"onReset"</span> <span class="hljs-attr">v-if</span>=<span class="hljs-string">"show"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-form-group</span>\n        <span class="hljs-attr">id</span>=<span class="hljs-string">"input-group-1"</span>\n        <span class="hljs-attr">label</span>=<span class="hljs-string">"Email address:"</span>\n        <span class="hljs-attr">label-for</span>=<span class="hljs-string">"input-1"</span>\n        <span class="hljs-attr">description</span>=<span class="hljs-string">"We\'ll never share your email with anyone else."</span>\n      &gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-form-input</span>\n          <span class="hljs-attr">id</span>=<span class="hljs-string">"input-1"</span>\n          <span class="hljs-attr">v-model</span>=<span class="hljs-string">"form.email"</span>\n          <span class="hljs-attr">type</span>=<span class="hljs-string">"email"</span>\n          <span class="hljs-attr">required</span>\n          <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Enter email"</span>\n        &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-form-input</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-form-group</span>&gt;</span>\n\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-form-group</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"input-group-2"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Your Name:"</span> <span class="hljs-attr">label-for</span>=<span class="hljs-string">"input-2"</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-form-input</span>\n          <span class="hljs-attr">id</span>=<span class="hljs-string">"input-2"</span>\n          <span class="hljs-attr">v-model</span>=<span class="hljs-string">"form.name"</span>\n          <span class="hljs-attr">required</span>\n          <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Enter name"</span>\n        &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-form-input</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-form-group</span>&gt;</span>\n\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-form-group</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"input-group-3"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Food:"</span> <span class="hljs-attr">label-for</span>=<span class="hljs-string">"input-3"</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-form-select</span>\n          <span class="hljs-attr">id</span>=<span class="hljs-string">"input-3"</span>\n          <span class="hljs-attr">v-model</span>=<span class="hljs-string">"form.food"</span>\n          <span class="hljs-attr">:options</span>=<span class="hljs-string">"foods"</span>\n          <span class="hljs-attr">required</span>\n        &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-form-select</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-form-group</span>&gt;</span>\n\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-form-group</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"input-group-4"</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-form-checkbox-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"form.checked"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"checkboxes-4"</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">b-form-checkbox</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"me"</span>&gt;</span>Check me out<span class="hljs-tag">&lt;/<span class="hljs-name">b-form-checkbox</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">b-form-checkbox</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"that"</span>&gt;</span>Check that out<span class="hljs-tag">&lt;/<span class="hljs-name">b-form-checkbox</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">b-form-checkbox-group</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-form-group</span>&gt;</span>\n\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"primary"</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"reset"</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"danger"</span>&gt;</span>Reset<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-form</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-card</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mt-3"</span> <span class="hljs-attr">header</span>=<span class="hljs-string">"Form Data Result"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">pre</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"m-0"</span>&gt;</span>{{ form }}<span class="hljs-tag">&lt;/<span class="hljs-name">pre</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-card</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    data() {\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">form</span>: {\n          <span class="hljs-attr">email</span>: <span class="hljs-string">\'\'</span>,\n          <span class="hljs-attr">name</span>: <span class="hljs-string">\'\'</span>,\n          <span class="hljs-attr">food</span>: <span class="hljs-literal">null</span>,\n          <span class="hljs-attr">checked</span>: []\n        },\n        <span class="hljs-attr">foods</span>: [{ <span class="hljs-attr">text</span>: <span class="hljs-string">\'Select One\'</span>, <span class="hljs-attr">value</span>: <span class="hljs-literal">null</span> }, <span class="hljs-string">\'Carrots\'</span>, <span class="hljs-string">\'Beans\'</span>, <span class="hljs-string">\'Tomatoes\'</span>, <span class="hljs-string">\'Corn\'</span>],\n        <span class="hljs-attr">show</span>: <span class="hljs-literal">true</span>\n      }\n    },\n    <span class="hljs-attr">methods</span>: {\n      onSubmit(evt) {\n        evt.preventDefault()\n        alert(<span class="hljs-built_in">JSON</span>.stringify(<span class="hljs-keyword">this</span>.form))\n      },\n      onReset(evt) {\n        evt.preventDefault()\n        <span class="hljs-comment">// Reset our form values</span>\n        <span class="hljs-keyword">this</span>.form.email = <span class="hljs-string">\'\'</span>\n        <span class="hljs-keyword">this</span>.form.name = <span class="hljs-string">\'\'</span>\n        <span class="hljs-keyword">this</span>.form.food = <span class="hljs-literal">null</span>\n        <span class="hljs-keyword">this</span>.form.checked = []\n        <span class="hljs-comment">// Trick to reset/clear native browser form validation state</span>\n        <span class="hljs-keyword">this</span>.show = <span class="hljs-literal">false</span>\n        <span class="hljs-keyword">this</span>.$nextTick(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {\n          <span class="hljs-keyword">this</span>.show = <span class="hljs-literal">true</span>\n        })\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-form.vue --&gt;</span></pre><h2 id="inline-form"><span class="bd-content-title">Inline form<a class="anchorjs-link" href="#inline-form" aria-label="Anchor"></a></span></h2>\n<p>Use the <code translate="no" class="notranslate text-nowrap">inline</code> prop on <code translate="no" class="notranslate text-nowrap">&lt;b-form&gt;</code> to display a series of labels, form controls, and buttons on a\nsingle horizontal row. Form controls within inline forms vary slightly from their default states.</p>\n<ul>\n<li>Controls are <code translate="no" class="notranslate text-nowrap">display: flex</code>, collapsing any HTML white space and allowing you to provide\nalignment control with spacing and flexbox utilities.</li>\n<li>Controls and input groups receive <code translate="no" class="notranslate text-nowrap">width: auto</code> to override the Bootstrap default width: 100%.</li>\n<li>Controls <strong>only appear inline in viewports that are at least 576px wide</strong> to account for narrow\nviewports on mobile devices.</li>\n</ul>\n<p>You may need to manually address the width and alignment of individual form controls with\n<a href="/docs/reference/spacing-classes" class="font-weight-bold">spacing utilities</a> (as shown below). Lastly, be sure to always\ninclude a <code translate="no" class="notranslate text-nowrap">&lt;label&gt;</code> with each form control, even if you need to hide it from non-screenreader\nvisitors with class <code translate="no" class="notranslate text-nowrap">.sr-only</code>.</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-form</span> <span class="hljs-attr">inline</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"sr-only"</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"inline-form-input-name"</span>&gt;</span>Name<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-input</span>\n      <span class="hljs-attr">id</span>=<span class="hljs-string">"inline-form-input-name"</span>\n      <span class="hljs-attr">class</span>=<span class="hljs-string">"mb-2 mr-sm-2 mb-sm-0"</span>\n      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Jane Doe"</span>\n    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-input</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"sr-only"</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"inline-form-input-username"</span>&gt;</span>Username<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group</span> <span class="hljs-attr">prepend</span>=<span class="hljs-string">"@"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mb-2 mr-sm-2 mb-sm-0"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-input</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"inline-form-input-username"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Username"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-input</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-form-checkbox</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mb-2 mr-sm-2 mb-sm-0"</span>&gt;</span>Remember me<span class="hljs-tag">&lt;/<span class="hljs-name">b-form-checkbox</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"primary"</span>&gt;</span>Save<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-form</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-form-inline.vue --&gt;</span></pre><p>Custom form controls and selects are also supported.</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-form</span> <span class="hljs-attr">inline</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mr-sm-2"</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"inline-form-custom-select-pref"</span>&gt;</span>Preference<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-form-select</span>\n      <span class="hljs-attr">class</span>=<span class="hljs-string">"mb-2 mr-sm-2 mb-sm-0"</span>\n      <span class="hljs-attr">:value</span>=<span class="hljs-string">"null"</span>\n      <span class="hljs-attr">:options</span>=<span class="hljs-string">"{ \'1\': \'One\', \'2\': \'Two\', \'3\': \'Three\' }"</span>\n      <span class="hljs-attr">id</span>=<span class="hljs-string">"inline-form-custom-select-pref"</span>\n    &gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"first"</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">"null"</span>&gt;</span>Choose...<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-form-select</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-form-checkbox</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mb-2 mr-sm-2 mb-sm-0"</span>&gt;</span>Remember my preference<span class="hljs-tag">&lt;/<span class="hljs-name">b-form-checkbox</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"primary"</span>&gt;</span>Save<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-form</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-form-inline-custom.vue --&gt;</span></pre><p><strong>Note:</strong> <em><code translate="no" class="notranslate text-nowrap">&lt;b-form-group&gt;</code> is not supported in <code translate="no" class="notranslate text-nowrap">inline</code> forms due to layout conflicts.</em></p>\n<h3 id="alternatives-to-hidden-labels"><span class="bd-content-title">Alternatives to hidden labels<a class="anchorjs-link" href="#alternatives-to-hidden-labels" aria-label="Anchor"></a></span></h3>\n<p>Assistive technologies such as screen readers will have trouble with your forms if you don&#39;t include\na label for every input. For these inline forms, you can hide the labels using the <code translate="no" class="notranslate text-nowrap">.sr-only</code> class.\nThere are further alternative methods of providing a label for assistive technologies, such as the\n<code translate="no" class="notranslate text-nowrap">aria-label</code>, <code translate="no" class="notranslate text-nowrap">aria-labelledby</code> or <code translate="no" class="notranslate text-nowrap">title</code> attributes. If none of these are present, assistive\ntechnologies may resort to using the <code translate="no" class="notranslate text-nowrap">placeholder</code> attribute, if present, but note that use of\n<code translate="no" class="notranslate text-nowrap">placeholder</code> as a replacement for other labelling methods is not advised.</p>\n<h2 id="related-form-control-and-layout-components"><span class="bd-content-title">Related form control and layout components<a class="anchorjs-link" href="#related-form-control-and-layout-components" aria-label="Anchor"></a></span></h2>\n<p>See also:</p>\n<ul>\n<li><a href="/docs/components/form-input" class="font-weight-bold"><code translate="no" class="notranslate text-nowrap">&lt;b-form-input&gt;</code></a> Textual and text-like inputs</li>\n<li><a href="/docs/components/form-textarea" class="font-weight-bold"><code translate="no" class="notranslate text-nowrap">&lt;b-form-textarea&gt;</code></a> Text area inputs</li>\n<li><a href="/docs/components/form-select" class="font-weight-bold"><code translate="no" class="notranslate text-nowrap">&lt;b-form-select&gt;</code></a> Select input</li>\n<li><a href="/docs/components/form-radio" class="font-weight-bold"><code translate="no" class="notranslate text-nowrap">&lt;b-form-radio&gt;</code></a> Radio Inputs</li>\n<li><a href="/docs/components/form-checkbox" class="font-weight-bold"><code translate="no" class="notranslate text-nowrap">&lt;b-form-checkbox&gt;</code></a> Checkbox Inputs</li>\n<li><a href="/docs/components/form-file" class="font-weight-bold"><code translate="no" class="notranslate text-nowrap">&lt;b-form-file&gt;</code></a> File Input</li>\n<li><a href="/docs/components/button" class="font-weight-bold"><code translate="no" class="notranslate text-nowrap">&lt;b-button&gt;</code></a> Buttons</li>\n<li><a href="/docs/components/form-group" class="font-weight-bold"><code translate="no" class="notranslate text-nowrap">&lt;b-form-group&gt;</code></a> Form input wrapper to generate form-groups that\nsupport labels, help text and feedback</li>\n<li><a href="/docs/components/input-group" class="font-weight-bold"><code translate="no" class="notranslate text-nowrap">&lt;b-input-group&gt;</code></a> Form inputs with add-ons</li>\n<li><a href="/docs/components/layout" class="font-weight-bold"><code translate="no" class="notranslate text-nowrap">&lt;b-form-row&gt;</code></a> Create grid rows and columns with tighter margins\n(available via the <a href="/docs/components/layout" class="font-weight-bold">Layout and grid components</a>)</li>\n</ul>\n<h2 id="form-helper-components"><span class="bd-content-title">Form helper components<a class="anchorjs-link" href="#form-helper-components" aria-label="Anchor"></a></span></h2>\n<p>The following helper components are available with the <code translate="no" class="notranslate text-nowrap">Form</code> plugin:</p>\n<ul>\n<li><code translate="no" class="notranslate text-nowrap">&lt;b-form-text&gt;</code> Help text blocks for inputs</li>\n<li><code translate="no" class="notranslate text-nowrap">&lt;b-form-invalid-feedback&gt;</code> Invalid feedback text blocks for input <code translate="no" class="notranslate text-nowrap">invalid</code> states</li>\n<li><code translate="no" class="notranslate text-nowrap">&lt;b-form-valid-feedback&gt;</code> Valid feedback text blocks for input <code translate="no" class="notranslate text-nowrap">valid</code> states</li>\n<li><code translate="no" class="notranslate text-nowrap">&lt;b-form-datalist&gt;</code> Easily create a <code translate="no" class="notranslate text-nowrap">&lt;datalist&gt;</code> for use with <code translate="no" class="notranslate text-nowrap">&lt;b-form-input&gt;</code> or plain <code translate="no" class="notranslate text-nowrap">&lt;input&gt;</code></li>\n</ul>\n<h3 id="form-text-helper"><span class="bd-content-title">Form text helper<a class="anchorjs-link" href="#form-text-helper" aria-label="Anchor"></a></span></h3>\n<p>Display a block of help text below an input with the <code translate="no" class="notranslate text-nowrap">&lt;b-form-text&gt;</code> helper component. text is\ndisplayed with a muted color and slightly smaller font-size.</p>\n<p><strong>Tip:</strong> Help text should be explicitly associated with the form control it relates to using the\n<code translate="no" class="notranslate text-nowrap">aria-describedby</code> attribute. This will ensure that assistive technologies, such as screen readers,\nwill announce this help text when the user focuses or enters the control.</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-form</span> @<span class="hljs-attr">submit.stop.prevent</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"text-password"</span>&gt;</span>Password<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"password"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"text-password"</span> <span class="hljs-attr">aria-describedby</span>=<span class="hljs-string">"password-help-block"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-input</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-form-text</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"password-help-block"</span>&gt;</span>\n      Your password must be 8-20 characters long, contain letters and numbers, and must not\n      contain spaces, special characters, or emoji.\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-form-text</span>&gt;</span>\n   <span class="hljs-tag">&lt;/<span class="hljs-name">b-form</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-form-help-text.vue --&gt;</span></pre><h3 id="feedback-helpers"><span class="bd-content-title">Feedback helpers<a class="anchorjs-link" href="#feedback-helpers" aria-label="Anchor"></a></span></h3>\n<p>The <code translate="no" class="notranslate text-nowrap">&lt;b-form-valid-feedback&gt;</code> and <code translate="no" class="notranslate text-nowrap">&lt;b-form-invalid-feedback&gt;</code> helper components will display\nfeedback (based on input state) as a block of colored text. They rely on being placed after an input\n(sibling) and will show based on the browser native validation state of the input. To force them to\nshow, set the prop <code translate="no" class="notranslate text-nowrap">force-show</code> to <code translate="no" class="notranslate text-nowrap">true</code>, or bind the controls <code translate="no" class="notranslate text-nowrap">state</code> to the <code translate="no" class="notranslate text-nowrap">state</code> prop of the\nfeedback helper, or set the <code translate="no" class="notranslate text-nowrap">was-validated</code> class on a parent element (such as a form). See the\n<strong>Validation</strong> section below for additional details.</p>\n<p>Use the optional Boolean prop <code translate="no" class="notranslate text-nowrap">tooltip</code> to change the display from a block to a static tooltip\nstyle. The feedback will typically appear below the form control. When this mode is enabled, it is\nimportant that the parent container have a <code translate="no" class="notranslate text-nowrap">position: relative:</code> css style (or <code translate="no" class="notranslate text-nowrap">position-relative</code>\nclass). Note that tooltip style feedback may, since it&#39;s positioning is static, obscure other\ninputs, labels, etc.</p>\n<p><strong>Note:</strong> Some form controls, such as\n<a href="/docs/components/form-radio#contextual-states" class="font-weight-bold"><code translate="no" class="notranslate text-nowrap">&lt;b-form-radio&gt;</code></a>,\n<a href="/docs/components/form-checkbox#contextual-states" class="font-weight-bold"><code translate="no" class="notranslate text-nowrap">&lt;b-form-checkbox&gt;</code></a>, and\n<a href="/docs/components/form-file" class="font-weight-bold"><code translate="no" class="notranslate text-nowrap">&lt;b-form-file&gt;</code></a> have wrapper elements which will prevent the feedback\ntext from automatically showing (as the feedback component is not a direct sibling of the form\ncontrol&#39;s input). Use the feedback component&#39;s <code translate="no" class="notranslate text-nowrap">state</code> prop (bound to the state of the form control)\nor the <code translate="no" class="notranslate text-nowrap">force-show</code> prop to display the feedback.</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-form</span>  @<span class="hljs-attr">submit.stop.prevent</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"feedback-user"</span>&gt;</span>User ID<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"userId"</span> <span class="hljs-attr">:state</span>=<span class="hljs-string">"validation"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"feedback-user"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-input</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-form-invalid-feedback</span> <span class="hljs-attr">:state</span>=<span class="hljs-string">"validation"</span>&gt;</span>\n        Your user ID must be 5-12 characters long.\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-form-invalid-feedback</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-form-valid-feedback</span> <span class="hljs-attr">:state</span>=<span class="hljs-string">"validation"</span>&gt;</span>\n        Looks Good.\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-form-valid-feedback</span>&gt;</span>\n     <span class="hljs-tag">&lt;/<span class="hljs-name">b-form</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    data() {\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">userId</span>: <span class="hljs-string">\'\'</span>\n      }\n    },\n    <span class="hljs-attr">computed</span>: {\n      validation() {\n        <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.userId.length &gt; <span class="hljs-number">4</span> &amp;&amp; <span class="hljs-keyword">this</span>.userId.length &lt; <span class="hljs-number">13</span>\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-form-feedback-example.vue --&gt;</span></pre><h3 id="datalist-helper"><span class="bd-content-title">Datalist helper<a class="anchorjs-link" href="#datalist-helper" aria-label="Anchor"></a></span></h3>\n<p>For browsers that support\n<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist" target="_blank" rel="noopener"><code translate="no" class="notranslate text-nowrap">&lt;datalist&gt;</code></a> elements, the\n<code translate="no" class="notranslate text-nowrap">&lt;b-form-datalist&gt;</code> helper component will allow you to quickly create a <code translate="no" class="notranslate text-nowrap">&lt;datalist&gt;</code> and child\n<code translate="no" class="notranslate text-nowrap">&lt;option&gt;</code> elements via an array passed to the <code translate="no" class="notranslate text-nowrap">options</code> prop.</p>\n<p>You may also manually provide <code translate="no" class="notranslate text-nowrap">&lt;option&gt;</code> elements inside <code translate="no" class="notranslate text-nowrap">&lt;b-form-datalist&gt;</code>. They will appear below\nany <code translate="no" class="notranslate text-nowrap">&lt;option&gt;</code> elements generated from the <code translate="no" class="notranslate text-nowrap">options</code> prop.</p>\n<pre class="hljs html text-monospace p-2 notranslate" translate="no"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"input-with-list"</span>&gt;</span>Input with datalist<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-form-input</span> <span class="hljs-attr">list</span>=<span class="hljs-string">"input-list"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"input-with-list"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-form-input</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-form-datalist</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"input-list"</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">"options"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-form-datalist</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  data() {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">options</span>: [<span class="hljs-string">\'Apple\'</span>, <span class="hljs-string">\'Banana\'</span>, <span class="hljs-string">\'Grape\'</span>, <span class="hljs-string">\'Kiwi\'</span>, <span class="hljs-string">\'Orange\'</span>]\n    }\n  }\n}\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-form-datalist-example.vue --&gt;</span></pre><p><code translate="no" class="notranslate text-nowrap">&lt;b-form-datalist&gt;</code> is also available via the shorter alias of <code translate="no" class="notranslate text-nowrap">&lt;b-datalist&gt;</code>.</p>\n<p>See also:</p>\n<ul>\n<li><a href="/docs/components/form-input#datalist-support" class="font-weight-bold"><code translate="no" class="notranslate text-nowrap">&lt;b-form-input&gt; datalist</code></a> for datalist usage.</li>\n<li><a href="/docs/components/form-select#options-property" class="font-weight-bold"><code translate="no" class="notranslate text-nowrap">&lt;b-form-select&gt; options</code></a> for more information on\nthe <code translate="no" class="notranslate text-nowrap">options</code> array format.</li>\n</ul>\n<h2 id="validation"><span class="bd-content-title">Validation<a class="anchorjs-link" href="#validation" aria-label="Anchor"></a></span></h2>\n<p>Disable browser native HTML5 validation by setting the <code translate="no" class="notranslate text-nowrap">novalidate</code> prop to true on <code translate="no" class="notranslate text-nowrap">&lt;b-form&gt;</code>.</p>\n<p>Set the <code translate="no" class="notranslate text-nowrap">validated</code> prop, on <code translate="no" class="notranslate text-nowrap">&lt;b-form&gt;</code>, to <code translate="no" class="notranslate text-nowrap">true</code> to add the Bootstrap v4 <code translate="no" class="notranslate text-nowrap">.was-validated</code> class to\nthe form to trigger validation states</p>\n<p>All of the form controls support a <code translate="no" class="notranslate text-nowrap">state</code> prop, which can be used to set the form control into one\nof three contextual states:</p>\n<ul>\n<li>Setting <code translate="no" class="notranslate text-nowrap">state</code> to <code translate="no" class="notranslate text-nowrap">false</code> (or the string <code translate="no" class="notranslate text-nowrap">&#39;invalid&#39;</code>) is great for when there&#39;s a blocking or\nrequired field. A user must fill in this field properly to submit the form.</li>\n<li>Setting <code translate="no" class="notranslate text-nowrap">state</code> to <code translate="no" class="notranslate text-nowrap">true</code> (or the string <code translate="no" class="notranslate text-nowrap">&#39;valid&#39;</code>) is ideal for situations when you have\nper-field validation throughout a form and want to encourage a user through the rest of the\nfields.</li>\n<li>Setting <code translate="no" class="notranslate text-nowrap">state</code> to <code translate="no" class="notranslate text-nowrap">null</code> Displays no validation state.</li>\n</ul>\n<p>Refer to the\n<a href="https://getbootstrap.com/docs/4.3/components/forms/#validation" target="_blank" rel="noopener">Bootstrap v4 Form Validation Documentation</a>\nfor details on the new Bootstrap v4 validation states.</p>\n<h3 id="validation-mechanisms"><span class="bd-content-title">Validation mechanisms<a class="anchorjs-link" href="#validation-mechanisms" aria-label="Anchor"></a></span></h3>\n<p>Documentation and examples (hopefully) coming soon.</p>\n<p>Please see the following references:</p>\n<ul>\n<li><a href="https://getbootstrap.com/docs/4.3/components/forms/#validation" target="_blank" rel="noopener">Bootstrap v4: Form Validation Documentation</a></li>\n<li><a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation#Validating_forms_using_JavaScript" target="_blank" rel="noopener">MDN: Learn Form Validation - Using JavaScript API</a></li>\n<li><a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation" target="_blank" rel="noopener">MDN: HTML5 Constraint Validation</a></li>\n<li><a href="https://developer.mozilla.org/en-US/docs/Web/API/ValidityState" target="_blank" rel="noopener">MDN: Validity State API</a></li>\n</ul>\n\x3c!-- Component reference added automatically from component package.json --\x3e\n'}}]);