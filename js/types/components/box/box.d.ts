export declare class Box {
    /** text label for our checkbox */
    label: string;
    /** the positioning for the label 'top', 'right', 'left', or 'bottom' */
    labelPosition: string;
    /** the state of the checkbox 'true' 'false' or 'indeterminate' */
    checked: string;
    /** wether or not the checkbox is disabled */
    disableCheckbox: boolean;
    /** function to run when clicked */
    clickAction: (ev: MouseEvent) => void;
    checkBoxInput: HTMLInputElement;
    /** keydown handler to make checkbox toggle with enter key */
    handleKeyDown(ev: KeyboardEvent): void;
    render(): any;
}
