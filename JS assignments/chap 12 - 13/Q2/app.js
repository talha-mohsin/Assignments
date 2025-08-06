let int1 = +prompt('Enter the first number here!');
let int2 = +prompt('Enter the second number here!');

if(int1 > int2){
    alert(`${int1} is greater than ${int2}`);
} else if(int1 < int2){
    alert(`${int2} is greater than ${int1}`);
} else if(int1 === int2){
    alert(`${int1} is equal to ${int2}`);
} else {
    alert(`please enter the valid number`);
}