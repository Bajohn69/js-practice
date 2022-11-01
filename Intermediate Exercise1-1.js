function findMin(arr) {
    let min = arr[0]
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i]
        }
        
    }
    return min
}

/**
 * 1.先找出最小數
 * 2.放進新陣列
 * 3.在原陣列刪除( splice(從哪開始, 刪除幾項))
 * 4.重複上面動作
 */


function mySort(arr) {
    let result = [];
    while(arr.length > 0){
        let min = findMin(arr)
        result.push(min)
        arr.splice(arr.indexOf(min), 1)
    }
    return result
}


console.log(mySort([17, 0, -3, 2, 1, 0.5]));
console.log(mySort([10, 3, 3.4, 0.123, -5]));