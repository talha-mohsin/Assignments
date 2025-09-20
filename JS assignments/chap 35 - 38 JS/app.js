// Question no. 1:
// function displayDate(){
//     return new Date();
// }
// document.writeln(displayDate());

// // Question no. 2:
// let firstName = prompt(`Enter your first name`);
// let lastName = prompt(`Enter your last name`);

// function greets(firstName, lastName){
//     let fullName = firstName + ' ' + lastName;
//     return "Greeting" + ' ' + fullName;
// }
// document.writeln(greets(firstName, lastName));

// Question no. 3:
// let num1 = +prompt(`Enter the first number`);
// let num2 = +prompt(`Enter the second number`);

// function addition(a, b){
//     return a + b;
// }
// document.writeln(`Sum of two numbers is: ${addition(num1, num2)}`);

// Question no. 4:
// let a = +prompt('Enter the first number');
// let operator = prompt('Enter the operator (+, -, *, /, %)');
// let b = +prompt('Enter the second number');

// function calculator(a, b, operator){
//     if(operator === '+'){
//         return a+b;
//     } else if(operator === '-'){
//         return a-b;
//     } else if(operator === '*'){
//         return a*b;
//     } else if(operator === '/'){
//         return a/b;
//     } else if(operator === '%'){
//         return a%b;
//     } else {
//         alert('please enter the valid operator');
//     }
// }
// document.writeln(`Your desired result is: ${calculator(a, b, operator)}`);

// Question no. 5:
// function square(a){
//     return a*a;
// }
// alert(`square of 5 is: ${square(5)}`);

// Question no. 6:
// function factorial(n){
//   if(n == 0 || n == 1){
//     return 1;
//   } else {
//     let result = 1;
//     for(i=2; i<=n; i++){
//       result = result * i;
//     }
//     return result;
//   }
// }
// factorial(5);

// Question no. 7:
// let start = prompt('Enter the starting value here!');
// let end = prompt('Enter the ending value here!');

// function counting(start, end){
//   for(i=start; i<=end; i++){
//     document.writeln(i);
//   }
// }
// counting(start, end);

// Question no. 8:
// let base = +prompt('Enter base value');
// let perpendicular = +prompt('Enter perpendicular value');

// function calcHypo(base, perpendicular){

//   function calcBaseSq(baseSq){
//     let baseSquare = baseSq * baseSq;
//     return baseSquare;
//   }
//   function calcPerpSq(perpendicularSq){
//     let perpSquare = perpendicularSq * perpendicularSq;
//     return perpSquare;
//   }

//   let baseSquare = calcBaseSq(base);
//   let perpSquare = calcPerpSq(perpendicular);

//   let hypotenuse = Math.sqrt(baseSquare + perpSquare);
//   return hypotenuse;
// }
// console.log(`Hypotenuse of a right angle triangle is: ${calcHypo(base, perpendicular)}`);

// Question no. 9:
// let width = 6;
// let height = 5;
// function calcAreaRec(width, height){
//     let area = width * height;
//     return area;
// }
// document.writeln(`Area of a triangle is: <b>${calcAreaRec(width, height)}</b>`)

// Question no. 10:
// let string = "level";
// function palindrome(str){
// let char = "";
//     for(i=str.length -1; i>=0; i--){
//         char += string[i];
//     }
//     if (string === char) {
//             return `It's palindrome value`;
//         } else {
//             return `It's not palindrome value`;
//         }
// }
// alert(palindrome(string));

// Question no. 11:
// let string = "the quick brown fox";

// function capitalize(str){
// let arr = str.split(" ");
// let array = [];
// let texts = "";

// for (i = 0; i < arr.length; i++) {
//   let firstWord = arr[i][0].toUpperCase();
//   let lastWords = arr[i].slice(1);
//   let text = firstWord + lastWords;
//   array.push(text);
//   texts = array.join(" ") //convert array into string
// }
//   return texts;
// }
// console.log(capitalize(string));

// Question no. 12:
// let string = "Web Development Tutorial";

// function longestWord(str){
//     let arr = str.split(" "); //convert string into array

//     for(i=1; i<arr.length; i++){

//     }
//     // return;
// }
// console.log(`Longest word is: ${longestWord(string)}`);

// Question no. 13:
// function countOccurances(string, letter) {
//     let counter = 0;
//     for(i=0; i<string.length; i++){
//         if(string[i] == letter){
//             counter = counter + 1;
//         }
//     }
//         return counter;
// }
// console.log(`function counts letter 'o' : ${countOccurances('JSResourceS.com', 'o')} times`);

// Question no. 14:

// function calcCircumference(radius) {
//     let circumference = 2*(Math.PI)*(radius);
//     return circumference;
// }
// console.log(`The Circumference is ${calcCircumference(10)}`);

// function calcArea(radius) {
//     let area = Math.PI * Math.pow(radius, 2);
//     return area;
// }
// console.log(`The Area is ${calcArea(10)}`);