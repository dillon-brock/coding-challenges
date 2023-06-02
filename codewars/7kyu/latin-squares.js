function makeLatinSquare(n) {
  const square = [];
  
  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 1; j <= n; j++) {
      row.push((j + i) % n + 1);
    }
    square.push(row);
  }
  
  return square;
}