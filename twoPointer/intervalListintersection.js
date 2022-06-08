/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (firstList, secondList) {
    let i = 0;
    let j = 0;
    const ans = [];

    while (i < firstList.length && j < secondList.length) {

        const middle1 = Math.max(firstList[i][0], secondList[j][0]);
        const middle2 = Math.min(firstList[i][1], secondList[j][1]);

        if (middle1 <= middle2) {
            ans.push([middle1, middle2]);
        }
        if (firstList[i][1] === middle2) {
            i++
        } else {
            j++
        }
    }

    return ans;

};

// 교차점은 큰값끼리 비교했을 때 작은값, 작은값끼리 비교했을 때 큰 값이 된다.
// firstList의 큰 값이 middle2값과 같은 경우, secondList의 큰 값이 가장 큰 값인 경우
// firstList의 i번째 인덱스는 더이상 교차점을 찾을 필요가 없으므로 i+1번째 인덱스를 확인한다.
// 이외의 경우, secondList의 다음 인덱스와 교차점이 있는지 비교한다.