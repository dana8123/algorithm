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
var deleteDuplicates = function (head) {
    let begin = { val: -1, next: head };
    let [slow, fast] = [begin, begin]
    while (fast && fast.next) {
        console.log(slow, fast)
        fast = fast.next;
        if (slow.val === fast.val) {
            slow = fast.next.next;
            fast = fast.next;
        }
        slow = slow.next;
    }
    return begin.next;
};

deleteDuplicates([1, 1, 1, 2, 3])