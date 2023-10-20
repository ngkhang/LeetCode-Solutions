/*

Problem 1876. Substrings of Size Three with Distinct Characters

    - A string is good if there are no repeated characters.
    - Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.
    - Note that if there are multiple occurrences of the same substring, every occurrence should be counted.
    - A substring is a contiguous sequence of characters in a string.

    - Example:

        Input: s = "xyzzaz"
        Output: 1
        Explanation: There are 4 substrings of size 3: "xyz", "yzz", "zza", and "zaz". 
            The only good substring of length 3 is "xyz".

        Input: s = "aababcabc"
        Output: 4
        Explanation: There are 7 substrings of size 3: "aab", "aba", "bab", "abc", "bca", "cab", and "abc".
            The good substrings are "abc", "bca", "cab", and "abc".

    - Constraints:

        1 <= s.length <= 100
        s​​​​​​ consists of lowercase English letters.

*/

/**
 * @param {string} s
 * @return {number}
 */

var countGoodSubstrings = function (s) {
  let count = 0;
  for (let idx = 0; idx < s.length - 2; idx++) {
    let sub = s.slice(idx, idx + 3);
    // 👇Case 1:
    if ([... new Set(sub)].length === 3) count++;

    // 👇Case 2:
    // let unique = new Set (sub);
    // if (unique.size === 3) count++;
  }
  return count;
};