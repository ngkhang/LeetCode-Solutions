/*

Problem 283. Move Zeroes
    - Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

    - Note that you must do this in-place without making a copy of the array.

    - Example:

        Input: nums = [0,1,0,3,12]
        Output: [1,3,12,0,0]

        Input: nums = [0]
        Output: [0]

    - Constraints:
        1 <= nums.length <= 10^4
        -2^31 <= nums[i] <= 2^31 - 1

*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function (nums) {
  let point = 0;
  let step = 0;
  while (step < nums.length) {
    if (nums[point] === 0) {
      nums.splice(point, 1);
      nums.push(0);
    } else point++;
    step++;
  }
  return nums;
};
