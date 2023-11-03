/*

Problem 217. Contains Duplicate
    - Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

    - Example:
    
        Input: nums = [1,2,3,1]
        Output: true

        Input: nums = [1,2,3,4]
        Output: false

        Input: nums = [1,1,1,3,3,4,3,2,4,2]
        Output: true

    - Constraints:
        1 <= nums.length <= 10^5
        -10^9 <= nums[i] <= 10^9

*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function (nums) {
  const SIZE = nums.length;
  const uniques = new Set(nums);
  return [...uniques].length !== SIZE;
};
