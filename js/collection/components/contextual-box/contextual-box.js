import { Host, h } from "@stencil/core";
export class ContextualBox {
    constructor() {
        this.mode = 'primary';
    }
    render() {
        const primarySVG = (h("svg", { "aria-hidden": "true", focusable: "false", "data-prefix": "fas", "data-icon": "info-circle", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", class: "contextual-box-icon" },
            h("path", { fill: "currentColor", d: "M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z", class: "" })));
        const warningSVG = (h("svg", { "aria-hidden": "true", focusable: "false", "data-prefix": "fas", "data-icon": "exclamation-triangle", class: "contextual-box-icon", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512" },
            h("path", { fill: "currentColor", d: "M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" })));
        return (h(Host, null,
            h("div", { class: `alert alert-${this.mode}`, role: "alert" },
                h("span", { class: "mr-2" }, this.mode === 'primary' ? primarySVG : warningSVG),
                h("slot", null))));
    }
    static get is() { return "smtt-contextual-box"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["contextual-box.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["contextual-box.css"]
    }; }
    static get properties() { return {
        "mode": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'primary' | 'warning'",
                "resolved": "\"primary\" | \"warning\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "mode",
            "reflect": false,
            "defaultValue": "'primary'"
        }
    }; }
}
