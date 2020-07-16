import { Host, h } from "@stencil/core";
export class ContextualBox {
    constructor() {
        /** close button accessible label */
        this.closeButtonLabel = "Close";
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
            this.closeButton.focus();
        }
    }
    componentDidLoad() {
        this.initContextualBox();
    }
    render() {
        const variationIcons = {
            success: (h("smtt-icon", { icon: "check-circle", label: "success icon" })),
            warning: (h("smtt-icon", { icon: "exclamation-triangle", label: "warning icon" })),
            info: (h("smtt-icon", { icon: "info-circle", label: "info icon" })),
            error: (h("smtt-icon", { icon: "exclamation-circle", label: "error icon" }))
        };
        return (h(Host, { "aria-hidden": `${!this.isVisible}` },
            h("div", { class: `box-container ${this.isVisible && 'box-container--visible'}`, role: "alert", style: { maxHeight: `${this.isVisible ? this.height : 0}px` } },
                h("div", { class: `contextual-box ${this.isVisible &&
                        ' contextual-box--visible'}` },
                    h("header", { class: `contextual-box__header contextual-box__header--${this.variation}` },
                        h("div", { class: "d-flex align-items-center" },
                            h("span", { class: "h-24 mr-3 contextual-box__icon" }, variationIcons[this.variation]),
                            h("div", { class: "contextual-box__title" }, this.messageTitle)),
                        this.dismissable && (h("button", { class: "contextual-box__close-button", "aria-label": this.closeButtonLabel, onClick: () => (this.isVisible = false), ref: ref => (this.closeButton = ref), type: "button" },
                            h("smtt-icon", { icon: "remove-circle", width: "20px" })))),
                    this.instructions && (h("div", { class: "contextual-box__body" }, this.instructions))))));
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
