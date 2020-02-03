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

exports.closestElement = closestElement;
exports.htmlDecode = htmlDecode;
