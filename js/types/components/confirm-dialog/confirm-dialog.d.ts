export declare class ConfirmDialog {
    componentDidLoad(): void;
    /** the slot element which contains slotted content */
    slotElement: HTMLElement;
    /** the element that our dialog will be appended to */
    containingElement: HTMLElement;
    /** the button element */
    buttonElement: HTMLSmttButtonElement;
    /** template element containing html to be placed in the dialog box */
    dialogContentElement: HTMLElement;
    /** reference to the instance resulting from the initialization of tippy */
    tippyInstance: any;
    /** type of message being displayed by the dialog box */
    type: 'warning' | 'info' | 'success';
    /** text body of the dialog */
    text: string;
    /** header of the dialog */
    header: string;
    /** hide the dialog box */
    hide(): void;
    /** get the name of the icon to display depending on the type */
    getIconName(): string;
    render(): any;
    initializeTippy(): void;
}
