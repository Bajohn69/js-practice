// constructing an object
let Bajohn = {
  firstName: "Bajohn",
  age: 25,
  gender: "female",
  address: "Hawaii State",
  height: 163,
  weight: 83,
  friends: {
    fullName: "Mike Huang",
  },
};

// destructing an object 把資料從物件拉出來
// let firstName = Bajohn.firstName;
// let gender = Bajohn.gender;
// let friendName = Bajohn.friends.fullName;

let { firstName, gender } = Bajohn;
let { fullName } = Bajohn.friends;
// 就不用寫一堆

console.log(firstName + `'s gender is ` + gender);
console.log(firstName + " has a friend, his name is " + fullName);
