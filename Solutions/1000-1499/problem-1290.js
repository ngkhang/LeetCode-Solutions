/*

Problem 1290. Convert Binary Number in a Linked List to Integer

    - Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

    - Return the decimal value of the number in the linked list.

    - The most significant bit is at the head of the linked list.

    - Example

        Input: head = [1,0,1]
        Output: 5
        Explanation: (101) in base 2 = (5) in base 10

        Input: head = [0]
        Output: 0

    - Constraints:

        The Linked List is not empty.
        Number of nodes will not exceed 30.
        Each node's value is either 0 or 1.
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
 * @return {number}
 */

var getDecimalValue = function (head) {
  let str = '';
  let current = head;
  while (current) {
    str += current.val;
    current = current.next;
  }

  return Number.parseInt(str, 2)
};