/*
https://leetcode.com/problems/zigzag-conversion/description/

The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: 
(you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R

And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:
string convert(string s, int numRows);

Example 1:
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"

Example 2:
Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I


Example 3:
Input: s = "A", numRows = 1
Output: "A"

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

var convert = function(s, numRows) {
  if (numRows == 1) return s;
  let rowContent = new Array(numRows).fill('');
  for (let i = 0; i < numRows; i++) rowContent[i] = '';
  for (let i = 0; i < s.length; i++) {
    let contentIndex = i % ((numRows - 1) * 2);
    if (i % ((numRows - 1) * 2) > numRows - 1) contentIndex = 2 * (numRows - 1) - (i % ((numRows - 1) * 2));
    rowContent[contentIndex] += s[i];
  }

  return rowContent.join('');

}