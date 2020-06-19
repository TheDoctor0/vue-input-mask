"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.demask = exports.mask = void 0;
var demask_1 = __importDefault(require("./demask"));
exports.demask = demask_1.default;
var mask_1 = __importDefault(require("./mask"));
exports.mask = mask_1.default;
exports.default = {
    inserted: function (element, _a) {
        var value = _a.value;
        if (!/input/i.test(element.tagName) || !/text/i.test(element.type)) {
            console.warn('v-mask: Element must be a text input to work properly.', element);
            return;
        }
        if (!value.length) {
            console.warn('v-mask: Element must have a specified mask value to work properly.', element);
            return;
        }
        var masked = mask_1.default(element.value, value);
        var raw = demask_1.default(element.value, value);
        element.value = masked;
        element.setAttribute('raw-value', raw);
        element.dispatchEvent(new CustomEvent('input'));
    },
    bind: function (element, _a) {
        var value = _a.value;
        if (!value.length || !/input/i.test(element.tagName) || !/text/i.test(element.type)) {
            return;
        }
        element.maskInput = function (e) {
            var _a = e, inputType = _a.inputType, isTrusted = _a.isTrusted;
            if (!isTrusted || /(delete|backspace)/i.test(inputType)) {
                return;
            }
            var masked = mask_1.default(element.value, value);
            var raw = demask_1.default(masked, value);
            element.value = masked;
            element.setAttribute('raw-value', raw);
            element.dispatchEvent(new CustomEvent('input'));
        };
        element.addEventListener('input', element.maskInput);
    },
    unbind: function (element) {
        element.removeEventListener('input', element.maskInput);
    },
};
//# sourceMappingURL=index.js.map