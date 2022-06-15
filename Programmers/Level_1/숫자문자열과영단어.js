function solution(s) {
    let answer = ''
    const table = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
    }
    const words = s.split('');
    let temp = '';
    for (let i = 0; i < words.length; i++) {
        if (table.hasOwnProperty(words[i])) {
            answer = answer + (words[i]);
        } else {
            temp = temp + words[i]
            console.log(temp)
        }
        console.log(Object.values(table).includes(temp))
        if (Object.values(table).includes(temp)) {
            answer = answer + Object.values(table).indexOf(temp)
            temp = ''
        }
    }
    return Number(answer);
}