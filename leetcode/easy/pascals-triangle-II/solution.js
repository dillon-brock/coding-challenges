/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  const baseRows = [[1], [1, 1]];
  if (rowIndex <= 1) return baseRows[rowIndex];

  let currentIndex = 1;
  let row = [1, 1];
  while (currentIndex < rowIndex) {
      const nextRow = [1];
      for (let i = 0; i < row.length - 1; i++) {
          nextRow.push(row[i] + row[i + 1]);
      }
      nextRow.push(1);
      row = nextRow;
      currentIndex++;
  }

  return row;
};