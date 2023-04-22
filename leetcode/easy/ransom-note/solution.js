/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const magazineMap = new Map();
  for (char of magazine) {
      magazineMap.set(char, magazineMap.get(char) + 1 || 1);
  }
  for (char of ransomNote) {
      if (magazineMap.get(char) > 0) {
          magazineMap.set(char, magazineMap.get(char) - 1);
      } else {
          return false;
      }
  }
  return true;
};