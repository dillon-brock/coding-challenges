/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  let rowCount = 0;
  while (n > 0) {
      rowCount++;
      n -= rowCount;
  }
  return n == 0 ? rowCount : rowCount - 1;
};