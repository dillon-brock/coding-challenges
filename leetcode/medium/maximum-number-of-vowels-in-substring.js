/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
  let start = 0;

  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

  let maxVowels = 0;
  let currCount = 0;

  for (let end = 0; end < s.length; end++) {
      if (end < k) {
          if (vowels.has(s.charAt(end))) {
              currCount++;
              maxVowels++;
          }
          continue;
      }

      if (vowels.has(s.charAt(end))) {
          currCount++;
      }
      if (vowels.has(s.charAt(start))) {
          currCount--;
      }
      start++;
      if (currCount > maxVowels) maxVowels = currCount;
  }

  return maxVowels;
};