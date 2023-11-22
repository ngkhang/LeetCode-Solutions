/*

Problem 409. Longest Palindrome

    - Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

    - Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

    - Example:

        Input: s = "abccccdd"
        Output: 7
        Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

        Input: s = "a"
        Output: 1
        Explanation: The longest palindrome that can be built is "a", whose length is 1.

    - Constraints:

        1 <= s.length <= 2000
        s consists of lowercase and/or uppercase English letters only.

*/

/**
 * @param {string} s
 * @return {number}
 */

var longestPalindrome = function (s) {
  if (s.length === 1) return 1;

  const keyMap = new Map();
  let single = 0;

  for (const char of s) {
    (keyMap.has(char))
      ? keyMap.set(char, keyMap.get(char) + 1)
      : keyMap.set(char, 1);
  };

  return [...keyMap.values()].reduce((prev, current) => {
    if (current % 2 === 0) return prev += current;

    single = 1;
    return prev += Math.trunc(current / 2) * 2;
  }, 0) + single;
};