function circularGameLosers(n: number, k: number): number[] {
  const winners: Set<number> = new Set([]);
  let currentPlayer = 1;
  let round = 1;
  while (!winners.has(currentPlayer)) {
      winners.add(currentPlayer);
      currentPlayer = (currentPlayer + k * round) % n || n;
      round++;
  }

  const losers: number[] = [];
  for (let i = 1; i <= n; i++) {
      if (!winners.has(i)) {
          losers.push(i)
      }
  }

  return losers;
};