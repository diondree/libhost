import { Host, h } from "@stencil/core";
export class WizardStep {
    constructor() {
        /**
         * The title of the wizard step
         */
        this.name = 'Step 1';
        /**
         * Whether step is active
         */
        this.active = false;
    }
    render() {
        return (h(Host, null,
            h("div", { class: `wizard-step && ${this.active && 'd-block'}` },
                h("h1", { class: "h1" }, this.name),
                h("p", { class: "lead" }, this.subHeading),
                h("slot", null))));
    }
    static get is() { return "smtt-wizard-step"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["wizard-step.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["wizard-step.css"]
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
                "text": "The title of the wizard step"
            },
            "attribute": "name",
            "reflect": true,
            "defaultValue": "'Step 1'"
        },
        "subHeading": {
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
                "text": "The subtitle of the wizard step"
            },
            "attribute": "sub-heading",
            "reflect": false
        },
        "active": {
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
                "text": "Whether step is active"
            },
            "attribute": "active",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
}
