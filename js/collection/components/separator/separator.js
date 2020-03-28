import { Host, h } from "@stencil/core";
export class Separator {
    render() {
        return (h(Host, null,
            h("div", { class: "separator" })));
    }
    static get is() { return "smtt-separator"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["separator.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["separator.css"]
    }; }
}
