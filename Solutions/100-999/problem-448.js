/**

Problem 448. Find All Numbers Disappeared in an Array

    - Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

    - Example:

        Input: nums = [4,3,2,7,8,2,3,1]
        Output: [5,6]

        Input: nums = [1,1]
        Output: [2]

    - Constraints:

        n == nums.length
        1 <= n <= 10^5
        1 <= nums[i] <= n

 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var findDisappearedNumbers = function (nums) {
  const SIZE = nums.length;
  let unique = new Set(nums);
  let output = [];
  for (let step = 1; step <= SIZE; step++) {
    if (unique.has(step) === false) output.push(step)
  }
  return output;
};