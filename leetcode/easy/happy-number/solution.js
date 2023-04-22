/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const sums = []
  while (n !== 1) {
      n = getSquareSum(n)
      if (sums.includes(n)) {
          break;
      }
      sums.push(n)
  }
  return n == 1;
};

const getSquareSum = n => {
  return n.toString().split('')
      .reduce((a, b) => a + Math.pow(Number(b), 2), 0);
}
