// stack 是一種資料結構
// stack LIFO last in first out 後進先出
function f1() {
  console.log("This is f1.");

  f2();

  function f2() {
    console.log("This is f2.");

    f3();

    function f3() {
      console.log("This is f3.");
    }

    console.log("Run codes in the middle.");
  }

  console.log("Done with running codes.");
}
f1();

// This is f1.
// This is f2.
// This is f3.
// Run codes in the middle.
// Done with running codes.
