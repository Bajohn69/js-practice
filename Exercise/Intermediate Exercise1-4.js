function findDuplicate(arr) {
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(i != j && arr[i] == arr[j]){ // i != j 代表不是同一項
                // console.log(true);
                return true
            }
        }
    }
    // console.log(false);
    return false
    // 如果都沒有再跳出來
}

console.log(findDuplicate([1, 3, 5, 7, 9, 3]));
console.log(findDuplicate([]));
console.log(findDuplicate([3, 4, 5, 6, 7, 10000, 0]));