/*

Problem 1496. Path Crossing

    - Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively. You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.

    - Return true if the path crosses itself at any point, that is, if at any time you are on a location you have previously visited. Return false otherwise.

    - Example

        Input: path = "NES"
        Output: false 
        Explanation: Notice that the path doesn't cross any point more than once.

        Input: path = "NESWW"
        Output: true
        Explanation: Notice that the path visits the origin twice.

    - Constraints:

        1 <= path.length <= 10^4
        path[i] is either 'N', 'S', 'E', or 'W'.

*/

/**
 * @param {string} path
 * @return {boolean}
 */

var isPathCrossing = function (path) {
  const pathMap = new Map([
    ['N', { x: 0, y: 1 }],
    ['S', { x: 0, y: -1 }],
    ['E', { x: 1, y: 0 }],
    ['W', { x: -1, y: 0 }],
  ]);

  const logPosition = new Map([
    ['0,0', 1],
  ])
  let x = 0;
  let y = 0;

  for (let step = 0; step < path.length; step++) {
    const position = pathMap.get(path[step]);
    x += position.x;
    y += position.y;
    const keyStr = `${x},${y}`;

    logPosition.set(keyStr,
      logPosition.has(keyStr)
        ? logPosition.get(keyStr) + 1
        : 1
    );

    if (logPosition.get(keyStr) === 2) return true;

  }
  return false;
};