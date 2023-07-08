/*

Problem 290. Word Pattern

    - Given a pattern and a string s, find if s follows the same pattern.

    - Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

    - Example:

        Input: pattern = "abba", s = "dog cat cat dog"
        Output: true

        Input: pattern = "abba", s = "dog cat cat fish"
        Output: false

        Input: pattern = "aaaa", s = "dog cat cat dog"
        Output: false

    - Constraints:
        1 <= pattern.length <= 300
        pattern contains only lower-case English letters.
        1 <= s.length <= 3000
        s contains only lowercase English letters and spaces ' '.
        s does not contain any leading or trailing spaces.
        All the words in s are separated by a single space.

*/

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */

var wordPattern = function (pattern, s) {
  let obj = new Map();
  let arr = s.split(" ");
  if (arr.length !== pattern.length) return false;
  for (let idx = 0; idx < pattern.length; idx++) {
    if (obj.has(pattern[idx]) === false) {
      if ([...obj.values()].includes(arr[idx]) !== true) {
        obj.set(pattern[idx], arr[idx]);
        continue;
      }
      return false;
    } else if (obj.get(pattern[idx]) !== arr[idx]) return false;
  }
  return true;
};
