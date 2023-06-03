function longestCommonPrefix(strs: string[]): string {
  let prefix = '';
  for (let i = 0; i < strs[0].length; i++) {
      for (const s of strs) {
          if (s.charAt(i) != strs[0].charAt(i) || !s.charAt(i)) {
              return prefix;
          }
      } 
      prefix += strs[0].charAt(i);
  }

  return prefix;
};