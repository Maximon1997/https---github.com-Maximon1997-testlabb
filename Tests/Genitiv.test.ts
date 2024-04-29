import { getGenitive } from './Genitiv';

describe('getGenitive', () => {
  it('should return genitive form of the name', () => {
    expect(getGenitive('Jonatan')).toBe('Jonatans');
    expect(getGenitive('Anna')).toBe('Annas');
    expect(getGenitive('Claes')).toBe('Claes');
    expect(getGenitive('Hampus')).toBe('Hampus');
    expect(getGenitive('Johanna')).toBe('Johannas');
  });
});
