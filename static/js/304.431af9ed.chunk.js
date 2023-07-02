"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[304],{242:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(861),a=r(671),s=r(144),i=r(757),c=r.n(i),u=r(243),o=function(){function e(t){(0,a.Z)(this,e),this.apiKey=t,this.baseURL="https://api.themoviedb.org/3"}return(0,s.Z)(e,[{key:"getTrendingMovies",value:function(){var e=(0,n.Z)(c().mark((function e(){var t,r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(this.baseURL,"/trending/movie/day"),r={params:{api_key:this.apiKey,language:"en-US"}},e.next=4,u.Z.get(t,r);case 4:return n=e.sent,e.abrupt("return",n.data.results);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"searchMovies",value:function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(this.baseURL,"/search/movie"),n={params:{api_key:this.apiKey,language:"en-US",query:t}},e.next=4,u.Z.get(r,n);case 4:return a=e.sent,e.abrupt("return",a.data.results);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getMovieDetails",value:function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(this.baseURL,"/movie/").concat(t),n={params:{api_key:this.apiKey,language:"en-US"}},e.next=4,u.Z.get(r,n);case 4:return a=e.sent,e.abrupt("return",a.data);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getMovieCredits",value:function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(this.baseURL,"/movie/").concat(t,"/credits"),n={params:{api_key:this.apiKey}},e.next=4,u.Z.get(r,n);case 4:return a=e.sent,e.abrupt("return",a.data);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getMovieReviews",value:function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(this.baseURL,"/movie/").concat(t,"/reviews"),n={params:{api_key:this.apiKey,language:"en-US"}},e.next=4,u.Z.get(r,n);case 4:return a=e.sent,e.abrupt("return",a.data.results);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}()},984:function(e,t,r){r.d(t,{O:function(){return c}});r(791);var n=r(689),a=r(87),s={moviesList:"MoviesList_moviesList__TvXly",movieCard:"MoviesList_movieCard__x7bv3",moviesTitle:"MoviesList_moviesTitle__ZIoAp"},i=r(184),c=function(e){var t=e.movies,r=(0,n.TH)();return t?(0,i.jsx)("ul",{className:s.moviesList,children:t.map((function(e){return(0,i.jsx)("li",{className:s.movieCard,children:(0,i.jsxs)(a.rU,{to:"/movies/".concat(e.id),state:{movieId:e.id,from:r},children:[(0,i.jsx)("img",{className:s.moviesImg,src:"https://image.tmdb.org/t/p/w185/".concat(e.poster_path),alt:e.title}),(0,i.jsx)("h2",{className:s.moviesTitle,children:e.original_title})]})},e.id)}))}):null}},304:function(e,t,r){r.r(t),r.d(t,{default:function(){return l}});var n=r(861),a=r(439),s=r(757),i=r.n(s),c=r(791),u=r(242),o=r(984),p="Home_title__qAdt+",v=r(184),l=function(){var e=(0,c.useState)([]),t=(0,a.Z)(e,2),r=t[0],s=t[1];return(0,c.useEffect)((function(){var e=function(){var e=(0,n.Z)(i().mark((function e(){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=new u.Z("a2eec4063d87f4e8e5e4230e87b07946"),e.next=4,t.getTrendingMovies();case 4:r=e.sent,s(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,v.jsxs)("main",{children:[(0,v.jsx)("h1",{className:p,children:"Trending today"}),(0,v.jsx)(o.O,{movies:r})]})}}}]);
//# sourceMappingURL=304.431af9ed.chunk.js.map