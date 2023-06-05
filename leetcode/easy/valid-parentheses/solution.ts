function isValidTS(s: string): boolean {
  const openers = ['(', '{', '['];
  const pairs: { [key: string]: string } = {
      ')': '(',
      '}': '{',
      ']': '['
  };

  const open: string[] = []

  for (const c of s) {
      if (openers.includes(c)) {
          open.push(c);
      }
      else {
          if (pairs[c] != open.pop()) {
              return false;
          }
      }
  }
  return open.length == 0;
};