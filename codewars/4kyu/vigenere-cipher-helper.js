function VigenèreCipher(key, abc) {
  this.encode = function (str) {
    return str.split('')
      .map((l, i) => {
        if (abc.includes(l)) {
          return abc[(abc.indexOf(l) + abc.indexOf(key[i % key.length])) % abc.length]
        }
        return l;
      }).join('');
  };

  this.decode = function (str) {
    return str.split('')
      .map((l, i) => {
        if (abc.includes(l)) {
          if (abc.indexOf(l) - abc.indexOf(key[i % key.length]) >= 0) {
            return abc[abc.indexOf(l) - abc.indexOf(key[i % key.length])]
          }
          else {
            return abc[abc.length + abc.indexOf(l) - abc.indexOf(key[i % key.length])]
          } 
        }
        return l;
      }).join('');
  };
}