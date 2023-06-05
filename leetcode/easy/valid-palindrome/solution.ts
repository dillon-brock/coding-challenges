function isPalindromeTS(s: string): boolean {
  s = s.replace(/\W|_/g, '').toLowerCase();
  for (let i: number = 0; i < Math.floor(s.length / 2); i++) {
      if (s.charAt(i) != s.charAt(s.length - 1 - i)) {
          return false;
      }
  }

  return true;
};