function stars(n) {
    let result = ''
    for( i=1 ; i<=n ; i++ ){
        result += '*'
    }
    return result
}

console.log(stars(3));
console.log(stars(10));

