function countSeniors(details: string[]): number {

  let seniors: number = 0;

  for (const detail of details) {
      if (Number(detail.slice(11, 13)) > 60) {
          seniors++;
      }
  }

  return seniors;
};