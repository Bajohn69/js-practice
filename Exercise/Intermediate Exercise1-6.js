// 我的墳墓
// function pyramid(n) {
//     // for(let j = n - 1; j > 0; j--){
//     //     let space = '-'
//     //     for(let k = 0; k < j; k++)
//     //     space += '-'
//     //     console.log(space);
        
//     // }

//     let py = 2*n - 1
//     for(let i = 1; i < py; i+= 2){
//         let star = ''
//         for(let p = 0; p < i; p++){
//             star += '*'
//             console.log(star);
//         }


//     }
    
// }

function drawRow(space, star) {
    let result = ''
    for(let i = 0; i < space; i++){
        result += ' '
    }
    for(let j = 0; j < star; j++){
        result += '*'
    }

    console.log(result);
}

// drawRow(3, 1)
// drawRow(2, 3)
// drawRow(1, 5)
// drawRow(0, 7)

function pyramid(n) {
    let i = n - 1 // 起始的空格
    let j = 1     // 起始的星星
    for(let k = 1; k <= n; k++){
        drawRow(i, j)
        i--
        j += 2
    }
    
}

/**
 * 1.先把每行的空格跟星星寫在 drawRow function，找出規律
 * 2.再寫一個 function 把 i 跟 j 填入
 */

pyramid(1);
console.log('----------');
pyramid(4);
console.log('----------');
pyramid(15);
