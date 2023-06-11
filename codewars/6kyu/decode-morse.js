decodeMorse = function(morseCode){
  
  const morseWords = morseCode.trim().split('   ');
  const message = [];
  morseWords.forEach((word, i) => {
    const letters = word.split(' ');
    letters.forEach((letter) => {
      message.push(MORSE_CODE[letter]);
    })
    if (i != morseWords.length - 1) message.push(' ');
  });
  return message.join('');
}