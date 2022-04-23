// https://leetcode.com/submissions/detail/686002869/
/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    let words = s.split(' ');
    let newWords = ''
   
   
    for(let i = 0; i < words.length; i++) {
        const word = words[i];
        
        const alphabet = word.split('')
         let lo = 0;
        let hi = alphabet.length - 1;
        while(lo <= hi) {
            const temp = alphabet[lo];
            alphabet[lo] = alphabet[hi];
            alphabet[hi] = temp;
            
            
            lo++;
            hi--;
        }
        newWords = newWords + alphabet.join('') + ' ';
    }
    return newWords.slice(0,-1)

};