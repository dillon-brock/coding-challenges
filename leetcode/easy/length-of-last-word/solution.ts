function lengthOfLastWord(s: string): number {
  s = s.trim();
  let length = 0;
  let i = s.length - 1;
  while (s.charAt(i) != ' ' && i >= 0) {
      length += 1;
      i--;
  }
  return length;
};