class Solution:
    def isPalindrome(self, x: int) -> bool:
      stringx = str(x)
      empty = ''
      for i in range( len(stringx) ):
        empty = empty + stringx[len(stringx) - 1 - i]

      if empty == stringx:
        return True
      return False