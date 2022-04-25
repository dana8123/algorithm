/** https://leetcode.com/problems/remove-nth-node-from-end-of-list/submissions/
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
    
    
    if(!head) return

    let begin = {val:-1, next:head};
    let [slow, fast] = [begin, begin]

    while(n--) {
        fast = fast.next;
    }
    while(fast.next) {
        [slow,fast] = [slow.next, fast.next]
    }
    
    slow.next = slow.next.next
    return begin.next
};