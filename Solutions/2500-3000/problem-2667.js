/*

Problem 2667. Create Hello World Function

    - Write a function createHelloWorld. It should return a new function that always returns "Hello World".

    - Example:

        Input: args = []
        Output: "Hello World"
        Explanation:
          const f = createHelloWorld();
          f(); // "Hello World"
          The function returned by createHelloWorld should always return "Hello World".

        Input: args = [{},null,42]
        Output: "Hello World"
        Explanation:
          const f = createHelloWorld();
          f({}, null, 42); // "Hello World"
          Any arguments could be passed to the function but it should still always return "Hello World".

    - Constraints:
        0 <= args.length <= 10

*/

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */

var chunk = function (arr, size) {
  let len = arr.length;
  let result = [];
  let counter = 0;

  if (len === 0) return result;
  if (size > len) return [arr];

  for (let loop = 0; loop < len / size; loop++) {
    result.push(arr.slice(counter, counter + size));
    counter += size;
  }
  return result;
};
