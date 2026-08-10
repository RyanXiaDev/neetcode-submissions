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
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        // greedy revert the link
        let cur = head;
        let prev = null;
        while(cur !== null){
            let nextNode = cur.next
            cur.next = prev
            prev = cur
            cur = nextNode

        }
        return prev
    }
}
