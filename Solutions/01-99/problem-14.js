/*

Problem 14. Longest Common Prefix
    - Write a function to find the longest common prefix string amongst an array of strings.

    - If there is no common prefix, return an empty string "".

    - Example:

        Input: strs = ["flower","flow","flight"]
        Output: "fl"

        Input: strs = ["dog","racecar","car"]
        Output: ""
        Explanation: There is no common prefix among the input strings.

    - Constraints:
        1 <= strs.length <= 200
        0 <= strs[i].length <= 200
        strs[i] consists of only lowercase English letters.

*/

/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function (strs) {
  let prefix = "";
  let flag = true;
  for (let idx = 0; idx < strs[0].length; idx++) {
    for (let idj = 0; idj < strs.length; idj++) {
      if (strs[0][idx] !== strs[idj][idx]) {
        flag = false;
        break;
      }
    }
    if (flag === false) break;
    prefix += strs[0][idx];
  }
  return prefix;
};
