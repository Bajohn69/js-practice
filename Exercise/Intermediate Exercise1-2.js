function isPrime(n) {
    if(n == 1){
        return false
    }
    
    let starter = 2
    while(starter < n){
        if(n % starter == 0){
            return false
        }
        starter ++
    }

    return true

    // 從 2 到 n - 1 都沒有其他數可以整除他的話就 return true


    // 我寫錯ㄉ
    // for(let i = 2; i < n; i++){
    //     if(n % i !== 0){
    //         return true
    //     }else{
    //         return false
    //     }
    // }
}

console.log(isPrime(1));
console.log(isPrime(5));
console.log(isPrime(91));
console.log(isPrime(101));
console.log(isPrime(1000000));