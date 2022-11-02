function confirmEnding(str, endStr) {
    // 老師ㄉ
    let k = str.length - 1
    for(let i = endStr.length - 1; i >= 0; i--){
        if(endStr[i] != str[k]){
            return false
        }else{
            k--
        }
    }
    return true


    // 我寫ㄉ
    // for(i = endStr.length - 1; i >= 0 ; i--){
    //     if(endStr[endStr.length - 1] == str[str.length - 1] ){
    //         return true
    //     }else{
    //         return false
    //     }
    // }
}

console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Connor", "n"));
console.log(confirmEnding("Open sesame", "same"));