export const shortenPrice = (price: number): string => {
  if (price === 0) {
    return '0';
  }
  return price
    .toLocaleString()
    .replace(/,|\.\d+/g, '')
    .slice(0, -4);
};
