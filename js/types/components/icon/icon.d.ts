export declare class SmartIcons {
    icon: string; /** icon name */
    color: string; /** icon color */
    private svgContent?; /** the svg node content */
    type: string; /** @todo [WIP] type of icon we have */
    theme: string; /** theme to be applied to the button */
    disabled: boolean; /** @todo [WIP] wether the image is in a disabled state */
    width: string; /** width of the svg */
    /**
     * The label for the icon
     */
    label: string;
    connectedCallback(): void;
    addStyling(content: any): Promise<HTMLElement>;
    /** @todo [WIP] styling meant to go hand in hand with buttons (should probably be moved) */
    addBtnClass(contentNode: any): Promise<void>;
    loadIcon(): void;
    render(): any;
}
