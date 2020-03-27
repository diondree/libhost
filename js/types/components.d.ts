/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
import { InputChangeEventDetail, } from "./components/input/input";
import { TooltipPlacement, } from "./components/tooltip/tooltip";
import { ColumnDefinition, } from "./components/tree/tree";
export namespace Components {
    interface CheckBox {
        /**
          * the state of the checkbox 'true' 'false' or 'indeterminate'
         */
        "checked": string;
        /**
          * function to run when clicked
         */
        "clickAction": (ev: MouseEvent) => void;
        /**
          * wether or not the checkbox is disabled
         */
        "disableCheckbox": boolean;
        /**
          * text label for our checkbox
         */
        "label": string;
        /**
          * the positioning for the label 'top', 'right', 'left', or 'bottom'
         */
        "labelPosition": string;
    }
    interface SmtMainButton {
        /**
          * Alignment of button content
         */
        "alignment": "left" | "right" | "center";
        /**
          * reference to the button element
         */
        "button": HTMLElement;
        /**
          * Wether the button is disabled or not
         */
        "disabled": boolean;
        "focus": (options?: FocusOptions) => void;
        /**
          * Whether or not the button should fill the height of its parent
         */
        "fullHeight": boolean;
        /**
          * Whether or not the button should fill the width of its parent
         */
        "fullWidth": boolean;
        /**
          * icon to be used in button (if variation necessitates)
         */
        "icon": string;
        /**
          * Whether icon should be displayed to the left or the right
         */
        "iconRight": boolean;
        /**
          * Styles to be applied to icon
         */
        "iconStyle": object;
        /**
          * The size of the button
         */
        "size": "sm" | "md" | "lg";
        /**
          * color theme to be applied to the button e.g primary
         */
        "theme": "primary" | "secondary" | "tertiary" | "destructive" | "warning" | "text-links";
        /**
          * The type of button (corresponds to type property of native html button)
         */
        "type": "confirm" | "submit" | "button";
        /**
          * button variation: icon only button, icon with label or label only
         */
        "variation": "icon" | "icon-label" | "label";
    }
    interface SmttAccordion {
    }
    interface SmttAccordionItem {
        /**
          * Title of accordion item
         */
        "accordionTitle": string;
        /**
          * The content of the action bar
         */
        "actionBarContent": string;
        /**
          * Position of icon
         */
        "alignment": "start" | "end";
        /**
          * Whether or not the item is expanded by default
         */
        "expanded": boolean;
    }
    interface SmttButton {
        /**
          * Alignment of button content
         */
        "alignment": "left" | "right" | "center";
        /**
          * reference to the button element
         */
        "button": HTMLElement;
        /**
          * Wether the button is disabled or not
         */
        "disabled": boolean;
        "focus": (options?: FocusOptions) => void;
        /**
          * Whether or not the button should fill the height of its parent
         */
        "fullHeight": boolean;
        /**
          * Whether or not the button should fill the width of its parent
         */
        "fullWidth": boolean;
        /**
          * icon to be used in button (if variation necessitates)
         */
        "icon": string;
        /**
          * Whether icon should be displayed to the left or the right
         */
        "iconRight": boolean;
        /**
          * Styles to be applied to icon
         */
        "iconStyle": object;
        /**
          * The size of the button
         */
        "size": "sm" | "md" | "lg";
        /**
          * color theme to be applied to the button e.g primary
         */
        "theme": "primary" | "secondary" | "tertiary" | "destructive" | "warning" | "text-links";
        /**
          * The type of button (corresponds to type property of native html button)
         */
        "type": "confirm" | "submit" | "button";
        /**
          * button variation: icon only button, icon with label or label only
         */
        "variation": "icon" | "icon-label" | "label";
    }
    interface SmttConfirmDialog {
        /**
          * the button element
         */
        "buttonElement": HTMLSmttButtonElement;
        /**
          * the element that our dialog will be appended to
         */
        "containingElement": HTMLElement;
        /**
          * template element containing html to be placed in the dialog box
         */
        "dialogContentElement": HTMLElement;
        /**
          * header of the dialog
         */
        "header": string;
        /**
          * hide the dialog box
         */
        "hide": () => Promise<void>;
        /**
          * the slot element which contains slotted content
         */
        "slotElement": HTMLElement;
        /**
          * text body of the dialog
         */
        "text": string;
        /**
          * reference to the instance resulting from the initialization of tippy
         */
        "tippyInstance": any;
        /**
          * type of message being displayed by the dialog box
         */
        "type": "warning" | "info" | "success";
    }
    interface SmttContextualBox {
        /**
          * Whether the contextual box is dismissable
         */
        "dismissable": boolean;
        /**
          * The duration of the message in milliseconds
         */
        "duration": number;
        /**
          * Instructions found in the body of the contextual box
         */
        "instructions": string;
        /**
          * Whether or not the contextual box should be visible
         */
        "isVisible": boolean;
        /**
          * The title message
         */
        "messageTitle": string;
        /**
          * The variation of the contextual box
         */
        "variation": "success" | "warning" | "info" | "error";
    }
    interface SmttDropdown {
        /**
          * Whether or not the dropdown should align from the right side
         */
        "alignRight": boolean;
        /**
          * Whether or not the dropdown should be full width
         */
        "fullWidth": boolean;
        /**
          * Whether or not Dropdown items has icon
         */
        "hasIcons": boolean;
        /**
          * The name of the icon to be used as button trigger
         */
        "icon": string;
        /**
          * Title to be displayed on dropdown
         */
        "name": string;
        /**
          * The width of the dropdown container
         */
        "size": number;
        /**
          * Subheading to be displayed under name
         */
        "subHeading": string;
    }
    interface SmttDropdownGroup {
        /**
          * The name of the group
         */
        "name": string;
    }
    interface SmttDropdownItem {
        /**
          * Whether or not item has icon
         */
        "hasIcon": boolean;
        /**
          * Link item should link to
         */
        "href": string;
        /**
          * Icon to be displayed to left of the text
         */
        "icon": string;
        /**
          * Target describing how the link should be opened
         */
        "target": "_blank" | "_self" | "_parent" | "_top" | "framename";
    }
    interface SmttFooter {
        "hash": string;
    }
    interface SmttHeader {
        /**
          * Breadcrumb string
         */
        "breadcrumb": string;
        /**
          * Message to shown beneath header
         */
        "headerMessage": string;
        /**
          * URl of logo to be used in header
         */
        "imageUrl": string;
        /**
          * The title of the left menu
         */
        "leftMenuTitle": string;
        /**
          * The title of the user dropdown
         */
        "userMenuTitle": string;
    }
    interface SmttIcon {
        /**
          * @todo [WIP] styling meant to go hand in hand with buttons (should probably be moved)
         */
        "addBtnClass": (contentNode: any) => Promise<void>;
        /**
          * icon color
         */
        "color": string;
        /**
          * @todo [WIP] wether the image is in a disabled state
         */
        "disabled": boolean;
        /**
          * icon name
         */
        "icon": string;
        /**
          * The label for the icon
         */
        "label": string;
        /**
          * comma seperated values representing any images to be preloaded
         */
        "preload": string;
        /**
          * theme to be applied to the button
         */
        "theme": string;
        /**
          * @todo [WIP] type of icon we have
         */
        "type": string;
        /**
          * width of the svg
         */
        "width": string;
    }
    interface SmttInput {
        /**
          * autofocus on element
         */
        "autofocus": boolean;
        /**
          * wether input is valid or not considering its constraints
         */
        "checkValidity": Function;
        /**
          * custom validator to be passed in to determing if the form field is "valid"
         */
        "customValidator": Function;
        /**
          * wether input is disabled
         */
        "disabled": boolean;
        "errorMap": {
            default?: string;
            badInput?: string;
            customError?: string;
            patternMismatch?: string;
            rangeOverflow?: string;
            rangeUnderflow?: string;
            stepMismatch?: string;
            tooLong?: string;
            tooShort?: string;
            typeMismatch?: string;
            valid?: string;
            valueMissing?: true;
        };
        /**
          * this sets the default error message when the invalid reason is not known or accounted for
         */
        "errorMsg": string;
        "focus": (options?: FocusOptions) => void;
        /**
          * the form to attach this input to
         */
        "form": string;
        /**
          * id to be applied to input field
         */
        "formId": string;
        /**
          * wether to stretch the width to fit the container
         */
        "fullWidth": boolean;
        /**
          * small help text to be shown below input field
         */
        "helpText": string;
        /**
          * If the input field should
         */
        "icon": string;
        /**
          * Attribute to trigger active style on input
         */
        "isActive": boolean;
        /**
          * Whether or not the state of the input should be invalid
         */
        "isInvalid": boolean;
        /**
          * label text to be associated with input (both visually and accessibility wise)
         */
        "label": string;
        /**
          * Properties/attributes to pass to label
         */
        "labelProps": any;
        /**
          * id to be given to input element
         */
        "name": string;
        /**
          * name of regex pattern to be applied to input's pattern field
         */
        "patternName": string;
        /**
          * placeholder for input
         */
        "placeholder": string;
        /**
          * wether input is required
         */
        "readonly": boolean;
        /**
          * wether input is required
         */
        "required": boolean;
        /**
          * type of input field
         */
        "type": "text" | "password" | "email" | "search" | "tel" | "week" | "url" | "month";
        /**
          * Whether or not to validate input on blur
         */
        "validateOnBlur": boolean;
        /**
          * provide the validity state of the component
         */
        "validity": Function;
        /**
          * current value of the input element
         */
        "value"?: string | number | null;
    }
    interface SmttRolloverMenu {
        "closeAllOtherMenus": () => Promise<void>;
        "disabled": boolean;
        "isExpanded": string;
        "toggleExpansion": () => Promise<string>;
    }
    interface SmttSeparator {
    }
    interface SmttStatusLabel {
        "subtle": boolean;
        "variation": "completed" | "cancelled" | "pending";
    }
    interface SmttToast {
        "error": (data: any) => Promise<void>;
        "info": (data: any) => Promise<void>;
        "success": (data: any) => Promise<void>;
        "toast": any;
        "warning": (data: any) => Promise<void>;
    }
    interface SmttTooltip {
        /**
          * container for tooltip
         */
        "containerElement": HTMLElement;
        /**
          * placement of the tooltip
         */
        "position": TooltipPlacement;
        /**
          * tooltip text
         */
        "text": string;
        /**
          * reference to the instance resulting from the initialization of tippy
         */
        "tippyInstance": any;
    }
    interface SmttTree {
        /**
          * Name of field containing children
         */
        "childrenField": string;
        /**
          * The definition of the columns
         */
        "columns": ColumnDefinition[];
        /**
          * Whether tree should be expanded by default
         */
        "expanded": boolean;
        /**
          * Name of group field
         */
        "groupField": string;
        /**
          * Whether or not to paginate data
         */
        "paginate": boolean;
        /**
          * Height of rows
         */
        "rowHeight": number;
        /**
          * Type of selection to be used in tree
         */
        "rowSelection": "single" | "multiple";
        /**
          * The array of data to be displayed within rows
         */
        "rows": object[];
        /**
          * The desired height of the element
         */
        "treeHeight": number;
    }
    interface SmttWizard {
        /**
          * The title of wizard
         */
        "name": string;
        /**
          * The subHeading of wizard
         */
        "subHeading": string;
    }
    interface SmttWizardStep {
        /**
          * Whether step is active
         */
        "active": boolean;
        /**
          * The title of the wizard step
         */
        "name": string;
        /**
          * The subtitle of the wizard step
         */
        "subHeading": string;
    }
}
declare global {
    interface HTMLCheckBoxElement extends Components.CheckBox, HTMLStencilElement {
    }
    var HTMLCheckBoxElement: {
        prototype: HTMLCheckBoxElement;
        new (): HTMLCheckBoxElement;
    };
    interface HTMLSmtMainButtonElement extends Components.SmtMainButton, HTMLStencilElement {
    }
    var HTMLSmtMainButtonElement: {
        prototype: HTMLSmtMainButtonElement;
        new (): HTMLSmtMainButtonElement;
    };
    interface HTMLSmttAccordionElement extends Components.SmttAccordion, HTMLStencilElement {
    }
    var HTMLSmttAccordionElement: {
        prototype: HTMLSmttAccordionElement;
        new (): HTMLSmttAccordionElement;
    };
    interface HTMLSmttAccordionItemElement extends Components.SmttAccordionItem, HTMLStencilElement {
    }
    var HTMLSmttAccordionItemElement: {
        prototype: HTMLSmttAccordionItemElement;
        new (): HTMLSmttAccordionItemElement;
    };
    interface HTMLSmttButtonElement extends Components.SmttButton, HTMLStencilElement {
    }
    var HTMLSmttButtonElement: {
        prototype: HTMLSmttButtonElement;
        new (): HTMLSmttButtonElement;
    };
    interface HTMLSmttConfirmDialogElement extends Components.SmttConfirmDialog, HTMLStencilElement {
    }
    var HTMLSmttConfirmDialogElement: {
        prototype: HTMLSmttConfirmDialogElement;
        new (): HTMLSmttConfirmDialogElement;
    };
    interface HTMLSmttContextualBoxElement extends Components.SmttContextualBox, HTMLStencilElement {
    }
    var HTMLSmttContextualBoxElement: {
        prototype: HTMLSmttContextualBoxElement;
        new (): HTMLSmttContextualBoxElement;
    };
    interface HTMLSmttDropdownElement extends Components.SmttDropdown, HTMLStencilElement {
    }
    var HTMLSmttDropdownElement: {
        prototype: HTMLSmttDropdownElement;
        new (): HTMLSmttDropdownElement;
    };
    interface HTMLSmttDropdownGroupElement extends Components.SmttDropdownGroup, HTMLStencilElement {
    }
    var HTMLSmttDropdownGroupElement: {
        prototype: HTMLSmttDropdownGroupElement;
        new (): HTMLSmttDropdownGroupElement;
    };
    interface HTMLSmttDropdownItemElement extends Components.SmttDropdownItem, HTMLStencilElement {
    }
    var HTMLSmttDropdownItemElement: {
        prototype: HTMLSmttDropdownItemElement;
        new (): HTMLSmttDropdownItemElement;
    };
    interface HTMLSmttFooterElement extends Components.SmttFooter, HTMLStencilElement {
    }
    var HTMLSmttFooterElement: {
        prototype: HTMLSmttFooterElement;
        new (): HTMLSmttFooterElement;
    };
    interface HTMLSmttHeaderElement extends Components.SmttHeader, HTMLStencilElement {
    }
    var HTMLSmttHeaderElement: {
        prototype: HTMLSmttHeaderElement;
        new (): HTMLSmttHeaderElement;
    };
    interface HTMLSmttIconElement extends Components.SmttIcon, HTMLStencilElement {
    }
    var HTMLSmttIconElement: {
        prototype: HTMLSmttIconElement;
        new (): HTMLSmttIconElement;
    };
    interface HTMLSmttInputElement extends Components.SmttInput, HTMLStencilElement {
    }
    var HTMLSmttInputElement: {
        prototype: HTMLSmttInputElement;
        new (): HTMLSmttInputElement;
    };
    interface HTMLSmttRolloverMenuElement extends Components.SmttRolloverMenu, HTMLStencilElement {
    }
    var HTMLSmttRolloverMenuElement: {
        prototype: HTMLSmttRolloverMenuElement;
        new (): HTMLSmttRolloverMenuElement;
    };
    interface HTMLSmttSeparatorElement extends Components.SmttSeparator, HTMLStencilElement {
    }
    var HTMLSmttSeparatorElement: {
        prototype: HTMLSmttSeparatorElement;
        new (): HTMLSmttSeparatorElement;
    };
    interface HTMLSmttStatusLabelElement extends Components.SmttStatusLabel, HTMLStencilElement {
    }
    var HTMLSmttStatusLabelElement: {
        prototype: HTMLSmttStatusLabelElement;
        new (): HTMLSmttStatusLabelElement;
    };
    interface HTMLSmttToastElement extends Components.SmttToast, HTMLStencilElement {
    }
    var HTMLSmttToastElement: {
        prototype: HTMLSmttToastElement;
        new (): HTMLSmttToastElement;
    };
    interface HTMLSmttTooltipElement extends Components.SmttTooltip, HTMLStencilElement {
    }
    var HTMLSmttTooltipElement: {
        prototype: HTMLSmttTooltipElement;
        new (): HTMLSmttTooltipElement;
    };
    interface HTMLSmttTreeElement extends Components.SmttTree, HTMLStencilElement {
    }
    var HTMLSmttTreeElement: {
        prototype: HTMLSmttTreeElement;
        new (): HTMLSmttTreeElement;
    };
    interface HTMLSmttWizardElement extends Components.SmttWizard, HTMLStencilElement {
    }
    var HTMLSmttWizardElement: {
        prototype: HTMLSmttWizardElement;
        new (): HTMLSmttWizardElement;
    };
    interface HTMLSmttWizardStepElement extends Components.SmttWizardStep, HTMLStencilElement {
    }
    var HTMLSmttWizardStepElement: {
        prototype: HTMLSmttWizardStepElement;
        new (): HTMLSmttWizardStepElement;
    };
    interface HTMLElementTagNameMap {
        "check-box": HTMLCheckBoxElement;
        "smt-main-button": HTMLSmtMainButtonElement;
        "smtt-accordion": HTMLSmttAccordionElement;
        "smtt-accordion-item": HTMLSmttAccordionItemElement;
        "smtt-button": HTMLSmttButtonElement;
        "smtt-confirm-dialog": HTMLSmttConfirmDialogElement;
        "smtt-contextual-box": HTMLSmttContextualBoxElement;
        "smtt-dropdown": HTMLSmttDropdownElement;
        "smtt-dropdown-group": HTMLSmttDropdownGroupElement;
        "smtt-dropdown-item": HTMLSmttDropdownItemElement;
        "smtt-footer": HTMLSmttFooterElement;
        "smtt-header": HTMLSmttHeaderElement;
        "smtt-icon": HTMLSmttIconElement;
        "smtt-input": HTMLSmttInputElement;
        "smtt-rollover-menu": HTMLSmttRolloverMenuElement;
        "smtt-separator": HTMLSmttSeparatorElement;
        "smtt-status-label": HTMLSmttStatusLabelElement;
        "smtt-toast": HTMLSmttToastElement;
        "smtt-tooltip": HTMLSmttTooltipElement;
        "smtt-tree": HTMLSmttTreeElement;
        "smtt-wizard": HTMLSmttWizardElement;
        "smtt-wizard-step": HTMLSmttWizardStepElement;
    }
}
declare namespace LocalJSX {
    interface CheckBox {
        /**
          * the state of the checkbox 'true' 'false' or 'indeterminate'
         */
        "checked"?: string;
        /**
          * function to run when clicked
         */
        "clickAction"?: (ev: MouseEvent) => void;
        /**
          * wether or not the checkbox is disabled
         */
        "disableCheckbox"?: boolean;
        /**
          * text label for our checkbox
         */
        "label"?: string;
        /**
          * the positioning for the label 'top', 'right', 'left', or 'bottom'
         */
        "labelPosition"?: string;
    }
    interface SmtMainButton {
        /**
          * Alignment of button content
         */
        "alignment"?: "left" | "right" | "center";
        /**
          * reference to the button element
         */
        "button"?: HTMLElement;
        /**
          * Wether the button is disabled or not
         */
        "disabled"?: boolean;
        "focus"?: (options?: FocusOptions) => void;
        /**
          * Whether or not the button should fill the height of its parent
         */
        "fullHeight"?: boolean;
        /**
          * Whether or not the button should fill the width of its parent
         */
        "fullWidth"?: boolean;
        /**
          * icon to be used in button (if variation necessitates)
         */
        "icon"?: string;
        /**
          * Whether icon should be displayed to the left or the right
         */
        "iconRight"?: boolean;
        /**
          * Styles to be applied to icon
         */
        "iconStyle"?: object;
        /**
          * The size of the button
         */
        "size"?: "sm" | "md" | "lg";
        /**
          * color theme to be applied to the button e.g primary
         */
        "theme"?: "primary" | "secondary" | "tertiary" | "destructive" | "warning" | "text-links";
        /**
          * The type of button (corresponds to type property of native html button)
         */
        "type"?: "confirm" | "submit" | "button";
        /**
          * button variation: icon only button, icon with label or label only
         */
        "variation"?: "icon" | "icon-label" | "label";
    }
    interface SmttAccordion {
    }
    interface SmttAccordionItem {
        /**
          * Title of accordion item
         */
        "accordionTitle"?: string;
        /**
          * The content of the action bar
         */
        "actionBarContent"?: string;
        /**
          * Position of icon
         */
        "alignment"?: "start" | "end";
        /**
          * Whether or not the item is expanded by default
         */
        "expanded"?: boolean;
    }
    interface SmttButton {
        /**
          * Alignment of button content
         */
        "alignment"?: "left" | "right" | "center";
        /**
          * reference to the button element
         */
        "button"?: HTMLElement;
        /**
          * Wether the button is disabled or not
         */
        "disabled"?: boolean;
        "focus"?: (options?: FocusOptions) => void;
        /**
          * Whether or not the button should fill the height of its parent
         */
        "fullHeight"?: boolean;
        /**
          * Whether or not the button should fill the width of its parent
         */
        "fullWidth"?: boolean;
        /**
          * icon to be used in button (if variation necessitates)
         */
        "icon"?: string;
        /**
          * Whether icon should be displayed to the left or the right
         */
        "iconRight"?: boolean;
        /**
          * Styles to be applied to icon
         */
        "iconStyle"?: object;
        /**
          * The size of the button
         */
        "size"?: "sm" | "md" | "lg";
        /**
          * color theme to be applied to the button e.g primary
         */
        "theme"?: "primary" | "secondary" | "tertiary" | "destructive" | "warning" | "text-links";
        /**
          * The type of button (corresponds to type property of native html button)
         */
        "type"?: "confirm" | "submit" | "button";
        /**
          * button variation: icon only button, icon with label or label only
         */
        "variation"?: "icon" | "icon-label" | "label";
    }
    interface SmttConfirmDialog {
        /**
          * the button element
         */
        "buttonElement"?: HTMLSmttButtonElement;
        /**
          * the element that our dialog will be appended to
         */
        "containingElement"?: HTMLElement;
        /**
          * template element containing html to be placed in the dialog box
         */
        "dialogContentElement"?: HTMLElement;
        /**
          * header of the dialog
         */
        "header"?: string;
        /**
          * the slot element which contains slotted content
         */
        "slotElement"?: HTMLElement;
        /**
          * text body of the dialog
         */
        "text"?: string;
        /**
          * reference to the instance resulting from the initialization of tippy
         */
        "tippyInstance"?: any;
        /**
          * type of message being displayed by the dialog box
         */
        "type"?: "warning" | "info" | "success";
    }
    interface SmttContextualBox {
        /**
          * Whether the contextual box is dismissable
         */
        "dismissable"?: boolean;
        /**
          * The duration of the message in milliseconds
         */
        "duration"?: number;
        /**
          * Instructions found in the body of the contextual box
         */
        "instructions"?: string;
        /**
          * Whether or not the contextual box should be visible
         */
        "isVisible"?: boolean;
        /**
          * The title message
         */
        "messageTitle"?: string;
        /**
          * The variation of the contextual box
         */
        "variation"?: "success" | "warning" | "info" | "error";
    }
    interface SmttDropdown {
        /**
          * Whether or not the dropdown should align from the right side
         */
        "alignRight"?: boolean;
        /**
          * Whether or not the dropdown should be full width
         */
        "fullWidth"?: boolean;
        /**
          * Whether or not Dropdown items has icon
         */
        "hasIcons"?: boolean;
        /**
          * The name of the icon to be used as button trigger
         */
        "icon"?: string;
        /**
          * Title to be displayed on dropdown
         */
        "name"?: string;
        /**
          * The width of the dropdown container
         */
        "size"?: number;
        /**
          * Subheading to be displayed under name
         */
        "subHeading"?: string;
    }
    interface SmttDropdownGroup {
        /**
          * The name of the group
         */
        "name"?: string;
    }
    interface SmttDropdownItem {
        /**
          * Whether or not item has icon
         */
        "hasIcon"?: boolean;
        /**
          * Link item should link to
         */
        "href"?: string;
        /**
          * Icon to be displayed to left of the text
         */
        "icon"?: string;
        /**
          * Target describing how the link should be opened
         */
        "target"?: "_blank" | "_self" | "_parent" | "_top" | "framename";
    }
    interface SmttFooter {
        "hash"?: string;
    }
    interface SmttHeader {
        /**
          * Breadcrumb string
         */
        "breadcrumb"?: string;
        /**
          * Message to shown beneath header
         */
        "headerMessage"?: string;
        /**
          * URl of logo to be used in header
         */
        "imageUrl"?: string;
        /**
          * The title of the left menu
         */
        "leftMenuTitle"?: string;
        /**
          * The title of the user dropdown
         */
        "userMenuTitle"?: string;
    }
    interface SmttIcon {
        /**
          * icon color
         */
        "color"?: string;
        /**
          * @todo [WIP] wether the image is in a disabled state
         */
        "disabled"?: boolean;
        /**
          * icon name
         */
        "icon"?: string;
        /**
          * The label for the icon
         */
        "label"?: string;
        /**
          * comma seperated values representing any images to be preloaded
         */
        "preload"?: string;
        /**
          * theme to be applied to the button
         */
        "theme"?: string;
        /**
          * @todo [WIP] type of icon we have
         */
        "type"?: string;
        /**
          * width of the svg
         */
        "width"?: string;
    }
    interface SmttInput {
        /**
          * autofocus on element
         */
        "autofocus"?: boolean;
        /**
          * wether input is valid or not considering its constraints
         */
        "checkValidity"?: Function;
        /**
          * custom validator to be passed in to determing if the form field is "valid"
         */
        "customValidator"?: Function;
        /**
          * wether input is disabled
         */
        "disabled"?: boolean;
        "errorMap"?: {
            default?: string;
            badInput?: string;
            customError?: string;
            patternMismatch?: string;
            rangeOverflow?: string;
            rangeUnderflow?: string;
            stepMismatch?: string;
            tooLong?: string;
            tooShort?: string;
            typeMismatch?: string;
            valid?: string;
            valueMissing?: true;
        };
        /**
          * this sets the default error message when the invalid reason is not known or accounted for
         */
        "errorMsg"?: string;
        "focus"?: (options?: FocusOptions) => void;
        /**
          * the form to attach this input to
         */
        "form"?: string;
        /**
          * id to be applied to input field
         */
        "formId"?: string;
        /**
          * wether to stretch the width to fit the container
         */
        "fullWidth"?: boolean;
        /**
          * small help text to be shown below input field
         */
        "helpText"?: string;
        /**
          * If the input field should
         */
        "icon"?: string;
        /**
          * Attribute to trigger active style on input
         */
        "isActive"?: boolean;
        /**
          * Whether or not the state of the input should be invalid
         */
        "isInvalid"?: boolean;
        /**
          * label text to be associated with input (both visually and accessibility wise)
         */
        "label"?: string;
        /**
          * Properties/attributes to pass to label
         */
        "labelProps"?: any;
        /**
          * id to be given to input element
         */
        "name"?: string;
        /**
          * Event emitted when icon is clicked
         */
        "onIconClick"?: (event: CustomEvent<void>) => void;
        /**
          * Emitted when a keyboard input occurred.
         */
        "onInputChange"?: (event: CustomEvent<KeyboardEvent>) => void;
        /**
          * Emitted when the value has changed.
         */
        "onInputValueChange"?: (event: CustomEvent<InputChangeEventDetail>) => void;
        /**
          * name of regex pattern to be applied to input's pattern field
         */
        "patternName"?: string;
        /**
          * placeholder for input
         */
        "placeholder"?: string;
        /**
          * wether input is required
         */
        "readonly"?: boolean;
        /**
          * wether input is required
         */
        "required"?: boolean;
        /**
          * type of input field
         */
        "type"?: "text" | "password" | "email" | "search" | "tel" | "week" | "url" | "month";
        /**
          * Whether or not to validate input on blur
         */
        "validateOnBlur"?: boolean;
        /**
          * provide the validity state of the component
         */
        "validity"?: Function;
        /**
          * current value of the input element
         */
        "value"?: string | number | null;
    }
    interface SmttRolloverMenu {
        "disabled"?: boolean;
        "isExpanded"?: string;
    }
    interface SmttSeparator {
    }
    interface SmttStatusLabel {
        "subtle"?: boolean;
        "variation"?: "completed" | "cancelled" | "pending";
    }
    interface SmttToast {
        "toast"?: any;
    }
    interface SmttTooltip {
        /**
          * container for tooltip
         */
        "containerElement"?: HTMLElement;
        /**
          * placement of the tooltip
         */
        "position"?: TooltipPlacement;
        /**
          * tooltip text
         */
        "text"?: string;
        /**
          * reference to the instance resulting from the initialization of tippy
         */
        "tippyInstance"?: any;
    }
    interface SmttTree {
        /**
          * Name of field containing children
         */
        "childrenField"?: string;
        /**
          * The definition of the columns
         */
        "columns"?: ColumnDefinition[];
        /**
          * Whether tree should be expanded by default
         */
        "expanded"?: boolean;
        /**
          * Name of group field
         */
        "groupField"?: string;
        /**
          * Event triggered when a row is selected or deselected
         */
        "onRowSelected"?: (event: CustomEvent<any>) => void;
        /**
          * Whether or not to paginate data
         */
        "paginate"?: boolean;
        /**
          * Height of rows
         */
        "rowHeight"?: number;
        /**
          * Type of selection to be used in tree
         */
        "rowSelection"?: "single" | "multiple";
        /**
          * The array of data to be displayed within rows
         */
        "rows"?: object[];
        /**
          * The desired height of the element
         */
        "treeHeight"?: number;
    }
    interface SmttWizard {
        /**
          * The title of wizard
         */
        "name"?: string;
        /**
          * The subHeading of wizard
         */
        "subHeading"?: string;
    }
    interface SmttWizardStep {
        /**
          * Whether step is active
         */
        "active"?: boolean;
        /**
          * The title of the wizard step
         */
        "name"?: string;
        /**
          * The subtitle of the wizard step
         */
        "subHeading"?: string;
    }
    interface IntrinsicElements {
        "check-box": CheckBox;
        "smt-main-button": SmtMainButton;
        "smtt-accordion": SmttAccordion;
        "smtt-accordion-item": SmttAccordionItem;
        "smtt-button": SmttButton;
        "smtt-confirm-dialog": SmttConfirmDialog;
        "smtt-contextual-box": SmttContextualBox;
        "smtt-dropdown": SmttDropdown;
        "smtt-dropdown-group": SmttDropdownGroup;
        "smtt-dropdown-item": SmttDropdownItem;
        "smtt-footer": SmttFooter;
        "smtt-header": SmttHeader;
        "smtt-icon": SmttIcon;
        "smtt-input": SmttInput;
        "smtt-rollover-menu": SmttRolloverMenu;
        "smtt-separator": SmttSeparator;
        "smtt-status-label": SmttStatusLabel;
        "smtt-toast": SmttToast;
        "smtt-tooltip": SmttTooltip;
        "smtt-tree": SmttTree;
        "smtt-wizard": SmttWizard;
        "smtt-wizard-step": SmttWizardStep;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "check-box": LocalJSX.CheckBox & JSXBase.HTMLAttributes<HTMLCheckBoxElement>;
            "smt-main-button": LocalJSX.SmtMainButton & JSXBase.HTMLAttributes<HTMLSmtMainButtonElement>;
            "smtt-accordion": LocalJSX.SmttAccordion & JSXBase.HTMLAttributes<HTMLSmttAccordionElement>;
            "smtt-accordion-item": LocalJSX.SmttAccordionItem & JSXBase.HTMLAttributes<HTMLSmttAccordionItemElement>;
            "smtt-button": LocalJSX.SmttButton & JSXBase.HTMLAttributes<HTMLSmttButtonElement>;
            "smtt-confirm-dialog": LocalJSX.SmttConfirmDialog & JSXBase.HTMLAttributes<HTMLSmttConfirmDialogElement>;
            "smtt-contextual-box": LocalJSX.SmttContextualBox & JSXBase.HTMLAttributes<HTMLSmttContextualBoxElement>;
            "smtt-dropdown": LocalJSX.SmttDropdown & JSXBase.HTMLAttributes<HTMLSmttDropdownElement>;
            "smtt-dropdown-group": LocalJSX.SmttDropdownGroup & JSXBase.HTMLAttributes<HTMLSmttDropdownGroupElement>;
            "smtt-dropdown-item": LocalJSX.SmttDropdownItem & JSXBase.HTMLAttributes<HTMLSmttDropdownItemElement>;
            "smtt-footer": LocalJSX.SmttFooter & JSXBase.HTMLAttributes<HTMLSmttFooterElement>;
            "smtt-header": LocalJSX.SmttHeader & JSXBase.HTMLAttributes<HTMLSmttHeaderElement>;
            "smtt-icon": LocalJSX.SmttIcon & JSXBase.HTMLAttributes<HTMLSmttIconElement>;
            "smtt-input": LocalJSX.SmttInput & JSXBase.HTMLAttributes<HTMLSmttInputElement>;
            "smtt-rollover-menu": LocalJSX.SmttRolloverMenu & JSXBase.HTMLAttributes<HTMLSmttRolloverMenuElement>;
            "smtt-separator": LocalJSX.SmttSeparator & JSXBase.HTMLAttributes<HTMLSmttSeparatorElement>;
            "smtt-status-label": LocalJSX.SmttStatusLabel & JSXBase.HTMLAttributes<HTMLSmttStatusLabelElement>;
            "smtt-toast": LocalJSX.SmttToast & JSXBase.HTMLAttributes<HTMLSmttToastElement>;
            "smtt-tooltip": LocalJSX.SmttTooltip & JSXBase.HTMLAttributes<HTMLSmttTooltipElement>;
            "smtt-tree": LocalJSX.SmttTree & JSXBase.HTMLAttributes<HTMLSmttTreeElement>;
            "smtt-wizard": LocalJSX.SmttWizard & JSXBase.HTMLAttributes<HTMLSmttWizardElement>;
            "smtt-wizard-step": LocalJSX.SmttWizardStep & JSXBase.HTMLAttributes<HTMLSmttWizardStepElement>;
        }
    }
}
