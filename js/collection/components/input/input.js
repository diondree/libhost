import { Component, Host, h, Prop, Listen, State, Watch, Event } from '@stencil/core';
export class Input {
    constructor() {
        /** id to be applied to input field */
        this.formId = this.name;
        /** type of input field */
        this.type = 'text';
        /** Whether or not to validate input on blur */
        this.validateOnBlur = true;
        /** map of possible regexes that can be applied to input's pattern field */
        this.patternMap = {
            ALLOWED_ALPHANUMERIC_CHARS_REGEX: '^[a-zA-Z0-9]+$',
            ALLOWED_CHARS_REGEX: "^[a-zA-Z0-9\xD1\xF1s@¡!+#$%&?¿*().,;:°=-_/´']+$",
            ALLOWED_CHARS_REGEX_LIMITED: "^[a-zA-Z0-9s-_',]+$",
            ONLY_CHARS_REGEX: '^[a-zA-Z@_$]+$',
            ONLY_CHARS_EXTENDED_REGEX: "^[a-zA-ZñÑáéíóúÁÉÍÓÚ.,s-_']+$",
            USERNAME_CHARS: "^(?!^.)[a-zA-Z0-9-_.']+$",
            HEX_COLOR_REGEX: '^#([A-Fa-f0-9]{6})$',
            UPPERCASE_WORD_REGEX: '^[A-Z\xD1]+$',
            URL_REGEX: '^(https?://)+(([da-z.-]+).([a-z.]{2,6})([/w .-]*))*((?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))*(:d*)*/?(/+.*)*$',
            VALID_CUSTOM_CODE_REGEX: '^[a-zA-Z0-9.s-%+$/]+$',
            ZIP_CODE_REGEX: '^[0-9]+[-]*[0-9]*$',
            ONLY_NUMBER_REGEX: '^[0-9]+$',
            RESTRICTED_CHARS_REGEX: '^[a-zA-Z0-9\xD1\xF1.s-]+$'
        };
        this.errorMap = {
            /** @todo will this be updated when errormsg changes dynamically? */
            default: this.errorMsg
        };
        this.focus = options => {
            this.inputEl.focus(options);
        };
        /** provide the validity state of the component */
        this.validity = () => {
            if (this.inputEl) {
                let outputState = {};
                let validityState = this.inputEl.validity;
                // we need to copy it out because it is read only and we need to edit it
                for (const state in validityState) {
                    outputState[state] = validityState[state];
                }
                if (this.customValidator && !this.customValidator(this.value)) {
                    /** if it fails custom validation then set custom error to true (default is false)
                     * set valid to false here as well */
                    outputState.customError = true;
                    outputState.valid = false;
                }
                return outputState;
            }
            return null;
        };
        /** wether input is valid or not considering its constraints */
        this.checkValidity = () => {
            /** @todo checkValidity should be consitent with validityState.valid
             * NB!! also investigate wether or not checkValidity can be invalid and we overwrite it to be valid
             */
            return this.inputEl.checkValidity() && this.validity().valid;
        };
        /** current value of the input element */
        this.value = '';
        this.onInput = (ev) => {
            const input = ev.target;
            if (input) {
                this.value = input.value || '';
            }
            this.inputChange.emit(ev);
        };
    }
    componentDidLoad() {
        this.getPattern();
        if (this.autofocus) {
            this.inputEl.focus();
        }
    }
    // @Prop() value: Function = () => {
    //   return this.inputEl.value;
    // };
    /**
     * Update the native input element when the value changes
     */
    valueChanged() {
        this.inputValueChange.emit({
            value: this.value == null ? this.value : this.value.toString()
        });
    }
    updateValidity() {
        if (this.validateOnBlur) {
            let invalidStates = this.validity();
            if (!this.touched) {
                this.touched = true;
            }
            for (const state in invalidStates) {
                if (state !== 'valid' && invalidStates[state]) {
                    if (this.errorMap[state]) {
                        this.errorMsg = this.errorMap[state];
                    }
                    else {
                        this.errorMsg = this.errorMap.default;
                    }
                }
            }
            this.isValid = invalidStates.valid;
        }
    }
    getPattern() {
        if (this.patternName) {
            let regex = this.patternMap[`${this.patternName.replace('-', '_')}_REGEX`.toUpperCase()];
            if (regex) {
                this.patternRegex = regex;
            }
        }
    }
    render() {
        const isInvalid = this.isInvalid || (!this.isValid && this.touched);
        return (h(Host, { class: `form-group ${this.helpText ? 'form-group--helptext-layout' : ''} ${this.fullWidth ? 'w-100' : ''}` },
            h("label", Object.assign({ id: "label", class: `form-group__label ${isInvalid ? 'form-group__label--invalid' : ''}`, htmlFor: this.formId }, this.labelProps), this.label),
            this.helpText && (h("small", { id: "help-text", class: "form-group__help-text form-text text-muted" }, this.helpText)),
            h("div", { class: `input-holder ${this.fullWidth ? 'input-holder--stretch' : ''}` },
                h("input", { type: this.type, class: `form-control form-control--${this.type} ${this.isActive ? 'is-active' : ''} ${this.isValid
                        ? 'is-valid'
                        : this.touched || this.isInvalid
                            ? 'is-invalid'
                            : ''}`, pattern: this.patternRegex, "aria-labelledby": "label", id: this.formId, ref: el => {
                        this.inputEl = el;
                    }, placeholder: this.placeholder, "aria-placeholder": this.placeholder, required: this.required, "aria-required": this.required, readonly: this.readonly, "aria-readonly": this.readonly, disabled: this.disabled, "aria-describedby": "help-text", onInput: this.onInput, form: "myForm", value: this.value }),
                this.type === 'password' ? (h("span", { onClick: () => {
                        this.passwordVisible = !this.passwordVisible;
                        if (this.passwordVisible && this.type === 'password') {
                            this.inputEl.type = 'text';
                            this.passwordRevealToggle.icon = 'eye';
                        }
                        else {
                            this.inputEl.type = this.type;
                            this.passwordRevealToggle.icon = 'eye-slash';
                        }
                    }, class: "input-icon" },
                    h("smtt-icon", { ref: ref => {
                            this.passwordRevealToggle = ref;
                        }, preload: "eye-slash,eye", icon: "eye-slash", width: "24px" }))) : null,
                this.icon && (h("span", { onClick: () => {
                        // this.inputEl.focus();
                        this.iconClick.emit();
                    }, class: "input-icon" },
                    h("smtt-icon", { icon: this.icon, width: "24px" })))),
            h("div", { class: `${isInvalid ? 'invalid-feedback--visible' : ''} invalid-feedback` },
                h("smtt-icon", { class: "mr-2", icon: "exclamation-circle", width: "24px", color: "currentColor" }),
                this.errorMsg ? this.errorMsg : 'Please enter a valid input')));
    }
    static get is() { return "smtt-input"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["input.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["input.css"]
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
                "text": "id to be given to input element"
            },
            "attribute": "name",
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
                "text": "label text to be associated with input (both visually and accessibility wise)"
            },
            "attribute": "label",
            "reflect": false
        },
        "formId": {
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
                "text": "id to be applied to input field"
            },
            "attribute": "form-id",
            "reflect": false,
            "defaultValue": "this.name"
        },
        "placeholder": {
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
                "text": "placeholder for input"
            },
            "attribute": "placeholder",
            "reflect": false
        },
        "errorMsg": {
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
                "text": "this sets the default error message when the invalid reason is not known or accounted for"
            },
            "attribute": "error-msg",
            "reflect": false
        },
        "required": {
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
                "text": "wether input is required"
            },
            "attribute": "required",
            "reflect": false
        },
        "readonly": {
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
                "text": "wether input is required"
            },
            "attribute": "readonly",
            "reflect": false
        },
        "helpText": {
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
                "text": "small help text to be shown below input field"
            },
            "attribute": "help-text",
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
                "text": "wether to stretch the width to fit the container"
            },
            "attribute": "full-width",
            "reflect": false
        },
        "type": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "| 'text'\n    | 'password'\n    | 'email'\n    | 'search'\n    | 'tel'\n    | 'week'\n    | 'url'\n    | 'month'",
                "resolved": "\"email\" | \"month\" | \"password\" | \"search\" | \"tel\" | \"text\" | \"url\" | \"week\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "type of input field"
            },
            "attribute": "type",
            "reflect": false,
            "defaultValue": "'text'"
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
                "text": "wether input is disabled"
            },
            "attribute": "disabled",
            "reflect": false
        },
        "patternName": {
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
                "text": "name of regex pattern to be applied to input's pattern field"
            },
            "attribute": "pattern-name",
            "reflect": false
        },
        "form": {
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
                "text": "the form to attach this input to"
            },
            "attribute": "form",
            "reflect": false
        },
        "customValidator": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "Function",
                "resolved": "Function",
                "references": {
                    "Function": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "custom validator to be passed in to determing if the form field is \"valid\""
            }
        },
        "autofocus": {
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
                "text": "autofocus on element"
            },
            "attribute": "autofocus",
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
                "text": "If the input field should"
            },
            "attribute": "icon",
            "reflect": false
        },
        "isInvalid": {
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
                "text": "Whether or not the state of the input should be invalid"
            },
            "attribute": "is-invalid",
            "reflect": false
        },
        "isActive": {
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
                "text": "Attribute to trigger active style on input"
            },
            "attribute": "is-active",
            "reflect": false
        },
        "validateOnBlur": {
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
                "text": "Whether or not to validate input on blur"
            },
            "attribute": "validate-on-blur",
            "reflect": false,
            "defaultValue": "true"
        },
        "labelProps": {
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
                "text": "Properties/attributes to pass to label"
            },
            "attribute": "label-props",
            "reflect": false
        },
        "errorMap": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "{\n    default?: string;\n    badInput?: string;\n    customError?: string;\n    patternMismatch?: string;\n    rangeOverflow?: string;\n    rangeUnderflow?: string;\n    stepMismatch?: string;\n    tooLong?: string;\n    tooShort?: string;\n    typeMismatch?: string;\n    valid?: string;\n    valueMissing?: true;\n  }",
                "resolved": "{ default?: string; badInput?: string; customError?: string; patternMismatch?: string; rangeOverflow?: string; rangeUnderflow?: string; stepMismatch?: string; tooLong?: string; tooShort?: string; typeMismatch?: string; valid?: string; valueMissing?: true; }",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "defaultValue": "{\n    /** @todo will this be updated when errormsg changes dynamically? */\n    default: this.errorMsg\n  }"
        },
        "focus": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "(options?: FocusOptions) => void",
                "resolved": "(options?: FocusOptions) => void",
                "references": {
                    "FocusOptions": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "defaultValue": "options => {\n    this.inputEl.focus(options);\n  }"
        },
        "validity": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "Function",
                "resolved": "Function",
                "references": {
                    "Function": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "provide the validity state of the component"
            },
            "defaultValue": "() => {\n    if (this.inputEl) {\n      let outputState: any = {};\n      let validityState = this.inputEl.validity;\n      // we need to copy it out because it is read only and we need to edit it\n      for (const state in validityState) {\n        outputState[state] = validityState[state];\n      }\n      if (this.customValidator && !this.customValidator(this.value)) {\n        /** if it fails custom validation then set custom error to true (default is false)\n         * set valid to false here as well */\n        outputState.customError = true;\n        outputState.valid = false;\n      }\n      return outputState;\n    }\n    return null;\n  }"
        },
        "checkValidity": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "Function",
                "resolved": "Function",
                "references": {
                    "Function": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "wether input is valid or not considering its constraints"
            },
            "defaultValue": "() => {\n    /** @todo checkValidity should be consitent with validityState.valid\n     * NB!! also investigate wether or not checkValidity can be invalid and we overwrite it to be valid\n     */\n    return this.inputEl.checkValidity() && this.validity().valid;\n  }"
        },
        "value": {
            "type": "any",
            "mutable": true,
            "complexType": {
                "original": "string | number | null",
                "resolved": "number | string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "current value of the input element"
            },
            "attribute": "value",
            "reflect": false,
            "defaultValue": "''"
        }
    }; }
    static get states() { return {
        "isValid": {},
        "passwordVisible": {},
        "touched": {},
        "patternRegex": {},
        "patternMap": {}
    }; }
    static get events() { return [{
            "method": "iconClick",
            "name": "iconClick",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Event emitted when icon is clicked"
            },
            "complexType": {
                "original": "void",
                "resolved": "void",
                "references": {}
            }
        }, {
            "method": "inputChange",
            "name": "inputChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted when a keyboard input occurred."
            },
            "complexType": {
                "original": "KeyboardEvent",
                "resolved": "KeyboardEvent",
                "references": {
                    "KeyboardEvent": {
                        "location": "global"
                    }
                }
            }
        }, {
            "method": "inputValueChange",
            "name": "inputValueChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted when the value has changed."
            },
            "complexType": {
                "original": "InputChangeEventDetail",
                "resolved": "InputChangeEventDetail",
                "references": {
                    "InputChangeEventDetail": {
                        "location": "local"
                    }
                }
            }
        }]; }
    static get watchers() { return [{
            "propName": "value",
            "methodName": "valueChanged"
        }, {
            "propName": "patternName",
            "methodName": "getPattern"
        }]; }
    static get listeners() { return [{
            "name": "blur",
            "method": "updateValidity",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
