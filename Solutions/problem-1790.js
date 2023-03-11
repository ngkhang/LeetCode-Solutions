/*

Problem 1790. Check if One String Swap Can Make Strings Equal
    - You are given two strings s1 and s2 of equal length. A string swap is an operation where you choose two indices in a string (not necessarily different) and swap the characters at these indices.

    - Return true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings. Otherwise, return false.

    - Example:

        Input: s1 = "bank", s2 = "kanb"
        Output: true
        Explanation: For example, swap the first character with the last character of s2 to make "bank".

        Input: s1 = "attack", s2 = "defend"
        Output: false
        Explanation: It is impossible to make them equal with one string swap.

        Input: s1 = "kelb", s2 = "kelb"
        Output: true
        Explanation: The two strings are already equal, so no string swap operation is required.

    - Constraints:
        1 <= s1.length, s2.length <= 100
        s1.length == s2.length
        s1 and s2 consist of only lowercase English letters.

*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

var areAlmostEqual = function (s1, s2) {
  let count = 0;
  let memoS1 = "";
  let memoS2 = "";
  for (let idx = 0; idx < s1.length; idx++) {
    if (s1[idx] !== s2[idx]) {
      count++;
      if (memoS1 === "" && memoS2 === "") {
        memoS1 = s1[idx];
        memoS2 = s2[idx];
      } else if (memoS1 !== s2[idx] || memoS2 !== s1[idx]) {
        return false;
      }
    }
  }
  if (count > 2 || count === 1) return false;
  return true;
};
