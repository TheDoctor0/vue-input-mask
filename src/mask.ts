import tokens from './tokens';
import { MaskedValue } from './typings';

const apply = (rawInput: string, inputMask: string, escapedCharacters: number): MaskedValue => {
  const input: string[] = rawInput.split('');
  const mask: string[] = inputMask.split('');
  const nextChar: string = input.pop() || '';
  let position: number = input.length + escapedCharacters;
  let escaped: number = 0;
  let char: string = '';

  if (tokens[mask[position]]?.skip) {
    char = mask[mask.length - 2];

    if (tokens[char]?.pattern?.test(nextChar)) {
      input.push(tokens[char].transform
        ? tokens[char].transform(nextChar)
        : nextChar
      );
    }

    return {
      escaped,
      value: input.join(''),
    };
  }

  if (position >= mask.length) {
    if (tokens[mask[mask.length - 1]]?.skip) {
      char = mask[mask.length - 2];

      if (tokens[char]?.pattern?.test(nextChar)) {
        input.push(tokens[char].transform
          ? tokens[char].transform(nextChar)
          : nextChar
        );
      }
    }

    return {
      escaped,
      value: input.join(''),
    };
  }

  while (!tokens[mask[position]] || tokens[mask[position]].escape) {
    if (tokens[mask[position]]?.escape) {
      position++;
      escaped++;
    }

    if (mask[position] === nextChar) {
      input.push(mask[position]);

      return {
        escaped,
        value: input.join(''),
      };
    }

    input.push(mask[position]);
    position++;
  }

  char = mask[position];

  if (tokens[char]?.pattern?.test(nextChar)) {
    input.push(tokens[char].transform
      ? tokens[char].transform(nextChar)
      : nextChar
    );

    position++;
  }

  let completedOutput: string = '';

  while (position < mask.length) {
    if (tokens[mask[position]] && !tokens[mask[position]].escape) {
      completedOutput = '';

      break;
    }

    if (tokens[mask[position]]?.escape) {
      position++;
      completedOutput += mask[position];
      position++;

      continue;
    }

    completedOutput += mask[position];
    position++;
  }

  return {
    escaped,
    value: input.join('') + completedOutput,
  };
};

const mask = (rawInput: string, inputMask: string): string => {
  const input: string[] = rawInput.split('');
  let escapedCharacters: number = 0;
  let maskedInput: string = '';

  while (input.length > 0) {
    const { value, escaped } = apply(maskedInput + input.shift(), inputMask, escapedCharacters);

    escapedCharacters += escaped;
    maskedInput = value;
  }

  return maskedInput;
};

export default mask;
