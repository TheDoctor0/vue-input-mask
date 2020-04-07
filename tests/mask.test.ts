import mask from '../src/mask';

describe('Applies the mask for input text', () => {
  it('aupper1234skipwith applied mask aAAAAA#+', () => {
    expect(mask('aupper1234skip', 'aAAAAA#+')).toBe('aUPPER1234');
  });

  it('12a12with applied mask #+', () => {
    expect(mask('12x12', '#+')).toBe('1212');
  });

  it('12with applied mask #.#', () => {
    expect(mask('12', '#.#')).toBe('1.2');
  });

  it('1with applied mask (#)', () => {
    expect(mask('1', '(#)')).toBe('(1)');
  });

  it('1with applied mask [(#)]', () => {
    expect(mask('1', '[(#)]')).toBe('[(1)]');
  });

  it('1with applied mask #.#', () => {
    expect(mask('1', '#.#')).toBe('1');
  });

  it('1.with applied mask #.#', () => {
    expect(mask('1.', '#.#')).toBe('1.');
  });

  it('123with applied mask #.#', () => {
    expect(mask('123', '#.#')).toBe('1.2');
  });

  it('abcd12345with applied mask AAA-####', () => {
    expect(mask('abcd12345', 'AAA-####')).toBe('ABC-1234');
  });

  it('a5-12-34with applied mask (XX) - ## - ##', () => {
    expect(mask('a5-12-34', '(XX) - ## - ##')).toBe('(a5) - 12 - 34');
  });

  it('123with applied mask ##(#)', () => {
    expect(mask('123', '##(#)')).toBe('12(3)');
  });

  it('123with applied mask #!#(#)', () => {
    expect(mask('12', '#!#(#)')).toBe('1#(2)');
  });

  it('12with applied mask !+1 #', () => {
    expect(mask('12', '!+1 #')).toBe('+1 2');
  });

  it('2with applied mask !+1 #', () => {
    expect(mask('2', '!+1 #')).toBe('+1 2');
  });
});
