/*

Problem 328. Odd Even Linked List

    - Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

    - The first node is considered odd, and the second node is even, and so on.

    - Note that the relative order inside both the even and odd groups should remain as it was in the input.

    - You must solve the problem in O(1) extra space complexity and O(n) time complexity.

    - Example:

        Input: head = [1,2,3,4,5]
        Output: [1,3,5,2,4]

        Input: head = [2,1,3,5,6,4,7]
        Output: [2,3,6,7,1,5,4]

    - Constraints:

        The number of nodes in the linked list is in the range [0, 10^4].
        -10^6 <= Node.val <= 10^6

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

var oddEvenList = function (head) {
  if (!head) return head;

  let current = head;
  let first = new ListNode();
  let second = new ListNode();
  let oddPointer = first;
  let evenPointer = second;
  let step = 1;

  while (current) {
    const node = new ListNode(current.val);
    switch (step % 2) {
      case 0:
        evenPointer.next = node;
        evenPointer = node;
        break;
      default:
        oddPointer.next = node;
        oddPointer = node;
    }
    step++;
    current = current.next;
  }
  second = second.next;
  oddPointer.next = second;

  return first.next;
};