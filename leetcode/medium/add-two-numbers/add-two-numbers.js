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

// const equalizeLists = (l1, l2) => {
//     while (l1.next !== null || l2.next !== null) {
//         if (l1.next == null) l1.next = new ListNode();
//         if (l2.next == null) l2.next = new ListNode();
//         l1 = l1.next;
//         l2 = l2.next;
//     }
// }

const addTwoNumbers = function(l1, l2) {
    // fill in shorter list with more nodes so both lists are the same length
    // this increases time complexity but absolutely improves readibility of code
    // equalizeLists(l1, l2);
    
    let result = new ListNode();
    let currentResultNode = result;

    while (l1) {
        let carryOver = 0;    
        let digitSum = l1.val + l2.val;
        if (digitSum >= 10 || digitSum + currentResultNode.val >= 10) {
            carryOver = 1;
            digitSum -= 10;
        } else {
            carryOver = 0;
        }
        currentResultNode.val += digitSum;
        // add new node to result if there are remaining nodes in the input 
        // or a remaining carryOver value
        if (l1.next || carryOver)
            currentResultNode.next = new ListNode(carryOver);
        currentResultNode = currentResultNode.next;

        if (l1.next || l2.next) {
            l1 = l1.next || new ListNode();
            l2 = l2.next || new ListNode();
            continue;
        }
        l1 = l1.next;
        l2 = l2.next;
    }

    return result;

};