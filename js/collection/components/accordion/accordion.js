import { Host, h } from "@stencil/core";
export class Accordion {
    render() {
        return (h(Host, null,
            h("slot", null)));
    }
    static get is() { return "smtt-accordion"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["accordion.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["accordion.css"]
    }; }
}
