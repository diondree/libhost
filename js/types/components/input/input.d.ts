import { EventEmitter } from '../../stencil-public-runtime';
export interface InputChangeEventDetail {
    value: string | undefined | number | null;
}
export declare class Input {
    /** id to be given to input element */
    name: string;
    /** label text to be associated with input (both visually and accessibility wise) */
    label: string;
    /** id to be applied to input field */
    formId: string;
    /** placeholder for input */
    placeholder: string;
    /** this sets the default error message when the invalid reason is not known or accounted for */
    errorMsg: string;
    /** wether input is required */
    required: boolean;
    /** wether input is required */
    readonly: boolean;
    /** small help text to be shown below input field */
    helpText: string;
    /** wether to stretch the width to fit the container */
    fullWidth: boolean;
    /** type of input field */
    type: 'text' | 'password' | 'email' | 'search' | 'tel' | 'week' | 'url' | 'month';
    /** wether input is disabled */
    disabled: boolean;
    /** name of regex pattern to be applied to input's pattern field */
    patternName: string;
    /** the form to attach this input to */
    form: string;
    /**custom validator to be passed in to determing if the form field is "valid" */
    customValidator: Function;
    /** autofocus on element */
    autofocus: boolean;
    /** If the input field should  */
    icon: string;
    /** Event emitted when icon is clicked */
    iconClick: EventEmitter<void>;
    /** Whether or not the state of the input should be invalid */
    isInvalid: boolean;
    /** Attribute to trigger active style on input */
    isActive: boolean;
    /** Whether or not to validate input on blur */
    validateOnBlur: boolean;
    /** Properties/attributes to pass to label */
    labelProps: any;
    /** wether input is valid */
    isValid: boolean;
    /** if the password is currently visible */
    passwordVisible: boolean;
    /** wether input has been edited and blurred at least once */
    touched: boolean;
    /** regex pattern to be applied to input's pattern field */
    patternRegex: string;
    /** map of possible regexes that can be applied to input's pattern field */
    patternMap: {
        ALLOWED_ALPHANUMERIC_CHARS_REGEX: string;
        ALLOWED_CHARS_REGEX: string;
        ALLOWED_CHARS_REGEX_LIMITED: string;
        ONLY_CHARS_REGEX: string;
        ONLY_CHARS_EXTENDED_REGEX: string;
        USERNAME_CHARS: string;
        HEX_COLOR_REGEX: string;
        UPPERCASE_WORD_REGEX: string;
        URL_REGEX: string;
        VALID_CUSTOM_CODE_REGEX: string;
        ZIP_CODE_REGEX: string;
        ONLY_NUMBER_REGEX: string;
        RESTRICTED_CHARS_REGEX: string;
    };
    errorMap: {
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
    focus: (options?: FocusOptions) => void;
    inputEl: HTMLInputElement;
    passwordRevealToggle: HTMLSmttIconElement;
    componentDidLoad(): void;
    /** provide the validity state of the component */
    validity: Function;
    /** wether input is valid or not considering its constraints */
    checkValidity: Function;
    /**
     * Emitted when a keyboard input occurred.
     */
    inputChange: EventEmitter<KeyboardEvent>;
    /**
     * Emitted when the value has changed.
     */
    inputValueChange: EventEmitter<InputChangeEventDetail>;
    /** current value of the input element */
    value?: string | number | null;
    /**
     * Update the native input element when the value changes
     */
    protected valueChanged(): void;
    private onInput;
    updateValidity(): void;
    getPattern(): void;
    render(): any;
}
