(this.webpackJsonpdapplets=this.webpackJsonpdapplets||[]).push([[0],{22:function(e,c,t){},23:function(e,c,t){},43:function(e,c,t){},44:function(e,c,t){},45:function(e,c,t){},46:function(e,c,t){},47:function(e,c,t){"use strict";t.r(c);var s=t(1),i=t.n(s),a=t(17),j=t.n(a),n=(t(22),t.p+"static/media/Logo.b162600e.svg"),l=t.p+"static/media/arrow-right.841b27e6.svg",r=t.p+"static/media/codesandbox.375124aa.svg",d=t.p+"static/media/Vector.f77052b5.svg",b=t.p+"static/media/grid.4eb70c25.svg",O=t.p+"static/media/users.32027de1.svg",o=t.p+"static/media/trending-up.86d6ff3f.svg",x=t.p+"static/media/closeBtnTags.9a146af2.svg",h=(t(23),t(0));function m(){return Object(h.jsxs)("div",{className:"menu",children:[Object(h.jsxs)("div",{className:"logo",children:[Object(h.jsxs)("div",{className:"logoTitle",children:[Object(h.jsx)("img",{src:n}),Object(h.jsx)("p",{children:"Dapplets Project."})]}),Object(h.jsx)("img",{src:l})]}),Object(h.jsxs)("div",{className:"sideIcons",children:[Object(h.jsxs)("div",{className:"active",children:[Object(h.jsx)("img",{src:r}),Object(h.jsx)("p",{children:"All Dapplets"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{src:d}),Object(h.jsx)("p",{children:"Editor\u2019s Choice"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{src:b}),Object(h.jsx)("p",{children:"Essential Dapplets"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{src:O}),Object(h.jsx)("p",{children:"Social Networks"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{src:o}),Object(h.jsx)("p",{children:"Financial Dapplets"})]})]}),Object(h.jsxs)("div",{className:"myLists",children:[Object(h.jsx)("p",{children:Object(h.jsx)("b",{children:"My lists"})}),Object(h.jsx)("p",{children:"TOP-10 Twitter Dapplets (Me)"}),Object(h.jsx)("p",{children:"Best Financial dapplets by Jack (Jack)"}),Object(h.jsx)("p",{children:"TOP-10 Twitter Dapplets (Me)"})]}),Object(h.jsxs)("div",{className:"myTags",children:[Object(h.jsx)("div",{className:"title",children:Object(h.jsx)("p",{children:Object(h.jsx)("b",{children:"My tags"})})}),Object(h.jsxs)("div",{className:"tags",children:[Object(h.jsxs)("div",{className:"label",children:[Object(h.jsx)("p",{children:"Twitter"}),Object(h.jsx)("img",{src:x})]}),Object(h.jsxs)("div",{className:"label",children:[Object(h.jsx)("p",{children:"SocialMedia"}),Object(h.jsx)("img",{src:x})]}),Object(h.jsxs)("div",{className:"label",children:[Object(h.jsx)("p",{children:"Top 10"}),Object(h.jsx)("img",{src:x})]}),Object(h.jsxs)("div",{className:"label",children:[Object(h.jsx)("p",{children:"Finances"}),Object(h.jsx)("img",{src:x})]}),Object(h.jsxs)("div",{className:"label",children:[Object(h.jsx)("p",{children:"Media"}),Object(h.jsx)("img",{src:x})]}),Object(h.jsxs)("div",{className:"label",children:[Object(h.jsx)("p",{children:"Test"}),Object(h.jsx)("img",{src:x})]}),Object(h.jsxs)("div",{className:"label",children:[Object(h.jsx)("p",{children:"ToDo"}),Object(h.jsx)("img",{src:x})]})]})]})]})}var p=t(8),u=t(2);var v=t(6),g=t.n(v),N=(t(43),t.p+"static/media/Group 14.6dd0a1f7.svg");t(44);function f(e){var c=e.dataItems,t=Object(s.useState)(!1),i=Object(u.a)(t,2),a=i[0],j=(i[1],Object(s.useState)("")),n=Object(u.a)(j,2),l=n[0],r=n[1],d=[{id:"0",name:"Games"},{id:"1",name:"Twitter"},{id:"2",name:"Social Media"},{id:"3",name:"Top 10"},{id:"4",name:"Finances"},{id:"5",name:"Media"},{id:"6",name:"Test"},{id:"7",name:"ToDo"}];return c.map((function(e,c){return Object(h.jsxs)("div",{className:"item",children:[Object(h.jsx)("img",{className:"drag-btn",alt:"drag-btn",src:N}),Object(h.jsx)("img",{className:"icon",alt:"icons",src:" https://dapplets-hiring-api.herokuapp.com/api/v1/files/"+e.icon}),Object(h.jsxs)("div",{className:"info",children:[Object(h.jsx)("p",{className:"title",children:e.title}),Object(h.jsx)("p",{className:"address",children:e.address})]}),Object(h.jsx)("p",{className:"description",children:e.description}),Object(h.jsx)("p",{className:"author",children:e.author}),Object(h.jsx)("p",{className:"tags",children:e.tags.map((function(e,c){var t;return Object(h.jsxs)("div",{className:"label",children:[Object(h.jsx)("p",{children:null===(t=d.filter((function(c){return c.id.includes(e)}))[0])||void 0===t?void 0:t.name}),Object(h.jsx)("img",{src:x})]},c)}))}),Object(h.jsx)("button",{className:localStorage.getItem(e.id),onClick:function(){return c=e.id,void(l.includes(c)?(localStorage.removeItem(c),r("")):(r(c),localStorage.setItem(c,"install")));var c}}),a&&Object(h.jsxs)("div",{className:"moreInfo",children:[Object(h.jsxs)("div",{className:"a",children:[Object(h.jsx)("p",{className:"text_1",children:"Aliquam sit"}),Object(h.jsx)("p",{})]}),Object(h.jsxs)("div",{className:"b",children:[Object(h.jsxs)("div",{className:"text_2",children:[Object(h.jsx)("p",{children:"Semper neque"}),Object(h.jsx)("p",{})]}),Object(h.jsxs)("div",{className:"text_3",children:[Object(h.jsx)("p",{children:"Leo ipsum."}),Object(h.jsx)("p",{})]}),Object(h.jsxs)("div",{className:"text_4",children:[Object(h.jsx)("p",{children:"Elit sagittis et."}),Object(h.jsx)("p",{})]})]}),Object(h.jsxs)("div",{className:"c",children:[Object(h.jsxs)("div",{className:"text_5",children:[Object(h.jsx)("p",{children:"Aliquam."}),Object(h.jsx)("p",{})]}),Object(h.jsxs)("div",{className:"text_6",children:[Object(h.jsx)("p",{children:"In euismod."}),Object(h.jsx)("p",{})]}),Object(h.jsxs)("div",{className:"text_7",children:[Object(h.jsx)("p",{children:"Justo amet."}),Object(h.jsx)("p",{})]})]}),Object(h.jsxs)("div",{className:"d",children:[Object(h.jsxs)("div",{className:"text_8",children:[Object(h.jsx)("p",{children:"Urna."}),Object(h.jsx)("p",{})]}),Object(h.jsxs)("div",{className:"text_9",children:[Object(h.jsx)("p",{children:"Nam diam."}),Object(h.jsx)("p",{})]})]})]})]},c)}))}function S(){var e=Object(s.useState)([]),c=Object(u.a)(e,2),t=c[0],i=c[1],a=Object(s.useState)(""),j=Object(u.a)(a,2),n=j[0],l=j[1],r=Object(s.useState)(!0),d=Object(u.a)(r,2),b=d[0],O=d[1],o=Object(s.useState)(0),x=Object(u.a)(o,2),m=x[0],v=x[1],N=Object(s.useState)(15),S=Object(u.a)(N,2),T=S[0],w=(S[1],Object(s.useState)("")),E=Object(u.a)(w,2),M=E[0],k=E[1],y=Object(s.useState)("released"),D=Object(u.a)(y,2),C=D[0],I=D[1],_=Object(s.useState)("DESC"),A=Object(u.a)(_,2),L=A[0],F=A[1],G=Object(s.useState)([]),P=Object(u.a)(G,2),q=P[0],B=P[1],J=Object(s.useState)(!1),W=Object(u.a)(J,2),R=W[0],H=W[1],U=function(e,c){var t=Object(s.useState)(e),i=Object(u.a)(t,2),a=i[0],j=i[1];return Object(s.useEffect)((function(){var t=setTimeout((function(){j(e)}),c);return function(){clearTimeout(t)}}),[e]),a}(M,500),Y=Object(s.useState)(""),K=Object(u.a)(Y,2),V=K[0],z=(K[1],Object(s.useState)(!1)),Q=Object(u.a)(z,2),X=(Q[0],Q[1],Object(s.useState)("")),Z=Object(u.a)(X,2),$=(Z[0],Z[1]);Object(s.useEffect)((function(){g.a.get("https://dapplets-hiring-api.herokuapp.com/api/v1/dapplets?start=".concat(m,"&limit=").concat(T,'&sort=[{"property": "').concat(C,'", "direction": "').concat(L,'"}]')).then((function(e){return i(e.data.data)})).catch((function(e){e.response?console.log(e.response):e.request&&console.log(e.request)})).finally((function(){return l(!0)}))}),[C,L]),Object(s.useEffect)((function(){console.log(V)}),[V]),Object(s.useEffect)((function(){b&&g()({url:"https://dapplets-hiring-api.herokuapp.com/api/v1/dapplets?start=".concat(m,"&limit=").concat(T,'&sort=[{"property": "').concat(C,'", "direction": "').concat(L,'"}]'),onDownloadProgress:function(e){var c=Math.round(e.loaded/e.total*100);$(c)}}).then((function(e){i([].concat(Object(p.a)(t),Object(p.a)(e.data.data)))})).then((function(){return v((function(e){return e+5}))})).finally((function(){$("0"),O(!1)}))}),[b]),Object(s.useEffect)((function(){return document.addEventListener("scroll",ee),function(){document.removeEventListener("scroll",ee)}}),[]);var ee=function(e){e.target.documentElement.scrollHeight-(e.target.documentElement.scrollTop+window.innerHeight)<100&&O(!0)};return Object(s.useEffect)((function(){U?(H(!0),g.a.get('https://dapplets-hiring-api.herokuapp.com/api/v1/dapplets?start=0&limit=15&filter=[{"property":"title","value":"'.concat(M,'"}]')).then((function(e){return e.data.data})).then((function(e){return e.filter((function(e){return e.title.toLowerCase().includes(M.toLowerCase())}))})).then((function(e){H(!1),B(e)}))):B([])}),[U]),Object(h.jsxs)("div",{className:"dapplets",id:"1",children:[Object(h.jsxs)("div",{className:"header",children:[Object(h.jsx)("input",{className:"search",placeholder:"Search",onChange:function(e){return k(e.target.value)}}),Object(h.jsxs)("select",{className:"sortByFirst",onChange:function(e){return I(e.target.value)},children:[Object(h.jsx)("option",{value:"released",children:"Released Date"}),Object(h.jsx)("option",{value:"rating",children:"Rating"}),Object(h.jsx)("option",{value:"downloads",children:"Downloads"})]}),Object(h.jsxs)("select",{className:"sortBySecond",onChange:function(e){return F(e.target.value)},children:[Object(h.jsx)("option",{value:"DESC",children:"Descending"}),Object(h.jsx)("option",{value:"ASC",children:"Ascending"})]})]}),Object(h.jsxs)("div",{className:"test",children:[R&&Object(h.jsx)("div",{children:"Searching ..."}),n&&Object(h.jsx)(f,{dataItems:q.length>=1?q:t})]})]})}var T=t.p+"static/media/clarity_cloud-network-line.dddfba07.svg",w=t.p+"static/media/carbon_settings-adjust.1dfffe4d.svg";t(45);function E(){return Object(h.jsxs)("div",{className:"head",children:[Object(h.jsxs)("div",{className:"extensions",children:[Object(h.jsx)("img",{src:T}),Object(h.jsx)("p",{children:"Extension state: Active"})]}),Object(h.jsxs)("div",{className:"settings",children:[Object(h.jsx)("img",{src:w}),Object(h.jsx)("p",{children:"Settings"})]})]})}var M=t.p+"static/media/arrow-left.17f80631.svg";t(46);function k(){return Object(h.jsxs)("div",{className:"rightMenu",children:[Object(h.jsx)("div",{className:"back",children:Object(h.jsx)("img",{src:M})}),Object(h.jsxs)("div",{className:"dappletsettings",children:[Object(h.jsx)("div",{className:"settingtitle",children:Object(h.jsx)("p",{children:Object(h.jsx)("b",{children:"DAPPLET SETTINGS"})})}),Object(h.jsxs)("div",{className:"newlist",children:[Object(h.jsx)("p",{children:"Create new list"}),Object(h.jsxs)("div",{className:"inputlist",children:[Object(h.jsx)("input",{placeholder:"List Name"}),Object(h.jsx)("button",{children:"Create"})]})]}),Object(h.jsxs)("div",{className:"newtag",children:[Object(h.jsx)("p",{children:"New tag"}),Object(h.jsxs)("div",{className:"inputtag",children:[Object(h.jsx)("input",{placeholder:"Tag nameList Name"}),Object(h.jsx)("button",{children:"Create"})]})]})]}),Object(h.jsxs)("div",{className:"myTags",children:[Object(h.jsx)("div",{className:"title",children:Object(h.jsx)("p",{children:Object(h.jsx)("b",{children:"MY TAGS"})})}),Object(h.jsxs)("div",{className:"tags",children:[Object(h.jsxs)("div",{className:"label",children:[Object(h.jsx)("p",{children:"Twitter"}),Object(h.jsx)("img",{src:x})]}),Object(h.jsxs)("div",{className:"label",children:[Object(h.jsx)("p",{children:"SocialMedia"}),Object(h.jsx)("img",{src:x})]}),Object(h.jsxs)("div",{className:"label",children:[Object(h.jsx)("p",{children:"Top 10"}),Object(h.jsx)("img",{src:x})]}),Object(h.jsxs)("div",{className:"label",children:[Object(h.jsx)("p",{children:"Finances"}),Object(h.jsx)("img",{src:x})]})]})]}),Object(h.jsxs)("div",{className:"coTags",children:[Object(h.jsx)("div",{className:"title",children:Object(h.jsx)("p",{children:Object(h.jsx)("b",{children:"COMMUNITY TAGS"})})}),Object(h.jsxs)("div",{className:"tags",children:[Object(h.jsxs)("div",{className:"label",children:[Object(h.jsx)("p",{children:"Social"}),Object(h.jsx)("img",{src:x})]}),Object(h.jsxs)("div",{className:"label",children:[Object(h.jsx)("p",{children:"Top 100"}),Object(h.jsx)("img",{src:x})]}),Object(h.jsxs)("div",{className:"label",children:[Object(h.jsx)("p",{children:"Testing"}),Object(h.jsx)("img",{src:x})]}),Object(h.jsxs)("div",{className:"label",children:[Object(h.jsx)("p",{children:"Favourites"}),Object(h.jsx)("img",{src:x})]})]})]}),Object(h.jsxs)("div",{className:"workon",children:[Object(h.jsx)("p",{children:Object(h.jsx)("b",{children:"WORKING ON"})}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:"twitter.com"}),Object(h.jsx)("li",{children:"twitter.com/randomusername"}),Object(h.jsx)("li",{children:"facebook.com"}),Object(h.jsx)("li",{children:"facebook.com/randomusername"})]})]})]})}var y=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("div",{className:"menuWrap",children:Object(h.jsx)(m,{})}),Object(h.jsx)("div",{className:"dappletsWrap",children:Object(h.jsx)(S,{})}),Object(h.jsx)("div",{className:"headerWrap",children:Object(h.jsx)(E,{})}),Object(h.jsx)("div",{className:"rightMenuWrap",children:Object(h.jsx)(k,{})})]})};j.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(y,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.352b663c.chunk.js.map