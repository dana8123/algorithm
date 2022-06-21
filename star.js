const n = 3;
let str = "";

for (let i = 1; i <= n; i++) {
    let star = ''
    for (let j = i; j > 0; j--) {
        star += '*'
    }
    for (let j = n - i; j >= 0; j--) {
        star += '-'
    }
    for (let j = n - i; j >= 0; j--) {
        star += '*'
    }
    console.log(star)
}

for (let i = 1; i <= n; i++) {
    let star = '';

    for (let j = n - i; j >= 0; j--) {
        star += '-'
    }
    for (let j = i; j > 0; j--) {
        star += '*'
    }
    for (let j = i; j > 0; j--) {
        star += '-'
    }
    for (let j = 0; j <= n - i; j++) {
        star += '*'
    }
    console.log(star)
}