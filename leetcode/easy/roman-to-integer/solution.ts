function romanToInt(s: string): number {
  type Matches = { [key: string]: number };
  const romanMatches: Matches = {
      'I': 1,
      'IV': 4,
      'V': 5,
      'IX': 9,
      'X': 10,
      'XL': 40,
      'L': 50,
      'XC': 90,
      'C': 100,
      'CD': 400,
      'D': 500,
      'CM': 900,
      'M': 1000
  }
  
  let result: number = 0;
  let index: number = 0;
  while (index < s.length) {
      if (romanMatches.hasOwnProperty(s.substring(index, index + 2))) {
          result += romanMatches[s.substring(index, index + 2)];
          index += 2;
          continue;
      } else {
          result += romanMatches[s.charAt(index)];
          index++;
      }
  }

  return result;
};