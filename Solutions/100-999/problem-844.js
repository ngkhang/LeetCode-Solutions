/*

Problem 844. Backspace String Compare

    - Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

    - Note that after backspacing an empty text, the text will continue empty.

    - Example:

        Input: s = "ab#c", t = "ad#c"
        Output: true
        Explanation: Both s and t become "ac".

        Input: s = "ab##", t = "c#d#"
        Output: true
        Explanation: Both s and t become "".

        Input: s = "a#c", t = "b"
        Output: false
        Explanation: s becomes "c" while t becomes "b".

    - Constraints:

        1 <= s.length, t.length <= 200
        s and t only contain lowercase letters and '#' characters.

    - Follow up: Can you solve it in O(n) time and O(1) space?

*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var backspaceCompare = function (s, t) {
  const getNewStr = (str) => {
    let carry = 0;
    let newStr = ''
    for (let idx = str.length - 1; idx >= 0; idx--) {
      if (str[idx] === '#') {
        carry++;
        continue;
      }
      if (carry !== 0) {
        carry--;
        continue;
      }
      newStr = str[idx] + newStr;
    }
  }
  return getNewStr(s) === getNewStr(t);
};