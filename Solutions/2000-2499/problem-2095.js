/*

Problem 2095. Delete the Middle Node of a Linked List

    - You are given the head of a linked list. Delete the middle node, and return the head of the modified linked list.

    - The middle node of a linked list of size n is the ⌊n / 2⌋th node from the start using 0-based indexing, where ⌊x⌋ denotes the largest integer less than or equal to x.

        - For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.

    - Example

        Input: head = [1,3,4,7,1,2,6]
        Output: [1,3,4,1,2,6]
        Explanation:
            The above figure represents the given linked list. The indices of the nodes are written below.
            Since n = 7, node 3 with value 7 is the middle node, which is marked in red.
            We return the new list after removing this node. 

        Input: head = [1,2,3,4]
        Output: [1,2,4]
        Explanation:
            The above figure represents the given linked list.
            For n = 4, node 2 with value 3 is the middle node, which is marked in red.

        Input: head = [2,1]
        Output: [2]
        Explanation:
            The above figure represents the given linked list.
            For n = 2, node 1 with value 1 is the middle node, which is marked in red.
            Node 0 with value 2 is the only node remaining after removing node 1.

    - Constraints:

        The number of nodes in the list is in the range [1, 10^5].
        1 <= Node.val <= 10^5

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

var deleteMiddle = function (head) {
  // Solution 1
  if (head.next === null) return head.next;

  let size = 0;
  let current = head;
  while (current) {
    size++;
    current = current.next;
  }

  let step = (size % 2 === 0) ? size / 2 : Math.floor(size / 2);

  let node = head;
  while (step - 1 > 0) {
    node = node.next
    step--;
  }
  node.next = node.next.next;
  return head;

  // // Solution 2: Reference from Solution :)
  // if (!head.next) return null;

  // let prevNode = null;
  // let currentNode = head;
  // let nextNode = head;

  // while (nextNode && nextNode.next) {
  //   prevNode = currentNode;
  //   currentNode = currentNode.next;
  //   nextNode = nextNode.next.next;
  // }
  // prevNode.next = currentNode.next;
  // return head;
};