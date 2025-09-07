// Question no. 1******
// let dateAndTime = new Date();
// document.writeln(dateAndTime);

// Question no. 2******
// let dateAndTime = new Date();
// let month = dateAndTime.getMonth();
// let monthsName = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

//   alert(`Current month: ${monthsName[month]}`);

// Question no. 3******
// let dateAndTime = new Date();
// let weekDay = dateAndTime.getDay();
// let weekDaysNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// alert(`Today is ${weekDaysNames[weekDay]}`);

// Question no. 4******
// let dateAndTime = new Date();
// let weekDay = dateAndTime.getDay();
// let weekDaysNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// let dayName = weekDaysNames[weekDay];

// if(dayName === 'Sat' || dayName === 'Sun'){
//     alert(`It's Fun day`);
// } else {
//     alert(`It's working day`);
// }

// Question no. 5******
// let dateAndTime = new Date();
// let date = dateAndTime.getDate();

// if(date < 16){
//     alert(`First fifteen days of the month`);
// } else {
//     alert(`Last days of the month`);
// }

// Question no. 6******
// let now = new Date();

// // Milliseconds since midnight Jan 1, 1970
// let milliSecs = now.getTime();

// // Convert to seconds
// let secs = milliSecs / 1000;

// // Convert to minutes
// let mins = milliSecs / (1000 * 60);

// document.writeln(`Current Date: <b>${now}</b><br>`);
// document.writeln(`Elapsed milliseconds since January 1, 1970: <b>${milliSecs}</b><br>`);
// document.writeln(`Elapsed minutes since January 1, 1970: <b>${mins}</b><br>`);

// Question no. 7******
// let now = new Date();
// let time = now.getHours();

// if(time < 12){
//     alert(`It's AM`);
// } else {
//     alert(`It's PM`);
// }

// Question no. 8******
// let laterDate = new Date("dec 31, 2020");
// document.writeln(`Later date ${laterDate}`);

// Question no. 9******
// let ramadanStart = new Date("June 18, 2015");
// let today = new Date();

// let diffMilliSecs = today.getTime() - ramadanStart.getTime();

// let numberOfDays = Math.floor(diffMilliSecs / (1000 * 60 * 60 * 24));

// document.writeln(`${numberOfDays} days have passed since 1st Ramadan, 2015`);

// Question no. 10******
// let fixedDate = new Date("Jan 1, 2015");
// let today = new Date();

// let diff = today.getTime() - fixedDate.getTime();
// let prevSecs = Math.floor(diff / 1000);

// document.writeln(`On reference date ${today}, ${prevSecs} seconds had passed since beginning of 2015`);

// Question no. 11******
// let now = new Date();
// let copyOfNow = new Date();
// copyOfNow.setHours(now.getHours() - 1);

// document.writeln(`current date: ${now} <br>`);
// document.writeln(`1 hour ago, it was ${copyOfNow}`);

// Question no. 12******
// let currentDate = new Date();
// let prevDate = new Date();
// prevDate.setFullYear(currentDate.getFullYear() - 100);

// alert(`current date: ${currentDate} \n 100 years back, it was ${prevDate}`);

// Question no. 13******
// let now = new Date();
// let age = prompt('Enter your age here!');
// let birthYear = now.getFullYear() - age;

// document.writeln(`Your age is ${age}`);
// document.writeln(`Your birth year is ${birthYear}`);

// Question no. 14******
// let customerName = prompt(`Mention the Customer name`);
// let month = prompt(`Mention your month`);
// let numberOfUnits = prompt(`How much units you has consumed`);

// let chargesPerUnit = 16;
// let latePaymentSurcharge = 350;

// let amountWithDueDate = numberOfUnits * chargesPerUnit;
// let amountAfterDueDate = amountWithDueDate + latePaymentSurcharge;

// document.writeln(`<h1>K-Electric Bill</h1>`);
// document.writeln(`Customer Name: <b>${customerName}</b> <br>`);
// document.writeln(`Month: <b>${month}</b> <br>`);
// document.writeln(`Number of units: <b>${numberOfUnits}</b> <br>`);
// document.writeln(`Charges per unit: <b>${chargesPerUnit}</b> <br><br>`);

// document.writeln(`Net Amount Payable (within Due Date): <b>${amountWithDueDate}</b> <br>`);
// document.writeln(`Late payment surcharge: <b>${latePaymentSurcharge}</b> <br>`);
// document.writeln(`Gross Amount Payable (after Due Date): <b>${amountAfterDueDate}</b>`);