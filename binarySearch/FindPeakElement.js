/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    let left = 0;
    let right = nums.length - 1;

    // 왼쪽 부분 확인
    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        nums[mid] >= nums[mid + 1] ? right = mid : left = mid + 1
    }

    return left
};