// top of mind solution, time complexity O(n)
function isUnique(s: string): boolean {
  const charSet: Set<string> = new Set(s.split(''));
  return charSet.size == s.length;
}

// no additional data structures, time complexity O(n^2)
function isUnique2(s: string): boolean {
  for (let i = 0; i < s.length - 1; i++) {
    for (let j = i + 1; j < s.length; j++) {
      if (s.charAt(i) == s.charAt(j)) {
        return false;
      }
    }
  }

  return true;
}

console.log(isUnique('tree')); //false
console.log(isUnique('grape')); // true
console.log(isUnique('volleyball')); // false
console.log(isUnique('malign')); // true

console.log(isUnique2('tree')); //false
console.log(isUnique2('grape')); // true
console.log(isUnique2('volleyball')); // false
console.log(isUnique2('malign')); // true