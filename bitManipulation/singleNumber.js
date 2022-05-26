function singleNumber(nums) {
    return nums.reduce((prev, curr) => prev ^ curr);
}


// ^ xor 연산은 중복되는 값을 제거하는데 유용하게 사용된다.
// 연산 순서는 상관없다.