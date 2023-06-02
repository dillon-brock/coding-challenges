function isPalindromePermutation(s: string): boolean {

  s = s.toLowerCase();

  type OccurrenceMap = {
    [key: string]: number
  }

  const occurrences: OccurrenceMap = {};
  for (const c of s) {
    if (c != ' ') {
      if (occurrences.hasOwnProperty(c)) {
        occurrences[c]++;
      } else {
        occurrences[c] = 1;
      }
    }
  }

  let extraFound: boolean = false;

  for (const [k, v] of Object.entries(occurrences)) {
    if (v % 2 == 1) {
      if (extraFound) return false;
      extraFound = true;
    }
  }

  return true;
}

console.log(isPalindromePermutation('Tac'));