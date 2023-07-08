/*

Problem 242. Valid Anagram

    - Given two strings s and t, return true if t is an anagram of s, and false otherwise.

    - An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
    
    - Example:

      Input: s = "anagram", t = "nagaram"
      Output: true

      Input: s = "rat", t = "car"
      Output: false

    - Constraints:
      1 <= s.length, t.length <= 5 * 10^4
      s and t consist of lowercase English letters.

    - Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let uniqueS = [...new Set(s)];
  let diff = uniqueS.find(
    (char) => [...s.matchAll(char)].length !== [...t.matchAll(char)].length
  );
  return diff === undefined ? true : false;
};
