export declare class ContextualBox {
    /**
     * Reference to the current element
     */
    contextualBox: HTMLSmttContextualBoxElement;
    /**
     * Reference to dismiss button
     */
    closeButton: HTMLButtonElement;
    /** close button accessible label */
    closeButtonLabel: string;
    /**
     * The variation of the contextual box
     */
    variation: 'success' | 'warning' | 'info' | 'error';
    /**
     * The title message
     */
    messageTitle: string;
    /**
     * Instructions found in the body of the contextual box
     */
    instructions: string;
    /**
     * Whether the contextual box is dismissable
     */
    dismissable: boolean;
    /**
     * The duration of the message in milliseconds
     */
    duration: number;
    /**
     * Whether or not the contextual box should be visible
     */
    isVisible: boolean;
    /**
     * Height of contextual box
     */
    height: number;
    initContextualBox(): void;
    dismissFocus(): void;
    componentDidLoad(): void;
    handleKeyPress: (event: KeyboardEvent) => void;
    render(): any;
}
