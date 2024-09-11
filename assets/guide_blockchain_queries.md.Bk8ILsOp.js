import{c as i,o as s,V as a}from"./chunks/framework.B6c1f-8R.js";const e=a(`<h1 id="queries" tabindex="-1">Queries <a class="header-anchor" href="#queries" aria-label="Permalink to &quot;Queries&quot;">​</a></h1><p>Although much of the information about the state of the blockchain can be obtained, as we&#39;ve shown before, using an event subscriber and a filter to narrow the scope of the events to those of interest, sometimes you need to take a more direct approach. Enter <em>queries</em>.</p><p>Queries are small instruction-like objects that, when sent to an Iroha peer, prompt a response with details from the current world state view.</p><p>This is not necessarily the only kind of information that is available on the network, but it&#39;s the only kind of information that is <em>guaranteed</em> to be accessible on all networks.</p><p>For each deployment of Iroha, there might be other available information. For example, the availability of telemetry data is up to the network administrators. It&#39;s entirely their decision whether or not they want to allocate processing power to track the work instead of using it to do the actual work. By contrast, some functions are always required, e.g. having access to your account balance.</p><p>The results of queries can be <a href="#sorting">sorted</a>, <a href="#pagination">paginated</a> and <a href="#filters">filtered</a> peer-side all at once. Sorting is done lexicographically on metadata keys. Filtering can be done on a variety of principles, from domain-specific (individual IP address filter masks) to sub-string methods like <code>begins_with</code> combined using logical operations.</p><h2 id="create-a-query" tabindex="-1">Create a query <a class="header-anchor" href="#create-a-query" aria-label="Permalink to &quot;Create a query&quot;">​</a></h2><p>Use <code>QueryBox</code> to construct a query. For example, a query to find all accounts would be created like this:</p><div class="language-rust vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">rust</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> query </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> QueryBox</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">FindAllAccounts</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">FindAllAccounts</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {});</span></span></code></pre></div><p>Here is an example of a query that finds Alice&#39;s assets:</p><div class="language-rust vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">rust</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> alice_id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    AccountId</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">from_str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;alice@wonderland&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> query </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> QueryBox</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">FindAssetsByAccountId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    FindAssetsByAccountId</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(alice_id)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  );</span></span></code></pre></div><h2 id="pagination" tabindex="-1">Pagination <a class="header-anchor" href="#pagination" aria-label="Permalink to &quot;Pagination&quot;">​</a></h2><p>For both a <code>Vec&lt;Z&gt;</code> and just <code>Z</code> as the return type, you can use <code>client.request(query)</code> to submit a query and get the full result in one go.</p><p>However, some queries, particularly the ones with &quot;All&quot; in their names, can return exorbitant amounts of data. As such, we highly recommend you consider <em>pagination</em> to reduce the load on the system.</p><p>To construct a <code>Pagination</code>, you need to call <code>client.request_with_pagination(query, pagination)</code>, where the <code>pagination</code> is constructed as follows:</p><div class="language-rust vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">rust</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> starting_result</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> u32</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> limit</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> u32</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pagination </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Pagination</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Some</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(starting_result), </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Some</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(limit));</span></span></code></pre></div><h2 id="filters" tabindex="-1">Filters <a class="header-anchor" href="#filters" aria-label="Permalink to &quot;Filters&quot;">​</a></h2><p>When you create a query, you can use a filter to only return the results that match the specified filter.</p><h2 id="sorting" tabindex="-1">Sorting <a class="header-anchor" href="#sorting" aria-label="Permalink to &quot;Sorting&quot;">​</a></h2><p>Iroha 2 can sort items with <a href="/iroha-2-docs/guide/blockchain/metadata.html">metadata</a> lexicographically if you provide a key to sort by during the construction of the query. A typical use case is for accounts to have a <code>registered-on</code> metadata entry, which, when sorted, allows you to view the account registration history.</p><p>Sorting only applies to entities that have <a href="/iroha-2-docs/guide/blockchain/metadata.html">metadata</a>, as the metadata key is used to sort query results.</p><p>You can combine sorting with pagination and filters. Note that sorting is an optional feature, most queries with pagination won&#39;t need it.</p><h2 id="reference" tabindex="-1">Reference <a class="header-anchor" href="#reference" aria-label="Permalink to &quot;Reference&quot;">​</a></h2><p>Check the <a href="/iroha-2-docs/reference/queries.html">list of existing queries</a> for detailed information about them.</p>`,24),t=[e],p=JSON.parse('{"title":"Queries","description":"","frontmatter":{},"headers":[],"relativePath":"guide/blockchain/queries.md","filePath":"guide/blockchain/queries.md","lastUpdated":1726041441000}'),n={name:"guide/blockchain/queries.md"},d=Object.assign(n,{setup(h){return(r,l)=>(s(),i("div",null,t))}});export{p as __pageData,d as default};
