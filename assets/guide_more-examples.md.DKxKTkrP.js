import{_ as r,c as h,b as e,w as s,a2 as n,a3 as p,o as a,I as t,a as l,D as d}from"./chunks/framework.J5PejDER.js";const C=JSON.parse('{"title":"A more complex example","description":"","frontmatter":{"mermaidTheme":"forest","title":"A more complex example"},"headers":[],"relativePath":"guide/more-examples.md","filePath":"guide/more-examples.md","lastUpdated":1722596047000}'),o={name:"guide/more-examples.md"},c=p(`<h1 id="frontmatter-setup" tabindex="-1">Frontmatter Setup <a class="header-anchor" href="#frontmatter-setup" aria-label="Permalink to &quot;Frontmatter Setup&quot;">​</a></h1><p>💡 The theme for each page can be set in the frontmatter mermaidTheme parameter! But is only valid is light mode...</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">mermaidTheme</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">forest</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">A more complex example</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div><h1 id="code" tabindex="-1">Code <a class="header-anchor" href="#code" aria-label="Permalink to &quot;Code&quot;">​</a></h1><p>Images and links can be used as well..</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>You should place your image files in the public folder! In case you set an base you should prefix images with it.</p></div><div class="language-mermaid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">graph LR;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    K([...........&lt;img src=&#39;/vitepress-plugin-mermaid/K.png&#39; width=&#39;60&#39; &gt;...........])-.-&gt;G((...........&lt;img id=&#39;git&#39; src=&#39;/vitepress-plugin-mermaid/Octocat.png&#39; width=&#39;50&#39; &gt;...........));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    H([...........&lt;img id=&#39;helm&#39; src=&#39;/vitepress-plugin-mermaid/helm.png&#39; width=&#39;60&#39; &gt;...........])-.-&gt;G</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    G--&gt;A;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    A(...........&lt;img src=&#39;/vitepress-plugin-mermaid/argo-cd.png&#39; width=&#39;60&#39; &gt;...........)--&gt;D(...........&lt;img src=&#39;/vitepress-plugin-mermaid/ocp.png&#39; width=&#39;60&#39; &gt;...........);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">classDef img fill:none,color:transparent,stroke:none,borderRadius:50px</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">class G,D,A,K,H,B img</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">click K &quot;https://kustomize.io/&quot; _blank</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">click G &quot;http://www.github.com&quot; &quot;This is a link&quot; _blank</span></span></code></pre></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>Isolated images are nor rendering while using mermaid bigger than 9.1 <a href="https://github.com/mermaid-js/mermaid/issues/4023" target="_blank" rel="noreferrer">see the issue on github</a>.<br> The transparent wrapper <code>...........</code> is a workaround until it is fixed.</p></div><h1 id="render" tabindex="-1">Render <a class="header-anchor" href="#render" aria-label="Permalink to &quot;Render&quot;">​</a></h1><p>In light mode the arrows are green since we are using forest here<br> Kustomize and github are links in here!</p>`,10),k=p(`<h2 id="mindmap-supported" tabindex="-1">Mindmap supported <a class="header-anchor" href="#mindmap-supported" aria-label="Permalink to &quot;Mindmap supported&quot;">​</a></h2><div class="language-mermaid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mindmap</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  root((mindmap))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Origins</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      Long history</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ::icon(fa fa-book)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      Popularisation</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        British popular psychology author Tony Buzan</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Research</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      On effectiveness&lt;br/&gt;and features</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      On Automatic creation</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Uses</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            Creative techniques</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            Strategic planning</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            Argument mapping</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Tools</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      Pen and paper</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      Mermaid</span></span></code></pre></div>`,2),E=p(`<h2 id="pie" tabindex="-1">Pie <a class="header-anchor" href="#pie" aria-label="Permalink to &quot;Pie&quot;">​</a></h2><div class="language-mermaid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pie title Pets adopted by volunteers</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &quot;Dogs&quot; : 386</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &quot;Cats&quot; : 85</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &quot;Rats&quot; : 15</span></span></code></pre></div>`,2),g=p(`<h2 id="gantt" tabindex="-1">Gantt <a class="header-anchor" href="#gantt" aria-label="Permalink to &quot;Gantt&quot;">​</a></h2><div class="language-mermaid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">gantt</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    title A Gantt Diagram</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    dateFormat YYYY-MM-DD</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    section Section</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        A task          :a1, 2014-01-01, 30d</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Another task    :after a1, 20d</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    section Another</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Task in Another :2014-01-12, 12d</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        another task    :24d</span></span></code></pre></div>`,2);function m(u,A,_,y,b,f){const i=d("Mermaid");return a(),h("div",null,[c,(a(),e(n,null,{default:s(()=>[t(i,{id:"mermaid-30",class:"mermaid",graph:"graph%20LR%3B%0A%20%20%20%20K(%5B...........%3Cimg%20src%3D'%2Fvitepress-plugin-mermaid%2FK.png'%20width%3D'60'%20%3E...........%5D)-.-%3EG((...........%3Cimg%20id%3D'git'%20src%3D'%2Fvitepress-plugin-mermaid%2FOctocat.png'%20width%3D'50'%20%3E...........))%3B%0A%20%20%20%20H(%5B...........%3Cimg%20id%3D'helm'%20src%3D'%2Fvitepress-plugin-mermaid%2Fhelm.png'%20width%3D'60'%20%3E...........%5D)-.-%3EG%0A%20%20%20%20G--%3EA%3B%0A%20%20%20%20A(...........%3Cimg%20src%3D'%2Fvitepress-plugin-mermaid%2Fargo-cd.png'%20width%3D'60'%20%3E...........)--%3ED(...........%3Cimg%20src%3D'%2Fvitepress-plugin-mermaid%2Focp.png'%20width%3D'60'%20%3E...........)%3B%0AclassDef%20img%20fill%3Anone%2Ccolor%3Atransparent%2Cstroke%3Anone%2CborderRadius%3A50px%0Aclass%20G%2CD%2CA%2CK%2CH%2CB%20img%0Aclick%20K%20%22https%3A%2F%2Fkustomize.io%2F%22%20_blank%0Aclick%20G%20%22http%3A%2F%2Fwww.github.com%22%20%22This%20is%20a%20link%22%20_blank%0A"})]),fallback:s(()=>[l(" Loading... ")]),_:1})),k,(a(),e(n,null,{default:s(()=>[t(i,{id:"mermaid-36",class:"mermaid",graph:"mindmap%0A%20%20root((mindmap))%0A%20%20%20%20Origins%0A%20%20%20%20%20%20Long%20history%0A%20%20%20%20%20%20%3A%3Aicon(fa%20fa-book)%0A%20%20%20%20%20%20Popularisation%0A%20%20%20%20%20%20%20%20British%20popular%20psychology%20author%20Tony%20Buzan%0A%20%20%20%20Research%0A%20%20%20%20%20%20On%20effectiveness%3Cbr%2F%3Eand%20features%0A%20%20%20%20%20%20On%20Automatic%20creation%0A%20%20%20%20%20%20%20%20Uses%0A%20%20%20%20%20%20%20%20%20%20%20%20Creative%20techniques%0A%20%20%20%20%20%20%20%20%20%20%20%20Strategic%20planning%0A%20%20%20%20%20%20%20%20%20%20%20%20Argument%20mapping%0A%20%20%20%20Tools%0A%20%20%20%20%20%20Pen%20and%20paper%0A%20%20%20%20%20%20Mermaid%0A"})]),fallback:s(()=>[l(" Loading... ")]),_:1})),E,(a(),e(n,null,{default:s(()=>[t(i,{id:"mermaid-41",class:"mermaid",graph:"pie%20title%20Pets%20adopted%20by%20volunteers%0A%20%20%22Dogs%22%20%3A%20386%0A%20%20%22Cats%22%20%3A%2085%0A%20%20%22Rats%22%20%3A%2015%0A"})]),fallback:s(()=>[l(" Loading... ")]),_:1})),g,(a(),e(n,null,{default:s(()=>[t(i,{id:"mermaid-46",class:"mermaid",graph:"gantt%0A%20%20%20%20title%20A%20Gantt%20Diagram%0A%20%20%20%20dateFormat%20YYYY-MM-DD%0A%20%20%20%20section%20Section%0A%20%20%20%20%20%20%20%20A%20task%20%20%20%20%20%20%20%20%20%20%3Aa1%2C%202014-01-01%2C%2030d%0A%20%20%20%20%20%20%20%20Another%20task%20%20%20%20%3Aafter%20a1%2C%2020d%0A%20%20%20%20section%20Another%0A%20%20%20%20%20%20%20%20Task%20in%20Another%20%3A2014-01-12%2C%2012d%0A%20%20%20%20%20%20%20%20another%20task%20%20%20%20%3A24d%0A"})]),fallback:s(()=>[l(" Loading... ")]),_:1}))])}const T=r(o,[["render",m]]);export{C as __pageData,T as default};
