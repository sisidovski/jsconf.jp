(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{210:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return d});var r=t(261),o=t(0),a=t.n(o),i=t(95),l=t(220),s=t(219),p=t(215),c=t(227),m=t(216),u=t(217);function d(){var e=r.data.allSponsorsYaml.edges.map(function(e){return e.node}),n=Object(i.b)().t;return a.a.createElement(l.a,null,a.a.createElement(s.a,{title:n("sponsors"),description:n("sponsors.description")}),a.a.createElement(m.a,null,a.a.createElement(u.a,{path:[n("sponsors")]}),a.a.createElement(p.a,null,n("sponsors")),a.a.createElement(c.a,{sponsors:e})))}},215:function(e,n,t){"use strict";t.d(n,"a",function(){return i});var r=t(0),o=t.n(r),a=t(214).c.h1.withConfig({displayName:"Title__Box",componentId:"ic2qmd-0"})(["text-align:center;margin:40px 0 60px;font-size:40px;text-transform:uppercase;font-family:",";"],function(e){return e.theme.fonts.header});function i(e){var n=e.children;return o.a.createElement(a,null,n)}},216:function(e,n,t){"use strict";t.d(n,"a",function(){return i});var r=t(0),o=t.n(r),a=t(214).c.div.withConfig({displayName:"ResponsiveBox__Box",componentId:"s7imgo-0"})(["width:100%;max-width:",";padding:2em 1em 5em;margin:0 auto;box-sizing:border-box;"],function(e){return e.theme.innerWidth});function i(e){var n=e.children;return o.a.createElement(a,null,n)}},217:function(e,n,t){"use strict";t.d(n,"a",function(){return c});var r=t(0),o=t.n(r),a=t(214),i=t(95),l=t(218),s=a.c.div.withConfig({displayName:"Breadcrumb__Box",componentId:"whtkqw-0"})(["display:flex;"]),p=a.c.span.withConfig({displayName:"Breadcrumb__Text",componentId:"whtkqw-1"})(["margin-right:0.5em;font-size:14px;font-weight:bold;text-transform:uppercase;font-family:",";text-transform:uppercase;"],function(e){return e.theme.fonts.header});function c(e){var n=e.path,t=Object(i.b)().t;return o.a.createElement(s,null,o.a.createElement(l.a,{to:"/"},o.a.createElement(p,null,t("top"))),o.a.createElement(p,null,">"),n.map(function(e){return o.a.createElement(p,{key:e},e)}))}},227:function(e,n,t){"use strict";t(23);var r=t(0),o=t.n(r),a=t(214),i=t(95),l=t(221),s=Object(a.c)(l.OutboundLink).withConfig({displayName:"Sponsor__Box",componentId:"b96v16-0"})(["display:flex;align-items:center;justify-content:center;border:1px solid ",";background-color:",";font-size:0;"],function(e){return e.theme.colors.border},function(e){return e.theme.colors.base}),p=a.c.img.withConfig({displayName:"Sponsor__Img",componentId:"b96v16-1"})(["padding:20px;object-fit:contain;box-sizing:border-box;width:100%;&.platinum{width:780px;height:200px;","{width:100%;max-width:780px;max-height:160px;}}&.gold{width:100%;max-width:440px;max-height:125px;}&.silver,&.bronze{width:100%;max-width:273px;max-height:97px;}","{padding:10px;}"],function(e){return e.theme.breakpoints.mobile},function(e){return e.theme.breakpoints.mobile});function c(e){var n=e.logoUrl,t=e.url,r=e.grade;return o.a.createElement(s,{href:t,target:"_blank"},o.a.createElement(p,{src:n,width:"100%",className:r}))}t.d(n,"a",function(){return f});var m=Object(a.b)(["grid-column-gap:60px;grid-row-gap:30px;","{grid-column-gap:20px;grid-row-gap:20px;}"],function(e){return e.theme.breakpoints.mobile}),u=a.c.div.withConfig({displayName:"SponsorList__PlatinumBox",componentId:"mgnut8-0"})(["display:grid;grid-template-columns:repeat(1,1fr);width:100%;max-width:780px;margin:0 auto;",""],m),d=a.c.div.withConfig({displayName:"SponsorList__GoldBox",componentId:"mgnut8-1"})(["display:grid;grid-template-columns:repeat(2,1fr);",""],m),g=a.c.div.withConfig({displayName:"SponsorList__OtherBox",componentId:"mgnut8-2"})(["display:grid;grid-template-columns:repeat(3,1fr);",""],m),h=a.c.h3.withConfig({displayName:"SponsorList__SubTitle",componentId:"mgnut8-3"})(["font-family:",";text-align:center;font-size:30px;"],function(e){return e.theme.fonts.header});function f(e){var n=e.sponsors,t=Object(i.b)().t,r=n.reduce(function(e,n){var t;return Object.assign({},e,((t={})[n.grade]=e[n.grade].concat([n]),t))},{platinum:[],gold:[],silver:[],bronze:[]});return o.a.createElement(o.a.Fragment,null,o.a.createElement(h,null,t("sponsor.platinum")),o.a.createElement(u,null,r.platinum.map(function(e){return o.a.createElement(c,Object.assign({key:e.url},e))})),o.a.createElement(h,null,t("sponsor.gold")),o.a.createElement(d,null,r.gold.map(function(e){return o.a.createElement(c,Object.assign({key:e.url},e))})),o.a.createElement(h,null,t("sponsor.silver")),o.a.createElement(g,null,r.silver.map(function(e){return o.a.createElement(c,Object.assign({key:e.url},e))})),o.a.createElement(h,null,t("sponsor.bronze")),o.a.createElement(g,null,r.bronze.map(function(e){return o.a.createElement(c,Object.assign({key:e.url},e))})))}},261:function(e){e.exports={data:{allSponsorsYaml:{edges:[{node:{name:"mediba",grade:"gold",url:"https://www.mediba.jp/",logoUrl:"/sponsors/mediba.png"}},{node:{name:"コネヒト株式会社",grade:"silver",url:"https://connehito.com/",logoUrl:"/sponsors/connehito.png"}},{node:{name:"ヤフー株式会社",grade:"platinum",url:"https://www.yahoo.co.jp",logoUrl:"/sponsors/yahoo.png"}},{node:{name:"Hamee株式会社",grade:"silver",url:"https://recruit.hamee.co.jp/about?c=jsconf",logoUrl:"/sponsors/hamee.png"}},{node:{name:"株式会社メドレー",grade:"silver",url:"https://www.medley.jp/",logoUrl:"/sponsors/medley.png"}},{node:{name:"Elastic",grade:"bronze",url:"https://elastic.co",logoUrl:"/sponsors/elastic.png"}},{node:{name:"Nota Inc.",grade:"silver",url:"https://notainc.com/",logoUrl:"/sponsors/nota.png"}},{node:{name:"株式会社ラクス",grade:"bronze",url:"https://www.rakus.co.jp/",logoUrl:"/sponsors/rakus.png"}},{node:{name:"株式会社ディー・エヌ・エー",grade:"bronze",url:"https://dena.com",logoUrl:"/sponsors/dena.png"}},{node:{name:"Twitter",grade:"gold",url:"https://www.twitter.com",logoUrl:"/sponsors/twitter.png"}},{node:{name:"RECRUIT",grade:"platinum",url:"https://www.recruit.co.jp/employment/",logoUrl:"/sponsors/recruit.jpg"}},{node:{name:"CureApp",grade:"gold",url:"https://cureapp.co.jp/engineers.html",logoUrl:"/sponsors/cureapp.png"}}]}}}}}]);
//# sourceMappingURL=component---src-pages-sponsors-tsx-6a01366b6f693f24ab37.js.map