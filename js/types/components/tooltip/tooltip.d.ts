export declare type TooltipPlacement = 'auto-start' | 'auto' | 'auto-end' | 'top-right' | 'top' | 'top-left' | 'right-start' | 'right' | 'right-end' | 'bottom-left' | 'bottom' | 'bottom-right' | 'left-end' | 'left' | 'left-start';
export declare class Tooltip {
    /** the slot element which contains slotted content */
    host: HTMLElement;
    /** tooltip text */
    text: string;
    /** reference to the instance resulting from the initialization of tippy */
    tippyInstance: any;
    /** container for tooltip */
    containerElement: HTMLElement;
    /** placement of the tooltip */
    position: TooltipPlacement;
    componentDidLoad(): void;
    render(): any;
    /**
     * note that our notation or representation of the placement of the tooltip is essentially opposite to that of
     * tippy/popper.js this function is essentially a mapper from the latter to the former
     */
    getTooltipPosition(): any;
    initializeTippy(): void;
}
