import{_ as e,c as o,o as t,V as i}from"./chunks/framework.B6c1f-8R.js";const f=JSON.parse('{"title":"Public and Private Blockchains","description":"","frontmatter":{},"headers":[],"relativePath":"guide/configure/modes.md","filePath":"guide/configure/modes.md","lastUpdated":1726041441000}'),a={name:"guide/configure/modes.md"},s=i('<h1 id="public-and-private-blockchains" tabindex="-1">Public and Private Blockchains <a class="header-anchor" href="#public-and-private-blockchains" aria-label="Permalink to &quot;Public and Private Blockchains&quot;">​</a></h1><p>Iroha can be ran in a variety of configurations. As the administrator of your own network, you can use different permission sets to decide what criteria must be met in order for some transaction to be accepted.</p><p>We provide two major sets of permissions: called a <em>private</em> and <em>public</em> permission sets. These need to be added into the <code>genesis.json</code> before you start an Iroha peer.</p><p>Below we outline the major differences in these two use cases.</p><h2 id="permissions" tabindex="-1">Permissions <a class="header-anchor" href="#permissions" aria-label="Permalink to &quot;Permissions&quot;">​</a></h2><p>In a <em>public</em> blockchain, most accounts have the same set of permissions. In a <em>private</em> blockchain, most accounts are assumed not to be able to do anything outside of their own account or domain unless explicitly granted said permission.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Refer to the <a href="/iroha-2-docs/guide/blockchain/permissions.html">dedicated section on permissions</a> for more details.</p></div><h2 id="peers" tabindex="-1">Peers <a class="header-anchor" href="#peers" aria-label="Permalink to &quot;Peers&quot;">​</a></h2><p>Any peer can join a <em>public</em> blockchain. For a <em>private</em> blockchain, automatic discovery of peers is turned off.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Refer to <a href="./peer-management.html">peer management</a> for more details.</p></div><h2 id="registering-accounts" tabindex="-1">Registering accounts <a class="header-anchor" href="#registering-accounts" aria-label="Permalink to &quot;Registering accounts&quot;">​</a></h2><p>Depending on how you decide to set up your <a href="./genesis.html">genesis block (<code>genesis.json</code>)</a>, the process for registering an account might go one of two ways. To understand why, let&#39;s talk about permission first.</p><p>By default, Iroha allows <strong>all</strong> instructions to go through, until a permission validator that can restrict instruction execution has been registered. You can add permission validators to your genesis block by registering built-in <a href="/iroha-2-docs/guide/blockchain/permissions.html">permission tokens</a> that we thought would be useful for <code>private</code> and <code>public</code> blockchain use-cases. However, in that case, the process of registering accounts is different.</p><p>When it comes to registering accounts, public and private blockchain have the following differences:</p><ul><li><p>In a <em>public</em> blockchain, anyone should be able to register an account<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup>. So, in theory, all that you need is a suitable client, a way to generate a private key of a suitable type (<code>ED25519</code>), and that&#39;s it.</p></li><li><p>In a <em>private</em> blockchain, you can have <em>any</em> process for setting up an account: it could be that the registering instruction has to be submitted by a specific account, or by a smart contract that asks for other details. It could be that in a private blockchain registering new accounts is only possible on specific dates, or limited by a non-mintable (finite) token.</p></li><li><p>In a <em>typical</em> private blockchain, i.e. a blockchain without any unique processes for registering accounts, you need an account to register another account.</p></li></ul><p>Built-in permission validators for private blockchains cover the `<em>typical</em> private blockchain use-case.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>As of writing, the set of public blockchain permissions is incomplete, and as such Iroha source code needs to be modified to run it in the <em>public</em> mode.</p></div><p>Refer to the section on <a href="/iroha-2-docs/guide/blockchain/instructions.html#un-register">instructions</a> for more details about <code>Register&lt;Account&gt;</code> instructions.</p><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="fn1" class="footnote-item"><p>In fact, once we have finished with our key-centric address scheme for accounts, you don&#39;t register an account as much as claim it. <a href="#fnref1" class="footnote-backref">↩︎</a></p></li></ol></section>',20),n=[s];function c(r,l,d,u,h,p){return t(),o("div",null,n)}const b=e(a,[["render",c]]);export{f as __pageData,b as default};
