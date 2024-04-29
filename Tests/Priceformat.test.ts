import { roundPrice } from './Priceformat';

describe('roundPrice', () => {
  test('rounds up to 2 decimals with SEK', () => {
    expect(roundPrice(10.555, '%PRICE%')).toBe("10.56 SEK");
  });

  test('adds $ at the front of the sum', () => {
    expect(roundPrice(5, '$%PRICE%')).toBe("$5.00");
  });

  test('rounds up to 2 decimals with NOK', () => {
    expect(roundPrice(10.555, '%PRICE% NOK')).toBe("10.56 NOK");
  });

  test('rounds up to 2 decimals with USD', () => {
    expect(roundPrice(10.555, 'USD %PRICE%')).toBe("USD 10.56");
  });


  test('rounds with SEK and "kr" appended', () => {
    expect(roundPrice(232.10542, '%PRICE% kr')).toBe("232.11 kr");
  });

  test('rounds with $ and 2 decimal places', () => {
    expect(roundPrice(14, '$%PRICE%')).toBe("$14.00");
  });

  test('rounds with USD and 2 decimal places', () => {
    expect(roundPrice(1024.2048, 'USD %PRICE%')).toBe("USD 1024.21");
  });
});
