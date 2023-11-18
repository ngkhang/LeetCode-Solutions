/*

Problem 21. Merge Two Sorted Lists https://leetcode.com/problems/merge-two-sorted-lists/description/

    - You are given the heads of two sorted linked lists list1 and list2.

    - Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

    - Return the head of the merged linked list.

    - Example:

        Input: list1 = [1,2,4], list2 = [1,3,4]
        Output: [1,1,2,3,4,4]

        Input: list1 = [], list2 = []
        Output: []

        Input: list1 = [], list2 = [0]
        Output: [0]

    - Constraints:

        The number of nodes in both lists is in the range [0, 50].
        -100 <= Node.val <= 100
        Both list1 and list2 are sorted in non-decreasing order.

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
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeTwoLists = function (list1, list2) {
  if (!list1 && !list2) return null;
  if (!list1) return list2;
  if (!list2) return list1;

  let output = new ListNode();
  let current = output;
  while (true) {
    if (list1 === null) {
      current.next = list2;
      break;
    }
    else if (list2 === null) {
      current.next = list1;
      break;
    }

    if (list1.val <= list2.val) {
      current.next = list1;
      current = list1;
      list1 = list1.next;
    }
    else {
      current.next = list2;
      current = list2;
      list2 = list2.next;
    }
  }
  return output = output.next;
};