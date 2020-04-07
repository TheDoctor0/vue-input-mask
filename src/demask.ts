import tokens from './tokens';

const demask = (maskedInput: string, inputMask: string): string => {
  const input: string[] = maskedInput.split('');
  const mask: string[] = inputMask.split('');
  let inputPosition: number = 0;
  let maskPosition: number = 0;

  while (maskPosition < mask.length) {
    if (!tokens[mask[maskPosition]] && mask[maskPosition] === input[inputPosition]) {
      input.splice(inputPosition, 1);

      inputPosition--;
    }

    if (tokens[mask[maskPosition]]?.escape && mask[maskPosition + 1] === input[inputPosition]) {
      input.splice(inputPosition, 1);

      inputPosition--;
      maskPosition++;
    }

    if (tokens[mask[maskPosition]]?.untransform) {
      input[inputPosition] = tokens[mask[maskPosition]].untransform(input[inputPosition]);
    }

    inputPosition++;
    maskPosition++;
  }

  return input.join('');
};

export default demask;
