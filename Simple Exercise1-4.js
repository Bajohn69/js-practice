function isUpperCase(str){
    if(str.length ==0){
        return false
    }
    
    // if(str[0] == str[0].toUpperCase()){
    //     return true
    // }else{
    //     return false
    // }
    // 簡寫成下面
    return str[0] == str[0].toUpperCase(); // return boolean
}

console.log(isUpperCase('ABCD'));
console.log(isUpperCase('aBCd'));
console.log(isUpperCase(''));
