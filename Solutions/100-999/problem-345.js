/*

Problem 345. Reverse Vowels of a String

    - Given a string s, reverse only all the vowels in the string and return it.

	- The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
    
    - Example:

		Input: s = "hello"
		Output: "holle"

		Input: s = "leetcode"
		Output: "leotcede"
    
	- Constraints:
      	1 <= s.length <= 3 * 10^5
		s consist of printable ASCII characters.

*/

/**
 * @param {string} s
 * @return {string}
 */

var reverseVowels = function (s) {
	let regx = /[aoeuiAOEUI]/g;
	let finds = [...s.matchAll(regx)];
	let len = finds.length;
	let arr = s.split("");

	for (let idx = 0; idx <= len - 1; idx++) {
		arr.splice(finds[idx].index, 1, finds[len - idx - 1][0]);
	}
	return arr.join("");
};
