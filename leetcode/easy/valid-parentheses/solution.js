/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const closingCharacters = { 
      ')': '(',
      ']': '[',
      '}': '{' 
  }
  const open = [];

  for (let i = 0; i < s.length; i++) {
      if (closingCharacters.hasOwnProperty(s[i])) {
          if (closingCharacters[s[i]] !== open.pop()) {
              return false;
          }
      }
      else {
          open.push(s[i]);
      }
  }

  return open.length == 0;
};