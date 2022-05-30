/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) return mid;

        // 임의로 회전 된 경우를 포함해, 왼쪽이 정렬된 경우
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            // 임의로 회전된 경우를 포함해, 오른쪽이 정렬된 경우
            if (nums[mid] <= target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;
};


// nums array가 주어지지만,
// 해당 array는 함수에 도달하기 전에 rotate될 수 있음
// rotate 될 수도 있는 함수 내에서 target의 인덱스를 반환하라는 문제.