/*

Problem 1523. Count Odd Numbers in an Interval Range
    - Given two non-negative integers `low` and `high`. Return the count of odd numbers between `low` and `high` (inclusive).

    - Example:

      Input: low = 3, high = 7
      Output: 3
      Explanation: The odd numbers between 3 and 7 are [3,5,7].

      Input: low = 8, high = 10
      Output: 1
      Explanation: The odd numbers between 8 and 10 are [9].

    - Constraints:
        0 <= low <= high <= 10^9

*/

/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

var countOdds = function (low, high) {
  return high % 2 == 0
    ? Math.floor((high - low + 1) / 2)
    : Math.round((high - low + 1) / 2);
};
