let secretNumber = Math.floor(Math.random() * 100)
console.log(secretNumber);

let n1 = 0
let n2 = 99

// let guessNumber = prompt('請輸入介於' + n1 + '~' + n2 + '之間的數字')

// while (guessNumber > 0 || guessNumber < 99) {

//     if (guessNumber > secretNumber) {

//         n2 = guessNumber;
//         prompt('請輸入介於' + n1 + '~' + n2 + '之間的數字');

//     } else if (guessNumber < secretNumber) {

//         n1 = guessNumber
//         prompt('請輸入介於' + n1 + '~' + n2 + '之間的數字');

//     } else   {
//         prompt('宮溪');
//         break;
//     }

//     return guessNumber
// }

while (true) {
    let guessNumber = prompt('請輸入介於' + n1 + '~' + n2 + '之間的數字');

    if (guessNumber < n1 || guessNumber > n2) {
        alert('不要亂填');
        continue;
    }

    if (guessNumber == secretNumber) {
        alert('恭喜');
        break;
    } else if (guessNumber > secretNumber) {
        n2 = guessNumber;
    } else if (guessNumber < secretNumber) {
        n1 = guessNumber;
    }
}

console.log(guessNumber);
