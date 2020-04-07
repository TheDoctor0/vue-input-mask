import demask from '../src/demask';

describe('Removes the mask from masked text', () => {
  it('(123)456-7890 with applied mask (###)###-####', () => {
    expect(demask('(123)456-7890', '(###)###-####')).toBe('1234567890');
  });

  it('(123)#56-7890 with applied mask (###)!###-####', () => {
    expect(demask('(123)#56-7890', '(###)!###-####')).toBe('123567890');
  });

  it('(123)#56-7890 with applied mask (123)!###-####', () => {
    expect(demask('(123)#56-7890', '(123)!###-####')).toBe('567890');
  });

  it('skipped with applied mask a+', () => {
    expect(demask('skipped', 'a+')).toBe('skipped');
  });

  it('UPPER with applied mask aaaaa', () => {
    expect(demask('UPPER', 'aaaaa')).toBe('UPPER');
  });

  it('lower with applied mask aaaaa', () => {
    expect(demask('lower', 'aaaaa')).toBe('lower');
  });

  it('UPPER with applied mask AAAAA', () => {
    expect(demask('UPPER', 'AAAAA')).toBe('upper');
  });
});
