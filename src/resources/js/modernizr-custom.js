/*! modernizr 3.1.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-backgroundsize-cssanimations-eventlistener-filereader-filesystem-formvalidation-fullscreen-inputtypes-json-opacity-video !*/
!function(e,t,n){function i(e,t){return typeof e===t}function r(){var e,t,n,r,a,o,s;for(var l in C){if(e=[],t=C[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=i(t.fn,"function")?t.fn():t.fn,a=0;a<e.length;a++)o=e[a],s=o.split("."),1===s.length?Modernizr[s[0]]=r:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=r),h.push((r?"":"no-")+s.join("-"))}}function a(e){var t=T.className,n=Modernizr._config.classPrefix||"";if(S&&(t=t.baseVal),Modernizr._config.enableJSClass){var i=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(i,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),S?T.className.baseVal=t:T.className=t)}function o(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):S?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function s(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function l(){var e=t.body;return e||(e=o(S?"svg":"body"),e.fake=!0),e}function u(e,n,i,r){var a,s,u,d,f="modernizr",c=o("div"),p=l();if(parseInt(i,10))for(;i--;)u=o("div"),u.id=r?r[i]:f+(i+1),c.appendChild(u);return a=o("style"),a.type="text/css",a.id="s"+f,(p.fake?p:c).appendChild(a),p.appendChild(c),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(t.createTextNode(e)),c.id=f,p.fake&&(p.style.background="",p.style.overflow="hidden",d=T.style.overflow,T.style.overflow="hidden",T.appendChild(p)),s=n(c,e),p.fake?(p.parentNode.removeChild(p),T.style.overflow=d,T.offsetHeight):c.parentNode.removeChild(c),!!s}function d(e,t){return function(){return e.apply(t,arguments)}}function f(e,t,n){var r;for(var a in e)if(e[a]in t)return n===!1?e[a]:(r=t[e[a]],i(r,"function")?d(r,n||t):r);return!1}function c(e,t){return!!~(""+e).indexOf(t)}function p(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(t,i){var r=t.length;if("CSS"in e&&"supports"in e.CSS){for(;r--;)if(e.CSS.supports(p(t[r]),i))return!0;return!1}if("CSSSupportsRule"in e){for(var a=[];r--;)a.push("("+p(t[r])+":"+i+")");return a=a.join(" or "),u("@supports ("+a+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function v(e,t,r,a){function l(){d&&(delete j.style,delete j.modElem)}if(a=i(a,"undefined")?!1:a,!i(r,"undefined")){var u=m(e,r);if(!i(u,"undefined"))return u}for(var d,f,p,v,y,g=["modernizr","tspan"];!j.style;)d=!0,j.modElem=o(g.shift()),j.style=j.modElem.style;for(p=e.length,f=0;p>f;f++)if(v=e[f],y=j.style[v],c(v,"-")&&(v=s(v)),j.style[v]!==n){if(a||i(r,"undefined"))return l(),"pfx"==t?v:!0;try{j.style[v]=r}catch(h){}if(j.style[v]!=y)return l(),"pfx"==t?v:!0}return l(),!1}function y(e,t,n,r,a){var o=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+N.join(o+" ")+o).split(" ");return i(t,"string")||i(t,"undefined")?v(s,t,r,a):(s=(e+" "+z.join(o+" ")+o).split(" "),f(s,t,n))}function g(e,t,i){return y(e,n,n,t,i)}var h=[],C=[],b={_version:"3.1.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){C.push({name:e,fn:t,options:n})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=b,Modernizr=new Modernizr,Modernizr.addTest("eventlistener","addEventListener"in e),Modernizr.addTest("json","JSON"in e&&"parse"in JSON&&"stringify"in JSON),Modernizr.addTest("filereader",!!(e.File&&e.FileList&&e.FileReader));var T=t.documentElement,S="svg"===T.nodeName.toLowerCase();Modernizr.addTest("video",function(){var e=o("video"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),t.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),t.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(n){}return t});var w=o("input"),x="search tel url email datetime date month week time datetime-local number range color".split(" "),_={};Modernizr.inputtypes=function(e){for(var i,r,a,o=e.length,s=":)",l=0;o>l;l++)w.setAttribute("type",i=e[l]),a="text"!==w.type&&"style"in w,a&&(w.value=s,w.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(i)&&w.style.WebkitAppearance!==n?(T.appendChild(w),r=t.defaultView,a=r.getComputedStyle&&"textfield"!==r.getComputedStyle(w,null).WebkitAppearance&&0!==w.offsetHeight,T.removeChild(w)):/^(search|tel)$/.test(i)||(a=/^(url|email|number)$/.test(i)?w.checkValidity&&w.checkValidity()===!1:w.value!=s)),_[e[l]]=!!a;return _}(x);var E=b._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];b._prefixes=E,Modernizr.addTest("opacity",function(){var e=o("a").style;return e.cssText=E.join("opacity:.55;"),/^0.55$/.test(e.opacity)});var P=b.testStyles=u;Modernizr.addTest("formvalidation",function(){var t=o("form");if(!("checkValidity"in t&&"addEventListener"in t))return!1;if("reportValidity"in t)return!0;var n,i=!1;return Modernizr.formvalidationapi=!0,t.addEventListener("submit",function(t){(!e.opera||e.operamini)&&t.preventDefault(),t.stopPropagation()},!1),t.innerHTML='<input name="modTest" required><button></button>',P("#modernizr form{position:absolute;top:-99999em}",function(e){e.appendChild(t),n=t.getElementsByTagName("input")[0],n.addEventListener("invalid",function(e){i=!0,e.preventDefault(),e.stopPropagation()},!1),Modernizr.formvalidationmessage=!!n.validationMessage,t.getElementsByTagName("button")[0].click()}),i});var k="Moz O ms Webkit",N=b._config.usePrefixes?k.split(" "):[];b._cssomPrefixes=N;var L=function(t){var i,r=E.length,a=e.CSSRule;if("undefined"==typeof a)return n;if(!t)return!1;if(t=t.replace(/^@/,""),i=t.replace(/-/g,"_").toUpperCase()+"_RULE",i in a)return"@"+t;for(var o=0;r>o;o++){var s=E[o],l=s.toUpperCase()+"_"+i;if(l in a)return"@-"+s.toLowerCase()+"-"+t}return!1};b.atRule=L;var z=b._config.usePrefixes?k.toLowerCase().split(" "):[];b._domPrefixes=z;var $={elem:o("modernizr")};Modernizr._q.push(function(){delete $.elem});var j={style:$.elem.style};Modernizr._q.unshift(function(){delete j.style}),b.testAllProps=y;var A=b.prefixed=function(e,t,n){return 0===e.indexOf("@")?L(e):(-1!=e.indexOf("-")&&(e=s(e)),t?y(e,t,n):y(e,"pfx"))};Modernizr.addTest("fullscreen",!(!A("exitFullscreen",t,!1)&&!A("cancelFullScreen",t,!1))),Modernizr.addTest("filesystem",!!A("requestFileSystem",e)),b.testAllProps=g,Modernizr.addTest("cssanimations",g("animationName","a",!0)),Modernizr.addTest("backgroundsize",g("backgroundSize","100%",!0)),r(),a(h),delete b.addTest,delete b.addAsyncTest;for(var O=0;O<Modernizr._q.length;O++)Modernizr._q[O]();e.Modernizr=Modernizr}(window,document);