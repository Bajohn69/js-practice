function reverse(str) {
    let result = ''
    for(i = str.length - 1; i >= 0; i--){
        result += str[i]
    }
    return result
}

console.log(reverse("abcd"))
console.log(reverse("I am a good guy."));
