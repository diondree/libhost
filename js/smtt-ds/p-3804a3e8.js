function t(t){var e=document.createElement("textarea");return e.innerHTML=t,0===e.childNodes.length?"":e.childNodes[0].nodeValue}function e(t,e=this){return function e(n){if(!n||n===document||n===window)return null;return n.closest(t)||e(n.getRootNode().host)}(e)}function n(t,e){for(var o=0;o<t.length;o++){const r=t[o];if(1===r.nodeType){const t=["defs","g","svg","symbol","use"];["circle","ellipse","foreignObject","image","line","path","polygon","polyline","rect","text","textPath","tspan"].includes(r.nodeName)?e?(r.setAttribute("fill",e),console.log("fill",e)):r.style.fill="currentColor":t.includes(r.nodeName)&&n(r.childNodes,e)}}}const o=t=>{let e=Math.floor(1e4*Math.random());return console.log(`${t}-${e}`),document.querySelector(`${t}-${e}`)?(void 0).getUniqueContextId():`${t}-${e}`};export{n as a,e as c,o as g,t as h};