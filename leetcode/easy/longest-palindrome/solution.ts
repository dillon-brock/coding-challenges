function longestPalindrome(s: string): number {
  if (s.length <= 1) return s.length;
  const charInstances = new Map<string, number>();
  for (const letter of s) {
      const currentCount: number | undefined = charInstances.get(letter);
      charInstances.set(letter, currentCount ? currentCount + 1 : 1);
  }
  let pairs = 0;
  for (const count of charInstances.values()) {
      pairs += Math.floor(count / 2);
  }
  return pairs * 2 < s.length ? pairs * 2 + 1 : pairs * 2;
};