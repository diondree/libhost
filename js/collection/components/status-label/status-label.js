import { Host, h } from "@stencil/core";
export class Label {
    constructor() {
        this.variation = "success";
        this.subtle = false;
    }
    render() {
        return (h(Host, null,
            h("span", { class: this.subtle
                    ? `badge badge--subtle badge--subtle--${this.variation}`
                    : `badge badge--pill badge--${this.variation}` },
                h("p", { class: "badge__status-text" },
                    h("slot", null)))));
    }
    static get is() { return "smtt-status-label"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["status-label.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["status-label.css"]
    }; }
    static get properties() { return {
        "variation": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "| \"success\"\n    | \"alert\"\n    | \"warning\"\n    | \"neutral\"\n    | \"default\"\n    | \"primary\"",
                "resolved": "\"alert\" | \"default\" | \"neutral\" | \"primary\" | \"success\" | \"warning\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "variation",
            "reflect": false,
            "defaultValue": "\"success\""
        },
        "subtle": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "subtle",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
}
