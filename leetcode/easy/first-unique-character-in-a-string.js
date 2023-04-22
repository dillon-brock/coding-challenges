/**
 * @param {string} s
 * @return {number}
 */

var firstUniqChar = function(s) {
  const found = new Set();
  outer:
  for (let i = 0; i < s.length; i++) {
      if (found.has(s[i])) continue;
      for (let j = 0; j < s.length; j++) {
          if (j == i) continue;
          if (s[j] == s[i]) {
              found.add(s[i]);
              continue outer;
          }
      }
      return i;
  }
  return -1;
};