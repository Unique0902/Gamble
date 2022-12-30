const swordReinforcePriceArr = [];
const swordSellPriceArr = [0, 0, 0];
for (let i = 0; i < 20; i++) {
  swordReinforcePriceArr.push(500 * 2 ** i);
}
for (let i = 2; i < 20; i++) {
  if (i >= 2 && i < 5) {
    swordSellPriceArr.push(Math.floor(500 * 2 ** (i + 1) * 1.2));
  }
  if (i >= 5 && i < 8) {
    swordSellPriceArr.push(Math.floor(500 * 2 ** (i + 1) * 1.6));
  }
  if (i >= 8 && i < 10) {
    swordSellPriceArr.push(Math.floor(500 * 2 ** (i + 1) * 2));
  }
  if (i >= 10 && i < 14) {
    swordSellPriceArr.push(Math.floor(500 * 2 ** (i + 1) * 3));
  }
  if (i >= 14 && i < 18) {
    swordSellPriceArr.push(Math.floor(500 * 2 ** (i + 1) * 5));
  }
  if (i >= 19 && i < 21) {
    swordSellPriceArr.push(Math.floor(500 * 2 ** (i + 1) * 10));
  }
}

export { swordReinforcePriceArr, swordSellPriceArr };
