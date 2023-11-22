/*

Problem 2413. Smallest Even Multiple

    - Given a positive integer n, return the smallest positive integer that is a multiple of both 2 and n.

    - Example:

        Input: n = 5
        Output: 10
        Explanation: The smallest multiple of both 5 and 2 is 10.

        Input: n = 6
        Output: 6
        Explanation: The smallest multiple of both 6 and 2 is 6. Note that a number is a multiple of itself.

    - Constraints:

        1 <= n <= 150

*/

/**
 * @param {number} n
 * @return {number}
 */

var smallestEvenMultiple = function (n) {
  if (n % 2 === 0) return n;
  return n * 2;
};