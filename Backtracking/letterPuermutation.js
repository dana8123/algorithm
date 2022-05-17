/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
    const ans = [];
    const stack = [];
    const char = /[a-zA-Z]/;

    const BT = (i) => {

        if (i === s.length) {
            ans.push(stack.join(''));

            return;
        };

        if (char.test(s[i])) {

            stack[i] = s[i].toLowerCase();
            BT(i + 1);

            stack[i] = s[i].toUpperCase();
            BT(i + 1);

        } else {
            stack[i] = s[i];
            BT(i + 1)
        }



    }

    BT(0);

    return ans;
};