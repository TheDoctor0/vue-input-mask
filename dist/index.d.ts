import { MaskedHTMLInputElement } from './typings';
import demask from './demask';
import mask from './mask';
declare const _default: {
    inserted(element: HTMLInputElement, { value }: {
        value: string;
    }): void;
    bind(element: MaskedHTMLInputElement, { value }: {
        value: string;
    }): void;
    unbind(element: MaskedHTMLInputElement): void;
};
export default _default;
export { mask, demask };
