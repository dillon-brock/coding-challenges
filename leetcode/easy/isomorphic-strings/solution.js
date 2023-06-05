/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  if (s.length != t.length) return false;
  const pairs = new Map();
  const foundInT = new Set();

  for (let i = 0; i < s.length; i++) {
      if (pairs.has(s.charAt(i)) && pairs.get(s.charAt(i)) == t.charAt(i)) {
          continue;
      }
      if (pairs.has(s.charAt(i)) && pairs.get(s.charAt(i)) != t.charAt(i)
      || (!pairs.has(s.charAt(i)) && foundInT.has(t.charAt(i)))) {
          return false;
      }
      pairs.set(s.charAt(i), t.charAt(i));
      foundInT.add(t.charAt(i));
  }

  return true;
};