/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {

    const res = [];

    const BT = (nums, res, idx, path) => {
        res.push([...path])

        for (let i = idx; i < nums.length; i++) {
            path.push(nums[i]);
            console.log(path)
            BT(nums, res, i + 1, path);
            path.pop();
        }
    }

    BT(nums, res, 0, []);
    // console.log(res)

    return res;
};

subsets([1, 2, 3])