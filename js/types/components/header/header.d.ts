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
    renderFallbackLogo(): any;
    renderLogo(): any;
    render(): any;
}
