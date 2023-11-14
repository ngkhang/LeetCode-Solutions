/*

Problem 876. Middle of the Linked List

    - Given the head of a singly linked list, return the middle node of the linked list.

    - If there are two middle nodes, return the second middle node.

    - Example

        Input: head = [1,2,3,4,5]
        Output: [3,4,5]
        Explanation: The middle node of the list is node 3.


        Input: head = [1,2,3,4,5,6]
        Output: [4,5,6]
        Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

    - Constraints:

        The number of nodes in the list is in the range [1, 100].
        1 <= Node.val <= 100

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var middleNode = function (head) {
  // // Solution 1:
  // // Loop 1: Counter elements
  // let count = 0;
  // let current = head;
  // while (current) {
  //     current = current.next;
  //     count++;
  // }
  // // Loop 2: Get linked lists
  // let step = Math.floor(count / 2);
  // let middleNode = head;
  // while (step > 0) {
  //     middleNode = middleNode.next;
  //     step--;
  // }
  // return middleNode;

  // Solution 2:
  let pointerOneStep = head;
  let pointerTwoStep = head;

  while (pointerTwoStep && pointerTwoStep.next) {
    pointerOneStep = pointerOneStep.next;
    pointerTwoStep = pointerTwoStep.next.next;
  }
  return pointerOneStep;
};