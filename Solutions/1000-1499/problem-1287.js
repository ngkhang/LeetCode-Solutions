/*

Problem 1287. Element Appearing More Than 25% In Sorted Array

    - Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time, return that integer.

    - Example:

        Input: arr = [1,2,2,6,6,6,6,7,10]
        Output: 6

        Input: arr = [1,1]
        Output: 1

    - Constraints:

        1 <= arr.length <= 10^4
        0 <= arr[i] <= 10^5

*/

/**
 * @param {number[]} arr
 * @return {number}
 */

var findSpecialInteger = function (arr) {

  // Solution 1: Using map object
  if (arr.length === 1) return arr[0];

  const map = new Map();
  arr.forEach((num) => {
    (map.has(num))
      ? map.set(num, map.get(num) + 1)
      : map.set(num, 1);
  });

  let countMax = Math.max(...map.values());
  const mapConvert = [...map.entries()];
  for (let i = 0; i < mapConvert.length; i++) {
    if (mapConvert[i][1] === countMax) return mapConvert[i][0];
  }

  // // Solution 2: By user on leetcode
  // let size = arr.length;
  // let qtr = Math.floor(size / 4);
  // let cnt = 1;
  // let p = arr[0];

  // for (let i = 1; i < size; i++) {
  //   (p === arr[i]) ? cnt++ : cnt = 1;
  //   if (cnt > qtr) return arr[i];
  //   p = arr[i];
  // }
  // return p;
};