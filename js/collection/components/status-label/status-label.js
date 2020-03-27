import { Component, Host, h, Prop } from '@stencil/core';
export class Label {
    constructor() {
        this.variation = 'completed';
        this.subtle = false;
    }
    render() {
        return (h(Host, null,
            h("span", { class: this.subtle
                    ? `badge badge--subtle badge--subtle--${this.variation}`
                    : `badge badge--pill badge--primary badge--${this.variation}` },
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
                "original": "'completed' | 'cancelled' | 'pending'",
                "resolved": "\"cancelled\" | \"completed\" | \"pending\"",
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
            "defaultValue": "'completed'"
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
