// 我寫的
// function isAllUpperCase(str){
//     if(str.length ==0){
//         return false
//     }else if(str == str.toUpperCase()){
//         return true
//     }else{
//         return false
//     }
// }

// 老師寫ㄉ
function isAllUpperCase(str){
    if(str.length ==0){
        return false
    }
    
    let allUpperCase = true

    for(let i = 0; i < str.length; i++){
        if(str[i] != str[i].toUpperCase()){
            allUpperCase = false
        }
}

return allUpperCase
}



console.log(isAllUpperCase('ABCD'));
console.log(isAllUpperCase('ABCDEFGHIJKLm'));
console.log(isAllUpperCase(''));
