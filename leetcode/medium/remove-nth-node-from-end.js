/*
https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/

Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example 1:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:
Input: head = [1], n = 1
Output: []

Example 3:
Input: head = [1,2], n = 1
Output: [1]
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
var removeNthFromEnd = function(head, n) {
  let listLength = 0;
  let currentNode = head;
  while (currentNode) {
      listLength++;
      currentNode = currentNode.next;
  }

  if (n == listLength) return head.next;

  currentNode = head;
  let counter = listLength;
  while (counter > n + 1) {
      currentNode = currentNode.next;
      counter--;
  }
  if (currentNode.next) currentNode.next = currentNode.next.next;
  return head;
};