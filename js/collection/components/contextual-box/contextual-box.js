import { Component, Host, h, Prop, Element, State, Watch, Listen } from '@stencil/core';
export class ContextualBox {
    constructor() {
        /**
         * The variation of the contextual box
         */
        this.variation = 'success';
        /**
         * The title message
         */
        this.messageTitle = 'Feedback message title';
        /**
         * Whether the contextual box is dismissable
         */
        this.dismissable = true;
        /**
         * Whether or not the contextual box should be visible
         */
        this.isVisible = true;
        this.handleKeyPress = (event) => {
            if (event.keyCode === 13 || event.keyCode === 32) {
                this.isVisible = false;
            }
        };
    }
    initContextualBox() {
        this.height =
            this.contextualBox.shadowRoot.querySelector('.contextual-box')
                .scrollHeight + 32;
    }
    dismissFocus() {
        if (this.dismissable && this.isVisible) {
            this.dismissIcon.focus();
        }
    }
    componentDidLoad() {
        this.initContextualBox();
    }
    render() {
        const variationIcons = {
            success: (h("smtt-icon", { icon: "check-circle", color: "var(--color-green-500)", label: "success" })),
            warning: (h("smtt-icon", { icon: "exclamation-triangle", color: "var(--color-yellow-500)", label: "warning" })),
            info: (h("smtt-icon", { icon: "info-circle", color: "var(--color-deep-blue-500)", label: "info" })),
            error: (h("smtt-icon", { icon: "exclamation-circle", color: "var(--color-red-500)", label: "error" }))
        };
        const colors = {
            success: 'var(--color-green-900)',
            warning: 'var(--color-yellow-900)',
            info: 'var(--color-blue-900)',
            error: 'var(--color-red-900)'
        };
        return (h(Host, { "aria-hidden": `${!this.isVisible}` },
            h("div", { class: `box-container ${this.isVisible && 'box-container--visible'}`, role: "alert", style: { maxHeight: `${this.isVisible ? this.height : 0}px` } },
                h("div", { class: `contextual-box ${this.isVisible &&
                        ' contextual-box--visible'}` },
                    h("header", { class: `contextual-box-header ${this.variation}` },
                        h("div", { class: "d-flex align-items-center" },
                            h("span", { class: "h-24 mr-3" }, variationIcons[this.variation]),
                            h("div", { class: "contextual-box__title" }, this.messageTitle)),
                        this.dismissable && (h("smtt-icon", { tabindex: "-1", ref: ref => (this.dismissIcon = ref), icon: "remove-circle", color: colors[this.variation], width: "20px", onClick: () => (this.isVisible = false), onKeyDown: this.handleKeyPress, role: "button" }))),
                    this.instructions && (h("div", { class: "contextual-box-body" }, this.instructions))))));
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
        "variation": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'success' | 'warning' | 'info' | 'error'",
                "resolved": "\"error\" | \"info\" | \"success\" | \"warning\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The variation of the contextual box"
            },
            "attribute": "variation",
            "reflect": false,
            "defaultValue": "'success'"
        },
        "messageTitle": {
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
                "text": "The title message"
            },
            "attribute": "message-title",
            "reflect": false,
            "defaultValue": "'Feedback message title'"
        },
        "instructions": {
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
                "text": "Instructions found in the body of the contextual box"
            },
            "attribute": "instructions",
            "reflect": false
        },
        "dismissable": {
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
                "text": "Whether the contextual box is dismissable"
            },
            "attribute": "dismissable",
            "reflect": false,
            "defaultValue": "true"
        },
        "duration": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The duration of the message in milliseconds"
            },
            "attribute": "duration",
            "reflect": false
        },
        "isVisible": {
            "type": "boolean",
            "mutable": true,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Whether or not the contextual box should be visible"
            },
            "attribute": "is-visible",
            "reflect": false,
            "defaultValue": "true"
        }
    }; }
    static get states() { return {
        "height": {}
    }; }
    static get elementRef() { return "contextualBox"; }
    static get watchers() { return [{
            "propName": "isVisible",
            "methodName": "dismissFocus"
        }]; }
    static get listeners() { return [{
            "name": "resize",
            "method": "initContextualBox",
            "target": "window",
            "capture": false,
            "passive": true
        }]; }
}
