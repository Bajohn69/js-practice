// function fib(n) {
//     let result = 0
//     if (n == 0){
//         return 0
//     }else if(n == 1){
//         return 1
//     }else{
//         // 老師寫ㄉ
//         return fib(n - 1) + (n - 2)
        


//         // 我寫ㄉ
//         // let n1 = 1
//         // let n2 = 0
//         // for(let i = 1; i <= n; i++){
//         //     result = n1 + n2
            
//         //     n1 = n2
//         //     n2 = result

//         // }
//         // return result
//     }

// }

// for (let i = 0; i < 10; i++){
//     console.log(fib(i));
// }

// 老師的更好一點的作法
function fib(n) {
    let arr = [0, 1]
    let i = 0
    while(arr.length <= n){
        arr.push(arr[i] + arr[i + 1])
        i++
    }
    console.log(arr);
    console.log(arr[n]);
}

// console.log(fib(0));
// console.log(fib(1));
// console.log(fib(2));
// console.log(fib(3));
// console.log(fib(4));
// console.log(fib(5));
// console.log(fib(6));
// console.log(fib(7));
// console.log(fib(8));
// console.log(fib(8));

fib(0);
fib(1);
fib(2);
fib(3);
fib(8);