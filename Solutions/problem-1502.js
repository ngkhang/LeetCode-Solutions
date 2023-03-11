/*

Problem 1502. Can Make Arithmetic Progression From Sequence
    - A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.

    - Given an array of numbers arr, return true if the array can be rearranged to form an arithmetic progression. Otherwise, return false.

    - Example:

        Input: arr = [3,5,1]
        Output: true
        Explanation: We can reorder the elements as [1,3,5] or [5,3,1] with differences 2 and -2 respectively, between each consecutive elements.

        Input: arr = [1,2,4]
        Output: false
        Explanation: There is no way to reorder the elements to obtain an arithmetic progression.

    - Constraints:
        2 <= arr.length <= 1000
        -10^6 <= arr[i] <= 10^6

*/

/**
 * @param {number[]} arr
 * @return {boolean}
 */

var canMakeArithmeticProgression = function (arr) {
  let sortArr = [...arr].sort((a, b) => a - b);
  let d = sortArr[0] - sortArr[1];
  for (let idx = 1; idx < sortArr.length - 1; idx++) {
    if (sortArr[idx] - sortArr[idx + 1] !== d) return false;
  }
  return true;
};
