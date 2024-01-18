/*

Problem 70. Climbing Stairs

    - You are climbing a staircase. It takes n steps to reach the top.

    - Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

    - Example:

        Input: n = 2
        Output: 2
        Explanation: There are two ways to climb to the top.
            1. 1 step + 1 step
            2. 2 steps

        Input: n = 3
        Output: 3
        Explanation: There are three ways to climb to the top.
            1. 1 step + 1 step + 1 step
            2. 1 step + 2 steps
            3. 2 steps + 1 step

    - Constraints:

        1 <= n <= 45

*/

/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function (n) {
  const factorial = (n) => {
    return (n === 1) ? 1 : n * factorial(n - 1);
  }
  const convolution = (n, k) => {
    // C(n, k) = n! / ((n-k)! * k!)
    const numerator = factorial(n);
    const denominator = factorial(n - k) * factorial(k);
    return numerator / denominator;
  }

  let count = 0;
  for (let a = 0; a <= n; a++) {
    let b = (n - a) / 2;
    if (!Number.isInteger(b)) continue;

    count += (a === 0 || b === 0) ? 1 : convolution(a + b, b);
  }
  return count;
};