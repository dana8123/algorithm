/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {

    if (n === 1) return 1;
    if (n === 2) return 2;
    dpArray = [0, 1, 2];

    for (let i = 3; i < n + 1; i++) {
        const num = dpArray[i - 1] + dpArray[i - 2];
        dpArray.push(num);
    }
    return dpArray[n];

};