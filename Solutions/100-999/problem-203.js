/*

Problem 203. Remove Linked List Elements

    - Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

    - Example:

        Input: head = [1,2,6,3,4,5,6], val = 6
        Output: [1,2,3,4,5]

        Input: head = [], val = 1
        Output: []

        Input: head = [7,7,7,7], val = 7
        Output: []

    - Constraints:

        The number of nodes in the list is in the range [0, 10^4].
        1 <= Node.val <= 50
        0 <= val <= 50

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
 * @param {number} val
 * @return {ListNode}
 */

var removeElements = function (head, val) {
  if (!head) return head;
  while (head) {
    if (head.val !== val) break;
    head = head.next;
  }
  let current = head;
  while (current && current.next) {
    current.next.val === val
      ? current.next = current.next.next
      : current = current.next;
  }

  return head;
};