'use strict';

function htmlDecode(input) {
    var e = document.createElement('textarea');
    e.innerHTML = input;
    // handle case of empty input
    return e.childNodes.length === 0 ? '' : e.childNodes[0].nodeValue;
}
function closestElement(selector, base = this) {
    function closestFrom(el) {
        if (!el || el === document || el === window) {
            return null;
        }
        let found = el.closest(selector);
        return found ? found : closestFrom(el.getRootNode().host);
    }
    return closestFrom(base);
}
function colorSVGNodes(children, color) {
    for (var i = 0; i < children.length; i++) {
        const child = children[i];
        if (child.nodeType === 1) {
            /**
             * The elements responsible for grouping graphical areas together
             */
            const structuralElements = ['defs', 'g', 'svg', 'symbol', 'use'];
            /**
             * The elements responsible for drawing things on the page are what we want to color
             */
            const graphicsElements = [
                'circle',
                'ellipse',
                'foreignObject',
                'image',
                'line',
                'path',
                'polygon',
                'polyline',
                'rect',
                'text',
                'textPath',
                'tspan'
            ];
            if (graphicsElements.includes(child.nodeName)) {
                if (color) {
                    child.setAttribute("fill", color);
                    console.log("fill", color);
                }
                else {
                    child.style.fill = "currentColor";
                }
            }
            else if (structuralElements.includes(child.nodeName)) {
                colorSVGNodes(child.childNodes, color);
            }
        }
    }
}
/** always use a globally unique ID wrt the page for the label
 * expecially needed on IE where shadow DOM doesnt work
 */
const getUniqueContextId = (contextString) => {
    let uid = Math.floor(Math.random() * 10000);
    console.log(`${contextString}-${uid}`);
    if (document.querySelector(`${contextString}-${uid}`)) {
        return undefined.getUniqueContextId();
    }
    else {
        return `${contextString}-${uid}`;
    }
};

exports.closestElement = closestElement;
exports.colorSVGNodes = colorSVGNodes;
exports.getUniqueContextId = getUniqueContextId;
exports.htmlDecode = htmlDecode;
