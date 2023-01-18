const addTwoNumbers = function (l1, l2) {
  let result1 = 0;
  let result2 = 0;
  for (let i = 0; i < l1.length; i++) {
    let intl1 = l1[i] * Math.pow(10, i);
    result1 += intl1;
  }
  for (let j = 0; j < l2.length; j++) {
    let intl2 = l2[j] * Math.pow(10, j);
    result2 += intl2;
  }
  //   console.log(result1 + result2);
  //   return result1 + result2;
  //   console.log(result1);
  //   console.log(result2 + result1);
  result3 = result2 + result1;
  result5 = result3.toString();
  result6 = result5.split("").reverse();
  //   console.log(result5.split("").reverse());
  //   console.log(result6.length);
  let resultArr = [];
  for (let k = 0; k < result6.length; k++) {
    result7 = Number(result6[k]);
    resultArr.push(result7);
    // console.log("resultArr", resultArr);
  }
  console.log(resultArr);
  //   return result5.split("").reverse();
  //   let result4 = []
  //   for(let k=0;k<result3.leng;k++){
  //     result3
  //   }
  //   let result4 = [];
  //   for (let k = result5.length - 1; k >= 0; k--) {
  //     let here = Math.floor(result5 / Math.pow(10, k));
  //     result4.push(here);
  //     // console.log(result4);
  //     // console.log("result4", result4);
  //   }
};

addTwoNumbers([2, 4, 3], [5, 6, 4]);
addTwoNumbers([0], [0]);
addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]);
// let num = "454";
// console.log(num.length);
