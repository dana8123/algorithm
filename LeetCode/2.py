from typing import Optional

# Definition for singly-linked list.


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        result = ListNode()
        curr = result
        carry = 0

        while l1 or l2 or carry:
            curr.next = ListNode()
            curr = curr.next
            num1 = num2 = 0

            if l1:
                num1 = l1.val
                l1 = l1.next
            if l2:
                num2 = l2.val
                l2 = l2.next

            curr.val = (num1 + num2 + carry) % 10
            carry = (num1 + num2 + carry) // 10

        return result.next
