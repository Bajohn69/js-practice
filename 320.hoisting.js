// let, const, var

// initializer
// const 需要 let, var 不用

// re-declaration
// let, const 不行 var 可以

// re-assignment
// const 不行 let, var 可以

sayHi(); // Hi (hoisting)

function sayHi() {
  console.log(Hi);
}
sayHi2(); // uncaught referenceError

const sayHi2 = () => {
  console.log(Hi);
};
