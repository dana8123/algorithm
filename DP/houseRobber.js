/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {

    if (nums.length === 1) return nums[0];

    let twoBefore = nums[0];
    let oneBefore = Math.max(nums[0], nums[1]);

    for (let i = 2; i < nums.length; i++) {
        const current = Math.max(nums[i] + twoBefore, oneBefore);

        twoBefore = oneBefore;
        oneBefore = current;


    }
    return oneBefore;
};