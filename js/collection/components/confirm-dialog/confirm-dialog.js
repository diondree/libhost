import { h, Host } from "@stencil/core";
import tippy from 'tippy.js';
export class ConfirmDialog {
    componentDidLoad() {
        this.initializeTippy();
    }
    /** hide the dialog box */
    hide() {
        // @ts-ignore
        this.slotElement._tippy.hide();
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
                            h("smtt-button", { ref: ref => (this.buttonElement = ref), tabindex: "-1", onClick: this.hide.bind(this), theme: "secondary", class: "dialog__button" }, "close"))))),
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
            onShown: () => this.buttonElement.focus()
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
        "buttonElement": {
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
                "text": "the button element"
            }
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
        }
    }; }
}
