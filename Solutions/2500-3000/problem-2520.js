/*

Problem 2520. Count the Digits That Divide a Number

    - Given an integer num, return the number of digits in num that divide num.
	
	- An integer val divides nums if nums % val == 0.
    
    - Example:

		Input: num = 7
		Output: 1
		Explanation: 7 divides itself, hence the answer is 1.

		Input: num = 121
		Output: 2
		Explanation: 121 is divisible by 1, but not 2. Since 1 occurs twice as a digit, we return 2.

		Input: num = 1248
		Output: 4
		Explanation: 1248 is divisible by all of its digits, hence the answer is 4.

	- Constraints:
      	1 <= num <= 10^9
		num does not contain 0 as one of its digits.

*/

/**
 * @param {number} num
 * @return {number}
 */

var countDigits = function (num) {
	if (num <= 10) return 1;
	let divides = [...num.toString()];
	let count = 0;
	for (const item of divides) {
		if (num % item == 0) count++;
	}
	return count;
};
