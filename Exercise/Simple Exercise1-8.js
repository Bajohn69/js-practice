function findSmallerTotal(ar, n){
    let sum = 0
    for(let i = 0; i < ar.length; i++){
        if(ar[i] < n){
            sum += ar[i]
        }
        
    }
    return sum // 執行完後才 return !!!
}

console.log(findSmallerTotal([1, 2, 3], 3));
console.log(findSmallerTotal([1, 2, 3], 1));
console.log(findSmallerTotal([3, 2, 5, 8, 7], 999));
console.log(findSmallerTotal([3, 2, 5, 8, 7], 0));

