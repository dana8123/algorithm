/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    if (n > 0) {
        if ((n & n - 1) === 0) return true;
        else return false
    }
    return false;
};