/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
  let columnNum = 0;
  let i = columnTitle.length - 1;

  while (i >= 0) {
      const x = columnTitle.length - 1 - i;
      columnNum += (columnTitle.charCodeAt(i) - 64) * Math.pow(26, x);
      i--;
  }

  return columnNum;
};