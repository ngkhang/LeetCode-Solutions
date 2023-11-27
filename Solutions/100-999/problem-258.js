/*

Problem 258. Add Digits

    - Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

    - Example:

        Input: num = 38
        Output: 2
        Explanation: The process is
            38 --> 3 + 8 --> 11
            11 --> 1 + 1 --> 2 
            Since 2 has only one digit, return it.

        Input: num = 0
        Output: 0

    - Constraints:

        0 <= num <= 2^31 - 1

    - Follow up: Could you do it without any loop/recursion in O(1) runtime?

*/

/**
 * @param {number} num
 * @return {number}
 */

var addDigits = function (num) {
  if (num <= 9) return num;
  let str = num + '';
  let sum = 0;
  for (const char of str) {
    sum += char * 1;
  }
  return addDigits(sum);
};