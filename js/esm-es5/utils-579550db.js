function htmlDecode(input) {
    var e = document.createElement('textarea');
    e.innerHTML = input;
    // handle case of empty input
    return e.childNodes.length === 0 ? '' : e.childNodes[0].nodeValue;
}
function closestElement(selector, base) {
    if (base === void 0) { base = this; }
    function closestFrom(el) {
        if (!el || el === document || el === window) {
            return null;
        }
        var found = el.closest(selector);
        return found ? found : closestFrom(el.getRootNode().host);
    }
    return closestFrom(base);
}
export { closestElement as c, htmlDecode as h };
