export declare class Toast {
    constructor();
    toast: any;
    toastEl: HTMLElement;
    error(data: any): void;
    info(data: any): void;
    warning(data: any): void;
    success(data: any): void;
    render(): any;
}
