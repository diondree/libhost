import { h, Host } from "@stencil/core";
import tippy from 'tippy.js';
export class ConfirmDialog {
    constructor() {
        /** the btn-type property for button one */
        this.buttonOneType = "ghost";
        /** the variation property for button one */
        this.buttonOneVariation = "primary";
        /** the btn-type property for button Two */
        this.buttonTwoType = "ghost";
        /** the variation property for button Two */
        this.buttonTwoVariation = "primary";
        /** text to show in the dialog button */
        this.buttonOneText = 'close';
    }
    componentDidLoad() {
        this.initializeTippy();
    }
    /** hide the dialog box */
    hide() {
        // @ts-ignore
        this.slotElement._tippy.hide();
    }
    /** show the dialog box */
    show() {
        // @ts-ignore
        this.slotElement._tippy.show();
    }
    /** get the name of the icon to display depending on the type */
    getIconName() {
        let iconName = this.type === 'success'
            ? 'check-circle'
            : this.type === 'info'
                ? 'info-circle'
                : 'exclamation-triangle';
        return iconName;
    }
    render() {
        return (h(Host, null,
            h("div", { id: "trigger", class: `dialog dialog--${this.type}`, ref: ref => (this.containingElement = ref) },
                h("template", { ref: ref => (this.dialogContentElement = ref) },
                    h("div", null,
                        h("header", { class: `dialog__header dialog__header--${this.type}` },
                            h("smtt-icon", { class: "dialog__header__icon", icon: this.getIconName(), color: `var(--${this.type}-icon-color)` }),
                            this.header),
                        h("div", { class: "dialog__body" },
                            h("p", { class: "dialog__text" }, this.text),
                            h("div", { class: "dialog__button-container my-3" },
                                this.buttonTwoText && (h("smtt-button", { ref: ref => (this.buttonTwoElement = ref), tabindex: "-1", onClick: this.buttonTwoEvent, variation: this.buttonTwoVariation, btnType: this.buttonTwoType, class: "dialog__button dialog__button--two" }, this.buttonTwoText)),
                                this.buttonOneText && (h("smtt-button", { ref: ref => (this.buttonOneElement = ref), tabindex: "-1", onClick: this.buttonOneEvent || this.hide.bind(this), variation: this.buttonOneVariation, btnType: this.buttonOneType, class: "dialog__button dialog__button--one ml-5" }, this.buttonOneText))))))),
            h("div", { ref: ref => (this.slotElement = ref) },
                h("slot", null))));
    }
    initializeTippy() {
        const myNode = this.dialogContentElement.children[0];
        this.tippyInstance = tippy(this.slotElement, {
            interactive: true,
            trigger: 'click manual',
            placement: 'bottom',
            content: myNode,
            boundary: 'viewport',
            appendTo: this.containingElement,
            hideOnClick: false,
            onShown: () => this.buttonOneElement.focus()
        });
    }
    static get is() { return "smtt-confirm-dialog"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["confirm-dialog.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["confirm-dialog.css"]
    }; }
    static get properties() { return {
        "slotElement": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "HTMLElement",
                "resolved": "HTMLElement",
                "references": {
                    "HTMLElement": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "the slot element which contains slotted content"
            }
        },
        "containingElement": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "HTMLElement",
                "resolved": "HTMLElement",
                "references": {
                    "HTMLElement": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "the element that our dialog will be appended to"
            }
        },
        "buttonOneElement": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "HTMLSmttButtonElement",
                "resolved": "HTMLSmttButtonElement",
                "references": {
                    "HTMLSmttButtonElement": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "the first button element (far right)"
            }
        },
        "buttonOneEvent": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "(Event) => void",
                "resolved": "(Event: any) => void",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "click event handler for button one"
            }
        },
        "buttonOneType": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "\"ghost\" | \"solid\" | \"outline\"",
                "resolved": "\"ghost\" | \"outline\" | \"solid\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "the btn-type property for button one"
            },
            "attribute": "button-one-type",
            "reflect": false,
            "defaultValue": "\"ghost\""
        },
        "buttonOneVariation": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "\"primary\" | \"destructive\" | \"warning\"",
                "resolved": "\"destructive\" | \"primary\" | \"warning\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "the variation property for button one"
            },
            "attribute": "button-one-variation",
            "reflect": false,
            "defaultValue": "\"primary\""
        },
        "buttonTwoElement": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "HTMLSmttButtonElement",
                "resolved": "HTMLSmttButtonElement",
                "references": {
                    "HTMLSmttButtonElement": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "the second button element (left)"
            }
        },
        "buttonTwoEvent": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "(Event) => void",
                "resolved": "(Event: any) => void",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "click event handler for button two"
            }
        },
        "buttonTwoType": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "\"ghost\" | \"solid\" | \"outline\"",
                "resolved": "\"ghost\" | \"outline\" | \"solid\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "the btn-type property for button Two"
            },
            "attribute": "button-two-type",
            "reflect": false,
            "defaultValue": "\"ghost\""
        },
        "buttonTwoVariation": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "\"primary\" | \"destructive\" | \"warning\"",
                "resolved": "\"destructive\" | \"primary\" | \"warning\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "the variation property for button Two"
            },
            "attribute": "button-two-variation",
            "reflect": false,
            "defaultValue": "\"primary\""
        },
        "dialogContentElement": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "HTMLElement",
                "resolved": "HTMLElement",
                "references": {
                    "HTMLElement": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "template element containing html to be placed in the dialog box"
            }
        },
        "tippyInstance": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "reference to the instance resulting from the initialization of tippy"
            },
            "attribute": "tippy-instance",
            "reflect": false
        },
        "type": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'warning' | 'info' | 'success'",
                "resolved": "\"info\" | \"success\" | \"warning\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "type of message being displayed by the dialog box"
            },
            "attribute": "type",
            "reflect": false
        },
        "text": {
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
                "text": "text body of the dialog"
            },
            "attribute": "text",
            "reflect": false
        },
        "header": {
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
                "text": "header of the dialog"
            },
            "attribute": "header",
            "reflect": false
        },
        "buttonOneText": {
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
                "text": "text to show in the dialog button"
            },
            "attribute": "button-one-text",
            "reflect": false,
            "defaultValue": "'close'"
        },
        "buttonTwoText": {
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
                "text": "text to show in the dialog button"
            },
            "attribute": "button-two-text",
            "reflect": false
        }
    }; }
    static get methods() { return {
        "hide": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {},
                "return": "Promise<void>"
            },
            "docs": {
                "text": "hide the dialog box",
                "tags": []
            }
        },
        "show": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {},
                "return": "Promise<void>"
            },
            "docs": {
                "text": "show the dialog box",
                "tags": []
            }
        }
    }; }
}
