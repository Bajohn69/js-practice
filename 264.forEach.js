/**
 * forEach function
 * 1.放在 function 裡
 * 2.對 array 裡面的每一個 item 都執行一次
 * 
 * 跟 for loop 一樣只是可閱讀性比較高
 * forEach(currentValue(n), index, arr)
 * forEach 的參數叫 'CallBack' function 
 */

let luckyNumbers = [7, 15, 23, 66, 91, 10, 13]

luckyNumbers.forEach( (n, index, arr) => { // 跟箭頭函式組合 只有一個參數時 (n) 可不加括號
    if(n > 20){
        console.log(n, index);
    }
})



// luckyNumbers.forEach(checkNum) // 放入的函式不用加()

// function checkNum(n) {
//     if(n > 20){
//         console.log(n);
//     }
// }

// luckyNumbers.forEach(function(n) { // 可以用匿名函式
//     if(n > 20){
//         console.log(n);
//     }
// })

// luckyNumbers.forEach(function checkNrm(n) {
//     if(n > 20){
//         console.log(n);
//     }
// })

// 上面等於下面

// for(let i = 0; i < luckyNumbers.length; i++){
//     if(luckyNumbers[i] > 20){
//         console.log(luckyNumbers[i]);
//     }
// }