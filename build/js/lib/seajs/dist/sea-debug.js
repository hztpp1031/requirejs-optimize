(function(e,t){function i(e){return function(t){return{}.toString.call(t)=="[object "+e+"]"}}function l(){return f++}function g(e){return e.match(p)[0]}function y(e){e=e.replace(d,"/"),e=e.replace(m,"$1/");while(e.match(v))e=e.replace(v,"/");return e}function b(e){var t=e.length-1,n=e.charAt(t);return n==="#"?e.substring(0,t):e.substring(t-2)===".js"||e.indexOf("?")>0||n==="/"?e:e+".js"}function S(e){var t=r.alias;return t&&o(t[e])?t[e]:e}function x(e){var t=r.paths,n;return t&&(n=e.match(w))&&o(t[n[1]])&&(e=t[n[1]]+n[2]),e}function T(e){var t=r.vars;return t&&e.indexOf("{")>-1&&(e=e.replace(E,function(e,n){return o(t[n])?t[n]:e})),e}function N(e){var t=r.map,n=e;if(t)for(var i=0,s=t.length;i<s;i++){var o=t[i];n=a(o)?o(e)||e:e.replace(o[0],o[1]);if(n!==e)break}return n}function L(e,t){var n,i=e.charAt(0);if(C.test(e))n=e;else if(i===".")n=y((t?g(t):r.cwd)+e);else if(i==="/"){var s=r.cwd.match(k);n=s?s[0]+e.substring(1):e}else n=r.base+e;return n.indexOf("//")===0&&(n=location.protocol+n),n}function A(e,t){if(!e)return"";e=S(e),e=x(e),e=T(e),e=b(e);var n=L(e,t);return n=N(n),n}function H(e){return e.hasAttribute?e.src:e.getAttribute("src",4)}function q(e,t,n){var r=O.createElement("script");if(n){var i=a(n)?n(e):n;i&&(r.charset=i)}R(r,t,e),r.async=!0,r.src=e,F=r,j?B.insertBefore(r,j):B.appendChild(r),F=null}function R(e,t,n){function s(){e.onload=e.onerror=e.onreadystatechange=null,r.debug||B.removeChild(e),e=null,t()}var i="onload"in e;i?(e.onload=s,e.onerror=function(){h("error",{uri:n,node:e}),s()}):e.onreadystatechange=function(){/loaded|complete/.test(e.readyState)&&s()}}function U(){if(F)return F;if(I&&I.readyState==="interactive")return I;var e=B.getElementsByTagName("script");for(var t=e.length-1;t>=0;t--){var n=e[t];if(n.readyState==="interactive")return I=n,I}}function X(e){var t=[];return e.replace(W,"").replace(z,function(e,n,r){r&&t.push(r)}),t}function Y(e,t){this.uri=e,this.dependencies=t||[],this.exports=null,this.status=0,this._waitings={},this._remain=0}if(e.seajs)return;var n=e.seajs={version:"2.3.0"},r=n.data={},s=i("Object"),o=i("String"),u=Array.isArray||i("Array"),a=i("Function"),f=0,c=r.events={};n.on=function(e,t){var r=c[e]||(c[e]=[]);return r.push(t),n},n.off=function(e,t){if(!e&&!t)return c=r.events={},n;var i=c[e];if(i)if(t)for(var s=i.length-1;s>=0;s--)i[s]===t&&i.splice(s,1);else delete c[e];return n};var h=n.emit=function(e,t){var r=c[e],i;if(r){r=r.slice();for(var s=0,o=r.length;s<o;s++)r[s](t)}return n},p=/[^?#]*\//,d=/\/\.\//g,v=/\/[^/]+\/\.\.\//,m=/([^:/])\/+\//g,w=/^([^/:]+)(\/.+)$/,E=/{([^{]+)}/g,C=/^\/\/.|:\//,k=/^.*?\/\/.*?\//,O=document,M=!location.href||location.href.indexOf("about:")===0?"":g(location.href),_=O.scripts,D=O.getElementById("seajsnode")||_[_.length-1],P=g(H(D)||M);n.resolve=A;var B=O.head||O.getElementsByTagName("head")[0]||O.documentElement,j=B.getElementsByTagName("base")[0],F,I;n.request=q;var z=/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|\/\*[\S\s]*?\*\/|\/(?:\\\/|[^\/\r\n])+\/(?=[^\/])|\/\/.*|\.\s*require|(?:^|[^$])\brequire\s*\(\s*(["'])(.+?)\1\s*\)/g,W=/\\\\/g,V=n.cache={},$,J={},K={},Q={},G=Y.STATUS={FETCHING:1,SAVED:2,LOADING:3,LOADED:4,EXECUTING:5,EXECUTED:6};Y.prototype.resolve=function(){var e=this,t=e.dependencies,n=[];for(var r=0,i=t.length;r<i;r++)n[r]=Y.resolve(t[r],e.uri);return n},Y.prototype.load=function(){var e=this;if(e.status>=G.LOADING)return;e.status=G.LOADING;var t=e.resolve();h("load",t);var n=e._remain=t.length,r;for(var i=0;i<n;i++)r=Y.get(t[i]),r.status<G.LOADED?r._waitings[e.uri]=(r._waitings[e.uri]||0)+1:e._remain--;if(e._remain===0){e.onload();return}var s={};for(i=0;i<n;i++)r=V[t[i]],r.status<G.FETCHING?r.fetch(s):r.status===G.SAVED&&r.load();for(var o in s)s.hasOwnProperty(o)&&s[o]()},Y.prototype.onload=function(){var e=this;e.status=G.LOADED,e.callback&&e.callback();var t=e._waitings,n,r;for(n in t)t.hasOwnProperty(n)&&(r=V[n],r._remain-=t[n],r._remain===0&&r.onload());delete e._waitings,delete e._remain},Y.prototype.fetch=function(e){function u(){n.request(s.requestUri,s.onRequest,s.charset)}function a(){delete J[o],K[o]=!0,$&&(Y.save(i,$),$=null);var e,t=Q[o];delete Q[o];while(e=t.shift())e.load()}var t=this,i=t.uri;t.status=G.FETCHING;var s={uri:i};h("fetch",s);var o=s.requestUri||i;if(!o||K[o]){t.load();return}if(J[o]){Q[o].push(t);return}J[o]=!0,Q[o]=[t],h("request",s={uri:i,requestUri:o,onRequest:a,charset:r.charset}),s.requested||(e?e[s.requestUri]=u:u())},Y.prototype.exec=function(){function r(e){return Y.get(r.resolve(e)).exec()}var e=this;if(e.status>=G.EXECUTING)return e.exports;e.status=G.EXECUTING;var n=e.uri;r.resolve=function(e){return Y.resolve(e,n)},r.async=function(e,t){return Y.use(e,t,n+"_async_"+l()),r};var i=e.factory,s=a(i)?i(r,e.exports={},e):i;return s===t&&(s=e.exports),delete e.factory,e.exports=s,e.status=G.EXECUTED,h("exec",e),s},Y.resolve=function(e,t){var r={id:e,refUri:t};return h("resolve",r),r.uri||n.resolve(r.id,t)},Y.define=function(e,n,r){var i=arguments.length;i===1?(r=e,e=t):i===2&&(r=n,u(e)?(n=e,e=t):n=t),!u(n)&&a(r)&&(n=X(r.toString()));var s={id:e,uri:Y.resolve(e),deps:n,factory:r};if(!s.uri&&O.attachEvent){var o=U();o&&(s.uri=o.src)}h("define",s),s.uri?Y.save(s.uri,s):$=s},Y.save=function(e,t){var n=Y.get(e);n.status<G.SAVED&&(n.id=t.id||e,n.dependencies=t.deps||[],n.factory=t.factory,n.status=G.SAVED,h("save",n))},Y.get=function(e,t){return V[e]||(V[e]=new Y(e,t))},Y.use=function(t,n,r){var i=Y.get(r,u(t)?t:[t]);i.callback=function(){var t=[],r=i.resolve();for(var s=0,o=r.length;s<o;s++)t[s]=V[r[s]].exec();n&&n.apply(e,t),delete i.callback},i.load()},n.use=function(e,t){return Y.use(e,t,r.cwd+"_use_"+l()),n},Y.define.cmd={},e.define=Y.define,n.Module=Y,r.fetchedList=K,r.cid=l,n.require=function(e){var t=Y.get(Y.resolve(e));return t.status<G.EXECUTING&&(t.onload(),t.exec()),t.exports},r.base=P,r.dir=P,r.cwd=M,r.charset="utf-8",n.config=function(e){for(var t in e){var i=e[t],o=r[t];if(o&&s(o))for(var a in i)o[a]=i[a];else u(o)?i=o.concat(i):t==="base"&&(i.slice(-1)!=="/"&&(i+="/"),i=L(i)),r[t]=i}return h("config",e),n}})(this);