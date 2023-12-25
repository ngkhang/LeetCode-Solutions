/*

Problem 1758. Minimum Changes To Make Alternating Binary String

    - You are given a string s consisting only of the characters '0' and '1'. In one operation, you can change any '0' to '1' or vice versa.

    - The string is called alternating if no two adjacent characters are equal. For example, the string "010" is alternating, while the string "0100" is not.

    - Return the minimum number of operations needed to make s alternating.

    - Example:

        Input: s = "0100"
        Output: 1
        Explanation: If you change the last character to '1', s will be "0101", which is alternating.

        Input: s = "10"
        Output: 0
        Explanation: s is already alternating.

        Input: s = "1111"
        Output: 2
        Explanation: You need two operations to reach "0101" or "1010".

    - Constraints:

        1 <= s.length <= 10^4
        s[i] is either '0' or '1'.

*/

/**
* @param {string} s
* @return {number}
*/

var minOperations = function (s) {
  const getminiChange = (arr, firstChange = 1) => {
    let miniChange = 0;
    if (firstChange === 0) {
      arr[0] = arr[0] === '0' ? '1' : '0';
      miniChange++;
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i + 1]) {
        arr[i + 1] = arr[i] === '0' ? '1' : '0'
        miniChange++;
      }
    }
    return miniChange;
  }
  let arrStr = s.split('');
  const CASE_1 = getminiChange([...arrStr], 0);
  const CASE_2 = getminiChange([...arrStr]);
  return Math.min(CASE_1, CASE_2);
};
