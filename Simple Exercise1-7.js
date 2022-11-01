function findSmallCount(ar, n){
    let result = 0
    for(let i = 0; i < ar.length; i++){
        if( ar[i] < n){
            result ++
        }
        return result
    }
    
}

console.log(findSmallCount([1, 2, 3], 2));
console.log(findSmallCount([1, 2, 3, 4, 5], 0));