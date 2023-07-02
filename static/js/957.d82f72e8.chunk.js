"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[957],{242:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(861),a=r(671),s=r(144),i=r(757),c=r.n(i),o=r(243),u=function(){function e(t){(0,a.Z)(this,e),this.apiKey=t,this.baseURL="https://api.themoviedb.org/3"}return(0,s.Z)(e,[{key:"getTrendingMovies",value:function(){var e=(0,n.Z)(c().mark((function e(){var t,r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(this.baseURL,"/trending/movie/day"),r={params:{api_key:this.apiKey,language:"en-US"}},e.next=4,o.Z.get(t,r);case 4:return n=e.sent,e.abrupt("return",n.data.results);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"searchMovies",value:function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(this.baseURL,"/search/movie"),n={params:{api_key:this.apiKey,language:"en-US",query:t}},e.next=4,o.Z.get(r,n);case 4:return a=e.sent,e.abrupt("return",a.data.results);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getMovieDetails",value:function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(this.baseURL,"/movie/").concat(t),n={params:{api_key:this.apiKey,language:"en-US"}},e.next=4,o.Z.get(r,n);case 4:return a=e.sent,e.abrupt("return",a.data);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getMovieCredits",value:function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(this.baseURL,"/movie/").concat(t,"/credits"),n={params:{api_key:this.apiKey}},e.next=4,o.Z.get(r,n);case 4:return a=e.sent,e.abrupt("return",a.data);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getMovieReviews",value:function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(this.baseURL,"/movie/").concat(t,"/reviews"),n={params:{api_key:this.apiKey,language:"en-US"}},e.next=4,o.Z.get(r,n);case 4:return a=e.sent,e.abrupt("return",a.data.results);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}()},957:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var n=r(861),a=r(439),s=r(757),i=r.n(s),c=r(791),o=r(689),u=r(87),l=r(242),v=r(184),p=function(e){var t=e.genres;return(0,v.jsx)("div",{children:t.map((function(e,t){return(0,v.jsx)("span",{children:e},t)}))})},h={movieDetails:"MoviesDetails_movieDetails__tf7Ny",linkBack:"MoviesDetails_linkBack__8qZvJ",movieWrapper:"MoviesDetails_movieWrapper__3aYYM",movieImg:"MoviesDetails_movieImg__LpRY1",movieInfo:"MoviesDetails_movieInfo__YbnRW"},m=function(){var e,t=(0,o.TH)(),r=(0,o.UO)().movieId,s=(0,c.useState)(null),m=(0,a.Z)(s,2),d=m[0],f=m[1],x=(0,c.useState)([]),g=(0,a.Z)(x,2),k=g[0],_=g[1],y=(0,c.useState)(0),w=(0,a.Z)(y,2),j=w[0],b=w[1];return(0,c.useEffect)((function(){var e=function(){var e=(0,n.Z)(i().mark((function e(){var t,n,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=new l.Z("a2eec4063d87f4e8e5e4230e87b07946"),e.next=4,t.getMovieDetails(r);case 4:n=e.sent,a=n.genres.map((function(e){return e.name})),f(n),_(a),b(Math.round(10*n.vote_average)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();r&&e()}),[r]),d?(0,v.jsxs)("div",{className:h.movieDetails,children:[(0,v.jsx)(u.rU,{className:h.linkBack,to:null===(e=t.state)||void 0===e?void 0:e.from,children:"\u2190 Go back"}),(0,v.jsxs)("div",{className:h.movieWrapper,children:[(0,v.jsx)("img",{className:h.movieImg,src:"https://image.tmdb.org/t/p/w185/".concat(d.poster_path),alt:d.title}),(0,v.jsxs)("div",{className:h.movieInfo,children:[(0,v.jsxs)("h1",{className:h.movieTitle,children:[d.title," (",d.release_date.slice(0,4),")"]}),(0,v.jsxs)("p",{className:h.movietext,children:["User score: ",j,"%"]}),(0,v.jsx)("h2",{className:h.movieTitleInfo,children:"Overview"}),(0,v.jsx)("p",{className:h.moviemovietext,children:d.overview}),(0,v.jsx)("h2",{className:h.movieTitleInfo,children:"Genres"}),(0,v.jsx)(p,{genres:k})]})]}),(0,v.jsx)("h2",{className:h.movieAdditional,children:"Additional Information"}),(0,v.jsxs)("ul",{children:[(0,v.jsx)("li",{children:(0,v.jsx)(u.rU,{to:"cast",children:"Cast"})}),(0,v.jsx)("li",{children:(0,v.jsx)(u.rU,{to:"reviews",children:"Reviews"})})]}),(0,v.jsx)(o.j3,{})]}):(0,v.jsx)("div",{children:"Loading..."})}}}]);
//# sourceMappingURL=957.d82f72e8.chunk.js.map