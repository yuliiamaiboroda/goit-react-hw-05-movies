"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[375],{375:function(n,e,t){t.r(e),t.d(e,{default:function(){return E}});var r,i,o,a,c,s,l,d,p,u,f=t(885),h=t(791),x=t(739),m=t(678),g=t(168),b=t(444),v=t(731),Z=b.ZP.section(r||(r=(0,g.Z)(["\npadding: 20px;\npadding-bottom: 0;\n"]))),j=(0,b.ZP)(v.rU)(i||(i=(0,g.Z)(["\ndisplay: inline-block;\npadding: 2px 7px;\ntext-decoration: none;\ntext-align: center;\nborder: 1px #001F54 solid;\nborder-radius: 5px;\ncolor: #EAECFF;\nfont-size: 14px;\nfont-family: 'Abel', sans-serif;\nbackground-color: #0A82F3;\nwidth: 50px;\nmargin-bottom: 10px;\n:hover, :focus{\n    background-color: #29BFAB;\n}\n"]))),k=b.ZP.div(o||(o=(0,g.Z)(["\ndisplay: flex;\ngap: 15px;\n"]))),y=b.ZP.img(a||(a=(0,g.Z)(["\nheight: 400px;\nwidth: 300px;\nobject-fit: cover;\nborder-radius: 5px;\ntransition: scale linear 300ms ;\n:hover,:focus{\n    scale: 1.04;\n} \n"]))),w=b.ZP.h2(c||(c=(0,g.Z)(["\nfont-family: 'Abel', sans-serif;\ncolor: #001F54;\n"]))),A=b.ZP.p(s||(s=(0,g.Z)(["\nfont-family: 'Abel', sans-serif;\ncolor: #1226A7;\n"]))),_=b.ZP.b(l||(l=(0,g.Z)(["\nfont-family: 'Abel', sans-serif;\ncolor: #561593;\n"]))),P=b.ZP.div(d||(d=(0,g.Z)(['\npadding: 20px 0;\n:before , :after{\n  content: "";\n  display: block;\n  width: 100%;\n  height: 1px;\n  background: #001F54;\n  left: 0;\n  position: absolute;\n}\n']))),F=b.ZP.ul(p||(p=(0,g.Z)(["\ndisplay: flex;\ngap: 10px;\nlist-style: none;\nmargin: 0;\npadding: 0;\npadding-bottom: 20px;\n"]))),U=(0,b.ZP)(v.rU)(u||(u=(0,g.Z)(["\nfont-family: 'Abel', sans-serif;\ncolor: #561593;\ntext-decoration: none;\n\n:hover,\n:focus{\ncolor: #12A3A3;\n}\n"]))),C=t(184);function E(){var n=(0,h.useState)(null),e=(0,f.Z)(n,2),t=e[0],r=e[1],i=(0,x.TH)(),o=(0,x.UO)().id,a=(0,h.useRef)(i.state);return(0,h.useEffect)((function(){o&&(0,m.Wn)(o).then((function(n){var e=n.data;r(e)})).catch(console.log)}),[o]),(0,C.jsx)(Z,{children:t&&(0,C.jsxs)(C.Fragment,{children:[a.current&&(0,C.jsx)(j,{to:"".concat(a.current.pathname),children:"BACK"}),(0,C.jsxs)(k,{children:[(0,C.jsx)(y,{src:"https://image.tmdb.org/t/p/w500/".concat(t.poster_path),alt:t.title,width:"300"}),(0,C.jsxs)("div",{children:[(0,C.jsx)(w,{children:t.title}),(0,C.jsxs)(A,{children:["User score: ",(0,C.jsx)("span",{children:t.vote_average.toFixed(2)})]}),(0,C.jsx)(_,{children:"Overview"}),(0,C.jsx)(A,{children:t.overview}),(0,C.jsx)(_,{children:"Genres"}),(0,C.jsx)(A,{children:t.genres.map((function(n){var e=n.name;return"".concat(e," ")}))})]})]}),(0,C.jsxs)(P,{children:[(0,C.jsx)(A,{children:"Additional information"}),(0,C.jsxs)(F,{children:[(0,C.jsx)("li",{children:(0,C.jsx)(U,{to:"cast",children:"Cast"})}),(0,C.jsx)("li",{children:(0,C.jsx)(U,{to:"reviews",children:"Reviews "})})]})]}),(0,C.jsx)(h.Suspense,{fallback:null,children:(0,C.jsx)(x.j3,{})})]})})}},678:function(n,e,t){t.d(e,{LE:function(){return o},Up:function(){return a},Wn:function(){return c},h4:function(){return s},it:function(){return l}});var r=t(388),i="d088d1a85817dcb4d1c5dc39bb6a0114";r.Z.defaults.baseURL="https://api.themoviedb.org/3/";function o(){return r.Z.get("".concat("trending/movie/day"),{params:{api_key:i}})}function a(n){return r.Z.get("".concat("search/movie"),{params:{api_key:i,query:n}})}function c(n){return r.Z.get("movie/".concat(n),{params:{api_key:i}})}function s(n){return r.Z.get("movie/".concat(n,"/credits"),{params:{api_key:i}})}function l(n){return r.Z.get("movie/".concat(n,"/reviews"),{params:{api_key:i}})}}}]);
//# sourceMappingURL=375.3dc80751.chunk.js.map