"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[530],{530:function(n,t,e){e.r(t),e.d(t,{default:function(){return m}});var r,c=e(861),i=e(439),a=e(757),o=e.n(a),u=e(791),s=e(689),l=e(87),p=e(260),h=e(168),f=e(444),d=e(184),v=(0,f.ZP)(l.rU)(r||(r=(0,h.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n\n  :hover {\n    color: lightgreen;\n  }\n"]))),x=function(n){var t=n.to,e=n.children;return(0,d.jsx)(v,{to:t,children:e})},g=e(984),j=function(n){var t=n.movie,e=t.original_title,r=t.genres,c=t.poster_path,i=t.vote_average,a=t.overview,o=c?"https://image.tmdb.org/t/p/w300/".concat(c):"";return(0,d.jsxs)("div",{style:{display:"Flex"},children:[(0,d.jsx)("div",{children:(0,d.jsx)("img",{src:o,alt:"NO poster"})}),(0,d.jsxs)("div",{style:{display:"block",marginLeft:"20px"},children:[(0,d.jsx)("h2",{style:{marginTop:"0"},children:e}),(0,d.jsxs)("ul",{children:[(0,d.jsxs)("li",{children:["Average: ",i]}),(0,d.jsxs)("li",{children:["Overview: ",a]}),r.length?(0,d.jsx)("li",{children:r.map((function(n){return(0,d.jsx)("p",{style:{display:"inline"},children:n.name},(0,g.x0)())})).reduce((function(n,t){return[n,", ",t]}))}):""]})]})]})},m=function(){var n,t,e=(0,u.useState)(null),r=(0,i.Z)(e,2),a=r[0],h=r[1],f=(0,s.UO)().id,v=null!==(n=null===(t=(0,s.TH)().state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/",m=(0,u.useRef)(v);return(0,u.useEffect)((function(){var n=function(){var n=(0,c.Z)(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,p.Pg)(f).then((function(n){return h(n)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[f]),(0,d.jsxs)("div",{children:[(0,d.jsxs)(x,{to:m.current,children:["<-"," Back to movies"]}),(0,d.jsxs)("div",{children:[" ",a&&(0,d.jsx)(j,{movie:a})]}),(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("h4",{children:"Additional Information"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(l.rU,{to:"cast",children:"Cast"})},(0,g.x0)()),(0,d.jsx)("li",{children:(0,d.jsx)(l.rU,{to:"reviews",children:"Reviews"})},(0,g.x0)())]})]}),(0,d.jsx)(s.j3,{})]})]})}},260:function(n,t,e){e.d(t,{Pg:function(){return d},Td:function(){return x},pv:function(){return h},tx:function(){return w},zv:function(){return j}});var r=e(861),c=e(757),i=e.n(c),a="bed58f4c3dbb6f0a7987e1858ff87c95",o="https://api.themoviedb.org/3",u="".concat(o,"/trending/all/day"),s="".concat(o,"/search/movie"),l="".concat(o,"/movie"),p={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZWQ1OGY0YzNkYmI2ZjBhNzk4N2UxODU4ZmY4N2M5NSIsInN1YiI6IjY0NmQwNWJhZDE4NTcyMDE4MDJlOGYyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4jCqRdZ9sRAbpi5bh6szcuiE2wlzfaZQtIR0L9NKky0"}};function h(){return f.apply(this,arguments)}function f(){return f=(0,r.Z)(i().mark((function n(){var t=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.length>0&&void 0!==t[0]?t[0]:1,n.next=3,fetch(u,p).then((function(n){return n.json()})).catch((function(n){return console.log(n)}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)}))),f.apply(this,arguments)}function d(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(l,"/").concat(t,"?api_key=").concat(a,"&language=en-US"),p).then((function(n){if(n.ok)return n.json();throw new Error}));case 3:return e=n.sent,n.abrupt("return",e);case 7:n.prev=7,n.t0=n.catch(0),alert("\u0422\u0443\u0442 \u0437\u043e\u0432\u0441\u0456\u043c \u043f\u043e\u0440\u043e\u0436\u043d\u044c\u043e");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function x(n){return g.apply(this,arguments)}function g(){return g=(0,r.Z)(i().mark((function n(t){var e,r=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=r.length>1&&void 0!==r[1]?r[1]:1,n.prev=1,n.next=4,fetch("".concat(s,"?api_key=").concat(a,"&language=en-US&query=").concat(t,"&page=").concat(e),p).then((function(n){return n.json()}));case 4:return n.abrupt("return",n.sent);case 7:n.prev=7,n.t0=n.catch(1),console.error("Smth wrong with api search fetch"+n.t0);case 10:case"end":return n.stop()}}),n,null,[[1,7]])}))),g.apply(this,arguments)}function j(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(l,"/").concat(t,"/credits?api_key=").concat(a,"&language=en-US"),p).then((function(n){if(n.ok)return n.json();throw new Error}));case 3:return e=n.sent,n.abrupt("return",e);case 7:n.prev=7,n.t0=n.catch(0),alert("\u0422\u0443\u0442 \u0437\u043e\u0432\u0441\u0456\u043c \u043f\u043e\u0440\u043e\u0436\u043d\u044c\u043e");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function w(n){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(l,"/").concat(t,"/reviews?api_key=").concat(a,"&language=en-US"),p).then((function(n){if(n.ok)return n.json();throw new Error}));case 3:return e=n.sent,n.abrupt("return",e);case 7:n.prev=7,n.t0=n.catch(0),alert("\u0422\u0443\u0442 \u0437\u043e\u0432\u0441\u0456\u043c \u043f\u043e\u0440\u043e\u0436\u043d\u044c\u043e");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}},861:function(n,t,e){function r(n,t,e,r,c,i,a){try{var o=n[i](a),u=o.value}catch(s){return void e(s)}o.done?t(u):Promise.resolve(u).then(r,c)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(c,i){var a=n.apply(t,e);function o(n){r(a,c,i,o,u,"next",n)}function u(n){r(a,c,i,o,u,"throw",n)}o(void 0)}))}}e.d(t,{Z:function(){return c}})},984:function(n,t,e){e.d(t,{x0:function(){return r}});var r=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,t){return n+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=530.f4f2db25.chunk.js.map