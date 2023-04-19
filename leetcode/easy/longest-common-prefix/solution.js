/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let i = strs[0].length;
  while (i >= 0) {
      if (strs.every(str => str.startsWith(strs[0].substring(0, i))))
          return strs[0].substring(0, i);
      i--;
  }
};