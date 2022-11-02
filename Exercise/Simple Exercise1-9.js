function findAllSmall(ar, n){
    let resultAr = []
    for(let i = 0; i < ar.length; i++){
        if(ar[i] < n){
            resultAr.push(ar[i])
        }
        
    }
    return resultAr // 執行完後才 return !!!
}

console.log(findAllSmall([1, 2, 3], 10));
console.log(findAllSmall([1, 2, 3], 2));
console.log(findAllSmall([1, 3, 5, 4, 2], 4));

