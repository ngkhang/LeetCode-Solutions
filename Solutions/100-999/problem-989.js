/*

Problem 989. Add to Array-Form of Integer

    - The array-form of an integer num is an array representing its digits in left to right order.

      - For example, for num = 1321, the array form is [1,3,2,1].

    - Given num, the array-form of an integer, and an integer k, return the array-form of the integer num + k.

    - Example:

      Input: num = [1,2,0,0], k = 34
      Output: [1,2,3,4]
      Explanation: 1200 + 34 = 1234

      Input: num = [2,7,4], k = 181
      Output: [4,5,5]
      Explanation: 274 + 181 = 455

      Input: num = [2,1,5], k = 806
      Output: [1,0,2,1]
      Explanation: 215 + 806 = 1021

    - Constraints:
        1 <= num.length <= 10^4
        0 <= num[i] <= 9
        num does not contain any leading zeros except for the zero itself.
        1 <= k <= 10^4

*/

/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */

var addToArrayForm = function(num, k) {
	if(num.length >= 20 || k > 2**53 - 1){
		num = BigInt(num.join(''));
		k= BigInt(k);
	}
	else num = num.join('')*1;

	let sum = (num + k).toString();
	let output = [];
	for (const char of sum) {
		output.push(char*1);
	}
	return output;
};