/*

Problem 1669. Merge In Between Linked Lists

    - You are given two linked lists: list1 and list2 of sizes n and m respectively.

    - Remove list1's nodes from the ath node to the bth node, and put list2 in their place.

    - The blue edges and nodes in the following figure indicate the result:

    - Build the result list and return its head.

    - Example:

        Input: list1 = [0,1,2,3,4,5], a = 3, b = 4, list2 = [1000000,1000001,1000002]
        Output: [0,1,2,1000000,1000001,1000002,5]
        Explanation: We remove the nodes 3 and 4 and put the entire list2 in their place. The blue edges and nodes in the above figure indicate the result.

        Input: list1 = [0,1,2,3,4,5,6], a = 2, b = 5, list2 = [1000000,1000001,1000002,1000003,1000004]
        Output: [0,1,1000000,1000001,1000002,1000003,1000004,6]
        Explanation: The blue edges and nodes in the above figure indicate the result.


    - Constraints:

        3 <= list1.length <= 10^4
        1 <= a <= b < list1.length - 1
        1 <= list2.length <= 10^4

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
  let position = 0;
  let current = list1;
  let startNode, endNode;

  while (true) {
    if (position + 1 === a) startNode = current;
    if (position === b) {
      endNode = current.next;
      break;
    }
    position++;
    current = current.next;
  }

  startNode.next = list2;
  let tail2 = list2;
  while (tail2.next) {
    tail2 = tail2.next;
  }
  tail2.next = endNode;
  return list1;
};