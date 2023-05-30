function validISBN10(isbn) {
  var len = isbn.length;
  
  if (len !== 10) {
      return false;
  }
  
  return isbn.split('')
      .map(function (num, index) {
         return (num === 'X' && index === len - 1 ? 10 : parseInt(num, 10)) * (index + 1); 
      })
      .reduceRight(function (a, b) {
          return a + b;
      }, 0) % 11 === 0;
}