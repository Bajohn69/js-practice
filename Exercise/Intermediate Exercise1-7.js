function drawRow(space, star) {
    let result = ''
    for(i = 0; i < space; i++){
        result += ' '
    }
    for(i = 0; i < star; i++){
        result += '*'
    }
    console.log(result);
}

// drawRow(0, 7)
// drawRow(1, 5)
// drawRow(2, 3)
// drawRow(3, 1)

function inversePyramid(n) {
    let i = 0
    let j = 2 * n - 1
    for(let k = 1; k <= n; k++){
        drawRow(i, j)
        i++
        j -= 2
    }
}

inversePyramid(4)
inversePyramid(15)

