(this.webpackJsonpdapplets=this.webpackJsonpdapplets||[]).push([[0],{22:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(17),i=c.n(n),r=(c(22),c(8)),j=c(2);var l=c(5),o=c.n(l),d=(c(41),c.p+"static/media/Group 14.6dd0a1f7.svg"),u=(c(42),c(0));function p(e){var t=e.dataItems,c=Object(s.useState)(!1),a=Object(j.a)(c,2),n=a[0],i=a[1];return t.map((function(e,t){return Object(u.jsxs)("div",{className:"item",onClick:function(){return i(!n)},children:[Object(u.jsx)("img",{className:"drag-btn",alt:"drag-btn",src:d}),Object(u.jsx)("img",{className:"icon",alt:"icons",src:" https://dapplets-hiring-api.herokuapp.com/api/v1/files/"+e.icon}),Object(u.jsxs)("div",{className:"info",children:[Object(u.jsx)("p",{className:"title",children:e.title}),Object(u.jsx)("p",{className:"address",children:e.address})]}),Object(u.jsx)("p",{className:"description",children:e.description}),Object(u.jsx)("p",{className:"author",children:e.author}),Object(u.jsx)("p",{className:"tags",children:e.tags}),Object(u.jsx)("button",{children:"install"}),n&&Object(u.jsxs)("div",{className:"moreInfo",children:[Object(u.jsxs)("div",{className:"a",children:[Object(u.jsx)("p",{className:"text_1",children:"Aliquam sit"}),Object(u.jsx)("p",{})]}),Object(u.jsxs)("div",{className:"b",children:[Object(u.jsxs)("div",{className:"text_2",children:[Object(u.jsx)("p",{children:"Semper neque"}),Object(u.jsx)("p",{})]}),Object(u.jsxs)("div",{className:"text_3",children:[Object(u.jsx)("p",{children:"Leo ipsum."}),Object(u.jsx)("p",{})]}),Object(u.jsxs)("div",{className:"text_4",children:[Object(u.jsx)("p",{children:"Elit sagittis et."}),Object(u.jsx)("p",{})]})]}),Object(u.jsxs)("div",{className:"c",children:[Object(u.jsxs)("div",{className:"text_5",children:[Object(u.jsx)("p",{children:"Aliquam."}),Object(u.jsx)("p",{})]}),Object(u.jsxs)("div",{className:"text_6",children:[Object(u.jsx)("p",{children:"In euismod."}),Object(u.jsx)("p",{})]}),Object(u.jsxs)("div",{className:"text_7",children:[Object(u.jsx)("p",{children:"Justo amet."}),Object(u.jsx)("p",{})]})]}),Object(u.jsxs)("div",{className:"d",children:[Object(u.jsxs)("div",{className:"text_8",children:[Object(u.jsx)("p",{children:"Urna."}),Object(u.jsx)("p",{})]}),Object(u.jsxs)("div",{className:"text_9",children:[Object(u.jsx)("p",{children:"Nam diam."}),Object(u.jsx)("p",{})]})]})]})]},t)}))}function b(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(""),i=Object(j.a)(n,2),l=i[0],d=i[1],b=Object(s.useState)("true"),O=Object(j.a)(b,2),h=O[0],x=O[1],m=Object(s.useState)(0),f=Object(j.a)(m,2),v=f[0],g=f[1],N=Object(s.useState)(10),S=Object(j.a)(N,2),E=S[0],y=(S[1],Object(s.useState)("")),C=Object(j.a)(y,2),_=C[0],k=C[1],w=Object(s.useState)("released"),A=Object(j.a)(w,2),D=A[0],I=A[1],L=Object(s.useState)("DESC"),q=Object(j.a)(L,2),B=q[0],J=q[1],T=Object(s.useState)([]),H=Object(j.a)(T,2),R=H[0],F=H[1],G=Object(s.useState)(!1),M=Object(j.a)(G,2),U=M[0],z=M[1],K=function(e,t){var c=Object(s.useState)(e),a=Object(j.a)(c,2),n=a[0],i=a[1];return Object(s.useEffect)((function(){var c=setTimeout((function(){i(e)}),t);return function(){clearTimeout(c)}}),[e]),n}(_,500);Object(s.useEffect)((function(){o.a.get('https://dapplets-hiring-api.herokuapp.com/api/v1/dapplets?start=0&limit=10&sort=[{"property": "'.concat(D,'", "direction": "').concat(B,'"}]')).then((function(e){return a(e.data.data)})).finally((function(){return d(!0)}))}),[D]),Object(s.useEffect)((function(){B&&o.a.get('https://dapplets-hiring-api.herokuapp.com/api/v1/dapplets?start=0&limit=10&sort=[{"property": "'.concat(D,'", "direction": "').concat(B,'"}]')).then((function(e){return a(e.data.data)}))}),[B]),Object(s.useEffect)((function(){h&&o.a.get("https://dapplets-hiring-api.herokuapp.com/api/v1/dapplets?start=".concat(v,"&limit=").concat(E,'&sort=[{"property": "').concat(D,'", "direction": "').concat(B,'"}]')).then((function(e){a([].concat(Object(r.a)(c),Object(r.a)(e.data.data)))})).then((function(){return g((function(e){return e+5}))})).finally((function(){return x(!1)}))}),[h]),Object(s.useEffect)((function(){return document.addEventListener("scroll",P),function(){document.removeEventListener("scroll",P)}}),[]);var P=function(e){e.target.documentElement.scrollHeight-(e.target.documentElement.scrollTop+window.innerHeight)<100&&x(!0)};return Object(s.useEffect)((function(){K?(z(!0),o.a.get('https://dapplets-hiring-api.herokuapp.com/api/v1/dapplets?start=0&limit=15&filter=[{"property":"title","value":"'.concat(_,'"}]')).then((function(e){return e.data.data})).then((function(e){return e.filter((function(e){return e.title.toLowerCase().includes(_.toLowerCase())}))})).then((function(e){z(!1),console.log(e),F(e)}))):F([])}),[K]),Object(u.jsxs)("div",{className:"dapplets",children:[Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)("input",{className:"search",placeholder:"Search",onChange:function(e){return k(e.target.value)}}),Object(u.jsxs)("select",{className:"sortByFirst",onChange:function(e){return I(e.target.value)},children:[Object(u.jsx)("option",{value:"released",children:"Released Date"}),Object(u.jsx)("option",{value:"rating",children:"Rating"}),Object(u.jsx)("option",{value:"downloads",children:"Downloads"})]}),Object(u.jsxs)("select",{className:"sortBySecond",onChange:function(e){return J(e.target.value)},children:[Object(u.jsx)("option",{value:"DESC",children:"Descending"}),Object(u.jsx)("option",{value:"ASC",children:"Ascending"})]})]}),U&&Object(u.jsx)("div",{children:"Searching ..."}),l&&Object(u.jsx)(p,{dataItems:R.length>=1?R:c})]})}var O=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("div",{className:"loader"}),Object(u.jsx)(b,{})]})};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.5fa81967.chunk.js.map