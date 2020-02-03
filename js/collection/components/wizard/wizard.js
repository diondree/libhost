import { Host, h } from "@stencil/core";
export class Wizard {
    constructor() {
        /**
         * The current step of the wizard
         */
        this.step = 0;
        /**
         * Whether or not the wizard is in progress
         */
        this.inProgress = false;
        /**
         * The number of steps in the wizard
         */
        this.steps = [];
        /**
         * The title of wizard
         */
        this.name = 'Welcome';
        this.getStepNodes = () => {
            return Array.from(this.wizard.children);
        };
        this.decrementStep = () => {
            if (this.step !== 0) {
                this.step -= 1;
            }
        };
        this.incrementStep = () => {
            if (this.steps.length !== this.step + 1) {
                this.step += 1;
            }
        };
        this.cancelWizard = () => {
            this.inProgress = false;
            this.step = 0;
        };
    }
    componentWillLoad() {
        this.initSteps();
    }
    // @Watch()
    initSteps() {
        const stepNodes = this.getStepNodes();
        console.log(stepNodes);
        console.log(stepNodes[0]);
        stepNodes[0].active = true;
        const steps = stepNodes.map(step => step.name);
        console.log(steps);
        this.steps = steps;
    }
    changeStep(newStep, oldStep) {
        const steps = this.getStepNodes();
        steps.forEach((step, index) => {
            if (oldStep === index) {
                step.active = false;
            }
            if (index === newStep) {
                step.active = true;
            }
        });
    }
    render() {
        var _a;
        return (h(Host, null,
            h("div", { class: "col--xs--12" },
                h("div", { class: `welcome-container h-500 ${this.inProgress && 'd-none'}` },
                    h("h1", { class: "text-lg" }, this.name),
                    h("p", { class: "text-md m-0" }, this.subHeading),
                    h("ul", { class: "steps" }, this.steps.map((step, index) => (h("li", { class: "step" },
                        h("div", { class: "d-flex flex-column justify-center" },
                            h("div", { class: "step__number" },
                                h("span", null, index + 1)),
                            h("span", { class: "step__label" }, step)),
                        this.steps.length !== index + 1 && (h("span", { class: "step__divider" })))))),
                    h("smtt-button", { size: "lg", onClick: () => (this.inProgress = true) }, "Start Process")),
                h("div", { class: `${!this.inProgress ? 'd-none' : 'd-flex w-100'}` },
                    h("div", { class: "d-flex justify-content-center w-25" },
                        h("ul", { class: "steps steps--column" }, this.steps.map((step, index) => (h("li", { class: "step step--column" },
                            h("div", { class: "d-flex align-items-center" },
                                h("div", { class: `step__number step__number--column ${this
                                        .step === index && 'step__number--active'} ${this
                                        .step > index && 'step__number--checked'}` }, this.step > index ? (h("smtt-icon", { icon: "check", color: "var(--turquoise-deep-base)" })) : (h("span", null, index + 1))),
                                h("span", { class: `step__label ml-3 step__label--column ${this
                                        .step === index && 'step__label--active'}` }, step)),
                            this.steps.length !== index + 1 && (h("span", { class: `step__divider step__divider--column  ${this
                                    .step > index && 'step__divider--checked'}` }))))))),
                    h("div", { class: "step-container w-75" },
                        h("div", { class: "d-flex step-content" },
                            h("slot", null)),
                        h("div", { class: "wizard-nav" },
                            h("smtt-button", { size: "lg", onClick: () => this.cancelWizard(), theme: "secondary" }, "Cancel"),
                            h("div", null,
                                h("smtt-button", { size: "lg", class: "mr-4", disabled: this.step === 0, onClick: () => this.decrementStep(), theme: "secondary" }, "Previous"),
                                h("smtt-button", { size: "lg", onClick: () => this.incrementStep() }, ((_a = this.steps) === null || _a === void 0 ? void 0 : _a.length) === this.step + 1 ? 'Finish' : 'Next'))))))));
    }
    static get is() { return "smtt-wizard"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["wizard.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["wizard.css"]
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
                "text": "The title of wizard"
            },
            "attribute": "name",
            "reflect": false,
            "defaultValue": "'Welcome'"
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
                "text": "The subHeading of wizard"
            },
            "attribute": "sub-heading",
            "reflect": false
        }
    }; }
    static get states() { return {
        "step": {},
        "inProgress": {},
        "steps": {}
    }; }
    static get elementRef() { return "wizard"; }
    static get watchers() { return [{
            "propName": "step",
            "methodName": "changeStep"
        }]; }
}
