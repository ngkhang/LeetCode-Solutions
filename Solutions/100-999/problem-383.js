/*

Problem 383. Ransom Note

    - Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

    - Each letter in magazine can only be used once in ransomNote.

    - Example:

        Input: ransomNote = "a", magazine = "b"
        Output: false

        Input: ransomNote = "aa", magazine = "ab"
        Output: false

        Input: ransomNote = "aa", magazine = "aab"
        Output: true

    - Constraints:
        1 <= ransomNote.length, magazine.length <= 10^5
        ransomNote and magazine consist of lowercase English letters.

*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

var canConstruct = function (ransomNote, magazine) {
  for (const char of magazine) {
    if (ransomNote.includes(char)) ransomNote = ransomNote.replace(char, '');
  }
  return ransomNote === '';
};
