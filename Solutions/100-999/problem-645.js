/*

Problem 645. Set Mismatch

    - You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

    - You are given an integer array nums representing the data status of this set after the error.

    - Find the number that occurs twice and the number that is missing and return them in the form of an array.

    - Example:

        Input: nums = [1,2,2,4]
        Output: [2,3]

        Input: nums = [1,1]
        Output: [1,2]

    - Constraints:

        2 <= nums.length <= 10^4
        1 <= nums[i] <= 10^4

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var findErrorNums = function (nums) {
  const map = new Map();
  const output = [];
  let start = 1;

  for (let step = 0; step < nums.length; step++) {
    if (!map.has(nums[step])) {
      map.set(nums[step], 1);
      continue;
    }
    output[0] = nums[step];
  }

  while (true) {
    if (!map.has(start)) {
      output[1] = start;
      break;
    }
    start++;
  }
  return output;
};