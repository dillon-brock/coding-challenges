public class Solution {
  public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
    
    ListNode currentA = headA;

    while (currentA != null) {
      ListNode currentB = headB;
      while (currentB != null) {
        if (currentA == currentB) return currentA;
        currentB = currentB.next;
      }
      currentA = currentA.next;
    }
    return currentA;
  }
}