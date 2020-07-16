export declare class Button {
    /**
     * reference to the button element
     */
    button: HTMLElement;
    /**
     * Wether the button is disabled or not
     */
    disabled: boolean;
    /**
     * The type of button (corresponds to type property of native html button)
     */
    type: "confirm" | "submit" | "button";
    /**
     * The size of the button
     */
    size: "sm" | "md" | "lg";
    /**
     * color theme to be applied to the button e.g primary
     */
    variation: "default" | "primary" | "destructive" | "warning";
    btnType: "solid" | "outline" | "ghost";
    /** button layout: icon only button, icon with label or label only */
    layout: "icon" | "icon-label" | "label";
    /** icon to be used in button (if layout necessitates) */
    icon: string;
    /**
     * Styles to be applied to icon
     */
    iconStyle: object;
    /**
     * Whether or not the button should fill the height of its parent
     */
    fullHeight: boolean;
    /**
     * give the button square borders
     */
    noBorderRadius: boolean;
    /**
     * Whether or not the button should fill the width of its parent
     */
    fullWidth: boolean;
    /**
     * position of the icon relative to the text
     */
    iconPosition: "right" | "top" | "left";
    /**
     * Alignment of button content
     */
    alignment: "left" | "right" | "center";
    /** delegates focus to the inner native button */
    focus: (options?: FocusOptions) => void;
    private iconSizing;
    /** this property holds class data for specific button types that are in fact just
     * slight modifications of other types note that the array should ALWAYS contain
     * the base class from which the modification is derived
     */
    private typeClasses;
    /** helper method for applying modification classes to the DOM */
    private getClasses;
    private getAlignment;
    render(): any;
}
