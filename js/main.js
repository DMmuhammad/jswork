// const name = "Muhammad"; String
// const age = 19; Number
// const isDeveloper = true; Boolean
// const power = 9999999999n; BigInt
// const sign = Symbol(); Symbol
// const something = undefined; Undefined

// const user = { Object
//   login: maga,
//   password: 12345,
// };

// const data = null; Null

// <> = == === >= <=  &&
// + - * / ** %
// typeof

// =================================================== //
// метод pop() используется для удаления последнего элемента из массива
// arr.sort((a, b) => a - b); метод сорт для сортировки элементов массива
// arr.reverse()
// let a = str.split(" ,"); используется для разделения строки на подстроки
// let c = b.join();  используется для объединения всех элементов массива в строку
// b.splice(1, 2); это метод массивов, который позволяет изменять содержимое массива, добавляя или удаляя элементы
// let lastNum = num.slice(0, 3); используется для извлечения части массива или строки, не изменяя исходный объект. Он создает новый массив или строку
// метод concat используется для объединения двух или более массивов или строк.
// let fun = num.forEach(function (item, index) используется для выполнения заданной функции один раз для каждого элемента массива. пройтись по элементам
// let abc = num.includes("lorem"); используется для определения, содержится ли в массиве или строке определенное значение.
// let abc = num.find(function (item, index) спользуется для поиска первого элемента в массиве, который удовлетворяет условию
// let abc = num.filter(function (item, index) используется для создания нового массива, содержащего все элементы исходного массива, которые прошли проверку
// let abc = num.map(function (item) это встроенный метод массивов, который позволяет создавать новый массив, применяя заданную функцию
// let num = [33, 1, 10, 22, "maga", "ali", "sid", "rizvan"];
// let abc = num.map(function (item) {
//   return item + 20;
// });
// console.log(num);
// console.log(abc);

// let arr_1 = [101, 202, 303, 404, 505];
// let arr_2 = [606, 707, 808, 909];
// let supperArr = [...arr_1, ...arr_2];
// let minArr = Math.min(...supperArr);
// console.log(minArr);
// console.log(supperArr);

// let obj = {
//   width: 300,
//   heigth: 550,
// };

// let newObj = {
//   ...obj,
//   area: function () {
//     return this.width * this.heigth;
//   },
// };

// console.log(newObj.area());

// function superFn(...args) {

// }
// superFn()
// let arr_1 = [101, 202, 303, 404, 505];
// let arr_2 = arr_1.reduce((sum, item) => {
//   return sum + item;
// }, 0);
// console.log(arr_2);

// function superFn(...args) {
//   return args.reduce((sum, item) => sum + item, 0);
// }
// let result = superFn(10, 20, 20);
// console.log(result);
