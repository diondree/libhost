import { Component, Host, h, Prop, State, Element, Watch } from '@stencil/core';
import { htmlDecode } from '../../utils/utils';
export class AccordionItem {
    constructor() {
        /**
         * Whether or not the item is expanded by default
         */
        this.expanded = false;
        /**
         * Position of icon
         */
        this.alignment = 'start';
        /**
         * The content of the action bar
         */
        this.actionBarContent = '';
        /**
         * Whether the accordion is opened or closed
         */
        this.open = false;
        /**
         * Method to handle accordion click
         */
        this.handleClick = () => {
            this.open = !this.open;
        };
        this.renderIcon = () => {
            return (h("div", { class: "d-flex justify-content-center" },
                h("smtt-button", { class: "align-self-center", size: "sm", variation: "icon", theme: "tertiary", icon: "angle-right", 
                    // iconClass={`accordion-icon ${this.open && 'accordion-icon--open'}`}
                    iconStyle: Object.assign({ transition: 'transform 500ms', alignItems: 'center' }, (this.open && { transform: 'rotate(90deg)' })), "on-click": this.handleClick })));
        };
    }
    initAccordion() {
        this.height =
            this.el.shadowRoot.querySelector('.accordion-content').scrollHeight + 32;
        this.open = this.expanded;
    }
    componentDidLoad() {
        this.initAccordion();
    }
    render() {
        return (h(Host, null,
            h("div", { class: "row" },
                h("div", { class: `accordion-item ${this.alignment === 'end' &&
                        'accordion-item--reversed'}` },
                    this.alignment === 'start' ? this.renderIcon() : h("div", null),
                    h("div", { class: `d-flex align-items-center justify-content-start ` }, this.accordionTitle),
                    h("div", { innerHTML: htmlDecode(this.actionBarContent), class: "d-flex align-items-center" }),
                    this.alignment === 'end' && this.renderIcon()),
                h("div", { class: `accordion-content pr-3 pl-8 ${this.open ? 'accordion-content--open pt-3 pb-5' : ''}`, style: this.open && { maxHeight: `${this.height}px` } },
                    h("slot", null)))));
    }
    static get is() { return "smtt-accordion-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["accordion-item.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["accordion-item.css"]
    }; }
    static get properties() { return {
        "accordionTitle": {
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
                "text": "Title of accordion item"
            },
            "attribute": "accordion-title",
            "reflect": false
        },
        "expanded": {
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
                "text": "Whether or not the item is expanded by default"
            },
            "attribute": "expanded",
            "reflect": false,
            "defaultValue": "false"
        },
        "alignment": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'start' | 'end'",
                "resolved": "\"end\" | \"start\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Position of icon"
            },
            "attribute": "alignment",
            "reflect": false,
            "defaultValue": "'start'"
        },
        "actionBarContent": {
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
                "text": "The content of the action bar"
            },
            "attribute": "action-bar-content",
            "reflect": false,
            "defaultValue": "''"
        }
    }; }
    static get states() { return {
        "open": {},
        "height": {}
    }; }
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "expanded",
            "methodName": "initAccordion"
        }]; }
}
