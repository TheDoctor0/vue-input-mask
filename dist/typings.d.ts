export interface Tokens {
    [key: string]: {
        escape?: boolean;
        skip?: boolean;
        pattern?: RegExp;
        transform?: (value: string) => string;
        untransform?: (value: string) => string;
    };
}
export interface MaskedValue {
    value: string;
    escaped: number;
}
export interface MaskedHTMLInputElement extends HTMLInputElement {
    maskInput: EventListenerOrEventListenerObject;
}
