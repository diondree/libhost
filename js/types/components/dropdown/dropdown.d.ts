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
     * Whether or not the dropdown is open
     */
    open: boolean;
    /**
     * Handler to determine if the dropdown should remain open or close
     *
     * @param e Mouse Event fired on click
     */
    handleClick(e: MouseEvent): void;
    private toggleDropdown;
    render(): any;
}
