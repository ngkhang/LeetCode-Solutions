/*

Problem 287. Find the Duplicate Number

    - Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

    - There is only one repeated number in nums, return this repeated number.

    - You must solve the problem without modifying the array nums and uses only constant extra space.

    - Example:

        Input: nums = [1,3,4,2,2]
        Output: 2

        Input: nums = [3,1,3,4,2]
        Output: 3

    - Constraints:

        1 <= n <= 10^5
        nums.length == n + 1
        1 <= nums[i] <= n
        All the integers in nums appear only once except for precisely one integer which appears two or more times.

    - Follow up:

        - How can we prove that at least one duplicate number must exist in nums?
        - Can you solve the problem in linear runtime complexity?

*/

/**
 * @param {number[]} nums
 * @return {number}
 */

var findDuplicate = function (nums) {
  const map = new Map();

  for (let step = 0; step < nums.length; step++) {
    if (map.has(nums[step])) return nums[step];
    map.set(nums[step], 1);
  }
};