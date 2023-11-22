/*

Problem 1952. Three Divisors

  - Given an integer n, return true if n has exactly three positive divisors. Otherwise, return false.

    - An integer m is a divisor of n if there exists an integer k such that n = k * m.

    - Example:

        Input: n = 2
        Output: false
        Explantion: 2 has only two divisors: 1 and 2.

        Input: n = 4
        Output: true
        Explantion: 4 has three divisors: 1, 2, and 4.

    - Constraints:

        1 <= n <= 10^4

*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function (n) {
  let count = 2;
  for (let i = 2; i < n - 1; i++) {
    if (n % i === 0) count++;
    if (count > 3) return false;
  }
  return count === 3;
};