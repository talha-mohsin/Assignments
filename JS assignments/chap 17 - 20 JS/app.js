// Question no. 1******
// let emptyMultiDimensionalArr = [];

// Question no. 2******
// let MultiDimensionalArr = ['0123', '1012', '2101'];
// console.log(MultiDimensionalArr);

// Question no. 3******
// let numCount = 0;
// for (i = 1; i <= 10; i++) {
//   numCount++;
//   console.log(numCount);
// }

// Question no. 4******
// let tableNumber = +prompt("Enter a number to show it's multiplication table");
// let tableLength = +prompt("Enter length multiplication table");

// document.writeln(`Multiplication table of ${tableNumber} <br> Length ${tableLength} <br><br>`);

// for(let i=1; i<=tableLength; i++){
//     document.writeln(`${tableNumber} x ${i} = ${tableNumber*i} <br>`);
// }

// Question no. 5******
// let fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];

// for(i=0; i<fruits.length; i++){
//     document.writeln(`${fruits[i]} <br>`);
// }

// for(i=0; i<fruits.length; i++){
//     document.writeln(`Element at index ${i} is ${fruits[i]} <br>`);
// }

// Question no. 6******
// Point - A Counting:
// document.writeln(`<h2>Counting:</h2>`);
// for (i = 1; i <= 15; i++) {
//   document.writeln(`${i},`);
// }

// // Point - B Reverse counting:
// document.writeln(`<h2>Reverse counting:</h2>`);
// for (i = 10; i >= 1; i--) {
//   document.writeln(`${i},`);
// }

// // Point - C Even:
// document.writeln(`<h2>Even:</h2>`);
// for (i = 0; i <= 20; i++) {
//   if (i % 2 == 0) {
//     document.writeln(`${i},`);
//   }
// }

// // Point - D Odd:
// document.writeln(`<h2>Odd:</h2>`);
// for (i = 0; i <= 20; i++) {
//   if (i % 2 !== 0) {
//     document.writeln(`${i},`);
//   }
// }

// // Point - E Series:
// document.writeln(`<h2>Series:</h2>`);
// for (i = 1; i <= 20; i++) {
//   if (i % 2 == 0) {
//     document.writeln(`${i}k,`);
//   }
// }

// Question no. 7******
// let bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
// let userDemand = prompt(
//   "Welcome to ABC Bakery. What do you want to order sir/ma'am?"
// );
// let condition = false;
// for (i = 0; i < bakery.length; i++) {
//   if (userDemand == bakery[i]) {
//     document.writeln(`${userDemand} is available at index ${i} in our bakery`);
//     condition = true;
//   }
// }
// if(condition == false){
//   document.writeln(`We are sorry, ${userDemand} is not available in our bakery`)
// }

// Question no. 8******
// let a = [24, 53, 78, 91, 12];
// let largest = a[0];

// for(i=1; i<a.length; i++){
//   if(a[i] > largest){
//     largest = a[i];
//   }
// }
//   document.writeln(`largest number is ${largest}`)

// OR

// let a = [24, 53, 78, 91, 12];

// let largest = Math.max(...a); // (...) -> spread operator, Math.max(...a) it's find largest value from array
// document.writeln(`The largest number is ${largest}`)

// Question no. 9******
// let a = [24, 53, 78, 91, 12];
// let smallest = a[0];

// for(i=1; i<a.length; i++){
//   if(a[i] < smallest){
//     smallest = a[i];
//   }
// }
// document.writeln(`The smallest number is ${smallest}`)

// OR

// let a = [24, 53, 78, 91, 12];

// let smallest = Math.min(...a);
// document.writeln(`The smallest number is ${smallest}`)

// Question no. 10******
// let i = 5;
// while (i <= 100) {
//   document.writeln(`${i},`)
//   i+=5;
// }