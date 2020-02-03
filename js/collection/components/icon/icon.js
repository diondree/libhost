import { Host, h, getAssetPath } from "@stencil/core";
import { getSvgContent, createNodeFromString } from './util';
export class SmartIcons {
    constructor() {
        /**
         * The label for the icon
         */
        this.label = 'icon';
    }
    connectedCallback() {
        this.loadIcon();
    }
    // @Method()
    async addStyling(content) {
        /* create node */
        const contentNode = createNodeFromString(content);
        const children = contentNode.firstChild.childNodes;
        /* configure sizing */
        if (this.width) {
            /* all images currently have an aspect ratio of 1:1 so the width == height */
            // @ts-ignore
            contentNode.firstChild.style.height = this.width;
            // @ts-ignore
            contentNode.firstChild.style.width = this.width;
        }
        /* configure color */
        if (this.color) {
            /* for each of the paths inside the svg we want to color them with the color specified in the property */
            for (var i = 0; i < children.length; i++) {
                const child = children[i];
                if (child.nodeType === 1 && child.nodeName === 'path') {
                    // @ts-ignore
                    child.style.fill = this.color;
                }
            }
        }
        this.svgContent = contentNode.innerHTML;
        return contentNode;
    }
    /** @todo [WIP] styling meant to go hand in hand with buttons (should probably be moved) */
    async addBtnClass(contentNode) {
        // use host-context -> UPDATE: poor browser support
        contentNode.firstChild.classList.add('smtt-icon--btn-inner');
        this.svgContent = contentNode.innerHTML;
    }
    loadIcon() {
        const svg = `svg/${this.icon}.svg`;
        const url = getAssetPath(svg);
        /** get svg content to place in the DOM */
        if (this.icon) {
            getSvgContent(url).then(content => {
                this.svgContent = content;
                /* add developer defined styling to the icon */
                return this.addStyling(content).then(contentNode => {
                    if (this.type === 'btn-icon') {
                        this.addBtnClass(contentNode);
                    }
                });
            });
        }
        this.svgContent = '';
    }
    render() {
        // TODO: add a default aria label if none is present to host
        return (h(Host, { role: "img", style: { width: this.width, height: this.width }, "aria-label": this.label }, this.svgContent ? (h("div", { style: { color: 'currentColor' }, class: `icon d-inline-flex ${this.disabled ? 'disable' : ''}`, innerHTML: this.svgContent })) : (h("div", { class: "icon" }))));
    }
    static get is() { return "smtt-icon"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["icon.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["icon.css"]
    }; }
    static get assetsDirs() { return ["svg"]; }
    static get properties() { return {
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
                "text": ""
            },
            "attribute": "icon",
            "reflect": false
        },
        "color": {
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
            "attribute": "color",
            "reflect": false
        },
        "type": {
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
            "attribute": "type",
            "reflect": false
        },
        "theme": {
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
            "attribute": "theme",
            "reflect": false
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
                "text": ""
            },
            "attribute": "disabled",
            "reflect": false
        },
        "width": {
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
            "attribute": "width",
            "reflect": false
        },
        "label": {
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
                "text": "The label for the icon"
            },
            "attribute": "label",
            "reflect": false,
            "defaultValue": "'icon'"
        }
    }; }
    static get states() { return {
        "svgContent": {}
    }; }
    static get methods() { return {
        "addBtnClass": {
            "complexType": {
                "signature": "(contentNode: any) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": [{
                        "name": "todo",
                        "text": "[WIP] styling meant to go hand in hand with buttons (should probably be moved)"
                    }]
            }
        }
    }; }
    static get watchers() { return [{
            "propName": "icon",
            "methodName": "loadIcon"
        }, {
            "propName": "color",
            "methodName": "loadIcon"
        }, {
            "propName": "width",
            "methodName": "loadIcon"
        }]; }
}
