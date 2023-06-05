function isAnagramTS(s: string, t: string): boolean {
  if (s.length != t.length) return false;
  s = s.toLowerCase();
  t = t.toLowerCase();
  const occurrences: number[] = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
      occurrences[s.charCodeAt(i) - 97]++;
      occurrences[t.charCodeAt(i) - 97]--;
  }

  for (const v of occurrences) {
      if (v != 0) return false;
  }
  return true;
};