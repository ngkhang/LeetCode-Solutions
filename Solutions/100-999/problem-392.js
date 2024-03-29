/*

Problem 392. Is Subsequence

    - Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

		- A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
    
    - Example:

			Input: s = "abc", t = "ahbgdc"
			Output: true

			Input: s = "axc", t = "ahbgdc"
			Output: false

		- Constraints:
			0 <= s.length <= 100
			0 <= t.length <= 10^4
			s and t consist only of lowercase English letters.

*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isSubsequence = function(s, t) {
	let output='';
	for (let index = 0; index < s.length; index++) {
		const position = t.indexOf(s[index]);
		if(position === -1) break;
		output +=t[position]	
		t = t.substring(position+1)
	}
	return output === s;
};