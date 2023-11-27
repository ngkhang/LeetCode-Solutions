/*

Problem 148. Sort List

    - Given the head of a linked list, return the list after sorting it in ascending order.

    - Example:

        Input: head = [4,2,1,3]
        Output: [1,2,3,4]

        Input: head = [-1,5,3,4,0]
        Output: [-1,0,3,4,5]

        Input: head = []
        Output: []

    - Constraints:

        The number of nodes in the list is in the range [0, 5 * 10^4].
        -105 <= Node.val <= 10^5


    - Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?

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

var sortList = function (head) {
  const output = new ListNode();
  let current = head;
  let arr = [];
  let pointer = output;

  // Get all number into Linked List
  while (current) {
    arr.push(current.val);
    current = current.next;
  }

  // Sorted
  const sorted = arr.sort((a, b) => a - b);

  // Fill in new Linked List
  sorted.forEach((num) => {
    const newNode = new ListNode(num);
    pointer.next = newNode;
    pointer = newNode;
  });

  return output.next;
};