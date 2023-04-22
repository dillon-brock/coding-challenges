/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let string = s.toLowerCase().replace(/[^0-9a-z]/gi, '');

  while (string.length > 0) {
    if (string.charAt(0) !== string.charAt(string.length - 1)) {
        return false;
    }
    string = string.slice(1, string.length - 1)
  }

  return true;
};