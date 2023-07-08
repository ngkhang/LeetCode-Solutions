/*

Problem 169. Majority Element

    - Given an array nums of size n, return the majority element.

    - The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

    - Example:

        Input: nums = [3,2,3]
        Output: 3

        Input: nums = [2,2,1,1,1,2,2]
        Output: 2

    - Constraints:
      n == nums.length
      1 <= n <= 5 * 10^4
      -10^9 <= nums[i] <= 10^9

*/

/**
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function (nums) {
  let map = new Map();
  return nums.filter((num) => {
    let count = map.has(num) ? map.get(num) + 1 : 1;
    if (count > nums.length / 2) return num;
    map.set(num, count);
  })[0];
};
