/*

Problem 350. Intersection of Two Arrays II

    - Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

    - Example

        Input: nums1 = [1,2,2,1], nums2 = [2,2]
        Output: [2,2]

        Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
        Output: [4,9]
        Explanation: [9,4] is also accepted.

    - Constraints:

        1 <= nums1.length, nums2.length <= 1000
        0 <= nums1[i], nums2[i] <= 1000
        

    - Follow up:

        - What if the given array is already sorted? How would you optimize your algorithm?
        - What if nums1's size is small compared to nums2's size? Which algorithm is better?
        - What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersect = function (nums1, nums2) {
  // Solution 1
  // let input = [...nums1, ...nums2];

  // let map1 = new Map();
  // let map2 = new Map();

  // nums1.forEach((num) => map1.set(num, map1.has(num) ? map1.get(num) + 1 : 1));
  // nums2.forEach((num) => map2.set(num, map2.has(num) ? map2.get(num) + 1 : 1));

  // return input.filter((num) => {
  // 	if (map1.get(num) > 0 && map2.get(num) > 0) {
  // 		map1.set(num, map1.get(num) - 1);
  // 		map2.set(num, map2.get(num) - 1);
  // 		return true;
  // 	}
  // })

  // Solution 2
  let maps1 = new Map();
  nums1.forEach((num) => {
    (maps1.has(num))
      ? maps1.set(num, maps1.get(num) + 1)
      : maps1.set(num, 1)
  })

  return nums2.filter((num) => {
    if (maps1.has(num) && maps1.get(num) > 0) {
      maps1.set(num, maps1.get(num) - 1);
      return true
    }
  })
};