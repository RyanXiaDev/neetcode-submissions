/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let cur1 = list1;
        let cur2 = list2;

        let dummyNode = new ListNode();
        let cur = dummyNode
        while(cur1 !== null && cur2 !== null){
            if (cur1.val <= cur2.val ){
                cur.next = cur1
                cur1 = cur1.next
            }else{
                cur.next = cur2
                cur2 = cur2.next
            }
            cur = cur.next
        }
        // attach the remaining
        cur.next = cur1 ? cur1 : cur2
        return dummyNode.next

    }
}
