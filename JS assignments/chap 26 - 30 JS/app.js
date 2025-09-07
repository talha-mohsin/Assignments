// Question no. 1******
// function numCheck(number) {
//   if (isNaN(number)) {
//     return "input should be a number!";
//   }
//   if(number < 0){
//     return "number should be positive!";
//   }
//   return "valid";
// }

// let num;
// let result;

// do {
//   num = +prompt("Enter the number here!");
//   result = numCheck(num);

//   if (result === "valid") {
//     let round = Math.round(num);
//     let floor = Math.floor(num);
//     let ceil = Math.ceil(num);
//     document.writeln(`number: ${num}<br>`);
//     document.writeln(`round off value: ${round}<br>`);
//     document.writeln(`floor value: ${floor}<br>`);
//     document.writeln(`ceil value: ${ceil}<br>`);
//     break;
//   } else {
//     alert(`${result} \nPlease try again.`);
//   }
// } while (true);

// Question no. 2******
// function numCheck(num){
//     if(isNaN(num)){
//         return "Input should be number!";
//     }
//     if(num > 0){
//         return "Number should be negative";
//     }
//     return "valid";
// }

// do{
//     let num = +prompt('Enter the number here as you want');
//     let result = numCheck(num);

//     if(result === 'valid'){
//         document.writeln(`number: ${num}<br>`);
//         let round = Math.round(num);
//         let floor = Math.floor(num);
//         let ceil = Math.ceil(num);

//         document.writeln(`round off value: ${round}<br>`);
//         document.writeln(`floor value: ${floor}<br>`);
//         document.writeln(`ceil value: ${ceil}<br>`);
//         break;
//     } else {
//         alert(`${result} \nPlease try again`);
//     }
// } while(true);

// Question no. 3******
// let num = -4;
// let absoluteValue = Math.abs(num);
// document.writeln(`The absolute value of ${num} is ${absoluteValue}`);

// Question no. 4******
// let diceValue = Math.floor(Math.random() * 6) + 1;
// document.writeln(`random dice value: ${diceValue}`);

// Question no. 5******
// let coinToss = Math.floor(Math.random() * 2) + 1;

// if (coinToss === 1) {
//   document.writeln(`${coinToss} \nrandom coin value: Tails`);
// } else {
//   document.writeln(`${coinToss} \nrandom coin value: Heads`);
// }

// Question no. 6******
// let randomNum = Math.floor(Math.random() * 100) + 1;
// document.writeln(`random number between 1 and 100: ${randomNum}`);

// Question no. 7******
// let userInput = prompt('Enter your weight here!');

// let weight = parseFloat(userInput);
// document.writeln(`The weight of user is ${weight} kilograms`);

// Question no. 8******
// let secretNum = 6;

// do{
//     let userInput = +prompt('Enter a number between 1 and 10');

//     if(userInput === secretNum){
//         alert(`Congratulation you found the secret number ${userInput}`);
//         break;
//     } else{
//         alert(`you are selecting wrong number ${userInput} \nplease try again`)
//     }
// }
// while(true);