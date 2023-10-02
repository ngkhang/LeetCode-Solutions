/*

Problem 342. Power of Four

    - Given an integer n, return true if it is a power of four. Otherwise, return false.

    - An integer n is a power of four, if there exists an integer x such that n == 4x.

    - Example:
    
        Input: n = 16
        Output: true

        Input: n = 5
        Output: false
        
        Input: n = 1
        Output: true

    - Constraints:
        -2^31 <= n <= 2^31 - 1

    - Follow up: Could you solve it without loops/recursion?


 





*/

/**
 * @param {number} n
 * @return {boolean}
 */

var isPowerOfFour = function (n) {
  if (n === 0) return false
  return n === 1 || Number.isInteger(0.5 * Math.log2(n));
};