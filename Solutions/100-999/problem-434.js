/*

Problem 434. Number of Segments in a String

    - Given a string s, return the number of segments in the string.

    - A segment is defined to be a contiguous sequence of non-space characters.

    - Example:

        Input: s = "Hello, my name is John"
        Output: 5
        Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]

        Input: s = "Hello"
        Output: 1

    - Constraints:

        0 <= s.length <= 300
        s consists of lowercase and uppercase English letters, digits, or one of the following characters "!@#$%^&*()_+-=',.:".
        The only space character in s is ' '.

*/

/**
 * @param {string} s
 * @return {number}
 */

var countSegments = function (s) {
  s = s.trim();
  if (s === '') return 0;
  let output = s.split(/\s+/g);
  return output.length;
};