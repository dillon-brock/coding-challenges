/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  const charInstances = {};
  for (const char of s) {
      charInstances.hasOwnProperty(char) ?
          charInstances[char]++ : charInstances[char] = 1;
  }
  let pairs = 0;
  for (const instances of Object.values(charInstances)) {
      pairs += Math.floor(instances / 2);
  }
  return pairs * 2 < s.length ? pairs * 2 + 1 : pairs * 2;
};