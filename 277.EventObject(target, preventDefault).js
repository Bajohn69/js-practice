// target, preventDefault()
// preventDefault() 防止預設發生

let h1 = document.querySelector('h1')
h1.addEventListener('click', e => {
    console.log(e.target); // h1
    console.log(typeof e.target); // object
})

let button = document.querySelector('button')
button.addEventListener('click', e => {
    e.preventDefault() // 防止預設發生 例如防止表單被送出
})