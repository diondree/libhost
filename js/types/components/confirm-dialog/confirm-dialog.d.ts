export declare class ConfirmDialog {
    componentDidLoad(): void;
    /** the slot element which contains slotted content */
    slotElement: HTMLElement;
    /** the element that our dialog will be appended to */
    containingElement: HTMLElement;
    /** the first button element (far right) */
    buttonOneElement: HTMLSmttButtonElement;
    /** click event handler for button one */
    buttonOneEvent: (Event: any) => void;
    /** the btn-type property for button one */
    buttonOneType: "ghost" | "solid" | "outline";
    /** the variation property for button one */
    buttonOneVariation: "primary" | "destructive" | "warning";
    /** the second button element (left) */
    buttonTwoElement: HTMLSmttButtonElement;
    /** click event handler for button two */
    buttonTwoEvent: (Event: any) => void;
    /** the btn-type property for button Two */
    buttonTwoType: "ghost" | "solid" | "outline";
    /** the variation property for button Two */
    buttonTwoVariation: "primary" | "destructive" | "warning";
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
    /** text to show in the dialog button */
    buttonOneText: string;
    /** text to show in the dialog button */
    buttonTwoText: string;
    /** hide the dialog box */
    hide(): void;
    /** show the dialog box */
    show(): void;
    /** get the name of the icon to display depending on the type */
    getIconName(): string;
    render(): any;
    initializeTippy(): void;
}
