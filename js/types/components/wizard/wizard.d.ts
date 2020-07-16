export declare class Wizard {
    /**
     * Reference to the wizard element
     */
    wizard: HTMLElement;
    /**
     * The current step of the wizard
     */
    step: number;
    /**
     * Whether or not the wizard is in progress
     */
    inProgress: boolean;
    /**
     * The number of steps in the wizard
     */
    steps: string[];
    /**
     * The title of wizard
     */
    name: string;
    /**
     * The subHeading of wizard
     */
    subHeading: string;
    /** skip over the initial page with "start process" button */
    skipIntro: boolean;
    componentWillLoad(): void;
    initSteps(): void;
    changeStep(newStep: number, oldStep: number): void;
    getStepNodes: () => HTMLSmttWizardStepElement[];
    decrementStep: () => void;
    incrementStep: () => void;
    cancelWizard: () => void;
    render(): any;
}
