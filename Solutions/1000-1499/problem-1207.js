/*

Problem 1207. Unique Number of Occurrences

    - Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

    - Example:

        Input: arr = [1,2,2,1,1,3]
        Output: true
        Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

        Input: arr = [1,2]
        Output: false

        Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
        Output: true

    Constraints:
        1 <= arr.length <= 1000
        -1000 <= arr[i] <= 1000

*/

/**
 * @param {number[]} arr
 * @return {boolean}
 */

var uniqueOccurrences = function (arr) {
  let output = new Map();
  arr.forEach((num) => {
    !output.has(num)
      ? output.set(num, 1)
      : output.set(num, output.get(num) + 1);
  })
  let unique = new Set(output.values());
  return output.size === unique.size;
};