(function(){var e=function(){var t=[].slice.call(arguments);t.push(e.options),t[0].match(/^\s*#([\w:\-\.]+)\s*$/igm)&&t[0].replace(/^\s*#([\w:\-\.]+)\s*$/igm,function(e,n){var r=document,i=r&&r.getElementById(n);t[0]=i?i.value||i.innerHTML:e});if(arguments.length==1)return e.compile.apply(e,t);if(arguments.length>=2)return e.to_html.apply(e,t)},t={escapehash:{"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&#x27;","/":"&#x2f;"},escapereplace:function(e){return t.escapehash[e]},escaping:function(e){return typeof e!="string"?e:e.replace(/[&<>"]/igm,this.escapereplace)},detection:function(e){return typeof e=="undefined"?"":e}},n=function(e){if(typeof console!="undefined"){if(console.warn){console.warn(e);return}if(console.log){console.log(e);return}}throw e},r=function(e,t){e=e!==Object(e)?{}:e;if(e.__proto__)return e.__proto__=t,e;var n=function(){},r=Object.create?Object.create(t):new(n.prototype=t,n);for(var i in e)e.hasOwnProperty(i)&&(r[i]=e[i]);return r};e.__cache={},e.version="0.6.4-stable",e.settings={},e.tags={operationOpen:"{@",operationClose:"}",interpolateOpen:"\\${",interpolateClose:"}",noneencodeOpen:"\\$\\${",noneencodeClose:"}",commentOpen:"\\{#",commentClose:"\\}"},e.options={cache:!0,strip:!0,errorhandling:!0,detection:!0,_method:r({__escapehtml:t,__throw:n,__juicer:e},{})},e.tagInit=function(){var t=e.tags.operationOpen+"each\\s*([^}]*?)\\s*as\\s*(\\w*?)\\s*(,\\s*\\w*?)?"+e.tags.operationClose,n=e.tags.operationOpen+"\\/each"+e.tags.operationClose,r=e.tags.operationOpen+"if\\s*([^}]*?)"+e.tags.operationClose,i=e.tags.operationOpen+"\\/if"+e.tags.operationClose,s=e.tags.operationOpen+"else"+e.tags.operationClose,o=e.tags.operationOpen+"else if\\s*([^}]*?)"+e.tags.operationClose,u=e.tags.interpolateOpen+"([\\s\\S]+?)"+e.tags.interpolateClose,a=e.tags.noneencodeOpen+"([\\s\\S]+?)"+e.tags.noneencodeClose,f=e.tags.commentOpen+"[^}]*?"+e.tags.commentClose,l=e.tags.operationOpen+"each\\s*(\\w*?)\\s*in\\s*range\\(([^}]+?)\\s*,\\s*([^}]+?)\\)"+e.tags.operationClose,c=e.tags.operationOpen+"include\\s*([^}]*?)\\s*,\\s*([^}]*?)"+e.tags.operationClose;e.settings.forstart=new RegExp(t,"igm"),e.settings.forend=new RegExp(n,"igm"),e.settings.ifstart=new RegExp(r,"igm"),e.settings.ifend=new RegExp(i,"igm"),e.settings.elsestart=new RegExp(s,"igm"),e.settings.elseifstart=new RegExp(o,"igm"),e.settings.interpolate=new RegExp(u,"igm"),e.settings.noneencode=new RegExp(a,"igm"),e.settings.inlinecomment=new RegExp(f,"igm"),e.settings.rangestart=new RegExp(l,"igm"),e.settings.include=new RegExp(c,"igm")},e.tagInit(),e.set=function(e,t){var n=this,r=function(e){return e.replace(/[\$\(\)\[\]\+\^\{\}\?\*\|\.]/igm,function(e){return"\\"+e})},i=function(e,t){var i=e.match(/^tag::(.*)$/i);if(i){n.tags[i[1]]=r(t),n.tagInit();return}n.options[e]=t};if(arguments.length===2){i(e,t);return}if(e===Object(e))for(var s in e)e.hasOwnProperty(s)&&i(s,e[s])},e.register=function(e,t){var n=this.options._method;return n.hasOwnProperty(e)?!1:n[e]=t},e.unregister=function(e){var t=this.options._method;if(t.hasOwnProperty(e))return delete t[e]},e.template=function(t){var n=this;this.options=t,this.__interpolate=function(e,t,n){var r=e.split("|"),i=r[0]||"",s;return r.length>1&&(e=r.shift(),s=r.shift().split(","),i="_method."+s.shift()+".call({}, "+[e].concat(s)+")"),"<%= "+(t?"_method.__escapehtml.escaping":"")+"("+(!n||n.detection!==!1?"_method.__escapehtml.detection":"")+"("+i+")"+")"+" %>"},this.__removeShell=function(t,r){var i=0;t=t.replace(e.settings.forstart,function(e,t,n,r){var n=n||"value",r=r&&r.substr(1),s="i"+i++;return"<% ~function() {for(var "+s+" in "+t+") {"+"if("+t+".hasOwnProperty("+s+")) {"+"var "+n+"="+t+"["+s+"];"+(r?"var "+r+"="+s+";":"")+" %>"}).replace(e.settings.forend,"<% }}}(); %>").replace(e.settings.ifstart,function(e,t){return"<% if("+t+") { %>"}).replace(e.settings.ifend,"<% } %>").replace(e.settings.elsestart,function(e){return"<% } else { %>"}).replace(e.settings.elseifstart,function(e,t){return"<% } else if("+t+") { %>"}).replace(e.settings.noneencode,function(e,t){return n.__interpolate(t,!1,r)}).replace(e.settings.interpolate,function(e,t){return n.__interpolate(t,!0,r)}).replace(e.settings.inlinecomment,"").replace(e.settings.rangestart,function(e,t,n,r){var s="j"+i++;return"<% ~function() {for(var "+s+"="+n+";"+s+"<"+r+";"+s+"++) {{"+"var "+t+"="+s+";"+" %>"}).replace(e.settings.include,function(e,t,n){return"<%= _method.__juicer("+t+", "+n+"); %>"});if(!r||r.errorhandling!==!1)t="<% try { %>"+t,t+='<% } catch(e) {_method.__throw("Juicer Render Exception: "+e.message);} %>';return t},this.__toNative=function(e,t){return this.__convert(e,!t||t.strip)},this.__lexicalAnalyze=function(t){var n=[],r=[],i="",s=["if","each","_","_method","console","break","case","catch","continue","debugger","default","delete","do","finally","for","function","in","instanceof","new","return","switch","this","throw","try","typeof","var","void","while","with","null","typeof","class","enum","export","extends","import","super","implements","interface","let","package","private","protected","public","static","yield","const","arguments","true","false","undefined","NaN"],o=function(e,t){if(Array.prototype.indexOf&&e.indexOf===Array.prototype.indexOf)return e.indexOf(t);for(var n=0;n<e.length;n++)if(e[n]===t)return n;return-1},u=function(t,i){i=i.match(/\w+/igm)[0];if(o(n,i)===-1&&o(s,i)===-1&&o(r,i)===-1){if(typeof window!="undefined"&&typeof window[i]=="function"&&window[i].toString().match(/^\s*?function \w+\(\) \{\s*?\[native code\]\s*?\}\s*?$/i))return t;if(typeof global!="undefined"&&typeof global[i]=="function"&&global[i].toString().match(/^\s*?function \w+\(\) \{\s*?\[native code\]\s*?\}\s*?$/i))return t;if(typeof e.options._method[i]=="function")return r.push(i),t;n.push(i)}return t};t.replace(e.settings.forstart,u).replace(e.settings.interpolate,u).replace(e.settings.ifstart,u).replace(e.settings.elseifstart,u).replace(e.settings.include,u).replace(/[\+\-\*\/%!\?\|\^&~<>=,\(\)]\s*([A-Za-z_]+)/igm,u);for(var a=0;a<n.length;a++)i+="var "+n[a]+"=_."+n[a]+";";for(var a=0;a<r.length;a++)i+="var "+r[a]+"=_method."+r[a]+";";return"<% "+i+" %>"},this.__convert=function(e,t){var n=[].join("");return n+="",n+="var _=_||{};",n+="var _out='';_out+='",t!==!1?(n+=e.replace(/\\/g,"\\\\").replace(/[\r\t\n]/g," ").replace(/'(?=[^%]*%>)/g,"	").split("'").join("\\'").split("	").join("'").replace(/<%=(.+?)%>/g,"';_out+=$1;_out+='").split("<%").join("';").split("%>").join("_out+='")+"';return _out;",n):(n+=e.replace(/\\/g,"\\\\").replace(/[\r]/g,"\\r").replace(/[\t]/g,"\\t").replace(/[\n]/g,"\\n").replace(/'(?=[^%]*%>)/g,"	").split("'").join("\\'").split("	").join("'").replace(/<%=(.+?)%>/g,"';_out+=$1;_out+='").split("<%").join("';").split("%>").join("_out+='")+"';return _out.replace(/[\\r\\n]\\s+[\\r\\n]/g, '\\r\\n');",n)},this.parse=function(e,t){var i=this;if(!t||t.loose!==!1)e=this.__lexicalAnalyze(e)+e;return e=this.__removeShell(e,t),e=this.__toNative(e,t),this._render=new Function("_, _method",e),this.render=function(e,t){if(!t||t!==n.options._method)t=r(t,n.options._method);return i._render.call(this,e,t)},this}},e.compile=function(e,t){if(!t||t!==this.options)t=r(t,this.options);try{var i=this.__cache[e]?this.__cache[e]:(new this.template(this.options)).parse(e,t);if(!t||t.cache!==!1)this.__cache[e]=i;return i}catch(s){return n("Juicer Compile Exception: "+s.message),{render:function(){}}}},e.to_html=function(e,t,n){if(!n||n!==this.options)n=r(n,this.options);return this.compile(e,n).render(t,n._method)},typeof module!="undefined"&&module.exports?module.exports=e:this.juicer=e,typeof define=="function"&&define([],function(){return e})})();