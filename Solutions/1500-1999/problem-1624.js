/*

Problem 1624. Largest Substring Between Two Equal Characters

    - Given a string s, return the length of the longest substring between two equal characters, excluding the two characters. If there is no such substring return -1.

    - A substring is a contiguous sequence of characters within a string.

    - Example:

        Input: s = "aa"
        Output: 0
        Explanation: The optimal substring here is an empty substring between the two 'a's.

        Input: s = "abca"
        Output: 2
        Explanation: The optimal substring here is "bc".

        Input: s = "cbzxy"
        Output: -1
        Explanation: There are no characters that appear twice in s.

    - Constraints:

        1 <= s.length <= 300
        s contains only lowercase English letters.

*/

/**
 * @param {string} s
 * @return {number}
 */

var maxLengthBetweenEqualCharacters = function (s) {
  let max;
  const mapStr = new Map();
  for (let i = 0; i < s.length; i++) {
    (mapStr.has(s[i]))
      ? mapStr.set(s[i], [...mapStr.get(s[i]), i])
      : mapStr.set(s[i], [i]);
  }

  mapStr.forEach((values, key) => {
    if (values.length > 1) {
      let len = values[values.length - 1] - values[0] - 1;
      max = (max === undefined) ? len : (max < len) ? len : max;
    }
  })

  return max === undefined ? -1 : max;
};