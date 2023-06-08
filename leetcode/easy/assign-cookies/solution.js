/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  let contentKids = 0;
  let sIndex = 0;
  let gIndex = 0;
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  while (sIndex < s.length && gIndex < g.length) {
      if (s[sIndex] >= g[gIndex]) {
          gIndex++;
          sIndex++;
          contentKids++;
      }
      while (s[sIndex] < g[gIndex] && sIndex < s.length) {
          sIndex++;
      }
  }

  return contentKids;
};