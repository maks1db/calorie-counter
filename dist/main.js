(()=>{var e={484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,r="millisecond",n="second",a="minute",i="hour",o="day",s="week",u="month",l="quarter",c="year",f="date",d="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},g=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},y={s:g,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),a=r%60;return(t<=0?"+":"-")+g(n,2,"0")+":"+g(a,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),a=t.clone().add(n,u),i=r-a<0,o=t.clone().add(n+(i?-1:1),u);return+(-(n+(r-a)/(i?a-o:o-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:u,y:c,w:s,d:o,D:f,h:i,m:a,s:n,ms:r,Q:l}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",b={};b[v]=m;var $=function(e){return e instanceof D},S=function e(t,r,n){var a;if(!t)return v;if("string"==typeof t){var i=t.toLowerCase();b[i]&&(a=i),r&&(b[i]=r,a=i);var o=t.split("-");if(!a&&o.length>1)return e(o[0])}else{var s=t.name;b[s]=t,a=s}return!n&&a&&(v=a),a||!n&&v},M=function(e,t){if($(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new D(r)},w=y;w.l=S,w.i=$,w.w=function(e,t){return M(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var D=function(){function m(e){this.$L=S(e.locale,null,!0),this.parse(e)}var g=m.prototype;return g.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(w.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(p);if(n){var a=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},g.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},g.$utils=function(){return w},g.isValid=function(){return!(this.$d.toString()===d)},g.isSame=function(e,t){var r=M(e);return this.startOf(t)<=r&&r<=this.endOf(t)},g.isAfter=function(e,t){return M(e)<this.startOf(t)},g.isBefore=function(e,t){return this.endOf(t)<M(e)},g.$g=function(e,t,r){return w.u(e)?this[t]:this.set(r,e)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(e,t){var r=this,l=!!w.u(t)||t,d=w.p(e),p=function(e,t){var n=w.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return l?n:n.endOf(o)},h=function(e,t){return w.w(r.toDate()[e].apply(r.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},m=this.$W,g=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(d){case c:return l?p(1,0):p(31,11);case u:return l?p(1,g):p(0,g+1);case s:var b=this.$locale().weekStart||0,$=(m<b?m+7:m)-b;return p(l?y-$:y+(6-$),g);case o:case f:return h(v+"Hours",0);case i:return h(v+"Minutes",1);case a:return h(v+"Seconds",2);case n:return h(v+"Milliseconds",3);default:return this.clone()}},g.endOf=function(e){return this.startOf(e,!1)},g.$set=function(e,t){var s,l=w.p(e),d="set"+(this.$u?"UTC":""),p=(s={},s[o]=d+"Date",s[f]=d+"Date",s[u]=d+"Month",s[c]=d+"FullYear",s[i]=d+"Hours",s[a]=d+"Minutes",s[n]=d+"Seconds",s[r]=d+"Milliseconds",s)[l],h=l===o?this.$D+(t-this.$W):t;if(l===u||l===c){var m=this.clone().set(f,1);m.$d[p](h),m.init(),this.$d=m.set(f,Math.min(this.$D,m.daysInMonth())).$d}else p&&this.$d[p](h);return this.init(),this},g.set=function(e,t){return this.clone().$set(e,t)},g.get=function(e){return this[w.p(e)]()},g.add=function(r,l){var f,d=this;r=Number(r);var p=w.p(l),h=function(e){var t=M(d);return w.w(t.date(t.date()+Math.round(e*r)),d)};if(p===u)return this.set(u,this.$M+r);if(p===c)return this.set(c,this.$y+r);if(p===o)return h(1);if(p===s)return h(7);var m=(f={},f[a]=e,f[i]=t,f[n]=1e3,f)[p]||1,g=this.$d.getTime()+r*m;return w.w(g,this)},g.subtract=function(e,t){return this.add(-1*e,t)},g.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||d;var n=e||"YYYY-MM-DDTHH:mm:ssZ",a=w.z(this),i=this.$H,o=this.$m,s=this.$M,u=r.weekdays,l=r.months,c=function(e,r,a,i){return e&&(e[r]||e(t,n))||a[r].substr(0,i)},f=function(e){return w.s(i%12||12,e,"0")},p=r.meridiem||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:w.s(s+1,2,"0"),MMM:c(r.monthsShort,s,l,3),MMMM:c(l,s),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:c(r.weekdaysMin,this.$W,u,2),ddd:c(r.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(i),HH:w.s(i,2,"0"),h:f(1),hh:f(2),a:p(i,o,!0),A:p(i,o,!1),m:String(o),mm:w.s(o,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:a};return n.replace(h,(function(e,t){return t||m[e]||a.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(r,f,d){var p,h=w.p(f),m=M(r),g=(m.utcOffset()-this.utcOffset())*e,y=this-m,v=w.m(this,m);return v=(p={},p[c]=v/12,p[u]=v,p[l]=v/3,p[s]=(y-g)/6048e5,p[o]=(y-g)/864e5,p[i]=y/t,p[a]=y/e,p[n]=y/1e3,p)[h]||y,d?v:w.a(v)},g.daysInMonth=function(){return this.endOf(u).$D},g.$locale=function(){return b[this.$L]},g.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=S(e,t,!0);return n&&(r.$L=n),r},g.clone=function(){return w.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},m}(),k=D.prototype;return M.prototype=k,[["$ms",r],["$s",n],["$m",a],["$H",i],["$W",o],["$M",u],["$y",c],["$D",f]].forEach((function(e){k[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),M.extend=function(e,t){return e.$i||(e(t,D,M),e.$i=!0),M},M.locale=S,M.isDayjs=$,M.unix=function(e){return M(1e3*e)},M.en=b[v],M.Ls=b,M.p={},M}()},427:(e,t,r)=>{"use strict";Object.defineProperty(t,"zN",{enumerable:!0,get:function(){return n.inspectEffector}});var n=r(882)},882:(e,t,r)=>{"use strict";r.r(t),r.d(t,{inspectEffector:()=>h,makeInspectEffectorFactory:()=>m});r(116);var n=function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},n.apply(this,arguments)};function a(e){return null!=e&&"object"==typeof e&&!0===e["@@functional/placeholder"]}function i(e){return function t(r){return 0===arguments.length||a(r)?t:e.apply(this,arguments)}}function o(e){return function t(r,n){switch(arguments.length){case 0:return t;case 1:return a(r)?t:i((function(t){return e(r,t)}));default:return a(r)&&a(n)?t:a(r)?i((function(t){return e(t,n)})):a(n)?i((function(t){return e(r,t)})):e(r,n)}}}function s(e,t){return Object.prototype.hasOwnProperty.call(t,e)}Object.create,Object.create,Array.isArray,"undefined"!=typeof Symbol&&Symbol.iterator;Object.prototype.toString;function u(e){return function t(r,n,s){switch(arguments.length){case 0:return t;case 1:return a(r)?t:o((function(t,n){return e(r,t,n)}));case 2:return a(r)&&a(n)?t:a(r)?o((function(t,r){return e(t,n,r)})):a(n)?o((function(t,n){return e(r,t,n)})):i((function(t){return e(r,n,t)}));default:return a(r)&&a(n)&&a(s)?t:a(r)&&a(n)?o((function(t,r){return e(t,r,s)})):a(r)&&a(s)?o((function(t,r){return e(t,n,r)})):a(n)&&a(s)?o((function(t,n){return e(r,t,n)})):a(r)?i((function(t){return e(t,n,s)})):a(n)?i((function(t){return e(r,t,s)})):a(s)?i((function(t){return e(r,n,t)})):e(r,n,s)}}}Object.keys,Number.isInteger,"function"==typeof Object.is&&Object.is;function l(e){return"[object Object]"===Object.prototype.toString.call(e)}Date.prototype.toISOString,"function"==typeof Object.assign&&Object.assign;const c=u((function(e,t,r){var n,a={};for(n in t)s(n,t)&&(a[n]=s(n,r)?e(n,t[n],r[n]):t[n]);for(n in r)s(n,r)&&!s(n,a)&&(a[n]=r[n]);return a})),f=u((function e(t,r,n){return c((function(r,n,a){return l(n)&&l(a)?e(t,n,a):t(r,n,a)}),r,n)})),d=o((function(e,t){return f((function(e,t,r){return r}),e,t)}));String.prototype.trim;new Set;var p=function(){var e={},t=function(){return n({},e)};return{updateState:function(r){return e=d(e,r),t()},getState:t}}(),h=(p.getState,p.updateState,function(e,t){}),m=function(e){return{connect:function(t){return h(e,t)},connectCalc:function(t){return h("".concat(e,"*"),t)}}}},116:(e,t,r)=>{"use strict";function n(e,t){for(let r in e)t(e[r],r)}function a(e,t){e.forEach(t)}function i(e,t){if(!e)throw Error(t)}function o({node:e=[],from:t,source:r,parent:n=t||r,to:i,target:o,child:s=i||o,scope:u={},meta:l={},family:c={type:"regular"},regional:f}={}){let d=Q(n),p=Q(c.links),h=Q(c.owners),m=[];a(e,(e=>e&&A(m,e)));let g={id:J(),seq:m,next:Q(s),meta:l,scope:u,family:{type:c.type||"crosslink",links:p,owners:h}};return a(p,(e=>A(T(e),g))),a(h,(e=>A(C(e),g))),a(d,(e=>A(e.next,g))),f&&V&&B(q(V),[g]),g}function s(e,t,r){let n=Ne,i=null,o=je;if(e.target&&(t=e.params,r=e.defer,n="page"in e?e.page:n,e.stack&&(i=e.stack),o=H(e)||o,e=e.target),o&&je&&o!==je&&(je=null),Array.isArray(e))for(let r=0;r<e.length;r++)De("pure",n,N(e[r]),i,t[r],o);else De("pure",n,N(e),i,t,o);if(r&&!_e)return;let s,u,l,c,f,d,p={isRoot:_e,currentPage:Ne,scope:je,isWatch:Ae,isPure:Ie};_e=0;e:for(;c=we();){let{idx:e,stack:t,type:r}=c;l=t.node,Ne=f=t.page,je=H(t),f?d=f.reg:je&&(d=je.reg);let n=!!f,i=!!je,o={fail:0,scope:l.scope};s=u=0;for(let a=e;a<l.seq.length&&!s;a++){let c=l.seq[a];if(c.order){let{priority:n,barrierID:i}=c.order,o=i?f?`${f.fullID}_${i}`:i:0;if(a!==e||r!==n){i?xe.has(o)||(xe.add(o),ke(a,t,n,i)):ke(a,t,n);continue e}i&&xe.delete(o)}switch(c.type){case"mov":{let e,r=c.data;switch(r.from){case $:e=q(t);break;case"a":case"b":e=t[r.from];break;case"value":e=r.store;break;case"store":if(d&&!d[r.store.id])if(n){let e=Pe(f,r.store.id);t.page=f=e,e?d=e.reg:i?(Le(je,r.store,0,1,r.softRead),d=je.reg):d=void 0}else i&&Le(je,r.store,0,1,r.softRead);e=ye(d&&d[r.store.id]||r.store)}switch(r.to){case $:t.value=e;break;case"a":case"b":t[r.to]=e;break;case"store":qe(f,je,l,r.target).current=e}break}case"compute":let e=c.data;if(e.fn){Ae="watch"===W(l,"op"),Ie=e.pure;let r=e.safe?(0,e.fn)(q(t),o.scope,t):Ye(o,e.fn,t);e.filter?u=!r:t.value=r,Ae=p.isWatch,Ie=p.isPure}}s=o.fail||u}if(!s){let e=q(t);a(l.next,(r=>{De("child",f,r,t,e,H(t))}));let r=H(t);if(r){W(l,"needFxCounter")&&De("child",f,r.fxCount,t,e,r),W(l,"storeChange")&&De("child",f,r.storeChange,t,e,r);let n=r.additionalLinks[l.id];n&&a(n,(n=>{De("child",f,n,t,e,r)}))}}}_e=p.isRoot,Ne=p.currentPage,je=H(p)}function u(e,t="combine"){let r=t+"(",a="",i=0;return n(e,(e=>{i<25&&(null!=e&&(r+=a,r+=S(e)?F(e).fullName:e.toString()),i+=1,a=", ")})),r+")"}function l(e,t){let r=t?e:e[0];te(r);let n=r.or,a=r.and;if(a){let r=t?a:a[0];if(K(r)&&"and"in r){let r=l(a,t);e=r[0],n={...n,...r[1]}}else e=a}return[e,n]}function c(e,...t){let r=G();if(r){let n=r.handlers[e];if(n)return n(r,...t)}}function f(e,t){let r=(e,...t)=>(I(!W(r,"derived"),"call of derived event","createEvent"),I(!Ie,"unit call from pure function","operators like sample"),Ne?((e,t,r,n)=>{let a=Ne,i=null;if(t)for(i=Ne;i&&i.template!==t;)i=Y(i);Ce(i);let o=e.create(r,n);return Ce(a),o})(r,n,e,t):r.create(e,t)),n=G();return Object.assign(r,{graphite:o({meta:Ve("event",r,e,t),regional:1}),create:e=>(s({target:r,params:e,scope:je}),e),watch:e=>Re(r,e),map:e=>Ze(r,b,e,[me()]),filter:e=>Ze(r,"filter",e.fn?e:e.fn,[me(se,1)]),filterMap:e=>Ze(r,"filterMap",e,[me(),pe((e=>!ee(e)),1)]),prepend(e){let t=f("* → "+r.shortName,{parent:Y(r)});return c("eventPrepend",N(t)),Ee(t,r,[me()],"prepend",e),Je(r,t),t}})}function d(e,t){let r=ge(e),n=Ge("updates");c("storeBase",r);let u=r.id,l={subscribers:new Map,updates:n,defaultState:e,stateRef:r,getState(){let e,t=r;if(Ne){let t=Ne;for(;t&&!t.reg[u];)t=Y(t);t&&(e=t)}return!e&&je&&(Le(je,r,1),e=je),e&&(t=e.reg[u]),ye(t)},setState:e=>s({target:l,params:e,defer:1,scope:je}),reset:(...e)=>(a(e,(e=>l.on(e,(()=>l.defaultState)))),l),on:(e,t)=>(ne(e,".on","first argument"),I(!W(l,"derived"),".on in derived store","createStore"),a(Array.isArray(e)?e:[e],(e=>{l.off(e),L(l).set(e,Ue(Be(e,l,"on",oe,t)))})),l),off(e){let t=L(l).get(e);return t&&(t(),L(l).delete(e)),l},map(e,t){let n,a;K(e)&&(n=e,e=e.fn),I(ee(t),"second argument of store.map","updateFilter");let i=l.getState();G()?a=null:ee(i)||(a=e(i,t));let o=d(a,{name:`${l.shortName} → *`,derived:1,and:n}),s=Be(l,o,b,ie,e);return ve(P(o),{type:b,fn:e,from:r}),P(o).noInit=1,c("storeMap",r,s),o},watch(e,t){if(!t||!S(e)){let t=Re(l,e);return c("storeWatch",r,e)||e(l.getState()),t}return i(X(t),"second argument should be a function"),e.watch((e=>t(l.getState(),e)))}},f=Ve("store",l,t),p=l.defaultConfig.updateFilter;l.graphite=o({scope:{state:r,fn:p},node:[pe(((e,t,n)=>(n.scope&&!n.scope.reg[r.id]&&(n.b=1),e))),he(r),pe(((e,t,{a:r,b:n})=>!ee(e)&&(e!==r||n)),1),p&&me(ie,1),ce({from:$,target:r})],child:n,meta:f,regional:1});let h=W(l,"sid");return h&&("ignore"!==W(l,"serialize")&&z(l,"storeChange",1),r.sid=h),i(W(l,"derived")||!ee(e),"current state can't be undefined, use null instead"),B(l,[n]),l}function p(...e){let t,r,n;[e,n]=l(e);let a,o,s,u=e[e.length-1];if(X(u)?(r=e.slice(0,-1),t=u):r=e,1===r.length){let e=r[0];w(e)||(a=e,o=1)}if(!o&&(a=r,t)){s=1;let e=t;t=t=>e(...t)}return i(K(a),"shape should be an object"),Qe(Array.isArray(a),!s,a,n,t)}function h(e,t){let r=f(X(e)?{handler:e}:e,t),n=N(r);z(n,"op",r.kind="effect"),r.use=e=>(i(X(e),".use argument should be a function"),h.scope.handler=e,r),r.use.getCurrent=()=>h.scope.handler;let a=r.finally=Ge("finally"),u=r.done=a.filterMap({named:"done",fn({status:e,params:t,result:r}){if("done"===e)return{params:t,result:r}}}),l=r.fail=a.filterMap({named:"fail",fn({status:e,params:t,error:r}){if("fail"===e)return{params:t,error:r}}}),c=r.doneData=u.map({named:"doneData",fn:({result:e})=>e}),p=r.failData=l.map({named:"failData",fn:({error:e})=>e}),h=o({scope:{handlerId:W(n,"sid"),handler:r.defaultConfig.handler||(()=>i(0,`no handler used in ${r.getType()}`))},node:[pe(((e,t,r)=>{let n=t,a=n.handler;if(H(r)){let e=H(r).handlers[n.handlerId];e&&(a=e)}return e.handler=a,e}),0,1),pe((({params:e,req:t,handler:r,args:n=[e]},i,o)=>{let s=Xe(e,t,1,a,o),u=Xe(e,t,0,a,o),[l,c]=Ke(r,u,n);l&&(K(c)&&X(c.then)?c.then(s,u):s(c))}),0,1)],meta:{op:"fx",fx:"runner"}});n.scope.runner=h,A(n.seq,pe(((e,{runner:t},r)=>{let n=Y(r)?{params:e,req:{rs(e){},rj(e){}}}:e;return s({target:t,params:n,defer:1,scope:H(r)}),n.params}),0,1)),r.create=e=>{let t=function(){let e={};return e.req=new Promise(((t,r)=>{e.rs=t,e.rj=r})),e.req.catch((()=>{})),e}(),n={params:e,req:t};if(je){if(!Ae){let e=je;t.req.finally((()=>{Te(e)})).catch((()=>{}))}s({target:r,params:n,scope:je})}else s(r,n);return t.req};let m=r.inFlight=d(0,{named:"inFlight"}).on(r,(e=>e+1)).on(a,(e=>e-1));z(a,"needFxCounter","dec"),z(r,"needFxCounter",1);let g=r.pending=m.map({fn:e=>e>0,named:"pending"});return B(r,[a,u,l,c,p,g,m]),r}function m(e,t){ne(e,"merge","first argument");let r=f({name:u(e,"merge"),derived:1,and:t});return Ee(e,r,[],"merge"),r}function g(e,t){let r=0;return a(tt,(n=>{n in e&&(i(null!=e[n],rt(t,n)),r=1)})),r}function y(...e){let t,r,n,a,[[i,o,s],u]=l(e),c=1;return ee(o)&&K(i)&&g(i,"sample")&&(o=i.clock,s=i.fn,c=!i.greedy,a=i.filter,t=i.target,r=i.name,n=i.sid,i=i.source),nt("sample",o,i,a,t,s,r,u,c,1,0,n)}r.d(t,{$e:()=>p,GW:()=>h,MT:()=>d,UP:()=>y,is:()=>j,yM:()=>f});let v="undefined"!=typeof Symbol&&Symbol.observable||"@@observable",b="map",$="stack",S=e=>(X(e)||K(e))&&"kind"in e;const M=e=>t=>S(t)&&t.kind===e;let w=M("store"),D=M("event"),k=M("effect"),O=M("domain"),x=M("scope");var j={__proto__:null,unit:S,store:w,event:D,effect:k,domain:O,scope:x};let _=(e,t)=>{let r=e.indexOf(t);-1!==r&&e.splice(r,1)},A=(e,t)=>e.push(t),I=(e,t,r)=>!e&&console.error(`${t} is deprecated${r?`, use ${r} instead`:""}`),N=e=>e.graphite||e,T=e=>e.family.owners,C=e=>e.family.links,P=e=>e.stateRef,q=e=>e.value,L=e=>e.subscribers,Y=e=>e.parent,H=e=>e.scope,W=(e,t)=>N(e).meta[t],z=(e,t,r)=>N(e).meta[t]=r,F=e=>e.compositeName;const U=()=>{let e=0;return()=>""+ ++e};let E=U(),R=U(),J=U(),V=null,G=()=>V&&V.template,Z=e=>(e&&V&&V.sidRoot&&(e=`${V.sidRoot}|${e}`),e),B=(e,t)=>{let r=N(e);a(t,(e=>{let t=N(e);"domain"!==r.family.type&&(t.family.type="crosslink"),A(T(t),r),A(C(r),t)}))},Q=(e=[])=>(Array.isArray(e)?e:[e]).flat().map(N),K=e=>"object"==typeof e&&null!==e,X=e=>"function"==typeof e,ee=e=>void 0===e,te=e=>i(K(e)||X(e),"expect first argument be an object");const re=(e,t,r,n)=>i(!(!K(e)&&!X(e)||!("family"in e)&&!("graphite"in e)),`${t}: expect ${r} to be a unit (store, event or effect)${n}`);let ne=(e,t,r)=>{Array.isArray(e)?a(e,((e,n)=>re(e,t,`${n} item of ${r}`,""))):re(e,t,r," or array of units")},ae=(e,t,r="target")=>a(Q(t),(t=>I(!W(t,"derived"),`${e}: derived unit in "${r}"`,"createEvent/createStore"))),ie=(e,{fn:t},{a:r})=>t(e,r),oe=(e,{fn:t},{a:r})=>t(r,e),se=(e,{fn:t})=>t(e);const ue=(e,t,r,n)=>{let a={id:R(),type:e,data:t};return r&&(a.order={priority:r},n&&(a.order.barrierID=++le)),a};let le=0,ce=({from:e="store",store:t,target:r,to:n=(r?"store":$),batch:a,priority:i})=>ue("mov",{from:e,store:t,to:n,target:r},i,a),fe=({fn:e,batch:t,priority:r,safe:n=0,filter:a=0,pure:i=0})=>ue("compute",{fn:e,safe:n,filter:a,pure:i},r,t),de=({fn:e})=>fe({fn:e,priority:"effect"}),pe=(e,t,r)=>fe({fn:e,safe:1,filter:t,priority:r&&"effect"}),he=(e,t,r)=>ce({store:e,to:t?$:"a",priority:r&&"sampler",batch:1}),me=(e=se,t)=>fe({fn:e,pure:1,filter:t}),ge=e=>({id:R(),current:e}),ye=({current:e})=>e,ve=(e,t)=>{e.before||(e.before=[]),A(e.before,t)},be=null;const $e=(e,t)=>{if(!e)return t;if(!t)return e;let r;return(e.v.type===t.v.type&&e.v.id>t.v.id||Oe(e.v.type)>Oe(t.v.type))&&(r=e,e=t,t=r),r=$e(e.r,t),e.r=e.l,e.l=r,e},Se=[];let Me=0;for(;Me<6;)A(Se,{first:null,last:null,size:0}),Me+=1;const we=()=>{for(let e=0;e<6;e++){let t=Se[e];if(t.size>0){if(3===e||4===e){t.size-=1;let e=be.v;return be=$e(be.l,be.r),e}1===t.size&&(t.last=null);let r=t.first;return t.first=r.r,t.size-=1,r.v}}},De=(e,t,r,n,a,i)=>ke(0,{a:null,b:null,node:r,parent:n,value:a,page:t,scope:i},e),ke=(e,t,r,n=0)=>{let a=Oe(r),i=Se[a],o={v:{idx:e,stack:t,type:r,id:n},l:null,r:null};3===a||4===a?be=$e(be,o):(0===i.size?i.first=o:i.last.r=o,i.last=o),i.size+=1},Oe=e=>{switch(e){case"child":return 0;case"pure":return 1;case"read":return 2;case"barrier":return 3;case"sampler":return 4;case"effect":return 5;default:return-1}},xe=new Set;let je,_e=1,Ae=0,Ie=0,Ne=null,Te=e=>{je=e},Ce=e=>{Ne=e};const Pe=(e,t)=>{if(e){for(;e&&!e.reg[t];)e=Y(e);if(e)return e}return null};let qe=(e,t,r,n,a)=>{let i=Pe(e,n.id);return i?i.reg[n.id]:t?(Le(t,n,a),t.reg[n.id]):n},Le=(e,t,r,n,i)=>{let o=e.reg,s=t.sid;if(o[t.id])return;let u={id:t.id,current:t.current};if(s&&s in e.sidValuesMap&&!(s in e.sidIdMap))u.current=e.sidValuesMap[s];else if(t.before&&!i){let i=0,s=r||!t.noInit||n;a(t.before,(t=>{switch(t.type){case b:{let a=t.from;if(a||t.fn){a&&Le(e,a,r,n);let i=a&&o[a.id].current;s&&(u.current=t.fn?t.fn(i):i)}break}case"field":i||(i=1,u.current=Array.isArray(u.current)?[...u.current]:{...u.current}),Le(e,t.from,r,n),s&&(u.current[t.field]=o[o[t.from.id].id].current)}}))}s&&(e.sidIdMap[s]=t.id),o[t.id]=u};const Ye=(e,t,r)=>{try{return t(q(r),e.scope,r)}catch(t){console.error(t),e.fail=1}};let He=(e,t={})=>(K(e)&&(He(e.or,t),n(e,((e,r)=>{ee(e)||"or"===r||"and"===r||(t[r]=e)})),He(e.and,t)),t);const We=(e,t)=>{_(e.next,t),_(T(e),t),_(C(e),t)},ze=(e,t,r)=>{let n;e.next.length=0,e.seq.length=0,e.scope=null;let a=C(e);for(;n=a.pop();)We(n,e),(t||r&&"sample"!==W(e,"op")||"crosslink"===n.family.type)&&ze(n,t,"on"!==W(n,"op")&&r);for(a=T(e);n=a.pop();)We(n,e),r&&"crosslink"===n.family.type&&ze(n,t,"on"!==W(n,"op")&&r)},Fe=e=>e.clear();let Ue=e=>{let t=()=>((e,{deep:t}={})=>{let r=0;if(e.ownerSet&&e.ownerSet.delete(e),w(e))Fe(L(e));else if(O(e)){r=1;let t=e.history;Fe(t.events),Fe(t.effects),Fe(t.stores),Fe(t.domains)}ze(N(e),!!t,r)})(e);return t.unsubscribe=t,t},Ee=(e,t,r,n,a)=>o({node:r,parent:e,child:t,scope:{fn:a},meta:{op:n},family:{owners:[e,t],links:t},regional:1}),Re=(e,t)=>(i(X(t),".watch argument should be a function"),Ue(o({scope:{fn:t},node:[de({fn:se})],parent:e,meta:{op:"watch"},family:{owners:e},regional:1}))),Je=(e,t,r="event")=>{Y(e)&&Y(e).hooks[r](t)},Ve=(e,t,r,n)=>{let a="domain"===e,i=E(),o=He({or:n,and:"string"==typeof r?{name:r}:r}),{parent:s=null,sid:u=null,named:l=null}=o,c=l||o.name||(a?"":i),f=function(e,t){let r,n,a=e;if(t){let a=F(t);0===e.length?(r=a.path,n=a.fullName):(r=a.path.concat([e]),n=0===a.fullName.length?e:a.fullName+"/"+e)}else r=0===e.length?[]:[e],n=e;return{shortName:a,fullName:n,path:r}}(c,s),d={op:t.kind=e,name:t.shortName=c,sid:t.sid=Z(u),named:l,unitId:t.id=i,serialize:o.serialize,derived:o.derived,config:o};if(t.parent=s,t.compositeName=f,t.defaultConfig=o,t.thru=e=>(I(0,"thru","js pipe"),e(t)),t.getType=()=>f.fullName,!a){t.subscribe=e=>(te(e),t.watch(X(e)?e:t=>e.next&&e.next(t))),t[v]=()=>t;let e=G();e&&(d.nativeTemplate=e)}return d},Ge=e=>f({named:e});const Ze=(e,t,r,n)=>{let a;K(r)&&(a=r,r=r.fn);let i=f({name:`${e.shortName} → *`,derived:1,and:a});return Ee(e,i,n,t,r),i},Be=(e,t,r,n,a)=>{let i=P(t),o=ce({store:i,to:"a",priority:"read"});r===b&&(o.data.softRead=1);let s=[o,me(n)];return c("storeOnMap",i,s,w(e)&&P(e)),Ee(e,t,s,r,a)},Qe=(e,t,r,a,o)=>{let s=e?e=>e.slice():e=>({...e}),l=e?[]:{},f=s(l),p=ge(f),h=ge(1);p.type=e?"list":"shape",p.noInit=1,c("combineBase",p,h);let m=d(f,{name:u(r),derived:1,and:a}),g=P(m);g.noInit=1,z(m,"isCombine",1);let y=he(p);y.order={priority:"barrier"};let v=[pe(((e,t,r)=>(r.scope&&!r.scope.reg[p.id]&&(r.c=1),e))),y,ce({store:h,to:"b"}),pe(((e,{key:r},n)=>{if(n.c||e!==n.a[r])return t&&n.b&&(n.a=s(n.a)),n.a[r]=e,1}),1),ce({from:"a",target:p}),ce({from:"value",store:0,target:h}),ce({from:"value",store:1,target:h,priority:"barrier",batch:1}),he(p,1),o&&me()];return n(r,((e,t)=>{if(!w(e))return i(!S(e)&&!ee(e),`combine expects a store in a field ${t}`),void(f[t]=l[t]=e);l[t]=e.defaultState,f[t]=e.getState();let r=Ee(e,m,v,"combine",o);r.scope.key=t;let n=P(e);ve(p,{type:"field",field:t,from:n}),c("combineField",n,r)})),m.defaultShape=r,ve(g,{type:b,from:p,fn:o}),G()||(m.defaultState=o?g.current=o(f):l),m};let Ke=(e,t,r)=>{try{return[1,e(...r)]}catch(e){return t(e),[0,null]}},Xe=(e,t,r,n,a)=>i=>s({target:[n,et],params:[r?{status:"done",params:e,result:i}:{status:"fail",params:e,error:i},{value:i,fn:r?t.rs:t.rj}],defer:1,page:a.page,scope:H(a)});const et=o({node:[de({fn:({fn:e,value:t})=>e(t)})],meta:{op:"fx",fx:"sidechain"}}),tt=["source","clock","target"],rt=(e,t)=>e+`: ${t} should be defined`;let nt=(e,t,r,n,a,o,s,u,l,h,g,y)=>{let v=!!a;i(!ee(r)||!ee(t),rt(e,"either source or clock"));let b=0;ee(r)?b=1:S(r)||(r=p(r)),ee(t)?t=r:(ne(t,e,"clock"),Array.isArray(t)&&(t=m(t))),b&&(r=t),u||s||(s=r.shortName);let M="none";(g||n)&&(S(n)?M="unit":(i(X(n),"`filter` should be function or unit"),M="fn")),a?(ne(a,e,"target"),ae(e,a)):"none"===M&&h&&w(r)&&w(t)?a=d(o?o(ye(P(r)),ye(P(t))):ye(P(r)),{name:s,sid:y,or:u}):(a=f({name:s,derived:1,or:u}),c("sampleTarget",N(a)));let D=ge(),k=[];if("unit"===M){let[r,i]=it(n,a,t,D,e);k=[...at(i),...at(r)]}let[O,x]=it(r,a,t,D,e);return B(r,[Ee(t,a,[c("sampleSourceLoader"),ce({from:$,target:D}),...at(x),he(O,1,l),...k,he(D),"fn"===M&&me(((e,t,{a:r})=>n(e,r)),1),o&&me(ie),c("sampleSourceUpward",v)],e,o)]),a};const at=e=>[he(e),pe(((e,t,{a:r})=>r),1)],it=(e,t,r,n,a)=>{let i=w(e),s=i?P(e):ge(),u=ge(i);return i||o({parent:e,node:[ce({from:$,target:s}),ce({from:"value",store:1,target:u})],family:{owners:[e,t,r],links:t},meta:{op:a},regional:1}),c("sampleSource",u,s,n),[s,u]}}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";var e=r(116),t=r(427),n=document.querySelector("[name=food]"),a=document.querySelector("[name=calories]"),i=document.querySelector("button"),o=document.querySelector("#title"),s=document.querySelector("ul"),u=r(484),l=r.n(u),c=function(e){return l()(e).format("DD.MM.YYYY")},f=function(e,t,r){if(r||2===arguments.length)for(var n,a=0,i=t.length;a<i;a++)!n&&a in t||(n||(n=Array.prototype.slice.call(t,0,a)),n[a]=t[a]);return e.concat(n||Array.prototype.slice.call(t))},d=(0,e.yM)(),p=(0,e.yM)(),h=(0,e.yM)(),m=(0,e.MT)("").on(h,(function(e,t){return t})).reset(p),g=(0,e.yM)(),y=(0,e.MT)(0).on(g,(function(e,t){return t})).reset(p),v=(0,e.yM)(),b=(0,e.yM)(),$=(0,e.MT)([]).on(p,(function(e,t){return f(f([],e,!0),[t],!1)})).on(b,(function(e,t){return t}));$.watch((function(e){return s.innerHTML=e.map((function(e){return'\n<li class="w-96 mb-4">\n<div class="relative">\n    <span class="font-bold">{{name}}</span>\n    <span class="ml-10 text-xs absolute right-0">{{time}}</span>\n</div>\n<span class="text-xs">{{calories}}</span>\n</li>\n'.replace("{{name}}",e.name).replace("{{time}}",(t=e.date,l()(t).format("HH:mm"))).replace("{{calories}}","кКал: ".concat(e.calories));var t})).join("")}));var S=(0,e.GW)((function(e){i.disabled=e,e?i.classList.add("opacity-50"):i.classList.remove("opacity-50")})),M=$.map((function(e){return e.reduce((function(e,t){return e+t.calories}),0)})),w=(0,e.$e)([m,y]);(0,e.UP)({clock:v,source:w,fn:function(e){return{name:e[0],calories:e[1],date:(new Date).valueOf()}},target:p}),w.watch(console.log),(0,e.UP)({clock:w,fn:function(e){var t=e[0],r=e[1];return""===t||0===r},target:S}),(0,e.UP)({clock:d,fn:function(){return!0},target:S}),a.addEventListener("keyup",(function(e){var t=e.target.value;g(t?parseInt(t):0)})),n.addEventListener("keyup",(function(e){var t=e.target.value;h(t)})),i.addEventListener("click",(function(){v()})),m.watch((function(e){n.value=e})),y.watch((function(e){return a.value=e.toString()})),M.watch((function(e){return o.innerHTML="Съедено сегодня".concat(e>0?" ".concat(e," кКал"):"",":")})),d(),(0,t.zN)("pages/main",{$food:m,$calories:y,$items:$});var D="food",k=(0,e.GW)((function(e){var t={date:c(new Date),items:e};localStorage.setItem(D,JSON.stringify(t))})),O=(0,e.GW)((function(){var e=JSON.parse(localStorage.getItem(D)||"{}");return e.date!==c(new Date)?[]:e.items}));(0,e.UP)({clock:O.doneData,target:b}),(0,e.UP)({clock:$,target:k}),O()})()})();