// async code 異步

console.log("start");

setTimeout(() => {
  console.log("Here is the code.");
}, 2000);

console.log("end");

/**
start
end
Here is the code.
js 中絕大多數的 function 皆屬於 synchronous function
 */
