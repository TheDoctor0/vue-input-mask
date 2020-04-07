import mask from '../src/mask';

describe('Applies the mask for input text', () => {
  it('aupper1234skip with applied mask aAAAAA#+', () => {
    expect(mask('aupper1234skip', 'aAAAAA#+')).toBe('aUPPER1234');
  });

  it('12a12 with applied mask #+', () => {
    expect(mask('12x12', '#+')).toBe('1212');
  });

  it('12 with applied mask #.#', () => {
    expect(mask('12', '#.#')).toBe('1.2');
  });

  it('1 with applied mask (#)', () => {
    expect(mask('1', '(#)')).toBe('(1)');
  });

  it('1 with applied mask [(#)]', () => {
    expect(mask('1', '[(#)]')).toBe('[(1)]');
  });

  it('1 with applied mask #.#', () => {
    expect(mask('1', '#.#')).toBe('1');
  });

  it('1. with applied mask #.#', () => {
    expect(mask('1.', '#.#')).toBe('1.');
  });

  it('123 with applied mask #.#', () => {
    expect(mask('123', '#.#')).toBe('1.2');
  });

  it('39$ with applied mask ##X', () => {
    expect(mask('39$', '##X')).toBe('39$');
  });

  it('abcd12345 with applied mask AAA-####', () => {
    expect(mask('abcd12345', 'AAA-####')).toBe('ABC-1234');
  });

  it('a5-12-34 with applied mask (XX) - ## - ##', () => {
    expect(mask('a5-12-34', '(XX) - ## - ##')).toBe('(a5) - 12 - 34');
  });

  it('123 with applied mask ##(#)', () => {
    expect(mask('123', '##(#)')).toBe('12(3)');
  });

  it('123 with applied mask #!#(#)', () => {
    expect(mask('12', '#!#(#)')).toBe('1#(2)');
  });

  it('12 with applied mask !+1 #', () => {
    expect(mask('12', '!+1 #')).toBe('+1 2');
  });

  it('2 with applied mask !+1 #', () => {
    expect(mask('2', '!+1 #')).toBe('+1 2');
  });
});
