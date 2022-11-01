function findMin(arr) {
    let min = arr[0]
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i]
        }
        
    }
    return min
}

console.log(findMin([1, 2, 5, 6, 99, 4, 5]));
console.log(findMin([]));
console.log(findMin([1, 6, 0, 33, 44, 88, -10]));