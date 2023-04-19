/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    private void equalizeLists(ListNode l1, ListNode l2) {
        while (l1.next != null || l2.next != null) {
            if (l1.next == null) l1.next = new ListNode();
            if (l2.next == null) l2.next = new ListNode();
            l1 = l1.next;
            l2 = l2.next;
        }
    }
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        if (l1 == null && l2 == null) return null;
        equalizeLists(l1, l2);
        
        ListNode result = new ListNode();
        ListNode currentResultNode = result;
        int carryOver = 0;

        while (l1 != null) {
            int digitSum = l1.val + l2.val;
            if (digitSum >= 10) {
                carryOver = 1;
                digitSum -= 10;
            }
            else {
                carryOver = 0;
            }

            currentResultNode.val = digitSum;
            if (l1.next != null || carryOver > 0) currentResultNode.next = new ListNode(carryOver);
            l1 = l1.next;
            l2 = l2.next;
            currentResultNode = currentResultNode.next;
        }

        return result;
    }
}