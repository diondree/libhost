import { Component, Host, h, Prop, Element } from '@stencil/core';
import tippy from 'tippy.js';
export class Tooltip {
    componentDidLoad() {
        this.initializeTippy();
    }
    render() {
        return (h(Host, null,
            h("slot", null),
            h("div", { ref: ref => (this.containerElement = ref) })));
    }
    /**
     * note that our notation or representation of the placement of the tooltip is essentially opposite to that of
     * tippy/popper.js this function is essentially a mapper from the latter to the former
     */
    getTooltipPosition() {
        let positionMapping = {
            'top-left': 'top-end',
            'top-right': 'top-start',
            'bottom-right': 'bottom-start',
            'bottom-left': 'bottom-end'
        };
        return positionMapping[this.position]
            ? positionMapping[this.position]
            : this.position;
    }
    initializeTippy() {
        let tippyOptions = {
            interactive: true,
            content: this.text,
            boundary: 'viewport',
            theme: 'light',
            appendTo: this.containerElement
        };
        if (this.position) {
            tippyOptions.placement = this.getTooltipPosition();
        }
        this.tippyInstance = tippy(this.host, tippyOptions);
    }
    static get is() { return "smtt-tooltip"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["tooltip.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["tooltip.css"]
    }; }
    static get properties() { return {
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
                "text": "tooltip text"
            },
            "attribute": "text",
            "reflect": false
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
        "containerElement": {
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
                "text": "container for tooltip"
            }
        },
        "position": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "TooltipPlacement",
                "resolved": "\"auto\" | \"auto-end\" | \"auto-start\" | \"bottom\" | \"bottom-left\" | \"bottom-right\" | \"left\" | \"left-end\" | \"left-start\" | \"right\" | \"right-end\" | \"right-start\" | \"top\" | \"top-left\" | \"top-right\"",
                "references": {
                    "TooltipPlacement": {
                        "location": "local"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "placement of the tooltip"
            },
            "attribute": "position",
            "reflect": false
        }
    }; }
    static get elementRef() { return "host"; }
}
