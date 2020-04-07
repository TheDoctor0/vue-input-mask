"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tokens = {
    '!': { escape: true },
    '+': { skip: true },
    'X': { pattern: /./ },
    '#': { pattern: /[0-9]/ },
    'S': { pattern: /[a-zA-Z]/ },
    'N': { pattern: /[0-9a-zA-Z]/ },
    'a': { pattern: /[a-zA-Z]/, transform: function (value) { return value.toLocaleLowerCase(); }, untransform: function (value) { return value; } },
    'A': { pattern: /[a-zA-Z]/, transform: function (value) { return value.toLocaleUpperCase(); }, untransform: function (value) { return value.toLocaleLowerCase(); } },
};
exports.default = tokens;
