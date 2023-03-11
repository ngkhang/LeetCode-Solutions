/*

Problem 1588. Sum of All Odd Length Subarrays
    - Given an array of positive integers arr, return the sum of all possible odd-length subarrays of arr.

    - A subarray is a contiguous subsequence of the array.

    - Example:

        Input: arr = [1,4,2,5,3]
        Output: 58
        Explanation: The odd-length subarrays of arr and their sums are:
        [1] = 1
        [4] = 4
        [2] = 2
        [5] = 5
        [3] = 3
        [1,4,2] = 7
        [4,2,5] = 11
        [2,5,3] = 10
        [1,4,2,5,3] = 15
        If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58

        Input: arr = [1,2]
        Output: 3
        Explanation: There are only 2 subarrays of odd length, [1] and [2]. Their sum is 3.

        Input: arr = [10,11,12]
        Output: 66

    - Constraints:
        1 <= arr.length <= 100
        1 <= arr[i] <= 1000a

*/

/**
 * @param {number[]} arr
 * @return {number}
 */

var sumOddLengthSubarrays = function (arr) {
  let formatArr = [];
  let stepOdd = 1;
  let total = 0;
  while (stepOdd <= arr.length) {
    for (let size = 0; size <= arr.length - stepOdd; size++) {
      formatArr.push(arr.slice(size, size + stepOdd));
    }
    stepOdd += 2;
  }
  for (let idx = 0; idx < formatArr.length; idx++) {
    total += formatArr[idx].reduce((a, b) => a + b, 0);
  }
  return total;
};
