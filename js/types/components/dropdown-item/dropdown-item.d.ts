export declare class DropdownItem {
    /**
     * Link item should link to
     */
    href: string;
    /**
     * Target describing how the link should be opened
     */
    target: '_blank' | '_self' | '_parent' | '_top' | 'framename';
    /**
     * Icon to be displayed to left of the text
     */
    icon: string;
    /**
     * Whether or not item has icon
     */
    hasIcon: boolean;
    render(): any;
}
