!function(){function n(n){return n&&n.__esModule?n.default:n}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},l={},a=e.parcelRequired7c6;null==a&&((a=function(n){if(n in t)return t[n].exports;if(n in l){var e=l[n];delete l[n];var a={id:n,exports:{}};return t[n]=a,e.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+n+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(n,e){l[n]=e},e.parcelRequired7c6=a),a("elFEq"),a("ei05g"),a("huAoy");var o=a("bpxeT"),i=a("2TvXO"),r=a("2tA1L"),c=a("l5bVx"),d=n(a("WMajR")).template({1:function(e,t,l,a,o){var i,r=null!=t?t:e.nullContext||{},d=e.hooks.helperMissing,s="function",u=e.escapeExpression,m=e.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return"        <img\n          src='https://image.tmdb.org/t/p/w500/"+u((void 0===(i=null!=(i=m(l,"poster_path")||(null!=t?m(t,"poster_path"):t))?i:d)?"undefined":n(c)(i))===s?i.call(r,{name:"poster_path",hash:{},data:o,loc:{start:{line:6,column:47},end:{line:6,column:62}}}):i)+"'\n          alt='"+u((void 0===(i=null!=(i=m(l,"title")||(null!=t?m(t,"title"):t))?i:d)?"undefined":n(c)(i))===s?i.call(r,{name:"title",hash:{},data:o,loc:{start:{line:7,column:15},end:{line:7,column:24}}}):i)+"'\n          class='movie-card__poster lazyload'\n          loading='lazy'\n        />\n"},3:function(n,e,t,l,a){var o,i=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return"        <img\n          src='https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj'\n          alt='"+n.escapeExpression("function"==typeof(o=null!=(o=i(t,"title")||(null!=e?i(e,"title"):e))?o:n.hooks.helperMissing)?o.call(null!=e?e:n.nullContext||{},{name:"title",hash:{},data:a,loc:{start:{line:14,column:15},end:{line:14,column:24}}}):o)+"'\n          class='movie-card__poster'\n          loading='lazy'\n        />\n"},compiler:[8,">= 4.3.0"],main:function(e,t,l,a,o){var i,r,d=null!=t?t:e.nullContext||{},s=e.hooks.helperMissing,u="function",m=e.escapeExpression,p=e.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return"<li class='movie-card__item' data-id='"+m((void 0===(r=null!=(r=p(l,"id")||(null!=t?p(t,"id"):t))?r:s)?"undefined":n(c)(r))===u?r.call(d,{name:"id",hash:{},data:o,loc:{start:{line:1,column:38},end:{line:1,column:44}}}):r)+"' id='open'>\n  <div class='movie-card'>\n    <div class='poster-wrapper'>\n"+(null!=(i=p(l,"if").call(d,null!=t?p(t,"poster_path"):t,{name:"if",hash:{},fn:e.program(1,o,0),inverse:e.program(3,o,0),data:o,loc:{start:{line:4,column:6},end:{line:18,column:13}}}))?i:"")+"    </div>\n    <div class='card-info'>\n      <h2 class='movie-info-title'> "+m((void 0===(r=null!=(r=p(l,"title")||(null!=t?p(t,"title"):t))?r:s)?"undefined":n(c)(r))===u?r.call(d,{name:"title",hash:{},data:o,loc:{start:{line:21,column:36},end:{line:21,column:45}}}):r)+"</h2>\n      <div class='info-wrapper'>\n        <div class='movie-icon-decor'>\n        </div>\n        <p class='info-item-genre'>"+m((void 0===(r=null!=(r=p(l,"genres")||(null!=t?p(t,"genres"):t))?r:s)?"undefined":n(c)(r))===u?r.call(d,{name:"genres",hash:{},data:o,loc:{start:{line:25,column:35},end:{line:25,column:45}}}):r)+"</p>\n        <p class='info-item-year'>"+m((void 0===(r=null!=(r=p(l,"release_date")||(null!=t?p(t,"release_date"):t))?r:s)?"undefined":n(c)(r))===u?r.call(d,{name:"release_date",hash:{},data:o,loc:{start:{line:26,column:34},end:{line:26,column:50}}}):r)+"</p>\n        <p class='info-item-rating'><span class='rating-icon'>&#9733;</span>\n          "+m((void 0===(r=null!=(r=p(l,"vote_average")||(null!=t?p(t,"vote_average"):t))?r:s)?"undefined":n(c)(r))===u?r.call(d,{name:"vote_average",hash:{},data:o,loc:{start:{line:28,column:10},end:{line:28,column:26}}}):r)+"</p>\n      </div>\n    </div>\n  </div>\n  <div class='watched-delete-wrapper'>\n    <button class='watched-delete' type='button' id='close'>\n    </button>\n  </div>\n</li>"},useData:!0}),s=a("dyT35"),u=(c=a("l5bVx"),n(a("WMajR")).template({1:function(n,e,t,l,a){var o=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return"                <span class='sub-genre'> "+n.escapeExpression(n.lambda(null!=e?o(e,"name"):e,e))+" </span>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,l,a,o){var i,r,d=null!=t?t:e.nullContext||{},s=e.hooks.helperMissing,u="function",m=e.escapeExpression,p=e.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return"<div class='modal'>\n  <div class='modal-wrapper'>\n    <div class='img-container'>\n      <img\n        class='modal-img'\n        src='https://image.tmdb.org/t/p/w500/"+m((void 0===(r=null!=(r=p(l,"poster_path")||(null!=t?p(t,"poster_path"):t))?r:s)?"undefined":n(c)(r))===u?r.call(d,{name:"poster_path",hash:{},data:o,loc:{start:{line:6,column:45},end:{line:6,column:60}}}):r)+"'\n        alt='"+m((void 0===(r=null!=(r=p(l,"title")||(null!=t?p(t,"title"):t))?r:s)?"undefined":n(c)(r))===u?r.call(d,{name:"title",hash:{},data:o,loc:{start:{line:7,column:13},end:{line:7,column:22}}}):r)+"'\n        data-id='"+m((void 0===(r=null!=(r=p(l,"id")||(null!=t?p(t,"id"):t))?r:s)?"undefined":n(c)(r))===u?r.call(d,{name:"id",hash:{},data:o,loc:{start:{line:8,column:17},end:{line:8,column:23}}}):r)+"'\n      />\n    </div>\n    <div class='modal-info'>\n      <h2 class='modal-title'>"+m((void 0===(r=null!=(r=p(l,"title")||(null!=t?p(t,"title"):t))?r:s)?"undefined":n(c)(r))===u?r.call(d,{name:"title",hash:{},data:o,loc:{start:{line:12,column:30},end:{line:12,column:39}}}):r)+"</h2>\n\n      <table class='modal-table'>\n        <tbody>\n          <tr>\n            <th class='modal-table__descr'>Vote/Votes</th>\n            <td class='modal-table__value'><span\n                class='modal-table__value-avr'\n              >"+m((void 0===(r=null!=(r=p(l,"vote_average")||(null!=t?p(t,"vote_average"):t))?r:s)?"undefined":n(c)(r))===u?r.call(d,{name:"vote_average",hash:{},data:o,loc:{start:{line:20,column:15},end:{line:20,column:31}}}):r)+"</span>\n              /\n              <span class='modal-table__vote-count'>"+m((void 0===(r=null!=(r=p(l,"vote_count")||(null!=t?p(t,"vote_count"):t))?r:s)?"undefined":n(c)(r))===u?r.call(d,{name:"vote_count",hash:{},data:o,loc:{start:{line:22,column:52},end:{line:22,column:66}}}):r)+"</span></td>\n          </tr>\n          <tr>\n            <th class='modal-table__descr'>Popularity</th>\n            <td class='modal-table__value'>"+m((void 0===(r=null!=(r=p(l,"popularity")||(null!=t?p(t,"popularity"):t))?r:s)?"undefined":n(c)(r))===u?r.call(d,{name:"popularity",hash:{},data:o,loc:{start:{line:26,column:43},end:{line:26,column:57}}}):r)+"</td>\n          </tr>\n          <tr>\n            <th class='modal-table__descr'>Original Title</th>\n            <td class='modal-table__value'>"+m((void 0===(r=null!=(r=p(l,"original_title")||(null!=t?p(t,"original_title"):t))?r:s)?"undefined":n(c)(r))===u?r.call(d,{name:"original_title",hash:{},data:o,loc:{start:{line:30,column:43},end:{line:30,column:61}}}):r)+"</td>\n          </tr>\n          <tr>\n            <th class='modal-table__descr'>Genre</th>\n            <td class='modal-table__value'>\n"+(null!=(i=p(l,"each").call(d,null!=t?p(t,"genres"):t,{name:"each",hash:{},fn:e.program(1,o,0),inverse:e.noop,data:o,loc:{start:{line:35,column:14},end:{line:37,column:23}}}))?i:"")+"            </td>\n          </tr>\n        </tbody>\n      </table>\n      <p class='modal-review'>"+m((void 0===(r=null!=(r=p(l,"overview")||(null!=t?p(t,"overview"):t))?r:s)?"undefined":n(c)(r))===u?r.call(d,{name:"overview",hash:{},data:o,loc:{start:{line:42,column:30},end:{line:42,column:42}}}):r)+"</p>\n\n      <div class='modal-btn-wrapper'>\n        <button\n          class='modal-btn__watched'\n          type='button'\n          data-id='"+m((void 0===(r=null!=(r=p(l,"id")||(null!=t?p(t,"id"):t))?r:s)?"undefined":n(c)(r))===u?r.call(d,{name:"id",hash:{},data:o,loc:{start:{line:48,column:19},end:{line:48,column:25}}}):r)+"'\n          id='open'\n        >Watched</button>\n\n        <button class='modal-btn__close' type=\"button\"></button>\n\n      </div>\n    </div>\n  </div>\n</div>"},useData:!0})),m=(c=a("l5bVx"),n(a("WMajR")).template({1:function(n,e,t,l,a){var o=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return"                            <span class='sub-genre'> "+n.escapeExpression(n.lambda(null!=e?o(e,"name"):e,e))+" </span>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,l,a,o){var i,r,d=null!=t?t:e.nullContext||{},s=e.hooks.helperMissing,u="function",m=e.escapeExpression,p=e.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return"<div class='modal'>\n    <div class='modal-wrapper'>\n        <div class='img-container'>\n            <img class='modal-img' src='https://image.tmdb.org/t/p/w500/"+m((void 0===(r=null!=(r=p(l,"poster_path")||(null!=t?p(t,"poster_path"):t))?r:s)?"undefined":n(c)(r))===u?r.call(d,{name:"poster_path",hash:{},data:o,loc:{start:{line:4,column:72},end:{line:4,column:87}}}):r)+"' alt='"+m((void 0===(r=null!=(r=p(l,"title")||(null!=t?p(t,"title"):t))?r:s)?"undefined":n(c)(r))===u?r.call(d,{name:"title",hash:{},data:o,loc:{start:{line:4,column:94},end:{line:4,column:103}}}):r)+"'\n                data-id='"+m((void 0===(r=null!=(r=p(l,"id")||(null!=t?p(t,"id"):t))?r:s)?"undefined":n(c)(r))===u?r.call(d,{name:"id",hash:{},data:o,loc:{start:{line:5,column:25},end:{line:5,column:31}}}):r)+"' />\n        </div>\n        <div class='modal-info'>\n            <h2 class='modal-title'>"+m((void 0===(r=null!=(r=p(l,"title")||(null!=t?p(t,"title"):t))?r:s)?"undefined":n(c)(r))===u?r.call(d,{name:"title",hash:{},data:o,loc:{start:{line:8,column:36},end:{line:8,column:45}}}):r)+'</h2>\n\n            <table class="modal-table">\n                <tbody>\n                    <tr>\n                        <th class="modal-table__descr">Vote/Votes</th>\n                        <td class="modal-table__value"><span class="modal-table__value-avr">'+m((void 0===(r=null!=(r=p(l,"vote_average")||(null!=t?p(t,"vote_average"):t))?r:s)?"undefined":n(c)(r))===u?r.call(d,{name:"vote_average",hash:{},data:o,loc:{start:{line:14,column:92},end:{line:14,column:108}}}):r)+'</span> /\n                            <span class="modal-table__vote-count">'+m((void 0===(r=null!=(r=p(l,"vote_count")||(null!=t?p(t,"vote_count"):t))?r:s)?"undefined":n(c)(r))===u?r.call(d,{name:"vote_count",hash:{},data:o,loc:{start:{line:15,column:66},end:{line:15,column:80}}}):r)+'</span></td>\n                    </tr>\n                    <tr>\n                        <th class="modal-table__descr">Popularity</th>\n                        <td class="modal-table__value">'+m((void 0===(r=null!=(r=p(l,"popularity")||(null!=t?p(t,"popularity"):t))?r:s)?"undefined":n(c)(r))===u?r.call(d,{name:"popularity",hash:{},data:o,loc:{start:{line:19,column:55},end:{line:19,column:69}}}):r)+'</td>\n                    </tr>\n                    <tr>\n                        <th class="modal-table__descr">Original Title</th>\n                        <td class="modal-table__value">'+m((void 0===(r=null!=(r=p(l,"original_title")||(null!=t?p(t,"original_title"):t))?r:s)?"undefined":n(c)(r))===u?r.call(d,{name:"original_title",hash:{},data:o,loc:{start:{line:23,column:55},end:{line:23,column:73}}}):r)+'</td>\n                    </tr>\n                    <tr>\n                        <th class="modal-table__descr">Genre</th>\n                        <td class="modal-table__value">\n'+(null!=(i=p(l,"each").call(d,null!=t?p(t,"genres"):t,{name:"each",hash:{},fn:e.program(1,o,0),inverse:e.noop,data:o,loc:{start:{line:28,column:28},end:{line:30,column:37}}}))?i:"")+"                        </td>\n                    </tr>\n                </tbody>\n            </table>\n            <p class='modal-review'>"+m((void 0===(r=null!=(r=p(l,"overview")||(null!=t?p(t,"overview"):t))?r:s)?"undefined":n(c)(r))===u?r.call(d,{name:"overview",hash:{},data:o,loc:{start:{line:35,column:36},end:{line:35,column:48}}}):r)+"</p>\n\n            <div class='modal-btn-wrapper'>\n                <button class='modal-btn__queue' type='button' data-id='"+m((void 0===(r=null!=(r=p(l,"id")||(null!=t?p(t,"id"):t))?r:s)?"undefined":n(c)(r))===u?r.call(d,{name:"id",hash:{},data:o,loc:{start:{line:38,column:72},end:{line:38,column:78}}}):r)+"' id='open'>Watched</button>\n                \n            <button class='modal-btn__close' type=\"button\"></button>\n            </div>\n        </div>\n    </div>\n</div>"},useData:!0})),p=n(a("WMajR")).template({compiler:[8,">= 4.3.0"],main:function(n,e,t,l,a){return"<div class='library-container'>\n    <p class='library-no-movies'>There are no movies in your librarry </p>\n</div>"},useData:!0});a("3fu6U"),a("bRreI");var v=a("6JpON"),f=a("kSvvz"),h=(f=a("kSvvz"),new(0,r.ApiTheMovie)),b="watched-key",_="queue-key",y=document.querySelector(".watched"),g=document.querySelector(".queue");y.addEventListener("click",L),g.addEventListener("click",M);var w=document.querySelector(".gallery"),k=document.querySelector(".gallery-Queue");function x(){var n=JSON.parse(localStorage.getItem(b));if(n)return n}function L(){var n=x();(0,f.makeValidateMovieData)(n);var e=n.map((function(n){return d(n)})).join("");w.innerHTML=e,k.innerHTML="",e||(w.innerHTML=p())}function S(){return(S=n(o)(n(i).mark((function e(t){var l,a;return n(i).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.target!==t.currentTarget){n.next=2;break}return n.abrupt("return");case 2:if(l=t.target.closest(".movie-card__item").dataset.id,h.setMovieId(l),"close"!==t.target.id){n.next=8;break}a=(a=x()).filter((function(n){return n.id!==Number(l)})),localStorage.setItem(b,JSON.stringify(a)),v.Notify.warning("Фильм Удалён из библиотеки"),L(),n.next=10;break;case 8:return n.next=10,h.fetchById(this.currentId).then(O);case 10:case"end":return n.stop()}}),e,this)})))).apply(this,arguments)}function O(n){var e=x();(0,f.makeShortVoteAndPopularity)(n);var t=u(n),l=s.create(t);l.show(),document.body.classList.add("stop-fon");var a=document.querySelector(".modal-btn__watched");a.textContent="remove from watched",a.addEventListener("click",(function(n){var t=n.target.dataset.id;if(e.find((function(n){return n.id===Number(t)}))){var a=x();a=a.filter((function(n){return n.id!==Number(t)})),localStorage.setItem(b,JSON.stringify(a)),l.close(),v.Notify.warning("Фильм Удалён из библиотеки"),L()}})),window.addEventListener("keydown",(function(n){"Escape"===n.code&&(l.close(),document.body.classList.remove("stop-fon"))})),document.querySelector(".basicLightbox").addEventListener("click",(function(){document.body.classList.remove("stop-fon")})),document.querySelector(".modal-btn__close").addEventListener("click",(function(){l.close(),document.body.classList.remove("stop-fon")}))}function E(){var n=JSON.parse(localStorage.getItem(_));if(n)return n}function M(){var n=E();(0,f.makeValidateMovieData)(n);var e=n.map((function(n){return d(n)})).join("");k.innerHTML=e,w.innerHTML="",e||(w.innerHTML=p())}function P(){return(P=n(o)(n(i).mark((function e(t){var l,a;return n(i).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.target!==t.currentTarget){n.next=2;break}return n.abrupt("return");case 2:if(l=t.target.closest(".movie-card__item").dataset.id,h.setMovieId(l),"close"!==t.target.id){n.next=8;break}a=(a=E()).filter((function(n){return n.id!==Number(l)})),localStorage.setItem(_,JSON.stringify(a)),v.Notify.warning("Фильм Удалён из библиотеки"),M(),n.next=10;break;case 8:return n.next=10,h.fetchById(this.currentId).then(N);case 10:case"end":return n.stop()}}),e,this)})))).apply(this,arguments)}function N(n){var e=E();(0,f.makeShortVoteAndPopularity)(n);var t=m(n),l=s.create(t);l.show(),document.body.classList.add("stop-fon");var a=document.querySelector(".modal-btn__queue");a.textContent="remove from queue",a.addEventListener("click",(function(n){var t=n.target.dataset.id;if(e.find((function(n){return n.id===Number(t)}))){var a=E();a=a.filter((function(n){return n.id!==Number(t)})),localStorage.setItem(_,JSON.stringify(a)),l.close(),v.Notify.warning("Фильм Удалён из библиотеки"),M()}})),window.addEventListener("keydown",(function(n){"Escape"===n.code&&(l.close(),document.body.classList.remove("stop-fon"))})),document.querySelector(".basicLightbox").addEventListener("click",(function(){document.body.classList.remove("stop-fon")})),document.querySelector(".modal-btn__close").addEventListener("click",(function(){l.close(),document.body.classList.remove("stop-fon")}))}k.addEventListener("click",(function(n){return P.apply(this,arguments)})),w.addEventListener("click",(function(n){return S.apply(this,arguments)})),window.addEventListener("load",(function(){L(),y.focus({focusVisible:!0})})),a("2tA1L"),a("2H0Yv"),a("2Rvsa"),a("lHJrY"),a("9LQ4c"),a("7WJ1I")}();
//# sourceMappingURL=library.19f1d5c1.js.map
