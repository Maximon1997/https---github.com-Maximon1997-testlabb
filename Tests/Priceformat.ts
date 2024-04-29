export function roundPrice(price: number, currencyPattern: string): string {
  const roundedPrice = (Math.ceil(price * 100) / 100).toFixed(2);

  // Check if currencyPattern is exactly '%PRICE%'
  if (currencyPattern === '%PRICE%') {
    // If the currency pattern is exactly '%PRICE%', append "SEK" at the end
    return roundedPrice + ' SEK';
  } else {
    // Replace %PRICE% with the rounded price
    return currencyPattern.replace('%PRICE%', roundedPrice).trim();
  }
}
