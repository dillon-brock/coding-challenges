function isPalindrome(x: number): boolean {
  if (x < 0) return false;
  const stringified = String(x);

  for (let i = 0; i < stringified.length / 2; i++) {
      if (stringified[i] != stringified[stringified.length - 1 - i]) {
          return false;
      }
  }

  return true;
};