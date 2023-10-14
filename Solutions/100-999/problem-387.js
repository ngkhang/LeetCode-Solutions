/*

Problem 387. First Unique Character in a String

    - Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

    - Example:

        Input: s = "leetcode"
        Output: 0

        Input: s = "loveleetcode"
        Output: 2

        Input: s = "aabb"
        Output: -1

    - Constraints:

        1 <= s.length <= 105
        s consists of only lowercase English letters.

*/

/**
 * @param {string} s
 * @return {number}
 */

var firstUniqChar = function (s) {
  let uniques = new Map();
  for (const char of s) {
    if (uniques.has(char)) uniques.set(char, uniques.get(char) + 1);
    else uniques.set(char, 1);
  }
  let unique = [...uniques.entries()].find(ele => ele[1] === 1);
  return (unique) ? s.indexOf(unique[0]) : -1
};