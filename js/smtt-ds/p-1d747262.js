function t(t){var n=document.createElement("textarea");return n.innerHTML=t,0===n.childNodes.length?"":n.childNodes[0].nodeValue}function n(t,n=this){return function n(e){if(!e||e===document||e===window)return null;return e.closest(t)||n(e.getRootNode().host)}(n)}function e(t,n){for(var o=0;o<t.length;o++){const r=t[o];if(1===r.nodeType){const t=["defs","g","svg","symbol","use"];["circle","ellipse","foreignObject","image","line","path","polygon","polyline","rect","text","textPath","tspan"].includes(r.nodeName)?r.style.fill=n:t.includes(r.nodeName)&&e(r.childNodes,n)}}}export{e as a,n as c,t as h}