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
var reverseList = function (head) {
    if (!head || !head.next) return head;

    const ans = reverseList(head.next);
    head.next.next = head;
    head.next = null;

    return ans;
};

// 더이상 다음 노드가 없거나, value가 존재하지 않을 때 까지 다음 노드로 재귀적으로 이동
// 마지막 노드에 도달함
// head.next.next 가 나를 가르킴. 나의 next의 next가 나를 가르키니까
// 순서가 바뀜. 1 > 2 > 3 이었는데 3이 1을 가르키면 2 > 3 > 1 이렇게 되겠지..
// head.next = null 을 하는 이유는 .. head가 이제 원래 가르키던 2를 이제 가르킬 필요가 없으니끼ㅏ...
// 이걸 그냥 재귀적으로 하는거임... ..재귀저암ㄹ 누가만들었어..?