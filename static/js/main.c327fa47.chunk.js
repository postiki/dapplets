(this.webpackJsonpdapplets=this.webpackJsonpdapplets||[]).push([[0],{34:function(e,t,c){},35:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),i=c(25),n=c.n(i),l=c(2),j=(c(34),c.p+"static/media/Logo.b162600e.svg"),r=c.p+"static/media/codesandbox.375124aa.svg",d=c.p+"static/media/Vector.f77052b5.svg",o=c.p+"static/media/grid.4eb70c25.svg",b=c.p+"static/media/users.32027de1.svg",h=c.p+"static/media/trending-up.86d6ff3f.svg",O=c.p+"static/media/closeBtnTags.9a146af2.svg",u=(c(35),c(0));function x(e){var t=e.test,c=Object(s.useState)(!1),a=Object(l.a)(c,2),i=a[0],n=a[1];return Object(s.useEffect)((function(){t(!i)}),[i]),Object(u.jsxs)("div",{className:"menu",children:[Object(u.jsxs)("div",{className:"logo",children:[Object(u.jsxs)("div",{className:"logoTitle",children:[Object(u.jsx)("img",{alt:"logo",src:j}),Object(u.jsx)("h2",{children:"Dapplets Project."})]}),Object(u.jsx)("div",{className:"menuIcon",onClick:function(){return n(!i)}})]}),Object(u.jsxs)("div",{className:i?"sideIconsActive":"sideIcons",children:[Object(u.jsxs)("div",{className:"active",children:[Object(u.jsx)("img",{alt:"codesandbox",src:r}),Object(u.jsx)("h2",{children:"All Dapplets"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{alt:"heart",src:d}),Object(u.jsx)("h2",{children:"Editor\u2019s Choice"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{alt:"grid",src:o}),Object(u.jsx)("h2",{children:"Essential Dapplets"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{alt:"social",src:b}),Object(u.jsx)("h2",{children:"Social Networks"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{alt:"trend",src:h}),Object(u.jsx)("h2",{children:"Financial Dapplets"})]})]}),Object(u.jsxs)("div",{className:"myLists",children:[Object(u.jsx)("h2",{children:Object(u.jsx)("b",{children:"My lists"})}),Object(u.jsx)("h2",{children:"TOP-10 Twitter Dapplets (Me)"}),Object(u.jsx)("h2",{children:"Best Financial dapplets by Jack (Jack)"}),Object(u.jsx)("h2",{children:"TOP-10 Twitter Dapplets (Me)"})]}),Object(u.jsxs)("div",{className:"myTags",children:[Object(u.jsx)("div",{className:"title",children:Object(u.jsx)("h2",{children:Object(u.jsx)("b",{children:"My tags"})})}),Object(u.jsxs)("div",{className:"tags",children:[Object(u.jsxs)("div",{className:"label",children:[Object(u.jsx)("h5",{children:"Twitter"}),Object(u.jsx)("img",{alt:"closeBtn",src:O})]}),Object(u.jsxs)("div",{className:"label",children:[Object(u.jsx)("h5",{children:"SocialMedia"}),Object(u.jsx)("img",{alt:"closeBtn",src:O})]}),Object(u.jsxs)("div",{className:"label",children:[Object(u.jsx)("h5",{children:"Top 10"}),Object(u.jsx)("img",{alt:"closeBtn",src:O})]}),Object(u.jsxs)("div",{className:"label",children:[Object(u.jsx)("h5",{children:"Finances"}),Object(u.jsx)("img",{alt:"closeBtn",src:O})]}),Object(u.jsxs)("div",{className:"label",children:[Object(u.jsx)("h5",{children:"Media"}),Object(u.jsx)("img",{alt:"closeBtn",src:O})]}),Object(u.jsxs)("div",{className:"label",children:[Object(u.jsx)("h5",{children:"Test"}),Object(u.jsx)("img",{alt:"closeBtn",src:O})]}),Object(u.jsxs)("div",{className:"label",children:[Object(u.jsx)("h5",{children:"ToDo"}),Object(u.jsx)("img",{alt:"closeBtn",src:O})]})]})]})]})}var m=c(6),p=c(9);var v=c(10),g=c.n(v),f=(c(55),c.p+"static/media/Group 14.6dd0a1f7.svg");c(56);function N(e){var t=e.dataItems,c=Object(s.useState)(""),a=Object(l.a)(c,2),i=a[0],n=a[1],j=Object(s.useState)([]),r=Object(l.a)(j,2),d=r[0],o=r[1],b=[{id:"0",name:"Games"},{id:"1",name:"Twitter"},{id:"2",name:"Social Media"},{id:"3",name:"Top 10"},{id:"4",name:"Finances"},{id:"5",name:"Media"},{id:"6",name:"Test"},{id:"7",name:"ToDo"}];return Object(s.useEffect)((function(){o(t)}),[t]),d.map((function(e,t){return Object(u.jsxs)("div",{className:"item",children:[Object(u.jsx)("img",{className:"drag-btn",alt:"drag-btn",src:f}),Object(u.jsx)("img",{className:"icon",alt:"icons",src:" https://dapplets-hiring-api.herokuapp.com/api/v1/files/"+e.icon}),Object(u.jsxs)("div",{className:"info",children:[Object(u.jsx)("h2",{className:"title",children:e.title}),Object(u.jsx)("h4",{className:"address",children:e.address})]}),Object(u.jsx)("h2",{className:"description",children:e.description}),Object(u.jsx)("h3",{className:"author",children:e.author}),Object(u.jsx)("div",{className:"tags",children:e.tags.map((function(e,t){var c;return Object(u.jsxs)("div",{className:"label",children:[Object(u.jsx)("h5",{children:null===(c=b.filter((function(t){return t.id.includes(e)}))[0])||void 0===c?void 0:c.name}),Object(u.jsx)("img",{alt:"closeBtn",src:O})]},t)}))}),Object(u.jsx)("div",{className:localStorage.getItem(e.id)?"installed":"rollover",onClick:function(){return t=e.id,void(i.includes(t)?(localStorage.removeItem(t),n("")):(n(t),localStorage.setItem(t,"install")));var t}})]},t)}))}var S=c(72);function T(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],i=Object(s.useState)(!1),n=Object(l.a)(i,2),j=n[0],r=n[1],d=Object(s.useState)(!1),o=Object(l.a)(d,2),b=o[0],h=o[1],O=Object(s.useState)(0),x=Object(l.a)(O,2),v=x[0],f=x[1],T=Object(s.useState)(""),B=Object(l.a)(T,2),w=B[0],y=B[1],E=Object(s.useState)("released"),k=Object(l.a)(E,2),C=k[0],M=k[1],D=Object(s.useState)("DESC"),I=Object(l.a)(D,2),A=I[0],L=I[1],F=Object(s.useState)([]),G=Object(l.a)(F,2),W=G[0],P=G[1],J=Object(s.useState)(!1),R=Object(l.a)(J,2),H=R[0],Y=R[1],_=Object(s.useState)(!1),K=Object(l.a)(_,2),U=K[0],V=K[1],q=function(e,t){var c=Object(s.useState)(e),a=Object(l.a)(c,2),i=a[0],n=a[1];return Object(s.useEffect)((function(){var c=setTimeout((function(){n(e)}),t);return function(){clearTimeout(c)}}),[e]),i}(w,500);Object(s.useEffect)((function(){g.a.get("https://dapplets-hiring-api.herokuapp.com/api/v1/dapplets?start=".concat(v,"&limit=").concat(15,'&sort=[{"property": "').concat(C,'", "direction": "').concat(A,'"}]')).then((function(e){return a(e.data.data.map((function(t,c){return Object(p.a)(Object(p.a)({},t),{},{id:c,order:e.data.data.length-c})})))})).catch((function(e){return console.log(e)})).finally((function(){f((function(e){return e+15})),r(!0)}))}),[]),Object(s.useEffect)((function(){C&&g.a.get("https://dapplets-hiring-api.herokuapp.com/api/v1/dapplets?start=".concat(v,"&limit=").concat(15,'&sort=[{"property": "').concat(C,'", "direction": "').concat(A,'"}]')).then((function(e){return a(e.data.data.map((function(t,c){return Object(p.a)(Object(p.a)({},t),{},{id:c,order:e.data.data.length-c})})))})).catch((function(e){return console.log(e)})).finally((function(){15===v&&f((function(e){return e+15})),c.length>0&&f((function(e){return e+15}))}))}),[C,A]),Object(s.useEffect)((function(){return document.getElementById("100").addEventListener("scroll",z),function(){document.removeEventListener("scroll",z)}}),[]);var z=function(){var e=document.getElementById("100");e.scrollHeight-(e.scrollTop+e.clientHeight)<100&&h(!0)};return Object(s.useEffect)((function(){b&&(V(!0),g.a.get("https://dapplets-hiring-api.herokuapp.com/api/v1/dapplets?start=".concat(v,"&limit=").concat(15,'&sort=[{"property": "').concat(C,'", "direction": "').concat(A,'"}]')).then((function(e){return a([].concat(Object(m.a)(c),Object(m.a)(e.data.data)))})).catch((function(e){return console.log(e)})).finally((function(){f((function(e){return e+15})),h(!1)})))}),[b]),Object(s.useEffect)((function(){q?(console.log(v,"effect on debounced"),Y(!0),g.a.get('https://dapplets-hiring-api.herokuapp.com/api/v1/dapplets?start=0&limit=15&filter=[{"property":"title","value":"'.concat(w,'"}]')).then((function(e){return e.data.data.filter((function(e){return e.title.toLowerCase().indexOf(w.toLowerCase())>=0}))})).catch((function(e){return console.log(e)})).finally((function(){return V(!1)})).then((function(e){Y(!1),P(e)}))):P([])}),[q]),Object(u.jsxs)("div",{className:"dapplets",children:[Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)("input",{className:"search",placeholder:"Search",onChange:function(e){return y(e.target.value)}}),Object(u.jsxs)("select",{className:"sortByFirst",onChange:function(e){return M(e.target.value)},onClick:function(){return f(0)},children:[Object(u.jsx)("option",{value:"released",children:"Released Date"}),Object(u.jsx)("option",{value:"rating",children:"Rating"}),Object(u.jsx)("option",{value:"downloads",children:"Downloads"})]}),Object(u.jsxs)("select",{className:"sortBySecond",onChange:function(e){return L(e.target.value)},onClick:function(){return f(0)},children:[Object(u.jsx)("option",{value:"DESC",children:"Descending"}),Object(u.jsx)("option",{value:"ASC",children:"Ascending"})]})]}),H&&Object(u.jsx)("div",{children:"Searching ..."}),Object(u.jsx)("div",{className:"items",children:j&&Object(u.jsx)(N,{dataItems:W.length>=1?W:c})}),U&&Object(u.jsx)(S.a,{})]})}var B=c.p+"static/media/clarity_cloud-network-line.dddfba07.svg",w=c.p+"static/media/carbon_settings-adjust.1dfffe4d.svg";c(63);function y(){return Object(u.jsxs)("div",{className:"head",children:[Object(u.jsxs)("div",{className:"extensions",children:[Object(u.jsx)("img",{alt:"status",src:B}),Object(u.jsx)("h2",{children:"Extension state: Active"})]}),Object(u.jsxs)("div",{className:"settings",children:[Object(u.jsx)("img",{alt:"setting",src:w}),Object(u.jsx)("h2",{children:"Settings"})]})]})}var E=c.p+"static/media/arrow-left.17f80631.svg";c(64);function k(){return Object(u.jsxs)("div",{className:"rightMenu",children:[Object(u.jsx)("div",{className:"back",children:Object(u.jsx)("img",{alt:"buttonNav",src:E})}),Object(u.jsxs)("div",{className:"dappletsettings",children:[Object(u.jsx)("div",{className:"settingtitle",children:Object(u.jsx)("h1",{children:Object(u.jsx)("b",{children:"DAPPLET SETTINGS"})})}),Object(u.jsxs)("div",{className:"newlist",children:[Object(u.jsx)("h2",{children:"Create new list"}),Object(u.jsxs)("div",{className:"inputlist",children:[Object(u.jsx)("input",{placeholder:"List Name"}),Object(u.jsx)("button",{children:"Create"})]})]}),Object(u.jsxs)("div",{className:"newtag",children:[Object(u.jsx)("h2",{children:"New tag"}),Object(u.jsxs)("div",{className:"inputtag",children:[Object(u.jsx)("input",{placeholder:"Tag nameList Name"}),Object(u.jsx)("button",{children:"Create"})]})]})]}),Object(u.jsxs)("div",{className:"myTags",children:[Object(u.jsx)("div",{className:"title",children:Object(u.jsx)("h1",{children:Object(u.jsx)("b",{children:"MY TAGS"})})}),Object(u.jsxs)("div",{className:"tags",children:[Object(u.jsxs)("div",{className:"label",children:[Object(u.jsx)("h5",{children:"Twitter"}),Object(u.jsx)("img",{alt:"closeBtn",src:O})]}),Object(u.jsxs)("div",{className:"label",children:[Object(u.jsx)("h5",{children:"SocialMedia"}),Object(u.jsx)("img",{alt:"closeBtn",src:O})]}),Object(u.jsxs)("div",{className:"label",children:[Object(u.jsx)("h5",{children:"Top 10"}),Object(u.jsx)("img",{alt:"closeBtn",src:O})]}),Object(u.jsxs)("div",{className:"label",children:[Object(u.jsx)("h5",{children:"Finances"}),Object(u.jsx)("img",{alt:"closeBtn",src:O})]})]})]}),Object(u.jsxs)("div",{className:"coTags",children:[Object(u.jsx)("div",{className:"title",children:Object(u.jsx)("h1",{children:Object(u.jsx)("b",{children:"COMMUNITY TAGS"})})}),Object(u.jsxs)("div",{className:"tags",children:[Object(u.jsxs)("div",{className:"label",children:[Object(u.jsx)("h5",{children:"Social"}),Object(u.jsx)("img",{alt:"closeBtn",src:O})]}),Object(u.jsxs)("div",{className:"label",children:[Object(u.jsx)("h5",{children:"Top 100"}),Object(u.jsx)("img",{alt:"closeBtn",src:O})]}),Object(u.jsxs)("div",{className:"label",children:[Object(u.jsx)("h5",{children:"Testing"}),Object(u.jsx)("img",{alt:"closeBtn",src:O})]}),Object(u.jsxs)("div",{className:"label",children:[Object(u.jsx)("h5",{children:"Favourites"}),Object(u.jsx)("img",{alt:"closeBtn",src:O})]})]})]}),Object(u.jsxs)("div",{className:"workon",children:[Object(u.jsx)("h1",{children:Object(u.jsx)("b",{children:"WORKING ON"})}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"twitter.com"}),Object(u.jsx)("li",{children:"twitter.com/randomusername"}),Object(u.jsx)("li",{children:"facebook.com"}),Object(u.jsx)("li",{children:"facebook.com/randomusername"})]})]})]})}var C=function(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),c=t[0],a=t[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("div",{className:c?"menuWrap":"menuWrapActive",children:Object(u.jsx)(x,{test:function(e){a(e)}})}),Object(u.jsx)("div",{className:"dappletsWrap",id:"100",children:Object(u.jsx)(T,{})}),Object(u.jsx)("div",{className:"headerWrap",children:Object(u.jsx)(y,{})}),Object(u.jsx)("div",{className:"rightMenuWrap",children:Object(u.jsx)(k,{})})]})};n.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(C,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.c327fa47.chunk.js.map