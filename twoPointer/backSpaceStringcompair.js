/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    return edit(s) === edit(t)
}



const edit = function (str) {

    let result = '';
    let backSpace = 0;

    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] === '#') {
            backSpace = backSpace + 1;
        } else if (backSpace > 0) {
            backSpace = backSpace - 1;
        } else {
            result = str[i] + result;
        }
    }
    return result;
}
