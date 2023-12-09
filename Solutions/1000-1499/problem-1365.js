/*

Problem 1365. How Many Numbers Are Smaller Than the Current Number

    - Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

    - Return the answer in an array.

    - Example:

        Input: nums = [8,1,2,2,3]
        Output: [4,0,1,1,3]
        Explanation: 
            For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
            For nums[1]=1 does not exist any smaller number than it.
            For nums[2]=2 there exist one smaller number than it (1). 
            For nums[3]=2 there exist one smaller number than it (1). 
            For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).

        Input: nums = [6,5,4,8]
        Output: [2,1,0,3]

        Input: nums = [7,7,7,7]
        Output: [0,0,0,0]

    - Constraints:

        2 <= nums.length <= 500
        0 <= nums[i] <= 100

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var smallerNumbersThanCurrent = function (nums) {
  const LEN = nums.length;
  const sorted = [...nums].sort((a, b) => b - a);

  const mapCountNum = new Map();
  sorted.forEach((number, index) => {
    if (mapCountNum.has(number)) {
      let preCount = mapCountNum.get(number)[0];
      mapCountNum.set(number, [preCount + 1, LEN - index - 1]);
    }
    else mapCountNum.set(number, [1, LEN - index - 1]);
  });

  return nums.map((num) => mapCountNum.get(num)[1]);
};