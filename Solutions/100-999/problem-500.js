/*

Problem 500. Keyboard Row

    - Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

    In the American keyboard:

        - the first row consists of the characters "qwertyuiop",
        - the second row consists of the characters "asdfghjkl", and
        - the third row consists of the characters "zxcvbnm".

    - Example:

        Input: words = ["Hello","Alaska","Dad","Peace"]
        Output: ["Alaska","Dad"]

        Input: words = ["omk"]
        Output: []

        Input: words = ["adsdf","sfd"]
        Output: ["adsdf","sfd"]


    - Constraints:

        1 <= words.length <= 20
        1 <= words[i].length <= 100
        words[i] consists of English letters (both lowercase and uppercase).

*/

/**
 * @param {string[]} words
 * @return {string[]}
 */

var findWords = function (words) {
  const keyMaps = new Map([
    ["q", 1], ["w", 1], ["e", 1], ["r", 1], ["t", 1],
    ["y", 1], ["u", 1], ["i", 1], ["o", 1], ["p", 1],

    ["a", 2], ["s", 2], ["d", 2], ["f", 2], ["g", 2],
    ["h", 2], ["j", 2], ["k", 2], ["l", 2],

    ["z", 3], ["x", 3], ["c", 3], ["v", 3], ["b", 3],
    ["n", 3], ["m", 3],
  ]);

  let arrStr = words.join('-') + '-';

  let output = [];
  let rowIndex = 0, word = '';

  for (let i = 0; i < arrStr.length; i++) {
    let char = arrStr[i];
    if (char === '-') {
      word && output.push(word);
      rowIndex = 0;
      word = '';
      continue;
    }

    let positionChar = keyMaps.get(char.toLowerCase());

    if (rowIndex === 0 || rowIndex === positionChar) {
      rowIndex = positionChar;
      word += char;
    }
    else {
      i = arrStr.indexOf('-', i) - 1;
      word = "";
    }
  }
  return output;
};