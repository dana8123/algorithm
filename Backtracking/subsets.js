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
            BT(nums, res, i + 1, path);
            path.pop();
        }
    }

    BT(nums, res, 0, []);

    return res;
};

subsets([1, 2, 3])

// 재귀함수의 흐름
// 재귀의 종료 조건 : 주어진 nums의 길이가 끝날 때 까지, 즉 더이상 뻗어나갈 노드가 없는 때 까지

// path = [a] path = [a, b] path = [a, b, c] 순으로 새로운 스페이스를 만든다.
// res = [a], [a,b], [a, b, c]가 추가되고
// 이 때 더이상 내려갈 노드가 없다면, 해당 노드는 재귀할 필요가 없어져 pop으로 삭제.
// path = [a, b]
// 재귀가 끝나면 반복문을 시작..
// idx = nums.length가 되므로, path.pop()
// path = [a] 만 남고, 반복문을 진행한다, 이 때 idx의 갑은 1
// BT(nums, res, 2 , path)를 진행하면 path = [a, c]가 되고 더이상 내려갈 노드가 없으므로 pop하면서 재귀가 종료
// res = [ [], [a] , [a, b], [a, b, c] , [a, c]...] 이런식으로 진행..