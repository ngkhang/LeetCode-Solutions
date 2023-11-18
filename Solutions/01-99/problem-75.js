/*

Problem 75. Sort Colors

    - Given an array nums with n objects colored red, white, or blue, sort them in-place so that object s of the same color are adjacent, with the colors in the order red, white, and blue.

    - We will use t he integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

    - You must solve this problem without using the library's sort function.

    - Example

        Input: nums = [2,0,2,1,1,0]
        Output: [0,0,1,1,2,2]

        Input: nums = [2,0,1]
        Output: [0,1,2]
 

    - Constraints:

        n == nums.length
        1 <= n <= 300
        nums[i] is either 0, 1, or 2.

Follow up: Could you come up with a one-pass algorithm using only constant extra space?

*/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var sortColors = function (nums) {
  const SIZE = nums.length;
  let idexZero;
  for (let index = 0; index < SIZE; index++) {
    let num = nums[index];

    if (num === 2) continue;

    nums.splice(index, 1);
    if (num === 0) {
      nums.unshift(0);
      idexZero === undefined ? idexZero = 0 : idexZero++;
    }
    else nums.splice(idexZero + 1, 0, 1);
  }
  return nums;
};