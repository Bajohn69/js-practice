let myName = "Bajohn";

function sayHi() {
  let myName = "Obama";
  console.log(myName + " says hi.");

  function sayHi2() {
    console.log(myName + " says hi.");
  }

  function sayHi3() {
    let myName = "Nelson";
    sayHi2();
  }

  sayHi3();
}

sayHi();
// Obama says hi.
// Obama says hi.

// ----------------------------------

// function sayHi() {
//   let myName = "Obama";
//   console.log(myName + " says hi.");
//   sayHi2();
// }

// function sayHi2() {
//   console.log(myName + " says hi.");
// }

// sayHi();
// // Obama says hi.
// // Bajohn says hi.

// ----------------------------------

// function sayHi() {
//   let myName = "Obama";
//   console.log(myName + " says good morning.");

//   function sayHi2() {
//     console.log(myName + " says good morning again.");
//   }

//   sayHi2();
// }

// sayHi(); // Obama says good morning.
