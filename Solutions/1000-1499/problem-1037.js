/*

Problem 1037. Valid Boomerang

    - Given an array points where points[i] = [xi, yi] represents a point on the X-Y plane, return true if these points are a boomerang.

    - A boomerang is a set of three points that are all distinct and not in a straight line.

    - Example:

      Input: points = [[1,1],[2,3],[3,2]]
      Output: true

      Input: points = [[1,1],[2,2],[3,3]]
      Output: false

    - Constraints:
      points.length == 3
      points[i].length == 2
      0 <= xi, yi <= 100

*/

/**
 * @param {number[][]} points
 * @return {boolean}
 */

var isBoomerang = function(points) {
	const [A,B,C] = points;
	return A[0] * (B[1] - C[1]) + B[0] * (C[1] - A[1]) + C[0] * (A[1] - B[1]) !== 0? true: false
};