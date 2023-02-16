/*
You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807

Example 2:
Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
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
var addTwoNumbers = function(l1, l2) {

    let carryOver = 0;    

    let result = new ListNode();
    let currentResultNode = result;
    while (l1 || l2) {
        let digitSum;
        if (l2 && l1) {
            digitSum = l1.val + l2.val;
        } else {
            digitSum = l1 !== null ? l1.val : l2.val;
        }
        if (digitSum >= 10) {
            carryOver = 1;
            digitSum -= 10;
        } else {
            carryOver = 0;
        }

        if (digitSum + currentResultNode.val >= 10) {
            carryOver = 1;
            digitSum -= 10;
        }
        currentResultNode.val += digitSum;
        if ((l1 && l1.next) || (l2 && l2.next) || carryOver === 1) {
            currentResultNode.next = new ListNode(carryOver);
        }
        currentResultNode = currentResultNode.next;

        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }

    return result;

};