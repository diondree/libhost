import { Host, h } from "@stencil/core";
import { closestElement } from '../../utils/utils';
export class Dropdown {
    constructor() {
        /**
         * Whether or not the dropdown should be full width
         */
        this.fullWidth = false;
        /**
         * Whether or not the dropdown should align from the right side
         */
        this.alignRight = false;
        /**
         * Whether or not the dropdown is open
         */
        this.open = false;
        /**
         * Whether or not Dropdown items has icon
         */
        this.hasIcons = false;
    }
    /**
     * Handler to determine if the dropdown should remain open or close
     *
     * @param e Mouse Event fired on click
     */
    handleClick(e) {
        const clickedElement = e.composedPath && e.composedPath()[0];
        const dropdown = closestElement('smtt-dropdown', clickedElement);
        if (!dropdown || dropdown !== this.el) {
            this.open = false;
        }
    }
    toggleDropdown() {
        this.open = !this.open;
    }
    componentWillLoad() {
        console.log('component will load');
        this.updateItems();
    }
    updateItems() {
        console.log('function called');
        const children = Array.from(this.el.children);
        children.forEach(item => {
            item.hasIcon = this.hasIcons;
        });
    }
    render() {
        return (h(Host, null,
            h("div", { class: `h-100 d-flex align-items-stretch position-relative ${!this
                    .fullWidth && 'max-w-10'}` },
                h("smtt-button", { btnType: "ghost", variation: "default", class: `dropdown d-flex h-100 justify-content-between button__content ${this
                        .fullWidth && 'w-100'}`, onClick: () => this.toggleDropdown(), "aria-haspopup": "menu", "aria-expanded": `${this.open}`, "no-border-radius": true, layout: !this.name ? 'icon' : 'icon-label', icon: this.icon ? this.icon : `angle-down`, "full-height": true, "icon-right": this.name && true, alignment: !this.name ? 'center' : 'left' },
                    h("div", { class: "d-flex flex-column justify-content-center" },
                        h("span", { class: "text-sm" }, this.name),
                        h("span", { class: "text-xs text-gray-100 align-self-end" }, this.subHeading))),
                h("ul", { class: `dropdown-menu dropdown-menu--border mt-2 ${this.open ? 'show' : ''} ${this.fullWidth ? 'w-100' : 'min-w-10'} ${this.alignRight &&
                        'dropdown-menu--right'}`, role: "menu", style: this.size && { width: `${this.size}px` } },
                    h("slot", null)))));
    }
    static get is() { return "smtt-dropdown"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["dropdown.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["dropdown.css"]
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
                "text": "Title to be displayed on dropdown"
            },
            "attribute": "name",
            "reflect": false
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
                "text": "Subheading to be displayed under name"
            },
            "attribute": "sub-heading",
            "reflect": false
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
                "text": "Whether or not the dropdown should be full width"
            },
            "attribute": "full-width",
            "reflect": false,
            "defaultValue": "false"
        },
        "size": {
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
                "text": "The width of the dropdown container"
            },
            "attribute": "size",
            "reflect": false
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
                "text": "The name of the icon to be used as button trigger"
            },
            "attribute": "icon",
            "reflect": false
        },
        "alignRight": {
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
                "text": "Whether or not the dropdown should align from the right side"
            },
            "attribute": "align-right",
            "reflect": false,
            "defaultValue": "false"
        },
        "hasIcons": {
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
                "text": "Whether or not Dropdown items has icon"
            },
            "attribute": "has-icons",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get states() { return {
        "open": {}
    }; }
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "hasIcons",
            "methodName": "updateItems"
        }]; }
    static get listeners() { return [{
            "name": "click",
            "method": "handleClick",
            "target": "document",
            "capture": false,
            "passive": false
        }]; }
}
