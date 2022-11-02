function stars(n){
    for(let i = 1; i <= n; i++){
        let result = ''
        for(let j = 0; j < i; j++){
            result += '*'
        }
        console.log(result);
        // 因為每次要印出一行所以 console 寫在這
    }
    
}

stars(1);
console.log('--------');
stars(4);
console.log('--------');
stars(10);
