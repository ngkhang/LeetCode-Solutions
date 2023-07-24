/*

Problem 125. Valid Palindrome

    - A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

	- Given a string s, return true if it is a palindrome, or false otherwise.
    
    - Example:

		Input: s = "A man, a plan, a canal: Panama"
		Output: true
		Explanation: "amanaplanacanalpanama" is a palindrome.

		Input: s = "race a car"
		Output: false
		Explanation: "raceacar" is not a palindrome.

		Input: s = " "
		Output: true
		Explanation: s is an empty string "" after removing non-alphanumeric characters.
			Since an empty string reads the same forward and backward, it is a palindrome.
    
	- Constraints:
      	1 <= s.length <= 2 * 10^5
		s consists only of printable ASCII characters.

*/

/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function (s) {
	let regx = /[^\w]|[\_]/g;
	s = s.trim().toLowerCase().replace(regx, "");
	let reverseStr = s.split("").reverse(false).join("");
	return s === reverseStr;
};
s;
