(this.webpackJsonppokemon=this.webpackJsonppokemon||[]).push([[0],{71:function(e,t,n){},72:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(11),s=n.n(a),i=(n(71),n(72),n(5)),o=function(){return Object(i.jsx)("footer",{className:"page-footer font-small blue pt-4",children:Object(i.jsx)("div",{className:"footer-copyright text-center py-3",children:"\xa9 2021 test"})})},u=n(138),j=n(38),l=n(14),b=n.n(l),f=n(22),p=n(18),h=n(141),d=n(142),O=function(){var e=Object(c.useState)([]),t=Object(p.a)(e,2),n=t[0],r=t[1],a=function(){var e=Object(f.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon?limit=1118");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r(n.results);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){a()}),[]);var s=n.map((function(e){var t=e.name[0].toUpperCase();return console.log(t),Object(j.a)({firstLetter:/[0-9]/.test(t)?"0-9":t},e)}));return Object(i.jsxs)(c.Fragment,{children:[Object(i.jsx)("h1",{children:"Pokemon"}),Object(i.jsx)(d.a,{id:"grouped-pokemon",options:s.sort((function(e,t){return-t.firstLetter.localeCompare(e.firstLetter)})),groupBy:function(e){return e.firstLetter},getOptionLabel:function(e){return e.name},style:{width:300},renderInput:function(e){return Object(i.jsx)(h.a,Object(j.a)(Object(j.a)({},e),{},{label:"Buscador",variant:"outlined"}))}})]})},x=n(43),m=n(143),v=n(140),g=n(58),k=n(130),w=n(131),y=n(136),S=n(135),F=n(137),N=n(39),L=n(132),B=n(134),C=n(133),P=n(144),E=Object(k.a)({root:{maxWidth:345,color:"#212121"},title:{fontSize:20},pos:{marginBottom:12},media:{height:140,width:360,paddingTop:"56.25%"}}),I=function(e){var t=e.name,n=e.url,r=Object(c.useState)([]),a=Object(p.a)(r,2),s=a[0],o=a[1],u=Object(c.useState)([]),j=Object(p.a)(u,2),l=j[0],h=j[1],d=E(),O="https://img.pokemondb.net/artwork/large/".concat(t,".jpg"),x=function(){var e=Object(f.a)(b.a.mark((function e(t){var n,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,o(c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(f.a)(b.a.mark((function e(t){var n,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,fetch("https://pokeapi.co/api/v2/characteristic/"+t);case 4:return n=e.sent,e.next=7,n.json();case 7:c=e.sent,h(c.descriptions[1].description);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){x(n)}),[]),Object(c.useEffect)((function(){m(s.id)}),[]),Object(i.jsxs)(w.a,{className:d.root,xs:2,sm:3,md:5,children:[Object(i.jsxs)(L.a,{children:[Object(i.jsx)(C.a,{avatar:Object(i.jsx)(P.a,{"aria-label":"recipe",className:d.avatar,children:s.id}),title:l}),Object(i.jsx)(B.a,{className:d.media,image:O,title:t}),Object(i.jsx)(S.a,{color:"primary",children:Object(i.jsx)(N.a,{gutterBottom:!0,variant:"h5",component:"h2",children:t})})]}),Object(i.jsx)(y.a,{children:Object(i.jsx)(F.a,{size:"small",children:"Ver m\xe1s"})})]})},z=n(139),T=function(e){var t=e.allPokemons;return Object(i.jsx)(u.a,{container:!0,spacing:{xs:2,md:3},columns:{xs:4,sm:8,md:12},cellHeight:400,children:t.map((function(e){return Object(i.jsx)(z.a,{children:Object(i.jsx)(I,{name:e.name,url:e.url})})}))})};function A(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(v.a,{variant:"circle",width:40,height:40}),Object(i.jsx)(v.a,{variant:"text",height:120})]})}var D=function(){var e=Object(c.useRef)(),t=Object(c.useState)([]),n=Object(p.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"),o=Object(p.a)(s,2),j=o[0],l=(o[1],Object(c.useState)()),h=Object(p.a)(l,2),d=h[0],O=h[1],v=Object(g.a)({fetchSize:10,scroller:e,limit:10}),k=(v.start,v.end,v.isFetching),w=(v.doneFetching,v.setIsFetching),y=v.forceDonefetching,S=function(){var e=Object(f.a)(b.a.mark((function e(t){var n,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.json();case 5:return null==(c=e.sent).next&&y(),a([].concat(Object(x.a)(r),Object(x.a)(c.results))),w(!1),O(c.next),e.abrupt("return",c);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function F(){S(d)}return Object(c.useEffect)((function(){j&&S(j)}),[]),Object(i.jsx)("div",{className:"App",children:Object(i.jsx)("div",{className:"highlight",children:Object(i.jsxs)(u.a,{item:!0,container:!0,xs:12,justify:"center",alignItems:"center",children:[Object(i.jsxs)(m.a,{ref:e,children:[Object(i.jsx)(T,{allPokemons:r}),k&&Object(i.jsx)(A,{})]}),Object(i.jsx)("div",{children:F&&Object(i.jsx)("button",{onClick:F,children:"Ver mas"})})]})})})},J=function(){return Object(i.jsxs)(c.Fragment,{children:[Object(i.jsx)(N.a,{variant:"h2",children:"Listado Pokemones"}),Object(i.jsx)(u.a,{container:!0,children:Object(i.jsx)(O,{})}),Object(i.jsx)(u.a,{container:!0,direction:"column",justify:"center",className:"full",children:Object(i.jsx)(D,{})}),Object(i.jsx)(u.a,{container:!0,children:Object(i.jsx)(o,{})})]})};var V=function(){return Object(i.jsx)("div",{className:"App",style:{background:"0.5px solid rgb(233, 233, 233)"},children:Object(i.jsx)(J,{})})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,146)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(V,{})}),document.getElementById("root")),H()}},[[81,1,2]]]);
//# sourceMappingURL=main.62d3f24f.chunk.js.map