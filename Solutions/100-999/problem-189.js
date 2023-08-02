/*

Problem 189. Rotate Array

    - Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

    - Example:

		Input: nums = [1,2,3,4,5,6,7], k = 3
		Output: [5,6,7,1,2,3,4]
		Explanation:
			rotate 1 steps to the right: [7,1,2,3,4,5,6]
			rotate 2 steps to the right: [6,7,1,2,3,4,5]
			rotate 3 steps to the right: [5,6,7,1,2,3,4]

		Input: nums = [-1,-100,3,99], k = 2
		Output: [3,99,-1,-100]
		Explanation:
			rotate 1 steps to the right: [99,-1,-100,3]
			rotate 2 steps to the right: [3,99,-1,-100]

	- Constraints:
		1 <= nums.length <= 10^5
		-2^31 <= nums[i] <= 2^31 - 1
		0 <= k <= 10^5

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var rotate = function (nums, k) {
	let len = nums.length;
	let step = k > len ? k % len : k;
	let wrapArr = nums.slice(len - step);
	nums.splice(len - step);
	nums.unshift(...wrapArr);
	return nums;
};
