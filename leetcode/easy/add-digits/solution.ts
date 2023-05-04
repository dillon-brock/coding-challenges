function addDigits(num: number): number {
  while (num > 9) {
      num = num.toString()
          .split('')
          .reduce((a: number, b: string) => {
              return a + Number(b);
          }, 0);
  }
  return num;
};