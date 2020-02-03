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
        this.type = 'button';
        /**
         * color theme to be applied to the button e.g primary
         */
        this.theme = 'primary';
        /** button variation: icon only button, icon with label or label only */
        this.variation = 'label';
        /**
         * Whether or not the button should fill the height of its parent
         */
        this.fullHeight = false;
        /**
         * Whether or not the button should fill the width of its parent
         */
        this.fullWidth = false;
        /**
         * Whether icon should be displayed to the left or the right
         */
        this.iconRight = false;
    }
    onClick(type) {
        if (type === 'confirm') {
            confirm('Press a button');
        }
    }
    render() {
        const alignLeft = this.iconRight
            ? 'justify-content-end'
            : 'justify-content-start';
        const alignRight = this.iconRight
            ? 'justify-content-start'
            : 'justify-content-end';
        const alignCenter = !this.alignment && 'justify-content-center';
        return (h(Host, null,
            h("button", { disabled: !!this.disabled, class: `btn btn-${this.theme === 'secondary' ? 'default' : this.theme} d-inline-flex align-items-center ${this.size &&
                    `btn-${this.size}`} ${this.fullHeight && 'h-100'} ${this
                    .fullWidth && `w-100 ${alignCenter}`} ${this.iconRight &&
                    'flex-row-reverse'} ${this.alignment === 'left' &&
                    `${alignLeft} pl-0`} ${this.alignment === 'right' &&
                    `${alignRight} pr-0`}`, type: this.type, onClick: () => this.onClick(this.type), "aria-disabled": "true" },
                ['icon', 'icon-label'].includes(this.variation) ? (h("smtt-icon", { class: `btn__icon${this.variation === 'icon-label' ? '--label' : ''} ${this.iconRight && 'm-0 ml-1'}`, style: Object.assign({}, this.iconStyle), type: "btn-icon", icon: this.icon, width: this.size === 'sm' ? '20px' : '24px' })) : null,
                ['label', 'icon-label'].includes(this.variation) ? (h("slot", null)) : null)));
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
                "original": "'confirm' | 'submit' | 'button'",
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
            "defaultValue": "'button'"
        },
        "size": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'sm' | 'md' | 'lg'",
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
            "reflect": false
        },
        "theme": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "| 'primary'\n    | 'secondary'\n    | 'tertiary'\n    | 'destructive'\n    | 'warning'\n    | 'text-links'",
                "resolved": "\"destructive\" | \"primary\" | \"secondary\" | \"tertiary\" | \"text-links\" | \"warning\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "color theme to be applied to the button e.g primary"
            },
            "attribute": "theme",
            "reflect": false,
            "defaultValue": "'primary'"
        },
        "variation": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'icon' | 'icon-label' | 'label'",
                "resolved": "\"icon\" | \"icon-label\" | \"label\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "button variation: icon only button, icon with label or label only"
            },
            "attribute": "variation",
            "reflect": false,
            "defaultValue": "'label'"
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
                "text": "icon to be used in button (if variation necessitates)"
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
        "iconRight": {
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
                "text": "Whether icon should be displayed to the left or the right"
            },
            "attribute": "icon-right",
            "reflect": false,
            "defaultValue": "false"
        },
        "alignment": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'left' | 'right' | 'center'",
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
        }
    }; }
}
