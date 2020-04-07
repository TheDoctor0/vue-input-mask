"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tokens_1 = __importDefault(require("./tokens"));
var demask = function (maskedInput, inputMask) {
    var _a, _b;
    var input = maskedInput.split('');
    var mask = inputMask.split('');
    var inputPosition = 0;
    var maskPosition = 0;
    while (maskPosition < mask.length) {
        if (!tokens_1.default[mask[maskPosition]] && mask[maskPosition] === input[inputPosition]) {
            input.splice(inputPosition, 1);
            inputPosition--;
        }
        if (((_a = tokens_1.default[mask[maskPosition]]) === null || _a === void 0 ? void 0 : _a.escape) && mask[maskPosition + 1] === input[inputPosition]) {
            input.splice(inputPosition, 1);
            inputPosition--;
            maskPosition++;
        }
        if ((_b = tokens_1.default[mask[maskPosition]]) === null || _b === void 0 ? void 0 : _b.untransform) {
            input[inputPosition] = tokens_1.default[mask[maskPosition]].untransform(input[inputPosition]);
        }
        inputPosition++;
        maskPosition++;
    }
    return input.join('');
};
exports.default = demask;
