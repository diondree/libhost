import { Host, h } from "@stencil/core";
import { Notyf } from './vendor/notyf/build/notyf.es.js';
export class Toast {
    constructor() {
        // @ts-ignore
        this.toast = new Notyf({ rootElement: this.toastEl });
    }
    error(data) {
        this.toast.error(Object.assign({ icon: 'exclamation-circle', ripple: false }, data));
    }
    info(data) {
        this.toast.open(Object.assign({ type: 'info', icon: 'info-circle', ripple: false }, data));
    }
    warning(data) {
        this.toast.open(Object.assign({ type: 'warning', icon: 'exclamation-triangle', ripple: false }, data));
    }
    success(data) {
        this.toast.open(Object.assign({ type: 'success', icon: 'check-circle', ripple: false }, data));
    }
    render() {
        return (h(Host, { class: "card" },
            h("slot", null)));
    }
    static get is() { return "smtt-toast"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["toast.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["toast.css"]
    }; }
    static get properties() { return {
        "toast": {
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
                "text": ""
            },
            "attribute": "toast",
            "reflect": false
        }
    }; }
    static get methods() { return {
        "error": {
            "complexType": {
                "signature": "(data: any) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
                "references": {},
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "info": {
            "complexType": {
                "signature": "(data: any) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
                "references": {},
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "warning": {
            "complexType": {
                "signature": "(data: any) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
                "references": {},
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "success": {
            "complexType": {
                "signature": "(data: any) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
                "references": {},
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "toastEl"; }
}
