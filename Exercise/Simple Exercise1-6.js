function position(str) {
    // if(str != str.toUpperCase()){
    //     return -1
    // }
    for(let i = 0; i<str.length; i++){
        if(str[i] == str[i].toUpperCase() ){
            return str[i] + ' ' + i
        }
    }
    return -1 // 不要太早 return 會跑出去迴圈
}

console.log(position('abcd'));
console.log(position('AbcD'));
console.log(position('abCD'));