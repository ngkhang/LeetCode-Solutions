/*

Problem 1903. Largest Odd Number in String

    - You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.

    - A substring is a contiguous sequence of characters within a string.

    - Example:

        Input: num = "52"
        Output: "5"
        Explanation: The only non-empty substrings are "5", "2", and "52". "5" is the only odd number.

        Input: num = "4206"
        Output: ""
        Explanation: There are no odd numbers in "4206".

        Input: num = "35427"
        Output: "35427"
        Explanation: "35427" is already an odd number.

    - Constraints:

        1 <= num.length <= 10^5
        num only consists of digits and does not contain any leading zeros.

*/

/**
 * @param {string} num
 * @return {string}
 */

var largestOddNumber = function (num) {
  for (let i = num.length - 1; i >= 0; i--) {
    if (+num[i] % 2 !== 0) return num.slice(0, i + 1);
  }
  return '';
};