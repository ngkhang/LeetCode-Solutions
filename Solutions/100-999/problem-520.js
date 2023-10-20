/*

Problem 520. Detect Capital

    - We define the usage of capitals in a word to be right when one of the following cases holds:

        - All letters in this word are capitals, like "USA".
        - All letters in this word are not capitals, like "leetcode".
        - Only the first letter in this word is capital, like "Google".
        - Given a string word, return true if the usage of capitals in it is right.

    - Example:

        Input: word = "USA"
        Output: true

        Input: word = "FlaG"
        Output: false

    - Constraints:

        1 <= word.length <= 100
        word consists of lowercase and uppercase English letters.

*/

/**
 * @param {string} word
 * @return {boolean}
 */

var detectCapitalUse = function (word) {
  if (word.toLowerCase() === word || word.toUpperCase() === word) return true;
  let uppercaseArr = [...word.matchAll(/[A-Z]/g)];
  return uppercaseArr.length < 2 && word[0].charCodeAt() < 97;
}