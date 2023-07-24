/*

Problem 345. Reverse Vowels of a String

    - An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

    - Given an integer n, return true if n is an ugly number.
    
    - Example:

        Input: n = 6
        Output: true
        Explanation: 6 = 2 × 3

        Input: n = 1
        Output: true
        Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.

        Input: n = 14
        Output: false
        Explanation: 14 is not ugly since it includes the prime factor 7.
    
	- Constraints:
      	-2^31 <= n <= 2^31 - 1

*/
/**
 * @param {number} n
 * @return {boolean}
 */

var isUgly = function (n) {
	if (n === 1) return true;
	if (n === 0) return false;
	for (let i = 2; i <= 5; ) {
		if (n % i === 0) {
			n = n / i;
			continue;
		}
		i += i % 2 === 0 ? 1 : 2;
	}
	return n === 1 ? true : false;
};
