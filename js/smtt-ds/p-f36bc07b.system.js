System.register([],(function(e){"use strict";return{execute:function(){e({a:o,c:n,h:t});function t(e){var t=document.createElement("textarea");t.innerHTML=e;return t.childNodes.length===0?"":t.childNodes[0].nodeValue}function n(e,t){if(t===void 0){t=this}function n(t){if(!t||t===document||t===window){return null}var o=t.closest(e);return o?o:n(t.getRootNode().host)}return n(t)}function o(e,t){for(var n=0;n<e.length;n++){var r=e[n];if(r.nodeType===1){var i=["defs","g","svg","symbol","use"];var l=["circle","ellipse","foreignObject","image","line","path","polygon","polyline","rect","text","textPath","tspan"];if(l.includes(r.nodeName)){if(t){r.setAttribute("fill",t);console.log("fill",t)}else{r.style.fill="currentColor"}}else if(i.includes(r.nodeName)){o(r.childNodes,t)}}}}var r=e("g",(function(e){var t=Math.floor(Math.random()*1e4);console.log(e+"-"+t);if(document.querySelector(e+"-"+t)){return undefined.getUniqueContextId()}else{return e+"-"+t}}))}}}));