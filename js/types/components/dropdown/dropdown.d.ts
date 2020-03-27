export declare class Dropdown {
    /**
     * Reference to the element itself
     */
    el: HTMLSmttDropdownElement;
    /**
     * Title to be displayed on dropdown
     */
    name: string;
    /**
     * Subheading to be displayed under name
     */
    subHeading: string;
    /**
     * Whether or not the dropdown should be full width
     */
    fullWidth: boolean;
    /**
     * The width of the dropdown container
     */
    size: number;
    /**
     * The name of the icon to be used as button trigger
     */
    icon: string;
    /**
     * Whether or not the dropdown should align from the right side
     */
    alignRight: boolean;
    /**
     * Whether or not the dropdown is open
     */
    open: boolean;
    /**
     * Whether or not Dropdown items has icon
     */
    hasIcons: boolean;
    /**
     * Handler to determine if the dropdown should remain open or close
     *
     * @param e Mouse Event fired on click
     */
    handleClick(e: MouseEvent): void;
    private toggleDropdown;
    componentWillLoad(): void;
    updateItems(): void;
    render(): any;
}
