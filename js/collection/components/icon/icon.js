import { Host, h, getAssetPath } from "@stencil/core";
/** @todo no need for 2 js files containing util functions (could it possibly reduce bloat later down?) */
import { getSvgContent, createNodeFromString } from './util';
import { colorSVGNodes } from '../../utils/utils';
export class SmartIcons {
    constructor() {
        /**
         * The label for the icon
         */
        this.label = 'icon';
        this.loadRequestedIcons();
    }
    /** @todo make this function run everytime the property is changed */
    loadRequestedIcons() {
        if (this.preload) {
            let icons = this.preload.split(',');
            for (let icon of icons) {
                const svg = `svg/${icon}.svg`;
                const url = getAssetPath(svg);
                getSvgContent(url);
            }
        }
    }
    connectedCallback() {
        this.loadIcon();
    }
    // @Method()
    async addStyling(content) {
        /* create node */
        const contentNode = createNodeFromString(content);
        const SVGElement = contentNode.firstChild;
        const children = SVGElement.childNodes;
        /* configure sizing */
        if (this.width) {
            /* all images currently have an aspect ratio of 1:1 so the width == height */
            SVGElement.style.height = this.width;
            SVGElement.style.width = this.width;
        }
        /* configure color */
        if (this.color) {
            /* for each of the paths inside the svg we want to color them with the color specified in the property */
            colorSVGNodes(children, this.color);
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
        /** get svg content to place in the DOM */
        if (this.icon) {
            const svg = `svg/${this.icon}.svg`;
            const url = getAssetPath(svg);
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
                "text": "icon name"
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
                "text": "icon color"
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
                "tags": [{
                        "text": "[WIP] type of icon we have",
                        "name": "todo"
                    }],
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
                "text": "theme to be applied to the button"
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
                "tags": [{
                        "text": "[WIP] wether the image is in a disabled state",
                        "name": "todo"
                    }],
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
                "text": "width of the svg"
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
        },
        "preload": {
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
                "text": "comma seperated values representing any images to be preloaded"
            },
            "attribute": "preload",
            "reflect": false
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
