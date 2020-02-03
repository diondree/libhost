import { Host, h } from "@stencil/core";
export class DropdownItem {
    constructor() {
        /**
         * Link item should link to
         */
        this.href = '#';
        /**
         * Target describing how the link should be opened
         */
        this.target = '_self';
    }
    render() {
        return (h(Host, null,
            h("li", { class: "dropdown-item text-sm" },
                h("a", { class: "dropdown-item__link d-flex p-3", href: this.href, target: this.target },
                    h("slot", null)))));
    }
    static get is() { return "smtt-dropdown-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["dropdown-item.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["dropdown-item.css"]
    }; }
    static get properties() { return {
        "href": {
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
                "text": "Link item should link to"
            },
            "attribute": "href",
            "reflect": false,
            "defaultValue": "'#'"
        },
        "target": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'_blank' | '_self' | '_parent' | '_top' | 'framename'",
                "resolved": "\"_blank\" | \"_parent\" | \"_self\" | \"_top\" | \"framename\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Target describing how the link should be opened"
            },
            "attribute": "target",
            "reflect": false,
            "defaultValue": "'_self'"
        }
    }; }
}
