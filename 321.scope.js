// 1.global scope(var, let, const)

// 2.function scope(let, const, var)
// if a variable has function scope, then it can only be seen inside the function
// it has no meaning outside the function

// 3.block scope(let, const)
// a variable that has block scope means
// it can only be seen inside a loop or a if statement

let myName = "Bajohn";

function sayHi() {
  let myName = "Obama";
  console.log(myName + " says good morning.");

  function sayHi2() {
    console.log(myName + " says good morning again.");
  }
}

//sayHi(); // Obama says good morning.
sayHi2(); // Uncaught ReferenceError
