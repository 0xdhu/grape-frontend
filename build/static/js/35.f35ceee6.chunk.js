(this["webpackJsonpGrape-font"]=this["webpackJsonpGrape-font"]||[]).push([[35],{1657:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return d}));r(0);var c=r(394),n=r(44),a=r(611),i=r.p+"static/media/1.ea839133.jpg",o=r.p+"static/media/2.61cc9c6e.jpg",s=r.p+"static/media/3.96eaa827.jpg",p=r.p+"static/media/Autocompounder.40966ca6.png",l=r.p+"static/media/wamp-strat.01c0df09.jpg",j=r(1620),u=r(7),d=function(){var t,e=Object(a.a)(),r=(Number(e)/1e18).toFixed(2);return t=Number(r)>=2?i:Number(r)<2&&Number(r)>=1?o:s,Object(u.jsx)(n.c,{children:Object(u.jsx)(c.a,{children:Object(u.jsxs)(j.a,{item:!0,xs:12,md:12,lg:12,children:[Object(u.jsx)("h1",{style:{fontSize:"80px",textAlign:"center"},children:"Strategies"}),Object(u.jsxs)("p",{style:{fontSize:"20px",textAlign:"center",color:"#fff"},children:["Depending on the TWAP price of Grape there are different optimal strategies for protocol health. ",Object(u.jsx)("br",{}),"All strategies can be found in our"," ",Object(u.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://grapefinance.gitbook.io/grape-finance-docs/protocol/strategies",children:"docs here."})]}),Object(u.jsxs)("p",{style:{fontSize:"20px",textAlign:"center",color:"#fff"},children:["Grape TWAP: $",r]}),Object(u.jsx)("h1",{style:{textAlign:"center",marginTop:"60px",paddingBottom:"50px"},children:"Current Optimal Strategy"}),Object(u.jsx)("img",{src:t,alt:"Current Optimal Strategy",width:"100%"}),Object(u.jsx)("h1",{style:{textAlign:"center",marginTop:"100px",paddingBottom:"50px"},children:"Auto-Compounder Strategy"}),Object(u.jsx)("img",{src:p,alt:"Auto compound Strategy",width:"100%"}),Object(u.jsx)("h1",{style:{textAlign:"center",marginTop:"100px",paddingBottom:"50px"},children:"Asgard DAO Multiplier Strategy"}),Object(u.jsx)("img",{src:l,alt:"WAMP Strategy",width:"100%"})]})})})}},611:function(t,e,r){"use strict";var c=r(1),n=r(11),a=r(22),i=r(0),o=r(192),s=r(42),p=r(30);e.a=function(){var t=Object(i.useState)(p.a.from(0)),e=Object(a.a)(t,2),r=e[0],l=e[1],j=Object(o.a)(),u=Object(i.useCallback)(Object(n.a)(Object(c.a)().mark((function t(){return Object(c.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=l,t.next=3,j.getGrapePriceInLastTWAP();case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)}))),[j]);return Object(i.useEffect)((function(){u().catch((function(t){return console.error("Failed to fetch GRAPE price: ".concat(t.stack))}));var t=setInterval(u,s.b.refreshInterval);return function(){return clearInterval(t)}}),[l,j,u]),r}}}]);
//# sourceMappingURL=35.f35ceee6.chunk.js.map