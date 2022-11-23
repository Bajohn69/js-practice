// switch expression
let input = prompt("Enter a month.");

// if(input == 'Jan'){
//   alert('一月')
// }else if(input == 'Feb'){
//   alert('二月')
// }else if (input == 'Mar'){
//   alert('三月')
// }else{
//   alert('無法判定')
// }

// 要重複很多次再用 switch
switch (input) {
  case "Jan":
    alert("一月");
    break;
  case "Feb":
    alert("二月");
    break;
  case "Mar":
    alert("三月");
    break;

  default:
    alert("無法判定");
    break;
}
