/*

Problem 2. Add Two Numbers

    - You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

    - You may assume the two numbers do not contain any leading zero, except the number 0 itself.

    - Example

        Input: l1 = [2,4,3], l2 = [5,6,4]
        Output: [7,0,8]
        Explanation: 342 + 465 = 807.

        Input: l1 = [0], l2 = [0]
        Output: [0]

        Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
        Output: [8,9,9,9,0,0,0,1]

    - Constraints:

        The number of nodes in each linked list is in the range [1, 100].
        0 <= Node.val <= 9
        It is guaranteed that the list represents a number that does not have leading zeros.

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
  if (!l1 && !l2) return null;

  function convertListToBigInt(listNode) {
    let strNumber = '';
    while (listNode) {
      strNumber = listNode.val + strNumber;
      listNode = listNode.next;
    };
    return BigInt(strNumber);
  }

  let bigIntSum = convertListToBigInt(l1) + convertListToBigInt(l2);
  let sum = bigIntSum.toString();

  const SIZE = sum.length;
  const head = new ListNode((sum[SIZE - 1]) * 1);
  let current = head;
  for (let i = SIZE - 2; i >= 0; i--) {
    let newNode = new ListNode(sum[i]);
    current.next = newNode;
    current = current.next;
  };
  return head;
};