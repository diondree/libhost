export declare class Button {
    /**
     * Wether the button is disabled or not
     */
    disabled: boolean;
    /**
     * The type of button (corresponds to type property of native html button)
     */
    type: 'confirm' | 'submit' | 'button';
    /**
     * The size of the button
     */
    size: 'sm' | 'md' | 'lg';
    /**
     * color theme to be applied to the button e.g primary
     */
    theme: 'primary' | 'secondary' | 'tertiary' | 'destructive' | 'warning' | 'text-links';
    /** button variation: icon only button, icon with label or label only */
    variation: 'icon' | 'icon-label' | 'label';
    /** icon to be used in button (if variation necessitates) */
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
     * Whether or not the button should fill the width of its parent
     */
    fullWidth: boolean;
    /**
     * Whether icon should be displayed to the left or the right
     */
    iconRight: boolean;
    /**
     * Alignment of button content
     */
    alignment: 'left' | 'right' | 'center';
    private onClick;
    render(): any;
}
