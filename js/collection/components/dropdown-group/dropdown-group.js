import { Host, h } from "@stencil/core";
export class DropdownGroup {
    render() {
        return (h(Host, null,
            h("div", { class: "mb-6 px-3" },
                h("span", { class: "text-xs font-weight-bold text-uppercase text-gray-100" }, this.name),
                h("div", { class: "mt-3" },
                    h("slot", null)))));
    }
    static get is() { return "smtt-dropdown-group"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["dropdown-group.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["dropdown-group.css"]
    }; }
    static get properties() { return {
        "name": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The name of the group"
            },
            "attribute": "name",
            "reflect": false
        }
    }; }
}
