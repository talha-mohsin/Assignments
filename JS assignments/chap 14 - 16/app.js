// Question no 1*******
// let emptyArr = []; //using literal notation

// Question no 2*******
// let objectNotation = new Array(3); //this array has 3 slots for storing elements.

// Question no 3*******
// let stringArr = ['apple', 'grapes', 'mango'];

// Question no 4*******
// let numArr = [23, 45, 90];

// Question no 5*******
// let boolArr = [true, false];

// Question no 6*******
// let mixArr = ['Ali', 25, true];

// Question no 7*******
// let qualifications = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PHD'];

// document.writeln('<h3>Qualifications:</h3>');

// i = 0;
// while(i < qualifications.length){
//     document.writeln(`${i + 1}) ${qualifications[i]} <br>`);
// i++;
// }

// Question no 8*******
// let students = ["Talha Mohsin", "Danial Ansari", "Bilal Khan"];
// let scores = 500;
// let stdScores = [450, 300, 380];

// document.writeln(`<h3>Student Results:</h3>`);

// for (i = 0; i < students.length; i++) {
//   document.writeln(
//     `${i + 1}) Score of <b>${students[i]}</b> is <b>${
//       stdScores[i]
//     }</b>. Percentage: <b>${(stdScores[i] * 100) / scores}%</b> <br>`
//   );
// }

// Question no 9*******
// let colors = ["Red", "Green", "Blue"];
// document.writeln(`colors: ${colors} <br>`);

// // Point - A***
// let startInput = prompt("which color you want to add from start?");
// colors.unshift(startInput);
// document.writeln(`Updated colors: ${colors} <br>`);

// // Point - B***
// let endInput = prompt("which color you want to add from end?");
// colors.push(endInput);
// document.writeln(`Updated colors: ${colors} <br>`);

// // Point - C***
// colors.unshift('brown', 'purple');
// document.writeln(`Updated colors: ${colors} <br>`);

// // Point - D***
// colors.shift();
// document.writeln(`Updated colors: ${colors} <br>`);

// // Point - E***
// colors.pop();
// document.writeln(`Updated colors: ${colors} <br>`);

// // Point - F***
// let idxInput = +prompt('Which index you want to add a color?');
// let colorInput = prompt(`Which color you want to add on ${idxInput} index?`);
// colors.splice(idxInput, 0, colorInput);
// document.writeln(`Updated colors: ${colors} <br>`);

// // Point - G***
// let idx2Input = +prompt('Which index you want to delete a color?');
// let colorQtyInput = prompt(`How many colors you want to delete on ${idx2Input} index?`);
// colors.splice(idx2Input, colorQtyInput);
// document.writeln(`Updated colors: ${colors} <br>`);

// Question no 10*******
// let stdMarks = [320, 230, 480, 120];

// for(i=0; i<stdMarks.length; i++){
//     stdMarks.sort((a, b) => a - b); // NEW LEARNING:*** .sort((a, b) => a - b) method used for ascending & .sort((a, b) => b - a) for descending
// }
// console.log(stdMarks);

// Question no 11*******
// let cities = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar'];
// let selectedCities = [];
// console.log(`Cities list: ${cities}`);

// selectedCities.push(cities.slice(2, 4));
// console.log(`Selected cities list: ${selectedCities}`);

// Question no 12*******
// let arr = ["This", "is", "my", "cat"];
// console.log(`Array: ${arr}`);
// let joining = arr.join(" ") // NEW LEARNING:*** .join(" ") method for joining multiple elements into 1 string
// console.log(`String: ${joining}`);

// Question no 13*******
// let parts = [];
// parts.push('keyboard');
// parts.push('mouse');
// parts.push('printer');
// parts.push('moniter');

// console.log(`Devices: ${parts}`);

// console.log(`Output: ${parts.shift()}`);
// console.log(`Output: ${parts.shift()}`);
// console.log(`Output: ${parts.shift()}`);
// console.log(`Output: ${parts.shift()}`);

// Question no 14*******
// let parts = [];
// parts.push('moniter');
// parts.push('printer');
// parts.push('mouse');
// parts.push('keyboard');

// console.log(`Devices: ${parts}`);

// console.log(`Output: ${parts.pop()}`);
// console.log(`Output: ${parts.pop()}`);
// console.log(`Output: ${parts.pop()}`);
// console.log(`Output: ${parts.pop()}`);

// Question no 15*******
let phonesBrand = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];