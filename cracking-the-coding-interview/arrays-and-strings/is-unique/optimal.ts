/* at first glance this seems like a less optimal solution than my top of mind,
but it really depends on the case. both are O(n) time complexity with O(1) space complexity,
but my solution will always iterate over the entire string in order to build the set,
whereas this solution will stop its iteration as soon as it finds a match. however, the time complexity
of making the char_set array also needs to be considered. */

function isUniqueOptimal(s: string): boolean {
  const char_set: boolean[] = Array<boolean>(26).fill(false);

  for (let i = 0; i < s.length; i++) {
    const val: number = s.charCodeAt(i) - 97;
    if (char_set[val]) {
      return false;
    }
    char_set[val] = true;
  }

  return true;
}