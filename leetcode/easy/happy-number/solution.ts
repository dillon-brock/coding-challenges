function isHappy(n: number): boolean {

  const foundSums: Set<number> = new Set();

  while (n != 1) {
      n = n.toString()
          .split('')
          .map(x => Number(x) * Number(x))
          .reduce((a: number, b) => a + b, 0);
      
      if (foundSums.has(n)) break;
      foundSums.add(n);
  }

  return n == 1;

};