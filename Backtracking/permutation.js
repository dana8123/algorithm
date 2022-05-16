/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const ans = [];
    const used = Array(nums.length).fill(false);

    const BT = (ans, stack, nums, used) => {

        if (stack.length === nums.length) {
            ans.push([...stack])
            return;
        }

        for (let i = 0; i < nums.length; i++) {

            if (used[i]) continue;
            stack.push(nums[i]);
            used[i] = true;
            BT(ans, stack, nums, used);
            stack.pop();
            used[i] = false;
        }
    }
    BT(ans, [], nums, used);

    return ans;
};