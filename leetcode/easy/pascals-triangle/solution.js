/**
 * @param {number} numRows
 * @return {number[][]}
 */
function generate(numRows) {
  const rows = [[1], [1, 1]];
  if (numRows <= 2) return rows.splice(0, numRows);

  while (rows.length < numRows) {
      rows.push(getNextRow(rows[rows.length - 1]));
  }

  return rows;
};

function getNextRow(row) {
  const nextRow = [];
  nextRow.push(1);
  let leftIndex = 0, rightIndex = 1;
  while (rightIndex < row.length) {
      nextRow.push(row[leftIndex] + row[rightIndex]);
      leftIndex++;
      rightIndex++;
  };
  nextRow.push(1);
  return nextRow;
}