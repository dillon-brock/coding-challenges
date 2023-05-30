function duplicateCount(text){
  let duplicates = 0;
  let lowercaseText = text.toLowerCase();
  let uniqueChars = [];
  for (let i = 0; i < lowercaseText.length; i++) {
    if (!uniqueChars.includes(lowercaseText[i])) uniqueChars.push(lowercaseText[i]);
  }
  for (let i = 0; i < uniqueChars.length; i++) {
    let instances = 0;
    for (let j = 0; j < lowercaseText.length; j++) {
      if (uniqueChars[i] === lowercaseText[j]) instances++;
    }
    if (instances > 1) duplicates++;
  }
  return duplicates;
}