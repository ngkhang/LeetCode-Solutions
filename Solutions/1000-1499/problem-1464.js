/*

Problem 1464. Maximum Product of Two Elements in an Array

    - Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).

    - Example:

        Input: nums = [3,4,5,2]
        Output: 12 
        Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12. 

        Input: nums = [1,5,4,5]
        Output: 16
        Explanation: Choosing the indices i=1 and j=3 (indexed from 0), you will get the maximum value of (5-1)*(5-1) = 16.

        Input: nums = [3,7]
        Output: 12

    - Constraints:

        2 <= nums.length <= 500
        1 <= nums[i] <= 10^3

*/

/**
 * @param {number[]} nums
 * @return {number}
 */

var maxProduct = function (nums) {
  const getMaxNum = (arr, indexDiff = 0) => {
    let max = 0;
    let position = indexDiff;
    arr.forEach((num, index) => {
      if (max < num && index !== indexDiff) [max, position] = [num, index]
    });
    return [max, position];
  }
  const [iVal, i] = getMaxNum(nums);
  const [jVal, j] = getMaxNum(nums, i);
  return (iVal - 1) * (jVal - 1);
};