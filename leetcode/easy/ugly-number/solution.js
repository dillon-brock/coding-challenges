/**
 * @param {number} n
 * @return {boolean}
 */
function isUgly(n) {
  if (n == 0) return false;
  const primes = [2, 3, 5];

  for (const p of primes) {
      while (n % p == 0) {
          n /= p;
      }
  }

  return n == 1;
};