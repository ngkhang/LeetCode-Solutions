/*

Problem 1582. Special Positions in a Binary Matrix

    - Given an m x n binary matrix mat, return the number of special positions in mat.

    - A position (i, j) is called special if mat[i][j] == 1 and all other elements in row i and column j are 0 (rows and columns are 0-indexed).

    - Example:

        Input: mat = [[1,0,0],[0,0,1],[1,0,0]]
        Output: 1
        Explanation: (1, 2) is a special position because mat[1][2] == 1 and all other elements in row 1 and column 2 are 0.

        Input: mat = [[1,0,0],[0,1,0],[0,0,1]]
        Output: 3
        Explanation: (0, 0), (1, 1) and (2, 2) are special positions.

    - Constraints:

        m == mat.length
        n == mat[i].length
        1 <= m, n <= 100
        mat[i][j] is either 0 or 1.

*/

/**
 * @param {number[][]} mat
 * @return {number}
 */

var numSpecial = function (mat) {
  function getMapCount(arrays) {
    arrays
    let map = new Map();
    arrays.forEach((num) => {
      if (map.has(num)) map.set(num, map.get(num) + 1);
      else map.set(num, 1);
    });
    return map;
  }
  let count = 0;
  const ROW = mat.length;
  const COL = mat[0].length;

  // Get All Col
  const allCol = [];
  for (let iCol = 0; iCol < COL; iCol++) {
    const col = [];
    for (let iRow = 0; iRow < ROW; iRow++) {
      col.push(mat[iRow][iCol]);
    }
    allCol.push(col);
  };

  for (let iRow = 0; iRow < ROW; iRow++) {
    for (let iCol = 0; iCol < COL; iCol++) {
      const element = mat[iRow][iCol]
      if (element === 0) continue;
      const unique = getMapCount([...mat[iRow], ...allCol[iCol]])
      if (unique.get(1) === 2) count++;
    }
  }
  return count;
};
