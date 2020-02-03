export declare class AccordionItem {
    /**
     * Reference to element
     */
    el: HTMLSmttAccordionItemElement;
    /**
     * Title of accordion item
     */
    accordionTitle: string;
    /**
     * Whether or not the item is expanded by default
     */
    expanded: boolean;
    /**
     * Position of icon
     */
    alignment: 'start' | 'end';
    /**
     * The content of the action bar
     */
    actionBarContent: string;
    /**
     * Whether the accordion is opened or closed
     */
    open: boolean;
    /**
     * Height of accordion Item
     */
    height: number;
    /**
     * Method to handle accordion click
     */
    handleClick: () => void;
    initAccordion(): void;
    componentDidLoad(): void;
    renderIcon: () => any;
    render(): any;
}
