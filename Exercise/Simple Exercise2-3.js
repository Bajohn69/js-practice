function stars2(n){
    for(let i = 1; i <= n; i++){
        let result = ''
        for(let j = 0; j < i; j++){
            result += '*'
        }
        console.log(result);
        // 因為每次要印出一行所以 console 寫在這
    }
    for(let i = n - 1; i > 0 ; i--){
        let result = ''
        for(let j = 0; j < i; j++){
            result += '*'
        }
        console.log(result);
        // 因為每次要印出一行所以 console 寫在這
    }
    
}

stars2(1);
console.log('--------');
stars2(2);
console.log('--------');
stars2(3);
console.log('--------');
stars2(4);
