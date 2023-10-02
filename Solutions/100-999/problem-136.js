/*

Problem 136. Single Number

    - Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

    - You must implement a solution with a linear runtime complexity and use only constant extra space.

    - Example:

        Input: nums = [2,2,1]
        Output: 1

        Input: nums = [4,1,2,1,2]
        Output: 4

        Input: nums = [1]
        Output: 1

    - Constraints:
        1 <= nums.length <= 3 * 10^4
        -3 * 10^4 <= nums[i] <= 3 * 10^4
        Each element in the array appears twice except for one element which appears only once.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function (nums) {
  // Solution 1:
  let unique = [... new Set(nums)];
  return unique.find((num) => {
    return nums.filter(ele => num === ele).length === 1
  });

  // Solution 2:
  // const hs = {};
  // for (const key of nums) {
  //   hs[key] = hs[key] + 1 || 1;
  // }
  // for (const key in hs) {
  //   if (hs[key] === 1) return key*1;
  // }

  // Solution 3:
  // let uniqNum = 0;
  // for (let idx = 0; idx < nums.length; idx++) {
  //   uniqNum = uniqNum ^ nums[idx];
  // }
  // return uniqNum;
}