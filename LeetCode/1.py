class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
      for i in range(len(nums)):
        for j in range(i):
          if nums[i] + nums[j] == target:
            return[i, j]