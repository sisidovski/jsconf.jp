(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{212:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return u});var o=t(514),r=t(0),a=t.n(r),l=t(95),s=t(226),i=t(223),p=t(218),m=t(270),c=t(219),d=t(220);function u(){var e=o.data.allSponsorsYaml.edges.map(function(e){return e.node}),n=Object(l.b)().t;return a.a.createElement(s.a,null,a.a.createElement(i.a,{title:n("sponsors"),description:n("sponsors.description")}),a.a.createElement(c.a,null,a.a.createElement(d.a,{path:[n("sponsors")]}),a.a.createElement(p.a,null,n("sponsors")),a.a.createElement(m.a,{sponsors:e})))}},218:function(e,n,t){"use strict";t.d(n,"a",function(){return l});var o=t(0),r=t.n(o),a=t(216).c.h1.withConfig({displayName:"Title__Box",componentId:"ic2qmd-0"})(["text-align:center;margin:40px 0 60px;font-size:4rem;text-transform:none;font-family:",";"],function(e){return e.theme.fonts.header});function l(e){var n=e.children;return r.a.createElement(a,null,n)}},219:function(e,n,t){"use strict";t.d(n,"a",function(){return l});var o=t(0),r=t.n(o),a=t(216).c.div.withConfig({displayName:"ResponsiveBox__Box",componentId:"s7imgo-0"})(["width:100%;max-width:",";padding:2em 1em 5em;margin:0 auto;box-sizing:border-box;"],function(e){return e.theme.innerWidth});function l(e){var n=e.children;return r.a.createElement(a,null,n)}},220:function(e,n,t){"use strict";t.d(n,"a",function(){return m});var o=t(0),r=t.n(o),a=t(216),l=t(95),s=t(217),i=a.c.div.withConfig({displayName:"Breadcrumb__Box",componentId:"whtkqw-0"})(["display:flex;"]),p=a.c.span.withConfig({displayName:"Breadcrumb__Text",componentId:"whtkqw-1"})(["margin-right:0.5em;font-size:1.4rem;font-weight:bold;text-transform:uppercase;font-family:",";text-transform:uppercase;"],function(e){return e.theme.fonts.header});function m(e){var n=e.path,t=Object(l.b)().t;return r.a.createElement(i,null,r.a.createElement(s.a,{to:"/"},r.a.createElement(p,null,t("top"))),n.filter(Boolean).map(function(e){var n="string"==typeof e?{label:e,to:null}:e;return r.a.createElement(r.a.Fragment,{key:n.label},r.a.createElement(p,null,">"),n.to?r.a.createElement(s.a,{to:n.to},r.a.createElement(p,null,n.label)):r.a.createElement(p,null,n.label))}))}},270:function(e,n,t){"use strict";t(23);var o=t(0),r=t.n(o),a=t(216),l=t(95),s=(t(16),t(227)),i=Object(a.c)(s.OutboundLink).withConfig({displayName:"Sponsor__Box",componentId:"b96v16-0"})(["display:flex;align-items:center;justify-content:center;border:1px solid ",";background-color:",";font-size:0;"],function(e){return e.theme.colors.border},function(e){return e.theme.colors.base}),p=a.c.img.withConfig({displayName:"Sponsor__Img",componentId:"b96v16-1"})(["padding:20px;object-fit:contain;box-sizing:border-box;width:100%;&.platinum{width:780px;height:200px;","{width:100%;max-width:780px;max-height:160px;}}&.gold{width:100%;max-width:440px;max-height:125px;}&.silver,&.bronze{width:100%;max-width:273px;max-height:97px;}","{padding:10px;&.bronze{width:100%;max-width:273px;max-height:40px;}}"],function(e){return e.theme.breakpoints.mobile},function(e){return e.theme.breakpoints.mobile});function m(e){var n=e.logoUrl,t=e.url,o=e.grade,a=e.name;return r.a.createElement(i,{href:t,target:"_blank"},r.a.createElement(p,{src:n,width:"100%",className:o,alt:a}))}t.d(n,"a",function(){return f});var c=Object(a.b)(["grid-column-gap:60px;grid-row-gap:30px;","{grid-column-gap:20px;grid-row-gap:20px;}"],function(e){return e.theme.breakpoints.mobile}),d=a.c.div.withConfig({displayName:"SponsorList__PlatinumBox",componentId:"mgnut8-0"})(["display:grid;grid-template-columns:repeat(1,1fr);width:100%;max-width:780px;margin:0 auto;",""],c),u=a.c.div.withConfig({displayName:"SponsorList__GoldBox",componentId:"mgnut8-1"})(["display:grid;grid-template-columns:repeat(2,1fr);",""],c),g=a.c.div.withConfig({displayName:"SponsorList__OtherBox",componentId:"mgnut8-2"})(["display:grid;grid-template-columns:repeat(3,1fr);",""],c),h=a.c.h3.withConfig({displayName:"SponsorList__SubTitle",componentId:"mgnut8-3"})(["font-family:",";text-align:center;font-size:3rem;"],function(e){return e.theme.fonts.header});function f(e){var n=e.sponsors,t=Object(l.b)().t,o=n.reduce(function(e,n){var t;return Object.assign({},e,((t={})[n.grade]=e[n.grade].concat([n]),t))},{platinum:[],gold:[],silver:[],bronze:[]});return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null,t("sponsor.platinum")),r.a.createElement(d,null,o.platinum.map(function(e){return r.a.createElement(m,Object.assign({key:e.url},e))})),r.a.createElement(h,null,t("sponsor.gold")),r.a.createElement(u,null,o.gold.map(function(e){return r.a.createElement(m,Object.assign({key:e.url},e))})),r.a.createElement(h,null,t("sponsor.silver")),r.a.createElement(g,null,o.silver.map(function(e){return r.a.createElement(m,Object.assign({key:e.url},e))})),r.a.createElement(h,null,t("sponsor.bronze")),r.a.createElement(g,null,o.bronze.map(function(e){return r.a.createElement(m,Object.assign({key:e.url},e))})))}},514:function(e){e.exports={data:{allSponsorsYaml:{edges:[{node:{name:"mediba",grade:"gold",url:"https://www.mediba.jp/",logoUrl:"/2019/sponsors/mediba.png"}},{node:{name:"コネヒト株式会社",grade:"silver",url:"https://connehito.com/",logoUrl:"/2019/sponsors/connehito.png"}},{node:{name:"ヤフー株式会社",grade:"platinum",url:"https://www.yahoo.co.jp",logoUrl:"/2019/sponsors/yahoo.png"}},{node:{name:"Hamee株式会社",grade:"silver",url:"https://recruit.hamee.co.jp/about?c=jsconf",logoUrl:"/2019/sponsors/hamee.png"}},{node:{name:"株式会社メドレー",grade:"silver",url:"https://www.medley.jp/",logoUrl:"/2019/sponsors/medley.png"}},{node:{name:"Elastic",grade:"bronze",url:"https://elastic.co",logoUrl:"/2019/sponsors/elastic.png"}},{node:{name:"Nota Inc.",grade:"silver",url:"https://notainc.com/",logoUrl:"/2019/sponsors/nota.png"}},{node:{name:"株式会社ラクス",grade:"bronze",url:"https://www.rakus.co.jp/",logoUrl:"/2019/sponsors/rakus.png"}},{node:{name:"株式会社ディー・エヌ・エー",grade:"bronze",url:"https://dena.com",logoUrl:"/2019/sponsors/dena.png"}},{node:{name:"株式会社リクルートテクノロジーズ",grade:"platinum",url:"https://recruit-tech.co.jp/",logoUrl:"/2019/sponsors/recruit.png"}},{node:{name:"CureApp",grade:"gold",url:"https://cureapp.co.jp/engineers.html",logoUrl:"/2019/sponsors/cureapp.png"}},{node:{name:"株式会社メルカリ",grade:"gold",url:"https://www.mercari.com/jp/",logoUrl:"/2019/sponsors/mercari.png"}},{node:{name:"合同会社DMM.com",grade:"gold",url:"https://dmm-corp.com/",logoUrl:"/2019/sponsors/dmm.png"}},{node:{name:"サイボウズ株式会社",grade:"gold",url:"https://cybozu.co.jp/",logoUrl:"/2019/sponsors/cybozu.png"}},{node:{name:"株式会社ドワンゴ",grade:"gold",url:"https://dwango.co.jp/",logoUrl:"/2019/sponsors/dwango.png"}},{node:{name:"スマートニュース株式会社",grade:"silver",url:"https://www.smartnews.com/",logoUrl:"/2019/sponsors/smartnews.png"}},{node:{name:"Itsuki Inc.",grade:"bronze",url:"https://itsuki.io/",logoUrl:"/2019/sponsors/itsuki.png"}},{node:{name:"フューチャー株式会社",grade:"silver",url:"https://www.future.co.jp/",logoUrl:"/2019/sponsors/future.png"}},{node:{name:"株式会社ピクセルグリッド",grade:"silver",url:"https://www.pxgrid.com/",logoUrl:"/2019/sponsors/pixelgrid.svg"}},{node:{name:"Auth0株式会社",grade:"silver",url:"https://auth0.com/jp/",logoUrl:"/2019/sponsors/auth0.png"}},{node:{name:"Twilio",grade:"gold",url:"https://www.twilio.com/",logoUrl:"/2019/sponsors/twilio.svg"}}]}}}}}]);
//# sourceMappingURL=component---src-pages-sponsors-tsx-32606382ea14edc5513f.js.map