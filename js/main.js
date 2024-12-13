/* 
String
Number
BigInt
Boolean 
Undefined
Null 
Symbol
Object
*/

// <> = == === >= <=  &&

// практика
// задание 1
// let myName = "myhammad"; // string

// задание 2
// const age = 19; // string

// задание 3
// if (age < 15) {
//   console.log("доступ запрещен");
// } else {
//   console.log(`hello ${myName}`);
// }

// задание 4
// function vievMoney() {
//   console.log("вот вам 10$");
// }
// vievMoney();

// задание 5
// function getMoney() {
//   return "Вот Вам 10$";
// }
// console.log(getMoney());

// задание 6
// function getMoney(cash) {
//   return `вот вам ${cash}$`;
// }
// console.log(getMoney(399));

// задание 7
// function printNum(number) {
//   let numberBig = number * number;
//   console.log(numberBig);
// }
// printNum(8);

// задание 8
// function printNumber(age, number, num, lit) {
//   console.log(Math.max(age, number, num, lit));
// }
// printNumber(5, 1011, 432, 4);

// задание 9
// function discriminant(a, b, c) {
//   return b * b - 4 * a * c;
// }
// console.log(discriminant(10, 50, 10));

// задание 10
function progressNum(num1, num2) {
  if (num1 % 2 === 0 && num2 % 2 === 0) {
    return num1 * num2;
  } else if (num1 % 2 !== 0 && num2 % 2 !== 0) {
    return num1 + num2;
  } else {
    return num1 % 2 !== 0 ? num1 : num2;
  }
}
console.log(progressNum(2, 4));
console.log(progressNum(3, 5));
console.log(progressNum(2, 3));
console.log(progressNum(4, 7));
