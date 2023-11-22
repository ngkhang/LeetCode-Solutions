/*

Problem 1979. Find Greatest Common Divisor of Arrays

    - Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums.

    - The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

    - Example:

        Input: nums = [2,5,6,9,10]
        Output: 2
        Explanation:
            The smallest number in nums is 2.
            The largest number in nums is 10.
            The greatest common divisor of 2 and 10 is 2.

        Input: nums = [7,5,6,8,3]
        Output: 1
        Explanation:
            The smallest number in nums is 3.
            The largest number in nums is 8.
            The greatest common divisor of 3 and 8 is 1.

        Input: nums = [3,3]
        Output: 3
        Explanation:
            The smallest number in nums is 3.
            The largest number in nums is 3.
            The greatest common divisor of 3 and 3 is 3.

    - Constraints:

          2 <= nums.length <= 1000
          1 <= nums[i] <= 1000

*/

/**
 * @param {number[]} nums
 * @return {number}
 */

var findGCD = function (nums) {
  const MAX = Math.max(...nums);
  const MIN = Math.min(...nums);

  if (MAX === MIN) return MAX;

  let greatestComonDivisor = 1;
  for (let i = 2; i <= MIN; i++) {
    if (MIN % i === 0 && MAX % i === 0) greatestComonDivisor = i;
  }
  return greatestComonDivisor;
};