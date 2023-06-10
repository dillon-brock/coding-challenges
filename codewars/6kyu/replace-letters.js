function replaceLetters(word) {
  const consonantSet = new Set(consonants);
  const vowelSet = new Set(vowels);
  
  let replaced = "";
  
  for (let i = 0; i < word.length; i++) {
    const l = word.charAt(i);
    let alphabetIndex = alphabet.indexOf(l);
    const replaceSet = consonantSet.has(l) ? vowelSet : consonantSet;
    const direction = consonantSet.has(l) ? 1 : -1;
    
    while (!replaceSet.has(alphabet[alphabetIndex])) {
      alphabetIndex += direction;
      if (alphabetIndex == 26) alphabetIndex = 0;
      if (alphabetIndex == -1) alphabetIndex = 25;
    }
    replaced += alphabet[alphabetIndex];
  }
  return replaced;
}