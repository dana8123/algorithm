/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    let begin = 0;
    let end = 0;
    
    const charSet = new Set();
    
    while(end < s.length -1) {
        if(charSet.has(s[end])) {
            charSet.delete(s[begin]);
            begin++;
        }
        charSet.add(s[end])
        maxLength = Math.max(maxLength, end - begin + 1);
        end++;
    }
    return maxLength;
        
};