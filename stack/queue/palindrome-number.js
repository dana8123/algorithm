/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    const a = x.toString();
    const words = a.split('')
    const stack = [];
    for(let i = 0; i<words.length; i++) {
        stack.push(words[i]);
    }
    
    for(let i = 0; i < words.length; i++) {
        const word = stack.pop();
        if(words[i] === word) {
            console.log(word)
            continue
        }
    else return false;
    }
    return true;
};