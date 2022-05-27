/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    // 이진탐색 시작
    let l = 0, r = nums.length - 1;

    // 타겟의 인덱스를 찾는다.
    while (l < r) {
        let mid = Math.floor((l + r) / 2);

        // 왼쪽 절반에 값이 있는 경우에 대해 반복적으로 탐색할 것임. 그래서 r이 mid값인거임.
        // r = mid
        // 오른쪽 절반에 타겟이 있는 경우 r = mid + 1
        nums[mid] >= target ? r = mid : l = mid + 1;
    }

    // 첫번째 while 반복문 이후, 작은값의 인덱스가 타겟.
    // 아니라면 타겟이 존재하지 않았다면 [-1, -1] 을 리턴해야한다.
    if (nums[l] !== target) return [-1, -1];

    // 이제 첫번째 타겟의 인덱스값을 확인했고, 이게 l임.
    // start 변수에 해당값을 저장.
    let start = l;

    // 두 지시자에 대해 변경하기 때문에
    // 큰 인덱스를 nums의 끝 인덱스로 리셋해야한다.
    // 마지막 타겟의 인덱스를 찾아야하기 위해
    r = nums.length - 1;

    // 마지막 타겟을 찾기위한 반복문
    while (l < r) {
        let mid = Math.floor((l + r) / 2);

        // nums[mid] <= target 인 경우, 즉, 타겟이 오른쪽에 존재하는 경우
        // l = mid + 1 아니면 r = mid
        nums[mid] <= target ? l = mid + 1 : r = mid;
    }

    // 두번째 while 반복문 이후, l = nums.length - 1 임.
    // 2개의 조건이 존재 : 타겟이 인덱스의 마지막값이거나, 아니거나.
    // 마지막 타겟의 인덱스를 저장한다.
    let end = nums[l] === target ? l : l - 1;

    return [start, end];
};