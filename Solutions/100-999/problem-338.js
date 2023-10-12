/*

Problem 338. Counting Bits

    - Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

    - Example:
    
        Input: n = 2
        Output: [0,1,1]
        Explanation:
            0 --> 0
            1 --> 1
            2 --> 10

        Input: n = 5
        Output: [0,1,1,2,1,2]
        Explanation:
            0 --> 0
            1 --> 1
            2 --> 10
            3 --> 11
            4 --> 100
            5 --> 101

    - Constraints:
        0 <= n <= 10^5

    - Follow up:
        - It is very easy to come up with a solution with a runtime of O(n log n). Can you do it in linear time O(n) and possibly in a single pass?
        - Can you do it without using any built-in function (i.e., like __builtin_popcount in C++)?

*/

/**
 * @param {number} n
 * @return {number[]}
 */

var countBits = function (n) {
  let output = [0];
  for (let step = 1; step <= n; step++) {
    output.push([...(step >> 0).toString(2).matchAll('1')].length)

  }
  return output;
};