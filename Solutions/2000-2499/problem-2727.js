/*

Problem 2727. Is Object Empty

    - Given an object or an array, return if it is empty.
		- An empty object contains no key-value pairs.
		- An empty array contains no elements.

	- You may assume the array is the output of JSON.parse.

    - Example:

		Input: obj = {"x": 5, "y": 42}
		Output: false
		Explanation: The object has 2 key-value pairs so it is not empty.

		Input: obj = {}
		Output: true
		Explanation: The object doesn't have any key-value pairs so it is empty.

		Input: obj = [null, false, 0]
		Output: false
		Explanation: The array has 3 elements so it is not empty.

    - Constraints:
        2 <= JSON.stringify(obj).length <= 10^5

*/

/**
 * @param {Object | Array} obj
 * @return {boolean}
 */

var isEmpty = function (obj) {
	if (Array.isArray(obj) && obj.length !== 0) return false;
	let getLstKey = Object.keys(obj);
	return getLstKey.length === 0 ? true : false;
};
