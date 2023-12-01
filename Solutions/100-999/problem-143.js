/*

Problem 143. Reorder List

    - You are given the head of a singly linked-list. The list can be represented as:

        - L0 → L1 → … → Ln - 1 → Ln

    - Reorder the list to be on the following form:

        - L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
    
    - You may not modify the values in the list's nodes. Only nodes themselves may be changed.

    - Example:

        Input: head = [1,2,3,4]
        Output: [1,4,2,3]

        Input: head = [1,2,3,4,5]
        Output: [1,5,2,4,3]

    - Constraints:

        The number of nodes in the list is in the range [1, 5 * 10^4].
        1 <= Node.val <= 1000

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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (!head.next) return;

  function reverseListNode(List) {
    let countNode = 0;
    let reverseHead = null;
    let reversePointer = null;
    let current = List;
    while (current) {
      const newNode = new ListNode(current.val);
      reversePointer = newNode;
      reversePointer.next = reverseHead;
      reverseHead = reversePointer;
      current = current.next;
      countNode++;
    };
    return [reverseHead, countNode];
  };

  const [reverseList, countNode] = reverseListNode(head);

  let loop = Math.trunc(countNode / 2);
  let isEven = countNode % 2 === 0;
  let curr = head;
  let rCurr = reverseList;

  let nextCurr = curr.next;
  let nextRCurr = rCurr.next;

  while (loop > 1) {
    curr.next = rCurr;
    rCurr.next = nextCurr;
    curr = nextCurr;
    rCurr = nextRCurr;
    nextCurr = nextCurr.next;
    nextRCurr = nextRCurr.next;
    loop--;
  }

  curr.next = rCurr;
  if (!isEven) rCurr = rCurr.next;
  rCurr.next = null;
};