/*

Problem 1572. Matrix Diagonal Sum
    - Given a square matrix mat, return the sum of the matrix diagonals.

    - Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

    - Example: Image Description: https://assets.leetcode.com/uploads/2020/08/14/sample_1911.png

        Input: mat =    [[1,2,3],
                        [4,5,6],
                        [7,8,9]]
        Output: 25
        Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
        Notice that element mat[1][1] = 5 is counted only once.

        Input: mat =    [[1,1,1,1],
                        [1,1,1,1],
                        [1,1,1,1],
                        [1,1,1,1]]
        Output: 8

        Input: mat = [[5]]
        Output: 5

    - Constraints:
        n == mat.length == mat[i].length
        1 <= n <= 100
        1 <= mat[i][j] <= 100

*/

/**
 * @param {number[][]} mat
 * @return {number}
 */

var diagonalSum = function (mat) {
  let result = 0;
  let size = mat.length;
  for (let idx = 0; idx < size; idx++) {
    result += mat[idx][idx];
    if (idx !== size - 1 - idx) result += mat[idx][size - 1 - idx];
  }
  return result;
};
