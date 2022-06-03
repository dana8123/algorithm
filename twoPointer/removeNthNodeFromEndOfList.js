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
var deleteDuplicates = function (head) {

    let curr = head;
    let prev = null;

    while (curr && curr.next) {

        if (curr.val === curr.next.val) {
            while (curr && curr.next && curr.val === curr.next.val) {
                curr = curr.next;
            }

            curr = curr.next;

            if (!prev) {
                head = curr;
            } else {
                prev.next = curr;
            }
        } else {
            prev = curr;
            curr = curr.next;
        }


    }
    return head
};