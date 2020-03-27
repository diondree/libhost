const requests = new Map();
export const getSvgContent = (url) => {
    // see if we already have a request for this url
    let req = requests.get(url);
    if (!req) {
        // we don't already have a request
        req = fetch(url).then((rsp) => {
            if (rsp.status <= 299) {
                return rsp.text();
            }
            console.warn('Icon not found');
            return Promise.resolve(null);
        });
        // cache for the same requests
        requests.set(url, req);
    }
    return req;
};
export function createNodeFromString(htmlString) {
    const div = document.createElement('div');
    div.innerHTML = htmlString.trim();
    return div;
}
