/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = function (n, k) {
    const ans = [];

    const BT = (n, k, stack, idx, ans) => {

        if (stack.length === k) {
            ans.push([...stack]);
            return;
        }
        for (let i = idx; i < n + 1; i++) {
            stack.push(i);
            BT(n, k, stack, i + 1, ans)
            stack.pop();
        }
    }

    BT(n, k, [], 1, ans);

    return ans;
};
