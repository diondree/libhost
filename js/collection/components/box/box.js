import { h } from "@stencil/core";
import { getUniqueContextId } from "../../utils/utils";
export class Box {
    constructor() {
        /** the positioning for the label 'top', 'right', 'left', or 'bottom' */
        this.labelPosition = "right";
        /** ID for checkbox label */
        this.labelId = getUniqueContextId("label");
        // Typescript doesnt like this but we are checking for IE11
        // @ts-ignore
        this.isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
    }
    checkedChange(newValue) {
        this.change.emit(newValue);
    }
    /** keydown handler to make checkbox toggle with space key */
    handleKeyDown(ev) {
        if (ev.code === "Space") {
            ev.preventDefault();
            this.checkBoxInput.click();
        }
        else if (ev.keyCode === 32) {
            /** IE support */
            if (ev.preventDefault) {
                ev.preventDefault();
            }
            else {
                ev.returnValue = false;
            }
            this.checkBoxInput.click();
        }
    }
    render() {
        return (h("div", { class: `checkbox checkbox--label-${this.labelPosition}` },
            h("input", { ref: el => (this.checkBoxInput = el), type: "checkbox", id: "checkbox-input", checked: this.checked == "true" ? true : false, disabled: this.disableCheckbox, onChange: () => {
                    this.checked = String(this.checkBoxInput.checked);
                } }),
            h("label", { class: `checkbox__control checkbox__control--${this.disableCheckbox ? "disabled" : "enabled"}
          ${this.isIE11 ? "ie-collapse-fix" : ""}`, htmlFor: "checkbox-input" },
                h("div", { class: `checkbox__control__inner ${this.checked == "indeterminate"
                        ? "checkbox__control__inner--indeterminate"
                        : ""}` },
                    h("smtt-icon", { class: this.checked == "true" ? "shown" : "hidden", color: "white", type: "btn-icon", icon: "check", 
                        /** @todo ideally this width should be set in the css
                         * because it is relative to the size of the checkbox
                         */
                        width: "14px" }))),
            this.label ? (h("label", { id: this.labelId, htmlFor: "checkbox-input", class: `checkbox__label ${this.labelPosition === "right"
                    ? "pl-3"
                    : this.labelPosition === "left"
                        ? "pr-3"
                        : ""}` }, this.label)) : null));
    }
    static get is() { return "smtt-checkbox"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["box.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["box.css"]
    }; }
    static get properties() { return {
        "label": {
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
                "text": "text label for our checkbox"
            },
            "attribute": "label",
            "reflect": false
        },
        "labelPosition": {
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
                "text": "the positioning for the label 'top', 'right', 'left', or 'bottom'"
            },
            "attribute": "label-position",
            "reflect": false,
            "defaultValue": "\"right\""
        },
        "checked": {
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
                "text": "the state of the checkbox 'true' 'false' or 'indeterminate'"
            },
            "attribute": "checked",
            "reflect": false
        },
        "disableCheckbox": {
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
                "text": "wether or not the checkbox is disabled"
            },
            "attribute": "disable-checkbox",
            "reflect": false
        }
    }; }
    static get states() { return {
        "checkBoxInput": {}
    }; }
    static get events() { return [{
            "method": "change",
            "name": "change",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted when the value of the checkbox changes"
            },
            "complexType": {
                "original": "String",
                "resolved": "String",
                "references": {
                    "String": {
                        "location": "global"
                    }
                }
            }
        }]; }
    static get watchers() { return [{
            "propName": "checked",
            "methodName": "checkedChange"
        }]; }
}
