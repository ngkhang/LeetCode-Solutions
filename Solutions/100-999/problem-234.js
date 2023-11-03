/*

Problem 234. Palindrome Linked List

    - Given the head of a singly linked list, return true if it is a palindrome  or false otherwise.

    - Example:

        Input: head = [1,2,2,1]
        Output: true


        Input: head = [1,2]
        Output: false

    - Constraints:

        The number of nodes in the list is in the range [1, 105].
        0 <= Node.val <= 9

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
 * @return {boolean}
 */

var isPalindrome = function (head) {
  let node = head;
  let str1 = '';
  let str2 = '';
  while (node !== null) {
    str1 = `${node.val}${str1}`;
    str2 = `${str2}${node.val}`;
    node = node.next;
  }
  return str1 === str2;
};