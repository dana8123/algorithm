var reverseBits = function (n) {
    var result = 0;
    var count = 32;

    while (count--) {
        result *= 2;
        result += n & 1;
        n = n >> 1;
    }
    return result;
};

// 1과 & 연산을 진행하면서 n의 가장 오른쪽 값이 1인지 아닌지 판별 후 결과를 result에 저장
// result는 계속해서 << 연산을 진행한다.
