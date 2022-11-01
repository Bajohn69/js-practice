// 我寫ㄉ
// function palindrome(str) {
//     k = str.length - 1
//     for(let i = 0; i < str.length / 2; i++){
//         if(str[i].toUpperCase() == str[k].toUpperCase()){
//             return true
//             k--
//         }
//     }
//     return false
    
// }

// 老師ㄉ
function palindrome(str) {
    let i = 0
    let j = str.length - 1
    while(i < j){ //這樣就不會重複比對
        if(str[i] != str[j]){
            return false
        }
        i++
        j--
    }
    return true
}

console.log(palindrome("bearaeb"));
console.log(palindrome("beeb"));
console.log(palindrome("Whatever revetahW"));
console.log(palindrome("Aloha, how are you today?"));