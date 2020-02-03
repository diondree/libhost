export declare class Menu {
    constructor();
    menuElement: HTMLElement;
    slottedContent: Node[];
    disabled: boolean;
    isExpanded: string;
    closeAllOtherMenus(): Promise<void>;
    toggleExpansion(): Promise<string>;
    /** find way to add and remove */
    addKeyListenerToMenu(e: any): void;
    addButtonsTabIndex(): void;
    updateLayout(): void;
    render(): any;
}
