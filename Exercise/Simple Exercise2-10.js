function findNthMin(arr, n) {
    for(let i = 0; i < arr.length; i++){ // 第一層先找要比的數字
        let counter = 0 // counter 是算有幾個人比他小
        for(let j = 0; j < arr.length; j++){ // 第二層先找被比的數字
            if(arr[j] < arr[i]){
                counter ++
            }

        }
        if(counter == n - 1){ // 第 3 小的就是有 2 個比他小，所以是 n - 1
            return arr[i]
        }
    } 

}

console.log(findNthMin([1, 2, 3, 4, 5], 1));
console.log(findNthMin([1, 3, 5, 7, 9], 3));
console.log(findNthMin([1, -6, -3, 2, 4], 3));