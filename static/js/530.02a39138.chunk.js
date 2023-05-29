"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[530],{530:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var r,c=t(861),i=t(439),o=t(757),a=t.n(o),u=t(791),s=t(689),l=t(87),p=t(260),h=t(168),f=t(444),d=t(184),v=(0,f.ZP)(l.rU)(r||(r=(0,h.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n\n  :hover {\n    color: lightgreen;\n  }\n"]))),x=function(n){var e=n.to,t=n.children;return(0,d.jsx)(v,{to:e,children:t})},g=t(984),m=function(n){var e=n.movie,t=e.original_title,r=e.genres,c=e.poster_path,i=e.vote_average,o=e.overview,a=c?"https://image.tmdb.org/t/p/w300/".concat(c):"";return(0,d.jsxs)("div",{style:{display:"Flex"},children:[(0,d.jsx)("div",{children:(0,d.jsx)("img",{src:a,alt:"NO poster"})}),(0,d.jsxs)("div",{style:{display:"block",marginLeft:"20px"},children:[(0,d.jsx)("h2",{style:{marginTop:"0"},children:t}),(0,d.jsxs)("ul",{children:[(0,d.jsxs)("li",{children:["Average: ",i]}),(0,d.jsxs)("li",{children:["Overview: ",o]}),r.length?(0,d.jsx)("li",{children:r.map((function(n){return(0,d.jsx)("p",{style:{display:"inline"},children:n.name},(0,g.x0)())})).reduce((function(n,e){return[n,", ",e]}))}):""]})]})]})},j=function(){var n,e,t=(0,u.useState)(null),r=(0,i.Z)(t,2),o=r[0],h=r[1],f=(0,s.UO)().id,v=null!==(n=null===(e=(0,s.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies",j=(0,u.useRef)(v);return(0,u.useEffect)((function(){var n=function(){var n=(0,c.Z)(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,p.Pg)(f).then((function(n){return h(n)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[f]),(0,d.jsxs)("div",{children:[(0,d.jsxs)(x,{to:j.current,children:["<-"," Back to movies"]}),(0,d.jsxs)("div",{children:[" ",o?(0,d.jsx)(m,{movie:o}):""]}),(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("h4",{children:"Additional Information"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(l.rU,{to:"cast",children:"Cast"})},(0,g.x0)()),(0,d.jsx)("li",{children:(0,d.jsx)(l.rU,{to:"reviews",children:"Reviews"})},(0,g.x0)())]})]}),(0,d.jsx)(s.j3,{})]})]})}},260:function(n,e,t){t.d(e,{Pg:function(){return d},Td:function(){return x},pv:function(){return h},tx:function(){return w},zv:function(){return m}});var r=t(861),c=t(757),i=t.n(c),o="bed58f4c3dbb6f0a7987e1858ff87c95",a="https://api.themoviedb.org/3",u="".concat(a,"/trending/all/day"),s="".concat(a,"/search/movie"),l="".concat(a,"/movie"),p={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZWQ1OGY0YzNkYmI2ZjBhNzk4N2UxODU4ZmY4N2M5NSIsInN1YiI6IjY0NmQwNWJhZDE4NTcyMDE4MDJlOGYyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4jCqRdZ9sRAbpi5bh6szcuiE2wlzfaZQtIR0L9NKky0"}};function h(){return f.apply(this,arguments)}function f(){return f=(0,r.Z)(i().mark((function n(){var e=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.length>0&&void 0!==e[0]?e[0]:1,n.next=3,fetch(u,p).then((function(n){return n.json()})).catch((function(n){return console.log(n)}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)}))),f.apply(this,arguments)}function d(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(l,"/").concat(e,"?api_key=").concat(o,"&language=en-US"),p).then((function(n){if(n.ok)return n.json();throw new Error}));case 3:return t=n.sent,n.abrupt("return",t);case 7:n.prev=7,n.t0=n.catch(0),alert("\u0422\u0443\u0442 \u0437\u043e\u0432\u0441\u0456\u043c \u043f\u043e\u0440\u043e\u0436\u043d\u044c\u043e");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function x(n){return g.apply(this,arguments)}function g(){return g=(0,r.Z)(i().mark((function n(e){var t,r=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=r.length>1&&void 0!==r[1]?r[1]:1,n.prev=1,n.next=4,fetch("".concat(s,"?api_key=").concat(o,"&language=en-US&query=").concat(e,"&page=").concat(t),p).then((function(n){return n.json()}));case 4:return n.abrupt("return",n.sent);case 7:n.prev=7,n.t0=n.catch(1),console.error("Smth wrong with api search fetch"+n.t0);case 10:case"end":return n.stop()}}),n,null,[[1,7]])}))),g.apply(this,arguments)}function m(n){return j.apply(this,arguments)}function j(){return(j=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(l,"/").concat(e,"/credits?api_key=").concat(o,"&language=en-US"),p).then((function(n){if(n.ok)return n.json();throw new Error}));case 3:return t=n.sent,n.abrupt("return",t);case 7:n.prev=7,n.t0=n.catch(0),alert("\u0422\u0443\u0442 \u0437\u043e\u0432\u0441\u0456\u043c \u043f\u043e\u0440\u043e\u0436\u043d\u044c\u043e");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function w(n){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(l,"/").concat(e,"/reviews?api_key=").concat(o,"&language=en-US"),p).then((function(n){if(n.ok)return n.json();throw new Error}));case 3:return t=n.sent,n.abrupt("return",t);case 7:n.prev=7,n.t0=n.catch(0),alert("\u0422\u0443\u0442 \u0437\u043e\u0432\u0441\u0456\u043c \u043f\u043e\u0440\u043e\u0436\u043d\u044c\u043e");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}},861:function(n,e,t){function r(n,e,t,r,c,i,o){try{var a=n[i](o),u=a.value}catch(s){return void t(s)}a.done?e(u):Promise.resolve(u).then(r,c)}function c(n){return function(){var e=this,t=arguments;return new Promise((function(c,i){var o=n.apply(e,t);function a(n){r(o,c,i,a,u,"next",n)}function u(n){r(o,c,i,a,u,"throw",n)}a(void 0)}))}}t.d(e,{Z:function(){return c}})},984:function(n,e,t){t.d(e,{x0:function(){return r}});var r=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=530.02a39138.chunk.js.map