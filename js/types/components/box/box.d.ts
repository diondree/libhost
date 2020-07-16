import { EventEmitter } from "../../stencil.core";
export declare class Box {
    /** text label for our checkbox */
    label: string;
    /** the positioning for the label 'top', 'right', 'left', or 'bottom' */
    labelPosition: string;
    /** the state of the checkbox 'true' 'false' or 'indeterminate' */
    checked: string;
    /** wether or not the checkbox is disabled */
    disableCheckbox: boolean;
    /** Emitted when the value of the checkbox changes */
    change: EventEmitter<String>;
    /** input element for the checkbox */
    checkBoxInput: HTMLInputElement;
    checkedChange(newValue: any): void;
    /** ID for checkbox label */
    private labelId;
    /** keydown handler to make checkbox toggle with space key */
    handleKeyDown(ev: KeyboardEvent): void;
    isIE11: boolean;
    render(): any;
}
