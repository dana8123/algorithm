class Solution:
    def longestCommonPrefix(self, strs: list[str]) -> str:
      answer = ""
      strs.sort()
      for i in range(len(strs[0])):
        curr = strs[0][i]
        if self.includesChar(strs, curr, i):
          answer = answer + curr
        else:
          break
        
      return answer
        
        
    def includesChar(self, strs, curr, i):
      for x in strs[1:]:
        if x[i] == curr:
          continue
        else:
          return False
      
      return True
        
        