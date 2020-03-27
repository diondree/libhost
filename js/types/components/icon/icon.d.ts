export declare class SmartIcons {
    /** the svg node content */
    private svgContent?;
    /** icon name */
    icon: string;
    /** icon color */
    color: string;
    /** @todo [WIP] type of icon we have */
    type: string;
    /** theme to be applied to the button */
    theme: string;
    /** @todo [WIP] wether the image is in a disabled state */
    disabled: boolean;
    /** width of the svg */
    width: string;
    /**
     * The label for the icon
     */
    label: string;
    /** comma seperated values representing any images to be preloaded */
    preload: string;
    constructor();
    /** @todo make this function run everytime the property is changed */
    loadRequestedIcons(): void;
    connectedCallback(): void;
    addStyling(content: any): Promise<HTMLElement>;
    /** @todo [WIP] styling meant to go hand in hand with buttons (should probably be moved) */
    addBtnClass(contentNode: any): Promise<void>;
    loadIcon(): void;
    render(): any;
}
