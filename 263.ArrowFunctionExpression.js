//sayHi() // hoisting 提升

// function sayHi() {
//     console.log('Hi');
// }

let sayHi = (name) =>{
    console.log('Hi ' + name);
}

sayHi('Bajohn') // 箭頭函式不會有提升

let Bajohn = {
    name:'Bajohn',
    // function declaration
    greeting(){
        console.log(this); // 這邊的 this 是 Bajohn
        console.log('Hi, my name is ' + this.name +'.');
    },
    // arrow function expression
    walk: () => {
        console.log(this); // 這邊的 this 是 window object
        console.log(this.name + ' is walking on the street.'); // 這邊會出錯
    }

}

Bajohn.greeting()
Bajohn.walk()

// 箭頭函式
// 1.不會提升
// 2.this 的不同