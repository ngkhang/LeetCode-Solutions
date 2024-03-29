/*

Problem 2357. Make Array Zero by Subtracting Equal Amounts

    - You are given a non-negative integer array nums. In one operation, you must:

        - Choose a positive integer x such that x is less than or equal to the smallest non-zero element in nums.
        - Subtract x from every positive element in nums.

    - Return the minimum number of operations to make every element in nums equal to 0.

    - Example:

        Input: nums = [1,5,0,3,5]
        Output: 3
        Explanation:
          In the first operation, choose x = 1. Now, nums = [0,4,0,2,4].
          In the second operation, choose x = 2. Now, nums = [0,2,0,0,2].
          In the third operation, choose x = 2. Now, nums = [0,0,0,0,0].

        Input: nums = [0]
        Output: 0
          Explanation: Each element in nums is already 0 so no operations are needed.


    - Constraints:

        1 <= nums.length <= 100
        0 <= nums[i] <= 100

*/


/**
 * @param {number[]} nums
 * @return {number}
 */


var minimumOperations = function (nums) {
  // Solution 1:
  function findMinNumber(arr) {
    arr = [...new Set(arr)].sort((a, b) => a - b);
    return arr[0] === 0 ? arr[1] : arr[0];
  }

  let countLoop = 0;
  while (true) {
    let min = findMinNumber(nums);
    if (min === undefined) break;

    nums = nums.filter((num) => {
      if (num !== 0) return num - min;
    })
    countLoop++;
  }
  return countLoop;

  // Solution 2:
  // const set = new Set(nums);
  // if(set.has(0)) return set.size - 1;
  // return set.size;
};


