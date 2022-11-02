function makeStars(n){
    let result = '*'
    
    // n = 1 的話就不會執行 for loop
    for(let i = 2; i <= n; i++){
        let s = '\n'
        for(let j = 0; j < i; j++){
            s += '*'
        }
        result += s
        // 因為每次要印出一行所以 console 寫在這
    }
    console.log(result);
    
}

makeStars(1);
console.log('--------');
makeStars(2);
console.log('--------');
makeStars(5);
