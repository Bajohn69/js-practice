function swap(str) {
    let result = ''
    for(i = 0; i < str.length; i++){
        if(str[i] == str[i].toUpperCase() ){
            
            result += str[i].toLowerCase()
        }else{
            
            result += str[i].toUpperCase()
        }
    }
    return result
}

console.log(swap("Aloha"));
console.log(swap("Love you."));