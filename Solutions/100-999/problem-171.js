/*

Problem 171. Excel Sheet Column Number

    - Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.

      - For example:

          A -> 1
          B -> 2
          C -> 3
          ...
          Z -> 26
          AA -> 27
          AB -> 28 
          ...

    - Example:
    
        Input: columnTitle = "A"
        Output: 1

        Input: columnTitle = "AB"
        Output: 28

        Input: columnTitle = "ZY"
        Output: 701

    - Constraints:
        1 <= columnTitle.length <= 7
        columnTitle consists only of uppercase English letters.
        columnTitle is in the range ["A", "FXSHRXW"].

*/

/**
 * @param {string} columnTitle
 * @return {number}
 */

var titleToNumber = function (columnTitle) {
  let hash = new Map();
  for (let idx = 65; idx < 91; idx++) {
    hash.set(String.fromCharCode(idx), idx - 64)
  }
  let output = 0;
  const LEN = columnTitle.length;
  for (let index = 0; index < LEN; index++) {
    let char = columnTitle[index];
    output += hash.get(char) * 26 ** (LEN - index - 1);
  }
  return output;
};