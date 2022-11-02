function factorPrime(n) {
    let answer = n + ' = '
    let starter = 2
    
    while(starter <= n){
        if(n % starter == 0){
            answer += starter + ' * '
            n /= starter
        }else{
            starter++
        }
        
    }
    answer = answer.substring(0, answer.length - 3) // 把最後面的 '*' 去掉
    console.log(answer);
}

factorPrime(120)




