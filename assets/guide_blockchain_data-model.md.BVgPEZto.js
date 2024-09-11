import{_ as e,E as s,c as n,m as i,J as t,V as d,o}from"./chunks/framework.B6c1f-8R.js";const b=JSON.parse('{"title":"Data Model","description":"","frontmatter":{},"headers":[],"relativePath":"guide/blockchain/data-model.md","filePath":"guide/blockchain/data-model.md","lastUpdated":1726041441000}'),r={name:"guide/blockchain/data-model.md"},c=d(`<h1 id="data-model" tabindex="-1" data-v-9d8444a3>Data Model <a class="header-anchor" href="#data-model" aria-label="Permalink to &quot;Data Model&quot;" data-v-9d8444a3>​</a></h1><p data-v-9d8444a3>In language-specific guides we already walked you through registering domains, accounts, and assets. Here we merely wish to illustrate the relationship between various objects in the blockchain.</p><div class="language- vp-adaptive-theme" data-v-9d8444a3><button title="Copy Code" class="copy" data-v-9d8444a3></button><span class="lang" data-v-9d8444a3></span><pre class="shiki shiki-themes github-light github-dark vp-code" data-v-9d8444a3><code data-v-9d8444a3><span class="line" data-v-9d8444a3><span data-v-9d8444a3></span></span>
<span class="line" data-v-9d8444a3><span data-v-9d8444a3>   +-----------------------------------------------+</span></span>
<span class="line" data-v-9d8444a3><span data-v-9d8444a3>   |                                               |</span></span>
<span class="line" data-v-9d8444a3><span data-v-9d8444a3>   |     +-----------------+                       |</span></span>
<span class="line" data-v-9d8444a3><span data-v-9d8444a3>   |     |Domain           |                       |</span></span>
<span class="line" data-v-9d8444a3><span data-v-9d8444a3>   |     +--------------+  |                       |</span></span>
<span class="line" data-v-9d8444a3><span data-v-9d8444a3>   |     ||Asset        |  |                       |</span></span>
<span class="line" data-v-9d8444a3><span data-v-9d8444a3>+--+--+  ||Definition(s)|  |                       |</span></span>
<span class="line" data-v-9d8444a3><span data-v-9d8444a3>|World|  +--------------+  |                       |</span></span>
<span class="line" data-v-9d8444a3><span data-v-9d8444a3>+--+--+  |                 |                       |</span></span>
<span class="line" data-v-9d8444a3><span data-v-9d8444a3>   |     +------------+    |                       |</span></span>
<span class="line" data-v-9d8444a3><span data-v-9d8444a3>   |     ||Account(s)||    | has   +-----------+   |</span></span>
<span class="line" data-v-9d8444a3><span data-v-9d8444a3>   |     |-------------------------&gt;Signatories|   |</span></span>
<span class="line" data-v-9d8444a3><span data-v-9d8444a3>   |     +-----------------+       +-----------+   |</span></span>
<span class="line" data-v-9d8444a3><span data-v-9d8444a3>   |                       |                       |</span></span>
<span class="line" data-v-9d8444a3><span data-v-9d8444a3>   |                       |  has  +--------+      |</span></span>
<span class="line" data-v-9d8444a3><span data-v-9d8444a3>   |                       +-------&gt;Asset(s)|      |</span></span>
<span class="line" data-v-9d8444a3><span data-v-9d8444a3>   |                               +--------+      |</span></span>
<span class="line" data-v-9d8444a3><span data-v-9d8444a3>   +-----------------------------------------------+</span></span></code></pre></div><p data-v-9d8444a3>The following example shows the relationship between domains, accounts, and assets.</p>`,4),l={class:"domains-example-scope"},p=d('<details class="details custom-block" data-v-9d8444a3><summary data-v-9d8444a3>Language-specific guides to register these objects</summary><table data-v-9d8444a3><thead data-v-9d8444a3><tr data-v-9d8444a3><th data-v-9d8444a3>Language</th><th data-v-9d8444a3>Guide</th></tr></thead><tbody data-v-9d8444a3><tr data-v-9d8444a3><td data-v-9d8444a3>CLI</td><td data-v-9d8444a3>Register a <a href="/iroha-2-docs/guide/get-started/operate-iroha-2-via-cli.html#_3-register-a-domain" data-v-9d8444a3>domain</a>, an <a href="/iroha-2-docs/guide/get-started/operate-iroha-2-via-cli.html#_4-register-an-account" data-v-9d8444a3>account</a>, an <a href="/iroha-2-docs/guide/get-started/operate-iroha-2-via-cli.html#_6-register-and-mint-assets" data-v-9d8444a3>asset</a></td></tr><tr data-v-9d8444a3><td data-v-9d8444a3>Rust</td><td data-v-9d8444a3>Register a <a href="/iroha-2-docs/guide/get-started/rust.html#_3-registering-a-domain" data-v-9d8444a3>domain</a>, an <a href="/iroha-2-docs/guide/get-started/rust.html#_4-registering-an-account" data-v-9d8444a3>account</a>, an <a href="/iroha-2-docs/guide/get-started/rust.html#_5-registering-and-minting-assets" data-v-9d8444a3>asset</a></td></tr><tr data-v-9d8444a3><td data-v-9d8444a3>Kotlin/Java</td><td data-v-9d8444a3>Register a <a href="/iroha-2-docs/guide/get-started/kotlin-java.html#_3-querying-and-registering-domains" data-v-9d8444a3>domain</a>, an <a href="/iroha-2-docs/guide/get-started/kotlin-java.html#_4-registering-an-account" data-v-9d8444a3>account</a>, an <a href="/iroha-2-docs/guide/get-started/kotlin-java.html#_5-registering-and-minting-assets" data-v-9d8444a3>asset</a></td></tr><tr data-v-9d8444a3><td data-v-9d8444a3>Python</td><td data-v-9d8444a3>Register a <a href="/iroha-2-docs/guide/get-started/python.html#_3-registering-a-domain" data-v-9d8444a3>domain</a>, an <a href="/iroha-2-docs/guide/get-started/python.html#_4-registering-an-account" data-v-9d8444a3>account</a>, an <a href="/iroha-2-docs/guide/get-started/python.html#_5-registering-and-minting-assets" data-v-9d8444a3>asset</a></td></tr><tr data-v-9d8444a3><td data-v-9d8444a3>JavaScript/TypeScript</td><td data-v-9d8444a3>Register a <a href="/iroha-2-docs/guide/get-started/javascript.html#_3-registering-a-domain" data-v-9d8444a3>domain</a>, an <a href="/iroha-2-docs/guide/get-started/javascript.html#_4-registering-an-account" data-v-9d8444a3>account</a>, an <a href="/iroha-2-docs/guide/get-started/javascript.html#_5-registering-and-minting-assets" data-v-9d8444a3>asset</a></td></tr></tbody></table></details><p data-v-9d8444a3>The diagram below provides a more detailed illustration of the relationship between domains, accounts, and assets in the blockchain. You can learn more about <a href="./permissions.html" data-v-9d8444a3>permissions and roles</a> and <a href="./metadata.html" data-v-9d8444a3>metadata</a> in the corresponding sections. The asset structure is illustrated in a <a href="./assets.html" data-v-9d8444a3>dedicated chapter</a>.</p>',2);function A(v,g,h,m,u,_){const a=s("MermaidRenderWrap");return o(),n("div",null,[c,i("div",l,[t(a,{id:"mermaid_64b197bdaace931806f4329f68663c9a8c80858f31e40d2ebba2122ea46778c3d097a1942b854c14a7221d95be1bee95e77925bdcd094a656409f42a381c3bf7",text:"classDiagram%0A%0Aclass%20domain_wonderland%20%7B%0A%20%20id%20%3D%20%22wonderland%22%0A%7D%0Aclass%20account_alice%3A%3A%3Aaliceblue%20%7B%0A%20%20id%20%3D%20%22alice%40wonderland%22%0A%7D%0Aclass%20account_mad_hatter%3A%3A%3Aaliceblue%20%7B%0A%20%20id%20%3D%20%22mad_hatter%40wonderland%22%0A%7D%0A%0Aclass%20asset_rose%3A%3A%3Apink%20%7B%0A%20%20id%20%3D%20%22rose%23wonderland%22%0A%7D%0A%0Adomain_wonderland%20*--%20account_alice%20%3A%20registered%20in%0Adomain_wonderland%20*--%20asset_rose%20%3A%20registered%20in%0Aaccount_alice%20*--%20asset_rose%20%3A%20registered%20by%0Adomain_wonderland%20*--%20account_mad_hatter%20%3A%20registered%20in%0A%0Aclass%20domain_looking_glass%20%7B%0A%20%20id%20%3D%20%22looking_glass%22%0A%7D%0A%0Aclass%20account_rabbit%3A%3A%3Aaliceblue%20%7B%0A%20%20id%20%3D%20%22white_rabbit%40looking_glass%22%0A%7D%0A%0Adomain_looking_glass%20*--%20account_rabbit%20%3A%20registered%20in"})]),p,t(a,{id:"mermaid_2f20c1df6224dadf81d23a1a43dbb7e72a27090b7ef9cc03c1b0fdd9b6d843ff1140d32332b2f72dcf65fe3d4803afc3d28bbcc35e6ff26c72c8e605c8988cc0",text:"classDiagram%0A%0Aclass%20Domain%0Aclass%20Account%0Aclass%20AssetDefinition%0Aclass%20Asset%0A%0ADomain%20*--%20%22many%22%20Account%20%3A%20contains%0ADomain%20*--%20%22many%22%20AssetDefinition%20%3A%20contains%0AAccount%20*--%20%22many%22%20Asset%20%3A%20contains%0AAsset%20--%20AssetDefinition%0A%0ADomain%20%3A%20id%0ADomain%20%3A%20accounts%0ADomain%20%3A%20asset_definitions%0ADomain%20%3A%20logo%0ADomain%20%3A%20metadata%0A%0AAccount%20%3A%20id%0AAccount%20%3A%20assets%0AAccount%20%3A%20signatories%0AAccount%20%3A%20signature_check_condition%0AAccount%20%3A%20metadata%0AAccount%20%3A%20roles%0A%0A%0AAssetDefinition%20%3A%20id%0AAssetDefinition%20%3A%20value_type%0AAssetDefinition%20%3A%20mintable%0AAssetDefinition%20%3A%20metadata%0A%0AAsset%20%3A%20id%0AAsset%20%3A%20value"})])}const D=e(r,[["render",A],["__scopeId","data-v-9d8444a3"]]);export{b as __pageData,D as default};
