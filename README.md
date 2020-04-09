# Vue Input Mask

[![npm](https://img.shields.io/npm/v/@thedoctor0/vue-input-mask.svg)](https://www.npmjs.com/package/@thedoctor0/vue-input-mask)
[![Github file size](https://img.shields.io/github/size/TheDoctor0/vue-input-mask/dist/vue-input-mask.min.js.svg)](https://raw.githubusercontent.com/TheDoctor0/vue-input-mask/master/dist/vue-input-mask.min.js)
[![npm](https://img.shields.io/npm/dm/@thedoctor0/vue-input-mask.svg)](https://www.npmjs.com/package/@thedoctor0/vue-input-mask) [![Build Status](https://travis-ci.org/TheDoctor0/vue-input-mask.png)](https://travis-ci.org/TheDoctor0/vue-input-mask) [![codecov](https://codecov.io/gh/TheDoctor0/vue-input-mask/branch/master/graph/badge.svg)](https://codecov.io/gh/TheDoctor0/vue-input-mask) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/ece5812eaab84684be369ba6534a8614)](https://app.codacy.com/app/dawid.janik95/vue-input-mask) [![License](https://img.shields.io/github/license/TheDoctor0/vue-input-mask.svg)](https://github.com/TheDoctor0/vue-input-mask/blob/master/LICENSE)

Input mask directive for Vue.js - lightweight, dependency free, written in TypeScript.

## Install
NPM
```shell
npm i -S @thedoctor0/vue-input-mask
```

Yarn
```shell
yarn add @thedoctor0/vue-input-mask
```

## Initialization

### Global

```javascript
import VueInputMask from '@thedoctor0/vue-input-mask';

Vue.directive(VueInputMask);
```

### Local

```javascript
import { mask } from '@thedoctor0/vue-input-mask';

export default {
  directives: { mask }
}
```

## Usage

```html
<input id="masked-input" type="text" v-mask="'###-###-####'" v-model="inputModelVariable">
<!-- OR -->
<input id="masked-input" type="text" v-mask="nameOfVariableWithMask" v-model="inputModelVariable">
```

### Raw value

There are two ways to get the raw input value: from attribute, using demask helper.

#### Attribute

The directive adds input raw value parameter directly onto the element, so its easy to get it:

```javascript
const rawValue = document.getElementById('masked-input').getAttribute('raw-value');
```

#### Demask

It is also possible to use helper function to get raw value from masked input value:

```javascript
import { demask } from '@thedoctor0/vue-input-mask';

const rawValue = demask(this.inputModelVariable, '###-###-####');
```

### Tokens

List of supported tokens available for use in mask:

| Value | Format                                             |
|-------|----------------------------------------------------|
| #     | Number (0-9)                                       |
| S     | Letter in any case (a-z, A-Z)                      |
| N     | Number or letter (a-z, A-Z, 0-9)                   |
| X     | Any number, letter or symbol                       |
| a     | Letter that will be displayed in lower case (a-z)  |
| A     | Letter that will be displayed in upper case (A-Z)  |
| +     | Skip one or more characters                        |
| !     | Escape next character in mask                      |
