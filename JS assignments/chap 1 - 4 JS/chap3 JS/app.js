// Point 1
var age = 20;
alert(`I am ${age} years old`);

// Point 2

let visitCount = localStorage.getItem('visitCount');

if(visitCount === null) { 
    visitCount = 1;
} else {
    visitCount = parseInt(visitCount) + 1;
}

localStorage.setItem("visitCount", visitCount);

alert("You have visited this site " + visitCount + " times"
)

// Point 3
let birthYear = '2005';
document.writeln(`My birth year is ${birthYear}<br>`);

// Point 4
let visitorName = 'Talha';
let Qty = '5';
let product = 'T-Shirt';
document.writeln(`${visitorName} ordered ${Qty} ${product} on Junaid Jamshaid clothing store`);