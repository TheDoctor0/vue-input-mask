import { Tokens } from './typings';

const tokens: Tokens = {
  '!': { escape: true },
  '+': { skip: true },
  'X': { pattern: /./ },
  '#': { pattern: /[0-9]/ },
  'S': { pattern: /[a-zA-Z]/ },
  'N': { pattern: /[0-9a-zA-Z]/ },
  'a': { pattern: /[a-zA-Z]/, transform: (value: string) => value.toLocaleLowerCase(), untransform: (value: string) => value },
  'A': { pattern: /[a-zA-Z]/, transform: (value: string) => value.toLocaleUpperCase(), untransform: (value: string) => value.toLocaleLowerCase() },
};

export default tokens;
