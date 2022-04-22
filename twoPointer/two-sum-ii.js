//https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/submissions/
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
    let s = 0;
    let e = numbers.length - 1;
    
    while(s <= numbers.length) {
        let sum = numbers[s] + numbers[e]
        if(sum > target) e--
        if(sum < target) s++;
        if(sum === target) return [s+1,e+1];
    }
};