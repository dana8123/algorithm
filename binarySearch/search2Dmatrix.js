/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    console.log(matrix.length)

    for (let i = 0; i < matrix.length; i++) {

        let left = 0
        let right = matrix[i].length - 1

        if (target < left && target > right) continue;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (matrix[i][mid] === target) return true;

            else if (target <= matrix[i][mid]) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
    }

    return false;
};

// searchMatrix([[1, 3]], 3)