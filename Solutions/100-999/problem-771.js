/*

Problem 771. Jewels and Stones

    - You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

    - Letters are case sensitive, so "a" is considered a different type of stone from "A".

    - Example:

        Input: jewels = "aA", stones = "aAAbbbb"
        Output: 3

        Input: jewels = "z", stones = "ZZ"
        Output: 0

    - Constraints:

        1 <= jewels.length, stones.length <= 50
        jewels and stones consist of only English letters.
        All the characters of jewels are unique.

*/

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

var numJewelsInStones = function (jewels, stones) {
  const hashMap = new Map();
  let output = 0;
  for (let i = 0; i < stones.length; i++) {
    if (!hashMap.has(stones[i])) hashMap.set(stones[i], 1);
    else hashMap.set(stones[i], hashMap.get(stones[i]) + 1);
  }
  for (let i = 0; i < jewels.length; i++) {
    if (hashMap.has(jewels[i])) output += hashMap.get(jewels[i]);
  }
  return output;

};