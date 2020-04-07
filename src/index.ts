import { MaskedHTMLInputElement } from './typings';
import demask from './demask';
import mask from './mask';

export default {
  inserted(element: HTMLInputElement, { value }: { value: string }): void {
    if (!/input/i.test(element.tagName) || !/text/i.test(element.type)) {
      console.warn('v-mask: Element must be a text input to work properly.', element);

      return;
    }

    if (!value.length) {
      console.warn('v-mask: Element must have a specified mask value to work properly.', element);

      return;
    }

    const masked: string = mask(element.value, value);
    const raw: string = demask(element.value, value);

    element.value = masked;
    element.setAttribute('mask-raw-value', raw);
    element.dispatchEvent(new CustomEvent('input'));
  },

  bind(element: MaskedHTMLInputElement, { value }: { value: string }): void {
    if (!value.length || !/input/i.test(element.tagName) || !/text/i.test(element.type)) {
      return;
    }

    element.maskInput = (e: Event): void => {
      const { inputType, isTrusted } = e as InputEvent;

      if (!isTrusted || /(delete|backspace)/i.test(inputType)) {
        return;
      }

      const masked: string = mask(element.value, value);
      const raw: string = demask(masked, value);

      element.value = masked;
      element.setAttribute('mask-raw-value', raw);
      element.dispatchEvent(new CustomEvent('input'));
    };

    element.addEventListener('input', element.maskInput);
  },

  unbind(element: MaskedHTMLInputElement) {
    element.removeEventListener('input', element.maskInput);
  },
};

export { mask, demask };
