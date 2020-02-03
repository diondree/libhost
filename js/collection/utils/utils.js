export function format(first, middle, last) {
    return ((first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : ''));
}
export function htmlDecode(input) {
    var e = document.createElement('textarea');
    e.innerHTML = input;
    // handle case of empty input
    return e.childNodes.length === 0 ? '' : e.childNodes[0].nodeValue;
}
export function closestElement(selector, base = this) {
    function closestFrom(el) {
        if (!el || el === document || el === window) {
            return null;
        }
        let found = el.closest(selector);
        return found ? found : closestFrom(el.getRootNode().host);
    }
    return closestFrom(base);
}