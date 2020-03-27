import { Component, Prop, h } from '@stencil/core';
export class Box {
    constructor() {
        /** the positioning for the label 'top', 'right', 'left', or 'bottom' */
        this.labelPosition = 'right';
    }
    /** keydown handler to make checkbox toggle with enter key */
    handleKeyDown(ev) {
        if (ev.code === 'Enter') {
            this.checkBoxInput.click();
        }
    }
    render() {
        return (h("div", { onClick: e => {
                // @ts-ignore
                if (e.target.nodeName == 'INPUT' && this.clickAction) {
                    this.clickAction(e);
                }
            }, onKeyDown: this.handleKeyDown, class: `checkbox checkbox--label-${this.labelPosition}` },
            h("input", { ref: el => (this.checkBoxInput = el), type: "checkbox", id: "checkbox-input", checked: this.checked == 'true' ? true : false, disabled: this.disableCheckbox, onClick: () => {
                    this.checked = String(this.checkBoxInput.checked);
                } }),
            h("label", { htmlFor: "checkbox-input", class: `checkbox__control checkbox__control--${this.disableCheckbox ? 'disabled' : 'enabled'}` },
                h("div", { class: `checkbox__control__inner ${this.checked == 'indeterminate'
                        ? 'checkbox__control__inner--indeterminate'
                        : ''}` },
                    h("smtt-icon", { class: this.checked == 'true' ? 'shown' : 'hidden', color: "white", type: "btn-icon", icon: "check", 
                        /** @todo ideally this width should be set in the css
                         * because it is relative to the size of the checkbox
                         */
                        width: "14px" }))),
            this.label ? (h("label", { htmlFor: "checkbox-input", class: `checkbox__label ${this.labelPosition === 'right'
                    ? 'pl-16'
                    : this.labelPosition === 'left'
                        ? 'pr-16'
                        : ''}` }, this.label)) : null));
    }
    static get is() { return "check-box"; }
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
            "defaultValue": "'right'"
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
        },
        "clickAction": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "(ev: MouseEvent) => void",
                "resolved": "(ev: MouseEvent) => void",
                "references": {
                    "MouseEvent": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "function to run when clicked"
            }
        }
    }; }
}
