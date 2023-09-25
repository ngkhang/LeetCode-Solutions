/*

Problem 796. Rotate String

    - Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

    - A shift on s consists of moving the leftmost character of s to the rightmost position.

      For example, if s = "abcde", then it will be "bcdea" after one shift.

    - Example:

      Input: s = "abcde", goal = "cdeab"
      Output: true

      Input: s = "abcde", goal = "abced"
      Output: false

    - Constraints:
      1 <= s.length, goal.length <= 100
      s and goal consist of lowercase English letters.

*/

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */

var rotateString = function (s, goal) {
  // Solution 1:
  if (s.length !== goal.length) return false;
  let idxFirstChar = s.matchAll(goal[0]);
  let arr = [...idxFirstChar].map(item => item.index);
  for (let idx = 0; idx < arr.length; idx++) {
    let start = s.slice(0, arr[idx]);
    let end = s.slice(arr[idx],);
    if (end + start === goal) return true;
  }
  return false;

  // Solution 2:
  // return s.length === goal.length ? true : (s + s).includes(goal);
};
