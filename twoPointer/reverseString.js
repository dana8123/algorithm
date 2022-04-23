// https://leetcode.com/problems/reverse-string/
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    let lo = 0;
    let hi = s.length - 1;
    
    while(lo <= hi) {
        const temp = s[lo];
        s[lo] = s[hi];
        s[hi] = temp;
        lo++;
        hi--;
    }
    return s
};