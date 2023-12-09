/*

Problem 19. Remove Nth Node From End of List

    - Given the head of a linked list, remove the nth node from the end of the list and return its head.

    - Example

        Input: head = [1,2,3,4,5], n = 2
        Output: [1,2,3,5]

        Input: head = [1], n = 1
        Output: []

        Input: head = [1,2], n = 1
        Output: [1]

    - Constraints:

        The number of nodes in the list is sz.
        1 <= sz <= 30
        0 <= Node.val <= 100
        1 <= n <= sz

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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  function getSizeNode(listNode) {
    let size = 0;
    let current = listNode;

    while (current) {
      size++;
      current = current.next;
    }
    return size;
  };

  let lenNode = getSizeNode(head);

  if (lenNode === 1 && n === 1) return null;
  if (lenNode === n) return head.next;

  let step = 1;
  let current = head;
  while (step < lenNode - n) {
    current = current.next;
    step++;
  };
  let removedNode = current.next;
  current.next = removedNode.next;
  return head;
};