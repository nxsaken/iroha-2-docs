import{_ as n,E as o,c as l,m as e,J as s,V as i,a as t,o as r}from"./chunks/framework.B6c1f-8R.js";const Z=JSON.parse('{"title":"Queries","description":"","frontmatter":{},"headers":[],"relativePath":"reference/queries.md","filePath":"reference/queries.md","lastUpdated":1726041441000}'),d={name:"reference/queries.md"},c=i('<h1 id="queries" tabindex="-1">Queries <a class="header-anchor" href="#queries" aria-label="Permalink to &quot;Queries&quot;">​</a></h1><p>In the following section we mirror the module structure of the queries and present to you what they do. You can learn</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>The results of queries can be <a href="/iroha-2-docs/guide/blockchain/queries.html#sorting">sorted</a>, <a href="/iroha-2-docs/guide/blockchain/queries.html#pagination">paginated</a> and <a href="/iroha-2-docs/guide/blockchain/queries.html#filters">filtered</a> peer-side all at once.</p></div><h2 id="conventions" tabindex="-1">Conventions <a class="header-anchor" href="#conventions" aria-label="Permalink to &quot;Conventions&quot;">​</a></h2><details class="details custom-block"><summary>Expand to learn about the conventions used in the descriptions below</summary><ol><li><p>In the <strong>Details</strong> section of each query, we use <em>gets</em>, <em>returns</em>, <em>searches</em> with the following precise meanings:</p><table><thead><tr><th>Notation</th><th>Meaning</th></tr></thead><tbody><tr><td><em>gets</em></td><td>The query already has the data readily available and the data is trivial. Use these queries at will.</td></tr><tr><td><em>returns</em> or <em>finds</em></td><td>The query has the data readily available, just as with <em>gets</em>, but the data is not trivial. You can still use these queries, but be mindful of the performance impact.</td></tr><tr><td><em>searches</em></td><td>For this query, the data must be actively collected and neither the return type nor the collection process is cheap. Use with great care.</td></tr></tbody></table></li><li><p>The queries are provided with just one data type as input, and parameterised by the type of the output.</p></li><li><p>For the <code>FindZByXAndY</code> queries, their descriptions have a <strong>Parameters</strong> and a <strong>Returns</strong> section. The parameters can either be single or multiple types, while the output is almost always either one type, or a <code>Vec&lt;Type&gt;</code> kind of construction:</p><table><thead><tr><th>Notation</th><th>Meaning</th></tr></thead><tbody><tr><td><strong>Parameters</strong>: <code>(X, Y)</code></td><td>In Rust source code, you need to construct the query as <code>let query = FindZByXAndY::new(x: X, y: Y);</code>, where <code>x</code> and <code>y</code> are variables of type <code>X</code> and <code>Y</code> respectively. In the reference below we provide you with information about each type.</td></tr><tr><td><strong>Returns</strong>: <code>Vec&lt;Z&gt;</code></td><td>The return value is a collection of more than one element of type <code>Z</code>. Depending on the SDK implementation this can be a type native to the language (e.g. JavaScript) or a thin wrapper around the Rust Vec structure.</td></tr></tbody></table></li></ol></details><h2 id="role" tabindex="-1">Role <a class="header-anchor" href="#role" aria-label="Permalink to &quot;Role&quot;">​</a></h2><p>An optional feature. By default, it is present on all Iroha 2 deployments when they&#39;re compiled in the private blockchain configuration.</p><p>You can learn more about roles in a <a href="/iroha-2-docs/guide/blockchain/permissions.html#permission-groups-roles">dedicated section</a>.</p><h3 id="findallroles" tabindex="-1"><code>FindAllRoles</code> <a class="header-anchor" href="#findallroles" aria-label="Permalink to &quot;`FindAllRoles`&quot;">​</a></h3>',9),h=e("li",null,[e("p",null,[e("strong",null,"Returns"),t(": "),e("code",null,"Vec<Roles>")])],-1),u=e("p",null,[e("strong",null,"Details"),t(": Returns all roles registered as "),e("em",null,"global"),t(" (as opposed to "),e("em",null,"domain-scoped"),t(") in the blockchain.")],-1),p=i('<h3 id="findallroleids" tabindex="-1"><code>FindAllRoleIds</code> <a class="header-anchor" href="#findallroleids" aria-label="Permalink to &quot;`FindAllRoleIds`&quot;">​</a></h3><ul><li><p><strong>Returns</strong>: <code>Vec&lt;Roles&gt;</code></p></li><li><p><strong>Details</strong>: Returns IDs of all the roles registered as <em>global</em> (as opposed to <em>domain-scoped</em>) in the blockchain.</p><p>Note that it does not return its values, which contain permission tokens, only IDs.</p></li></ul><h3 id="findrolebyroleid" tabindex="-1"><code>FindRoleByRoleId</code> <a class="header-anchor" href="#findrolebyroleid" aria-label="Permalink to &quot;`FindRoleByRoleId`&quot;">​</a></h3><ul><li><p><strong>Parameters</strong>: <code>RoleId</code></p></li><li><p><strong>Returns</strong>: <code>Vec&lt;Roles&gt;</code></p></li><li><p><strong>Details</strong>: Returns the role that has the provided role ID.</p><p>For example, given the name of the role <code>admin</code>, it will return all of the <code>admin</code>-level permission tokens.</p></li></ul><h3 id="findrolesbyaccountid" tabindex="-1"><code>FindRolesByAccountId</code> <a class="header-anchor" href="#findrolesbyaccountid" aria-label="Permalink to &quot;`FindRolesByAccountId`&quot;">​</a></h3><ul><li><p><strong>Parameters</strong>: <code>AccountId</code></p></li><li><p><strong>Returns</strong>: <code>Vec&lt;RoleId&gt;</code></p></li><li><p><strong>Details</strong>: Returns all of the role IDs that are attached to the given account.</p><p>Note that unlike <a href="#findallroles"><code>FindAllRoles</code></a>, it does not return the roles themselves.</p></li></ul><h2 id="permission" tabindex="-1">Permission <a class="header-anchor" href="#permission" aria-label="Permalink to &quot;Permission&quot;">​</a></h2><p>A semi-optional feature. You have permissions in both public and private blockchains but the use cases are different:</p><ul><li>In a public blockchain, most accounts have the same common-sense permissions.</li><li>In a private blockchain, most accounts are assumed not to be able to do anything outside of their own account or domain unless explicitly granted said permission.</li></ul><p>We talk about permissions in more detail in a <a href="/iroha-2-docs/guide/blockchain/permissions.html">dedicated chapter</a>.</p><h3 id="findallpermissiontokendefinitions" tabindex="-1"><code>FindAllPermissionTokenDefinitions</code> <a class="header-anchor" href="#findallpermissiontokendefinitions" aria-label="Permalink to &quot;`FindAllPermissionTokenDefinitions`&quot;">​</a></h3><ul><li><p><strong>Returns</strong>: <code>Vec&lt;PermissionTokenDefinition&gt;</code></p></li><li><p><strong>Details</strong>: Finds all registered permission token definitions.</p></li></ul><h3 id="findpermissiontokensbyaccountid" tabindex="-1"><code>FindPermissionTokensByAccountId</code> <a class="header-anchor" href="#findpermissiontokensbyaccountid" aria-label="Permalink to &quot;`FindPermissionTokensByAccountId`&quot;">​</a></h3><ul><li><p><strong>Parameters</strong>: <code>AccountId</code></p></li><li><p><strong>Returns</strong>: <code>Vec&lt;PermissionToken&gt;</code></p></li><li><p><strong>Details</strong>: Returns all of the permission tokens granted to the specified account.</p></li></ul><h2 id="account" tabindex="-1">Account <a class="header-anchor" href="#account" aria-label="Permalink to &quot;Account&quot;">​</a></h2><p>Most queries in Iroha pertain to accounts. At the moment this is the most diverse set of queries.</p><h3 id="findallaccounts" tabindex="-1"><code>FindAllAccounts</code> <a class="header-anchor" href="#findallaccounts" aria-label="Permalink to &quot;`FindAllAccounts`&quot;">​</a></h3>',17),g=e("li",null,[e("p",null,[e("strong",null,"Returns"),t(": "),e("code",null,"Vec<Account>")])],-1),m=e("p",null,[e("strong",null,"Details"),t(": Finds all accounts registered globally in the blockchain.")],-1),k=i('<h3 id="findaccountbyid" tabindex="-1"><code>FindAccountById</code> <a class="header-anchor" href="#findaccountbyid" aria-label="Permalink to &quot;`FindAccountById`&quot;">​</a></h3><ul><li><p><strong>Parameters</strong>: <code>AccountId</code></p></li><li><p><strong>Returns</strong>: <code>Account</code></p></li><li><p><strong>Details</strong>: Returns the full account information corresponding to the given <code>AccountId</code>.</p></li></ul><h3 id="findaccountkeyvaluebyidandkey" tabindex="-1"><code>FindAccountKeyValueByIdAndKey</code> <a class="header-anchor" href="#findaccountkeyvaluebyidandkey" aria-label="Permalink to &quot;`FindAccountKeyValueByIdAndKey`&quot;">​</a></h3><ul><li><p><strong>Parameters</strong>: <code>(AccountId, Name)</code></p></li><li><p><strong>Returns</strong>: <code>Value</code></p></li><li><p><strong>Details</strong>: Returns the value keyed by the provided <code>Name</code> for the given account.</p><p>This is done by querying the <a href="/iroha-2-docs/guide/blockchain/metadata.html"><code>metadata</code></a> attached to the given account.</p></li></ul><h3 id="findaccountsbyname" tabindex="-1"><code>FindAccountsByName</code> <a class="header-anchor" href="#findaccountsbyname" aria-label="Permalink to &quot;`FindAccountsByName`&quot;">​</a></h3><ul><li><p><strong>Parameters</strong>: <code>Name</code></p></li><li><p><strong>Returns</strong>: <code>Vec&lt;Account&gt;</code></p></li><li><p><strong>Details</strong>: Returns all of the accounts that have the given <code>Name</code>.</p><p>This is particularly useful if you remember the name of the account, but do not, for example, recall the domain name in which it was registered.</p></li></ul><h3 id="findaccountsbydomainid" tabindex="-1"><code>FindAccountsByDomainId</code> <a class="header-anchor" href="#findaccountsbydomainid" aria-label="Permalink to &quot;`FindAccountsByDomainId`&quot;">​</a></h3>',7),y=e("li",null,[e("p",null,[e("strong",null,"Parameters"),t(": "),e("code",null,"DomainId")])],-1),f=e("li",null,[e("p",null,[e("strong",null,"Returns"),t(": "),e("code",null,"Vec<Account>")])],-1),b=e("p",null,[e("strong",null,"Details"),t(": Returns all accounts that belong to a specific domain.")],-1),_=e("p",null,[t("Note that this returns the full accounts and not the "),e("code",null,"AccountId"),t(" collection.")],-1),A=i('<h3 id="findaccountswithasset" tabindex="-1"><code>FindAccountsWithAsset</code> <a class="header-anchor" href="#findaccountswithasset" aria-label="Permalink to &quot;`FindAccountsWithAsset`&quot;">​</a></h3><ul><li><p><strong>Parameters</strong>: <code>AccountId</code></p></li><li><p><strong>Returns</strong>: <code>Vec&lt;Account&gt;</code></p></li><li><p><strong>Details</strong>: Returns all accounts that have the given asset.</p></li></ul><h2 id="asset" tabindex="-1">Asset <a class="header-anchor" href="#asset" aria-label="Permalink to &quot;Asset&quot;">​</a></h2><p>Assets include simple numbers, but also a special type of key-to-value map that is used as a secure data storage for privileged information.</p><h3 id="findallassets" tabindex="-1"><code>FindAllAssets</code> <a class="header-anchor" href="#findallassets" aria-label="Permalink to &quot;`FindAllAssets`&quot;">​</a></h3>',5),q=e("li",null,[e("p",null,[e("strong",null,"Returns"),t(": "),e("code",null,"Vec<Asset>")])],-1),F=e("p",null,[e("strong",null,"Details"),t(": Returns all known assets by value.")],-1),I=e("div",{class:"info custom-block"},[e("p",{class:"custom-block-title"},"INFO"),e("p",null,[t("You should note that this is not the same as "),e("code",null,"AssetDefinition"),t(". If you have one asset called e.g. "),e("code",null,"tea#wonderland"),t(" that belongs to every account on the blockchain, you will receive the aggregated value across all accounts, but not the information such as the type of the asset.")])],-1),T=e("h3",{id:"findallassetdefinitions",tabindex:"-1"},[e("code",null,"FindAllAssetDefinitions"),t(),e("a",{class:"header-anchor",href:"#findallassetdefinitions","aria-label":'Permalink to "`FindAllAssetDefinitions`"'},"​")],-1),P=e("li",null,[e("p",null,[e("strong",null,"Returns"),t(": "),e("code",null,"Vec<AssetDefinition>")])],-1),v=e("p",null,[e("strong",null,"Details"),t(": Returns all known asset definitions by value.")],-1),D=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"TIP"),e("p",null,"To reduce the load on the network, we store the definition of an asset separate from its instances. So if you want to know if an asset is mintable or what type is stored in it, you need to query the asset definition, rather than the asset itself.")],-1),R=i('<h3 id="findassetbyid" tabindex="-1"><code>FindAssetById</code> <a class="header-anchor" href="#findassetbyid" aria-label="Permalink to &quot;`FindAssetById`&quot;">​</a></h3><ul><li><p><strong>Parameters</strong>: <code>AssetId</code></p></li><li><p><strong>Returns</strong>: <code>Asset</code></p></li><li><p><strong>Details</strong>: Returns the aggregated data about the asset usage across the network.</p></li></ul><h3 id="findassetsbyname" tabindex="-1"><code>FindAssetsByName</code> <a class="header-anchor" href="#findassetsbyname" aria-label="Permalink to &quot;`FindAssetsByName`&quot;">​</a></h3><ul><li><p><strong>Parameters</strong>: <code>Name</code></p></li><li><p><strong>Returns</strong>: <code>Vec&lt;Asset&gt;</code></p></li><li><p><strong>Details</strong>: Searches the network for all assets that match the given name.</p></li></ul><h3 id="findassetsbyaccountid" tabindex="-1"><code>FindAssetsByAccountId</code> <a class="header-anchor" href="#findassetsbyaccountid" aria-label="Permalink to &quot;`FindAssetsByAccountId`&quot;">​</a></h3><ul><li><p><strong>Parameters</strong>: <code>AccountId</code></p></li><li><p><strong>Returns</strong>: <code>Vec&lt;Asset&gt;</code></p></li><li><p><strong>Details</strong>: Returns all of the assets that belong to a given account.</p></li></ul><h3 id="findassetsbyassetdefinitionid" tabindex="-1"><code>FindAssetsByAssetDefinitionId</code> <a class="header-anchor" href="#findassetsbyassetdefinitionid" aria-label="Permalink to &quot;`FindAssetsByAssetDefinitionId`&quot;">​</a></h3><ul><li><p><strong>Parameters</strong>: <code>AssetDefinitionId</code></p></li><li><p><strong>Returns</strong>: <code>Vec&lt;Asset&gt;</code></p></li><li><p><strong>Details</strong>: Searches for all of the assets that have the given definition ID.</p></li></ul>',8),E=i('<h3 id="findassetsbydomainid" tabindex="-1"><code>FindAssetsByDomainId</code> <a class="header-anchor" href="#findassetsbydomainid" aria-label="Permalink to &quot;`FindAssetsByDomainId`&quot;">​</a></h3><ul><li><p><strong>Parameters</strong>: <code>DomainId</code></p></li><li><p><strong>Returns</strong>: <code>Vec&lt;Asset&gt;</code></p></li><li><p><strong>Details</strong>: Returns all assets that are registered in the given domain.</p></li></ul>',2),B=i('<h3 id="findassetsbydomainidandassetdefinitionid" tabindex="-1"><code>FindAssetsByDomainIdAndAssetDefinitionId</code> <a class="header-anchor" href="#findassetsbydomainidandassetdefinitionid" aria-label="Permalink to &quot;`FindAssetsByDomainIdAndAssetDefinitionId`&quot;">​</a></h3><ul><li><p><strong>Parameters</strong>: <code>(DomainId, AssetDefinitionId)</code></p></li><li><p><strong>Returns</strong>: <code>Vec&lt;Asset&gt;</code></p></li><li><p><strong>Details</strong>: Searches the domain for assets that have the given definition ID.</p></li></ul><h3 id="findassetquantitybyid" tabindex="-1"><code>FindAssetQuantityById</code> <a class="header-anchor" href="#findassetquantitybyid" aria-label="Permalink to &quot;`FindAssetQuantityById`&quot;">​</a></h3><ul><li><p><strong>Parameters</strong>: <code>AssetId</code></p></li><li><p><strong>Returns</strong>: <code>NumericValue</code></p></li><li><p><strong>Details</strong>: Returns the asset quantity.</p><p>Note that this query assumes that the asset given by the identifier is of type <code>AssetValue::Quantity</code>.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This query can fail.</p></div></li></ul><h3 id="findassetkeyvaluebyidandkey" tabindex="-1"><code>FindAssetKeyValueByIdAndKey</code> <a class="header-anchor" href="#findassetkeyvaluebyidandkey" aria-label="Permalink to &quot;`FindAssetKeyValueByIdAndKey`&quot;">​</a></h3><ul><li><p><strong>Parameters</strong>: <code>(AssetId, Name)</code></p></li><li><p><strong>Returns</strong>: <code>Value</code></p></li><li><p><strong>Details</strong>: Gets the value keyed by the given name in the <a href="/iroha-2-docs/guide/blockchain/metadata.html">metadata</a> of the asset corresponding to the given identifier.</p></li></ul><h3 id="findassetdefinitionkeyvaluebyidandkey" tabindex="-1"><code>FindAssetDefinitionKeyValueByIdAndKey</code> <a class="header-anchor" href="#findassetdefinitionkeyvaluebyidandkey" aria-label="Permalink to &quot;`FindAssetDefinitionKeyValueByIdAndKey`&quot;">​</a></h3><ul><li><p><strong>Parameters</strong>: <code>(AssetDefinitionId, Name)</code></p></li><li><p><strong>Returns</strong>: <code>Value</code></p></li><li><p><strong>Details</strong>: Gets the value keyed by the given name in the <a href="/iroha-2-docs/guide/blockchain/metadata.html">metadata</a> of the asset definition corresponding to the given identifier.</p></li></ul><h3 id="findtotalassetquantitybyassetdefinitionid" tabindex="-1"><code>FindTotalAssetQuantityByAssetDefinitionId</code> <a class="header-anchor" href="#findtotalassetquantitybyassetdefinitionid" aria-label="Permalink to &quot;`FindTotalAssetQuantityByAssetDefinitionId`&quot;">​</a></h3><ul><li><p><strong>Parameters</strong>: <code>AssetDefinitionId</code></p></li><li><p><strong>Returns</strong>: <code>NumericValue</code></p></li><li><p><strong>Details</strong>: Finds the total asset quantity for the given asset definition. For the <code>Store</code> asset value, finds the sum of asset quantities through all accounts that hold the specified asset.</p></li></ul><h2 id="block" tabindex="-1">Block <a class="header-anchor" href="#block" aria-label="Permalink to &quot;Block&quot;">​</a></h2><h3 id="findallblocks" tabindex="-1"><code>FindAllBlocks</code> <a class="header-anchor" href="#findallblocks" aria-label="Permalink to &quot;`FindAllBlocks`&quot;">​</a></h3><ul><li><strong>Returns</strong>: <code>Vec&lt;VersionedCommittedBlock&gt;</code></li><li><strong>Details</strong>: Returns all blocks in the blockchain.</li></ul><h3 id="findallblockheaders" tabindex="-1"><code>FindAllBlockHeaders</code> <a class="header-anchor" href="#findallblockheaders" aria-label="Permalink to &quot;`FindAllBlockHeaders`&quot;">​</a></h3><ul><li><strong>Returns</strong>: <code>Vec&lt;BlockHeader&gt;</code></li><li><strong>Details</strong>: Returns all block headers for blocks in the blockchain.</li></ul><h3 id="findblockheaderbyhash" tabindex="-1"><code>FindBlockHeaderByHash</code> <a class="header-anchor" href="#findblockheaderbyhash" aria-label="Permalink to &quot;`FindBlockHeaderByHash`&quot;">​</a></h3><ul><li><strong>Parameters</strong>: <code>Hash</code></li><li><strong>Returns</strong>: <code>BlockHeader</code></li><li><strong>Details</strong>: Gets the block header that matches the hash that was provided.</li></ul><h2 id="domain" tabindex="-1">Domain <a class="header-anchor" href="#domain" aria-label="Permalink to &quot;Domain&quot;">​</a></h2><p>The domain is the basic unit of organisation in an Iroha blockchain. Accounts and assets must be registered inside a domain, triggers are usually scoped by domain, and most queries have the domain as a possible input.</p><h3 id="findalldomains" tabindex="-1"><code>FindAllDomains</code> <a class="header-anchor" href="#findalldomains" aria-label="Permalink to &quot;`FindAllDomains`&quot;">​</a></h3><ul><li><p><strong>Returns</strong>: <code>Vec&lt;Domain&gt;</code></p></li><li><p><strong>Details</strong>: Returns all of the known registered domains.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This query returns the full contents of the world state view as of execution. This query should be used sparingly and for debugging purposes only.</p></div></li></ul><h3 id="finddomainbyid" tabindex="-1"><code>FindDomainById</code> <a class="header-anchor" href="#finddomainbyid" aria-label="Permalink to &quot;`FindDomainById`&quot;">​</a></h3>',22),V=e("li",null,[e("p",null,[e("strong",null,"Parameters"),t(": "),e("code",null,"DomainId")])],-1),x=e("li",null,[e("p",null,[e("strong",null,"Returns"),t(": "),e("code",null,"Domain")])],-1),w=e("p",null,[e("strong",null,"Details"),t(": Gets the domain corresponding to the given identifier.")],-1),C=i(`<h3 id="finddomainkeyvaluebyidandkey" tabindex="-1"><code>FindDomainKeyValueByIdAndKey</code> <a class="header-anchor" href="#finddomainkeyvaluebyidandkey" aria-label="Permalink to &quot;\`FindDomainKeyValueByIdAndKey\`&quot;">​</a></h3><ul><li><p><strong>Parameters</strong>: <code>(DomainId, Name)</code></p></li><li><p><strong>Returns</strong>: <code>Value</code></p></li><li><p><strong>Details</strong>: Returns the value keyed by the given name in the domain corresponding to the given identifier.</p></li></ul><h2 id="peer" tabindex="-1">Peer <a class="header-anchor" href="#peer" aria-label="Permalink to &quot;Peer&quot;">​</a></h2><p>A peer is the basic unit of storage and validation. In common parlance we may conflate the node and the peer binary running on the node, but in this case we specifically mean the peer binary as a server with its specific configuration.</p><h3 id="findallpeers" tabindex="-1"><code>FindAllPeers</code> <a class="header-anchor" href="#findallpeers" aria-label="Permalink to &quot;\`FindAllPeers\`&quot;">​</a></h3><ul><li><p><strong>Returns</strong>: <code>Vec&lt;Peer&gt;</code></p></li><li><p><strong>Details</strong>: Returns all known peers identified by their key and accompanied by the address of the API endpoint of each.</p></li></ul><h3 id="findallparameters" tabindex="-1"><code>FindAllParameters</code> <a class="header-anchor" href="#findallparameters" aria-label="Permalink to &quot;\`FindAllParameters\`&quot;">​</a></h3><ul><li><p><strong>Returns</strong>: <code>Vec&lt;Parameter&gt;</code></p><div class="language-rust vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">rust</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">pub</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> enum</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Parameter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /// Maximum amount of Faulty Peers in the system.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    MaximumFaultyPeersAmount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">u32</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /// Maximum time for a leader to create a block.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    BlockTime</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">u128</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /// Maximum time for a proxy tail to send commit message.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    CommitTime</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">u128</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /// Time to wait for a transaction Receipt.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    TransactionReceiptTime</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">u128</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></li><li><p><strong>Details</strong>: Returns the parameters used by all peers in the network.</p><p>This is useful for debugging if any of the peers are incorrectly configured and causing view changes.</p></li></ul><h2 id="transaction" tabindex="-1">Transaction <a class="header-anchor" href="#transaction" aria-label="Permalink to &quot;Transaction&quot;">​</a></h2><p>It is often necessary to query the state of specific transactions, especially for use in blockchain explorers and for user-facing applications.</p><h3 id="findtransactionsbyaccountid" tabindex="-1"><code>FindTransactionsByAccountId</code> <a class="header-anchor" href="#findtransactionsbyaccountid" aria-label="Permalink to &quot;\`FindTransactionsByAccountId\`&quot;">​</a></h3>`,11),N=i(`<li><p><strong>Parameters</strong>: <code>AccountId</code></p></li><li><p><strong>Returns</strong>: <code>Vec&lt;TransactionValue&gt;</code></p><div class="language-rust vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">rust</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">pub</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> enum</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TransactionValue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /// Committed transaction</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    Transaction</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Box</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VersionedSignedTransaction</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;),</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /// Rejected transaction with reason of rejection</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    RejectedTransaction</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Box</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VersionedRejectedTransaction</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></li>`,2),S=e("p",null,[e("strong",null,"Details"),t(": Returns the full set of transactions that an account has submitted throughout the existence of the blockchain.")],-1),K=i('<h3 id="findtransactionbyhash" tabindex="-1"><code>FindTransactionByHash</code> <a class="header-anchor" href="#findtransactionbyhash" aria-label="Permalink to &quot;`FindTransactionByHash`&quot;">​</a></h3><ul><li><p><strong>Parameters</strong>: <code>Hash</code></p></li><li><p><strong>Returns</strong>: <code>TransactionValue</code></p></li><li><p><strong>Details</strong>: Returns the transaction by hash.</p></li></ul><h2 id="trigger" tabindex="-1">Trigger <a class="header-anchor" href="#trigger" aria-label="Permalink to &quot;Trigger&quot;">​</a></h2><p>Iroha is an event-driven architecture. Every modification of the world state emits a corresponding event that can be captured by appropriate event listeners called filters.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Note that Iroha shut downs all listeners on panic.</p></div><h3 id="findallactivetriggerids" tabindex="-1"><code>FindAllActiveTriggerIds</code> <a class="header-anchor" href="#findallactivetriggerids" aria-label="Permalink to &quot;`FindAllActiveTriggerIds`&quot;">​</a></h3><ul><li><p><strong>Returns</strong>: <code>Vec&lt;TriggerId&gt;</code></p></li><li><p><strong>Details</strong>: Finds all currently active triggers, that is, triggers that have not expired at the time of the query.</p></li></ul>',7),H=i('<h3 id="findtriggerbyid" tabindex="-1"><code>FindTriggerById</code> <a class="header-anchor" href="#findtriggerbyid" aria-label="Permalink to &quot;`FindTriggerById`&quot;">​</a></h3><ul><li><p><strong>Parameters</strong>: <code>TriggerId</code></p></li><li><p><strong>Returns</strong>: <code>Trigger</code></p></li><li><p><strong>Details</strong>: Finds the trigger with the given ID.</p></li></ul><h3 id="findtriggerkeyvaluebyidandkey" tabindex="-1"><code>FindTriggerKeyValueByIdAndKey</code> <a class="header-anchor" href="#findtriggerkeyvaluebyidandkey" aria-label="Permalink to &quot;`FindTriggerKeyValueByIdAndKey`&quot;">​</a></h3><ul><li><p><strong>Parameters</strong>: <code>(TriggerId, Name)</code></p></li><li><p><strong>Returns</strong>: <code>Trigger</code></p></li><li><p><strong>Details</strong>: Finds the value corresponding to the key in the <a href="/iroha-2-docs/guide/blockchain/metadata.html">metadata</a> of the trigger with the given ID.</p></li></ul><h3 id="findtriggersbydomainid" tabindex="-1"><code>FindTriggersByDomainId</code> <a class="header-anchor" href="#findtriggersbydomainid" aria-label="Permalink to &quot;`FindTriggersByDomainId`&quot;">​</a></h3><ul><li><p><strong>Parameters</strong>: <code>DomainId</code></p></li><li><p><strong>Returns</strong>: <code>Vec&lt;Trigger&gt;</code></p></li><li><p><strong>Details</strong>: Finds all domain triggers for the given domain ID.</p></li></ul>',6);function Q(Y,M,W,j,G,X){const a=o("WarningFatQuery");return r(),l("div",null,[c,e("ul",null,[h,e("li",null,[u,s(a)])]),p,e("ul",null,[g,e("li",null,[m,s(a)])]),k,e("ul",null,[y,f,e("li",null,[b,_,s(a)])]),A,e("ul",null,[q,e("li",null,[F,s(a),I])]),T,e("ul",null,[P,e("li",null,[v,s(a),D])]),R,s(a),E,s(a),B,e("ul",null,[V,x,e("li",null,[w,s(a)])]),C,e("ul",null,[N,e("li",null,[S,s(a)])]),K,s(a),H])}const $=n(d,[["render",Q]]);export{Z as __pageData,$ as default};
