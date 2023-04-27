function groupAnagrams(strs: string[]): string[][] {
  const output: string[][] = [];
  const map: Map<string, string[]> = new Map();

  for (const word of strs) {
      const sortedWord: string = word.split('').sort().join('');
      map.get(sortedWord) ?
          map.get(sortedWord)?.push(word) :
          map.set(sortedWord, [word]);
  }

  for (const words of map.values()) {
      output.push(words);
  }

  return output;

};