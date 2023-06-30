/*

Problem 9. Palindrome Number
    - Given an integer x, return true if x is a palindrome, and false otherwise.


    - Example:

        Input: x = 121
        Output: true
        Explanation: 121 reads as 121 from left to right and from right to left.

        Input: x = -121
        Output: false
        Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

        Input: x = 10
        Output: false
        Explanation: Reads 01 from right to left. Therefore it is not a palindrome.3,3], target = 6

    - Constraints:
        -2^31 <= x <= 2^31 - 1

*/

/**
 * @param {number} n - a positive integer
 * @return {number}
 */

var isPalindrome = function (x) {
  if (x < 0) return false;

  let rawNum = x;
  let numReverse = 0;
  while (rawNum != 0) {
    numReverse = numReverse * 10 + (rawNum % 10);
    rawNum = Math.floor(rawNum / 10);
  }
  return x === numReverse;
};
