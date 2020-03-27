import { Component, Host, h, Prop, Method, Element, Listen } from '@stencil/core';
export class Menu {
    constructor() {
        // this.slottedContent = this.menuElement.shadowRoot
        //   .querySelector('slot')
        //   // @ts-ignore
        //   .assignedNodes();
    }
    closeAllOtherMenus() {
        return Promise.resolve();
    }
    toggleExpansion() {
        return Promise.resolve((this.isExpanded = this.isExpanded === 'true' ? 'false' : 'true'));
    }
    /** find way to add and remove */
    addKeyListenerToMenu(e) {
        console.log(e.code);
        switch (e.code) {
            case 'Escape': // ESC: close menu
                this.isExpanded === 'true' &&
                    this.toggleExpansion().then(this.updateLayout.bind(this));
                break;
            //     case 37: // move left
            //         if($(target).closest('span').prev().length > 0){
            //             // skip button if it's disabled
            //             if($(target).closest('span').prev().find('button').attr('disabled') == 'disabled'){
            //                 moveFocus(keyCode, $(target).closest('span').prev())
            //             } else {
            //                 $(target).closest('span').prev().find('button').focus()
            //             }
            //         }
            //         break;
            //     case 39: // move right
            //     if($(target).closest('span').next().length > 0){
            //         if($(target).closest('span').next().find('button').attr('disabled') == 'disabled'){
            //             // skip button if it's disabled
            //             moveFocus(keyCode, $(target).closest('span').next())
            //         } else {
            //             $(target).closest('span').next().find('button').focus();
            //         }
            //     } else {
            //         $(target).closest('.ssp-rolling-buttons-menu').find('button.main-button').focus();
            //     }
            //         break;
            default:
                break;
        }
    }
    addButtonsTabIndex() {
        const menuButtons = this.menuElement.shadowRoot
            .querySelector('slot')
            // @ts-ignore
            .assignedNodes();
        console.log(menuButtons);
        for (let i = 0; i < menuButtons.length; i++) {
            const element = menuButtons[i];
            if (element.nodeType == 1) {
                // @ts-ignore
                element.setAttribute('tabindex', '0');
            }
        }
    }
    updateLayout() {
        console.log('here');
        const menuExpanded = this.isExpanded === 'true' && !this.disabled;
        if (menuExpanded) {
            this.closeAllOtherMenus();
            this.addButtonsTabIndex();
            // this.addKeyListenerToMenu();
        }
        else {
            // this.removeButtonsTabIndex();
            // this.removeKeyListenerToMenu();
        }
        this.menuElement.shadowRoot
            .querySelector('.menu-content')
            .classList.toggle('expanded');
    }
    render() {
        return (h(Host, null,
            h("div", { class: "ssp-rolling-buttons-menu" },
                h("div", { class: "menu-content btn-group", "ng-click": "$event.stopPropagation()" },
                    h("slot", null)),
                h("button", { class: "btn btn-sm main-button", tabindex: "0", onClick: () => {
                        this.toggleExpansion().then(this.updateLayout.bind(this));
                    } },
                    h("smtt-icon", { type: "btn-icon", theme: "primary", icon: "ellipsis-v" })))));
    }
    static get is() { return "smtt-rollover-menu"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["menu.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["menu.css"]
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
                "text": ""
            },
            "attribute": "disabled",
            "reflect": false
        },
        "isExpanded": {
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
                "text": ""
            },
            "attribute": "is-expanded",
            "reflect": true
        }
    }; }
    static get methods() { return {
        "closeAllOtherMenus": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "toggleExpansion": {
            "complexType": {
                "signature": "() => Promise<string>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<string>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "menuElement"; }
    static get listeners() { return [{
            "name": "keydown",
            "method": "addKeyListenerToMenu",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
