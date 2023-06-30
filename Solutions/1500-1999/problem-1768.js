/*

Problem 1768. Merge Strings Alternately
    - You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

    - Return the merged string.

    - Example:

        Input: word1 = "abc", word2 = "pqr"
        Output: "apbqcr"
        Explanation: The merged string will be merged as so:
        word1:  a   b   c
        word2:    p   q   r
        merged: a p b q c r

        Input: word1 = "ab", word2 = "pqrs"
        Output: "apbqrs"
        Explanation: Notice that as word2 is longer, "rs" is appended to the end.
        word1:  a   b
        word2:    p   q   r   s
        merged: a p b q   r   s

        Input: word1 = "abcd", word2 = "pq"
        Output: "apbqcd"
        Explanation: Notice that as word1 is longer, "cd" is appended to the end.
        word1:  a   b   c   d
        word2:    p   q
        merged: a p b q c   d

    - Constraints:
        1 <= word1.length, word2.length <= 100
        word1 and word2 consist of lowercase English letters.

*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

var mergeAlternately = function (word1, word2) {
  let result = "";
  let size = word1.length > word2.length ? word1.length : word2.length;

  for (let index = 0; index < size; index++) {
    if (word1[index] !== undefined && word2[index] !== undefined) {
      result += word1[index] + word2[index];
    } else if (word1[index] === undefined) {
      result += word2.slice(index);
      break;
    } else if (word2[index] === undefined) {
      result += word1.slice(index);
      break;
    }
  }
  return result;
};
