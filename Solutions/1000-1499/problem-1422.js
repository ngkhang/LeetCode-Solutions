/*

Problem 1422. Maximum Score After Splitting a String

    - Given a string s of zeros and ones, return the maximum score after splitting the string into two non-empty substrings (i.e. left substring and right substring).

    - The score after splitting a string is the number of zeros in the left substring plus the number of ones in the right substring.

    - Example:

        Input: s = "011101"
        Output: 5 
        Explanation: 
            All possible ways of splitting s into two non-empty substrings are:
            left = "0" and right = "11101", score = 1 + 4 = 5 
            left = "01" and right = "1101", score = 1 + 3 = 4 
            left = "011" and right = "101", score = 1 + 2 = 3 
            left = "0111" and right = "01", score = 1 + 1 = 2 
            left = "01110" and right = "1", score = 2 + 1 = 3

        Input: s = "00111"
        Output: 5
        Explanation: When left = "00" and right = "111", we get the maximum score = 2 + 3 = 5

        Input: s = "1111"
        Output: 3

    - Constraints:

        2 <= s.length <= 500
        The string s consists of characters '0' and '1' only.

*/

/**
 * @param {string} s
 * @return {number}
 */

var maxScore = function (s) {
  // Solution 1: Using Map objects
  const map = new Map([
    ['0', 0],
    ['1', 0],
  ]);
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.has(s[i]) ? map.get(s[i]) + 1 : 1));
  }
  const ONES = map.get('1');

  let countZero = 0;
  let countOne = 0;
  let max = 0;

  for (let i = 0; i < s.length - 1; i++) {
    (s[i] === '0')
      ? countZero = countZero + 1
      : countOne = countOne + 1;
    const currentMax = countZero + ONES - countOne;
    max = (max < currentMax) ? currentMax : max;
  }
  return max;

  // // Solution 2: From community
  // let countZero = 0;
  // let max = 0;
  // let countOne = s.split('1').length - 1;

  // for (let i = 0; i < s.length - 1; i++) {
  //   if (s[i] === '0') countZero++;
  //   else countZero--;

  //   max = Math.max(max, countOne + countZero);
  // }
  // return max;
};