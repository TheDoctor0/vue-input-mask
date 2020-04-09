"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tokens_1 = __importDefault(require("./tokens"));
var apply = function (rawInput, inputMask, escapedCharacters) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    var input = rawInput.split('');
    var mask = inputMask.split('');
    var nextChar = input.pop() || '';
    var position = input.length + escapedCharacters;
    var escaped = 0;
    var char = '';
    if ((_a = tokens_1.default[mask[position]]) === null || _a === void 0 ? void 0 : _a.skip) {
        char = mask[mask.length - 2];
        if ((_c = (_b = tokens_1.default[char]) === null || _b === void 0 ? void 0 : _b.pattern) === null || _c === void 0 ? void 0 : _c.test(nextChar)) {
            input.push(nextChar);
        }
        return {
            escaped: escaped,
            value: input.join(''),
        };
    }
    if (position >= mask.length) {
        if ((_d = tokens_1.default[mask[mask.length - 1]]) === null || _d === void 0 ? void 0 : _d.skip) {
            char = mask[mask.length - 2];
            if ((_f = (_e = tokens_1.default[char]) === null || _e === void 0 ? void 0 : _e.pattern) === null || _f === void 0 ? void 0 : _f.test(nextChar)) {
                input.push(nextChar);
            }
        }
        return {
            escaped: escaped,
            value: input.join(''),
        };
    }
    while (!tokens_1.default[mask[position]] || tokens_1.default[mask[position]].escape) {
        if ((_g = tokens_1.default[mask[position]]) === null || _g === void 0 ? void 0 : _g.escape) {
            position++;
            escaped++;
        }
        if (mask[position] === nextChar) {
            input.push(mask[position]);
            return {
                escaped: escaped,
                value: input.join(''),
            };
        }
        input.push(mask[position]);
        position++;
    }
    char = mask[position];
    if ((_j = (_h = tokens_1.default[char]) === null || _h === void 0 ? void 0 : _h.pattern) === null || _j === void 0 ? void 0 : _j.test(nextChar)) {
        input.push(tokens_1.default[char].transform
            ? tokens_1.default[char].transform(nextChar)
            : nextChar);
        position++;
    }
    var completedOutput = '';
    while (position < mask.length) {
        if (tokens_1.default[mask[position]] && !tokens_1.default[mask[position]].escape) {
            completedOutput = '';
            break;
        }
        if ((_k = tokens_1.default[mask[position]]) === null || _k === void 0 ? void 0 : _k.escape) {
            position++;
            completedOutput += mask[position];
            position++;
            continue;
        }
        completedOutput += mask[position];
        position++;
    }
    return {
        escaped: escaped,
        value: input.join('') + completedOutput,
    };
};
var mask = function (rawInput, inputMask) {
    var input = rawInput.split('');
    var escapedCharacters = 0;
    var maskedInput = '';
    while (input.length > 0) {
        var _a = apply(maskedInput + input.shift(), inputMask, escapedCharacters), value = _a.value, escaped = _a.escaped;
        escapedCharacters += escaped;
        maskedInput = value;
    }
    return maskedInput;
};
exports.default = mask;
//# sourceMappingURL=mask.js.map