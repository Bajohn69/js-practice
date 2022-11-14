/**
 * for in loop
 * 可用在 array & object
 */

let Bajohn = {
  name: "Bajohn Huang",
  age: 28,
  height: 163,
  witght: 85,
};

for (let i in Bajohn) {
  console.log(i);
}
for (let i in Bajohn) {
  console.log(Bajohn[i]);
}

let numbers = [10, 20, 30];
for (let i in numbers) {
  console.log(i); // 0 1 2
}
for (let i in numbers) {
  console.log(numbers[i]); // 10 20 30
}
