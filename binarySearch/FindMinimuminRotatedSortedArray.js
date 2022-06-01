/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        // 중간값이 맨 오른쪽 값보다 크다면, 로테이션된 것. 오른쪽 부분의 array만 확인해보자.
        if (nums[mid] > nums[right]) left = mid + 1;
        else {
            right = mid;
        }
    }

    return nums[left];
};


// rotation이 되면, 작은값은 무조건 자꾸 오른쪽으로 이동함.
// rotation 되지 않은 경우, 무조건 nums[mid] < nums[right]
// 하지만 로테이션이 된 경우,  그 중 작은 원소가 오른쪽 배열에 존재하는 경우에만 nums[mid] > nums[right]이 발생한다.
// 따라서 nums[mid] > nums[right] 인 경우, 오른쪽 배열만 탐색한다.
// nums[mid] <= nums[right] 인 경우, 오른쪽 배열은 오름차순인 상태임.
// 따라서 왼쪽 배열로 범위를 제한한다.

