/*

Problem 557. Reverse Words in a String III

    - Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

    - Example:

        Input: s = "Let's take LeetCode contest"
        Output: "s'teL ekat edoCteeL tsetnoc"

        Input: s = "God Ding"
        Output: "doG gniD"

    - Constraints:

        1 <= s.length <= 5 * 10^4
        s contains printable ASCII characters.
        s does not contain any leading or trailing spaces.
        There is at least one word in s.
        All the words in s are separated by a single space.

*/

/**
 * @param {string} s
 * @return {string}
 */

var reverseWords = function (s) {
  let output = '';
  let word = '';
  for (let idx = 0; idx < s.length; idx++) {
    if (s[idx] !== ' ') {
      word = s[idx] + word;
      continue;
    }
    output += word + ' ';
    word = '';
  }
  return output + word;
};