# Vue Input Mask

Input mask directive for Vue.js - lightweight, dependency free, written in TypeScript.

## Install
NPM
```
npm i -S @thedoctor0/vue-input-mask
```

Yarn
```
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
