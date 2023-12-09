/*

Prolem 2807. Insert Greatest Common Divisors in Linked List

    - Given the head of a linked list head, in which each node contains an integer value.

    - Between every pair of adjacent nodes, insert a new node with a value equal to the greatest common divisor of them.

    - Return the linked list after insertion.

    - The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

    - Example:

        Input: head = [18,6,10,3]
        Output: [18,6,6,2,10,1,3]
        Explanation: The 1st diagram denotes the initial linked list and the 2nd diagram denotes the linked list after inserting the new nodes (nodes in blue are the inserted nodes).
            - We insert the greatest common divisor of 18 and 6 = 6 between the 1st and the 2nd nodes.
            - We insert the greatest common divisor of 6 and 10 = 2 between the 2nd and the 3rd nodes.
            - We insert the greatest common divisor of 10 and 3 = 1 between the 3rd and the 4th nodes.
            There are no more adjacent nodes, so we return the linked list.


        Input: head = [7]
        Output: [7]
        Explanation: The 1st diagram denotes the initial linked list and the 2nd diagram denotes the linked list after inserting the new nodes.
            There are no pairs of adjacent nodes, so we return the initial linked list.

    - Constraints:

        The number of nodes in the list is in the range [1, 5000].
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
 * @return {ListNode}
 */

var insertGreatestCommonDivisors = function (head) {
  // Euclid Algorithm
  const gcd = (a, b) => (b === 0) ? a : gcd(b, a % b);

  if (!head.next) return head;

  let current = head;
  let nextNode = current.next;
  while (nextNode) {
    const GCD = gcd(current.val, nextNode.val);
    const newNode = new ListNode(GCD, nextNode);
    current.next = newNode;
    current = nextNode;
    nextNode = nextNode.next;
  }
  return head;
};