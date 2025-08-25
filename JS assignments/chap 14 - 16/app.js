// let emptyArr = []; //using literal notation
// let objectNotation = new Array(3); //this array has 3 slots for storing elements.
// let stringArr = ['apple', 'grapes', 'mango'];
// let numArr = [23, 45, 90];
// let boolArr = [true = present, false = present];
// // let boolArr2 = [present = true, present = false];
// let mixArr = ['Ali', 25, true];
let qualifications = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PHD'];

document.writeln('<h1>Qualifications:</h1>');
 
for (let i = 0; i < qualifications.length; i++) {
    // document.writeln(qualifications[i] + '<br>');
    document.writeln(`${i}) ${qualifications[i]} <br>`);
}