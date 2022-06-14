function solution(n, lost, reserve) {
    let students = {};
    let answer = 0;

    for (let i = 1; i <= n; i++) {
        students[i] = 1;
    }

    lost.forEach(n => {
        students[n] -= 1;
    });


    reserve.forEach(n => {
        students[n] += 1;
    })

    for (let i = 0; i <= n; i++) {
        if (students[i] === 2 && students[i - 1] === 0) {
            students[i]--;
            students[i - 1]++
        } else if (students[i] === 2 && students[i + 1] === 0) {
            students[i]--;
            students[i + 1]++;
        } else {
            continue
        }
    }

    for (let key in students) {
        if (students[key] >= 1) {
            answer++;
        }
    }
    return answer;
}