import { h, Host } from "@stencil/core";
export class Button {
    constructor() {
        /**
         * Wether the button is disabled or not
         */
        this.disabled = false;
        /**
         * The type of button (corresponds to type property of native html button)
         */
        this.type = "button";
        /**
         * The size of the button
         */
        this.size = "md";
        /**
         * color theme to be applied to the button e.g primary
         */
        this.variation = "primary";
        this.btnType = "solid";
        /** button layout: icon only button, icon with label or label only */
        this.layout = "label";
        /**
         * Whether or not the button should fill the height of its parent
         */
        this.fullHeight = false;
        /**
         * give the button square borders
         */
        this.noBorderRadius = false;
        /**
         * Whether or not the button should fill the width of its parent
         */
        this.fullWidth = false;
        /**
         * position of the icon relative to the text
         */
        this.iconPosition = "left";
        /** delegates focus to the inner native button */
        this.focus = options => {
            this.button.focus(options);
        };
        this.iconSizing = {
            sm: "24px",
            md: "24px",
            lg: "24px",
            xl: "32px"
        };
        /** this property holds class data for specific button types that are in fact just
         * slight modifications of other types note that the array should ALWAYS contain
         * the base class from which the modification is derived
         */
        this.typeClasses = {
            "white-border": ["btn--white-border", "btn--solid"]
        };
    }
    /** helper method for applying modification classes to the DOM */
    getClasses(type) {
        if (this.typeClasses[type]) {
            return this.typeClasses[type].join(" ");
        }
        return `btn--${type}`;
    }
    getAlignment() {
        /** horizontal alignment is only for horizontal layour */
        if (this.iconPosition === "top") {
            return "";
        }
        let flipped = this.iconPosition === "right";
        let className = "";
        /**
         * we reverse the flex items if there is an icon on the right hence the
         * following logic
         */
        if ((flipped && this.alignment === "left") ||
            (!flipped && this.alignment === "right")) {
            className = "justify-content-end";
        }
        else if ((flipped && this.alignment === "right") ||
            (!flipped && this.alignment === "left")) {
            className = "justify-content-start";
        }
        if (this.alignment === "right") {
            className += " pr-0";
        }
        if (this.alignment === "left") {
            className += " pl-0";
        }
        return className;
    }
    render() {
        const alignCenter = !this.alignment && "justify-content-center";
        return (h(Host, null,
            h("button", { ref: ref => (this.button = ref), disabled: !!this.disabled, class: `
            btn  
            btn--${this.variation} 
            ${this.getClasses(this.btnType)}
            ${this.noBorderRadius && `btn--no-border-radius`}
            ${this.size && `btn--${this.size}`} 
            ${this.fullHeight && "btn--full-height"} 
            ${this.fullWidth && `btn--full-width ${alignCenter}`} 
            ${this.iconPosition === "right" ? "flex-row-reverse" : ""}
            ${this.iconPosition === "top" ? "flex-column" : ""}
            ${this.getAlignment()}
          `, type: this.type, "aria-disabled": `${this.disabled}` },
                ["icon", "icon-label"].includes(this.layout) ? (h("smtt-icon", { class: `
                btn__icon
                ${this.layout === "icon-label" ? "btn__icon--label" : ""} 
                ${this.iconPosition === "right" && "btn__icon--label-left"}
                ${this.iconPosition === "top" && "btn__icon--label-bottom"}
              `, style: Object.assign({}, this.iconStyle), type: "btn-icon", icon: this.icon, width: this.iconSizing[this.size] })) : null,
                ["label", "icon-label"].includes(this.layout) ? h("slot", null) : null)));
    }
    static get is() { return "smtt-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["button.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["button.css"]
    }; }
    static get properties() { return {
        "button": {
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
                "text": "reference to the button element"
            }
        },
        "disabled": {
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
                "text": "Wether the button is disabled or not"
            },
            "attribute": "disabled",
            "reflect": false,
            "defaultValue": "false"
        },
        "type": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "\"confirm\" | \"submit\" | \"button\"",
                "resolved": "\"button\" | \"confirm\" | \"submit\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The type of button (corresponds to type property of native html button)"
            },
            "attribute": "type",
            "reflect": false,
            "defaultValue": "\"button\""
        },
        "size": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "\"sm\" | \"md\" | \"lg\"",
                "resolved": "\"lg\" | \"md\" | \"sm\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The size of the button"
            },
            "attribute": "size",
            "reflect": false,
            "defaultValue": "\"md\""
        },
        "variation": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "\"default\" | \"primary\" | \"destructive\" | \"warning\"",
                "resolved": "\"default\" | \"destructive\" | \"primary\" | \"warning\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "color theme to be applied to the button e.g primary"
            },
            "attribute": "variation",
            "reflect": false,
            "defaultValue": "\"primary\""
        },
        "btnType": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "\"solid\" | \"outline\" | \"ghost\"",
                "resolved": "\"ghost\" | \"outline\" | \"solid\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "btn-type",
            "reflect": false,
            "defaultValue": "\"solid\""
        },
        "layout": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "\"icon\" | \"icon-label\" | \"label\"",
                "resolved": "\"icon\" | \"icon-label\" | \"label\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "button layout: icon only button, icon with label or label only"
            },
            "attribute": "layout",
            "reflect": false,
            "defaultValue": "\"label\""
        },
        "icon": {
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
                "text": "icon to be used in button (if layout necessitates)"
            },
            "attribute": "icon",
            "reflect": false
        },
        "iconStyle": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "object",
                "resolved": "object",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Styles to be applied to icon"
            }
        },
        "fullHeight": {
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
                "text": "Whether or not the button should fill the height of its parent"
            },
            "attribute": "full-height",
            "reflect": false,
            "defaultValue": "false"
        },
        "noBorderRadius": {
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
                "text": "give the button square borders"
            },
            "attribute": "no-border-radius",
            "reflect": false,
            "defaultValue": "false"
        },
        "fullWidth": {
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
                "text": "Whether or not the button should fill the width of its parent"
            },
            "attribute": "full-width",
            "reflect": false,
            "defaultValue": "false"
        },
        "iconPosition": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "\"right\" | \"top\" | \"left\"",
                "resolved": "\"left\" | \"right\" | \"top\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "position of the icon relative to the text"
            },
            "attribute": "icon-position",
            "reflect": false,
            "defaultValue": "\"left\""
        },
        "alignment": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "\"left\" | \"right\" | \"center\"",
                "resolved": "\"center\" | \"left\" | \"right\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Alignment of button content"
            },
            "attribute": "alignment",
            "reflect": false
        },
        "focus": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "(options?: FocusOptions) => void",
                "resolved": "(options?: FocusOptions) => void",
                "references": {
                    "FocusOptions": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "delegates focus to the inner native button"
            },
            "defaultValue": "options => {\n    this.button.focus(options);\n  }"
        }
    }; }
}
