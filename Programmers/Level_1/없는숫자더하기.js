
function solution(numbers) {
    let answer = 45;
    let sorted = numbers.sort((a, b) => a - b)
    for (let i = 0; i < numbers.length; i++) {
        answer = answer - numbers[i]
    }

    return answer;
}
