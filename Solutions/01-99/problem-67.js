/*

Problem 67. Add Binary https://leetcode.com/problems/add-binary/

    - Given two binary strings a and b, return their sum as a binary string.

    - Example:  

        Input: a = "11", b = "1"
        Output: "100"

        Input: a = "1010", b = "1011"
        Output: "10101"

    - Constraints:

        1 <= a.length, b.length <= 10^4
        a and b consist only of '0' or '1' characters.
        Each string does not contain leading zeros except for the zero itself.

*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

var addBinary = function (a, b) {
  const addTwoBinary = (A, B, Co = 0) => [A ^ B ^ Co, A & B | Co & (A | B)];

  const SIZE_A = a.length;
  const SIZE_B = b.length;

  let [result, preMemo] = ['', 0];
  let output = '';

  let step, subStr;

  if (SIZE_A >= SIZE_B) {
    step = SIZE_B;
    subStr = a.slice(0, SIZE_A - step);
  }
  else {
    step = SIZE_A;
    subStr = b.slice(0, SIZE_B - step);
  }

  for (let i = 0; i < step; i++) {
    [result, preMemo] = addTwoBinary(+a[SIZE_A - 1 - i], +b[SIZE_B - 1 - i], preMemo);
    output = result + output;
  };

  for (let i = subStr.length - 1; i >= 0; i--) {
    [result, preMemo] = addTwoBinary(+subStr[i], preMemo);
    output = result + output;
  };

  return (preMemo) ? preMemo + output : output;
};