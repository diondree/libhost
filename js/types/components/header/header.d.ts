import { EventEmitter } from '../../stencil.core';
export declare class Header {
    /**
     * The title of the left menu
     */
    leftMenuTitle: string;
    /**
     * The title of the user dropdown
     */
    userMenuTitle: string;
    /**
     * Message to shown beneath header
     */
    headerMessage: string;
    /**
     * Breadcrumb string
     */
    breadcrumb: string;
    /**
     * URl of logo to be used in header
     */
    imageUrl: string;
    /**
     * Event to be triggered when the bell icon is clicked
     */
    bellClick: EventEmitter<void>;
    /**
     * Event to be triggered when the help icon is clicked
     */
    helpClick: EventEmitter<void>;
    /**
     * Event to be triggered when the cog icon is clicked
     */
    cogClick: EventEmitter<void>;
    private onBellClick;
    private onHelpClick;
    private onCogClick;
    renderFallbackLogo(): any;
    renderLogo(): any;
    render(): any;
}
