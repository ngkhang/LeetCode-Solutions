/*

Problem 35. Search Insert Position
    - Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

    - You must write an algorithm with O(log n) runtime complexity.

    - Example:

        Input: nums = [1,3,5,6], target = 5
        Output: 2

        Input: nums = [1,3,5,6], target = 2
        Output: 1

        Input: nums = [1,3,5,6], target = 7
        Output: 4

    - Constraints:
        1 <= nums.length <= 10^4
        -10^4 <= nums[i] <= 10^4
        nums contains distinct values sorted in ascending order.
        -10^4 <= target <= 10^4

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function (nums, target) {
  let size = nums.length;
  if (nums.indexOf(target) >= 0) return nums.indexOf(target);
  if (nums[size - 1] < target) return size;
  for (let idx = 0; idx < size; idx++) {
    if (target < nums[idx]) {
      return idx;
    }
  }
};
