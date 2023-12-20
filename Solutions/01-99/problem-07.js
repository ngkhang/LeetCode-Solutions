/*

Problem 7. Reverse Integer

    - Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.

    - Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

    - Example:

        Input: x = 123
        Output: 321

        Input: x = -123
        Output: -321

        Input: x = 120
        Output: 21

    - Constraints:

        -2^31 <= x <= 2^31 - 1

*/

/**
 * @param {number} x
 * @return {number}
 */

var reverse = function (x) {
  let sign = x < 0;
  let strX = x + '';
  let index = strX.search(/[1-9]{0}[0]+$/g)
  if (index !== -1) strX = strX.slice(0, index);
  let strConvert = '';
  for (let i = strX.length - 1; i >= (sign ? 1 : 0); i--) {
    strConvert += strX[i];
  };

  let output = (sign) ? 0 - +strConvert : +strConvert;

  return (output > (2 ** 31 - 1) || -(2 ** 31) > output) ? 0 : output;
};