/*

Problem 344. Reverse String

    - Write a function that reverses a string. The input string is given as an array of characters s.

		- You must do this by modifying the input array in-place with O(1) extra memory.
    
    - Example:

			Input: s = ["h","e","l","l","o"]
			Output: ["o","l","l","e","h"]

			Input: s = ["H","a","n","n","a","h"]
			Output: ["h","a","n","n","a","H"]

		- Constraints:
			1 <= s.length <= 10^5
      s[i] is a printable ascii character.

*/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

var reverseString = function(s) {
	// Solution 1: return s.reverse();

	// Solution 2:
	let [pLeft, pRight] = [0, s.length-1];
	while(pLeft < pRight){
		[s[pLeft], s[pRight]] = [s[pRight], s[pLeft]]
		pLeft+=1;
		pRight-=1;
	}
};