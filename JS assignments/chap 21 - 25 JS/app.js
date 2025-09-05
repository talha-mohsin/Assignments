// Question no. 1******
// let firstName = prompt('Enter your first name');
// let secondName = prompt('Enter your second name');
// let fullName = firstName + ' ' + secondName;
// alert(`Greeting ${fullName}`);

// Question no. 2******
// let userInput = prompt('share your favourite mobile phone model!');
// document.writeln(`My favorite phone is: ${userInput}<br>`);
// document.writeln(`Length of string: ${userInput.length}`);

// Question no. 3******
// let nationality = 'Pakistani';
// let idx = nationality.indexOf('n');
// document.writeln(`String: ${nationality}<br>`);
// document.writeln(`Index of 'n': ${idx}`);

// Question no. 4******
// let word = 'Hello World';
// let idx = word.lastIndexOf('l');
// document.writeln(`String: ${word}<br>`);
// document.writeln(`Last index of 'l': ${idx}`);

// Question no. 5******
// let nationality = 'Pakistani';
// let idx = nationality.charAt(3);
// document.writeln(`String: ${nationality}<br>`);
// document.writeln(`Character at index 3: ${idx}`);

// Question no. 6******
// let firstName = prompt('Enter your first name');
// let secondName = prompt('Enter your second name');
// let fullName = firstName.concat( secondName);
// alert(`Greeting ${fullName}`);

// Question no. 7******
// let city = 'Hyderabad';
// let newCity = city.replace('Hyder', 'Islam')

// document.writeln(`City: ${city}<br>`);
// document.writeln(`After replacement: ${newCity}`);

// Question no. 8******
// var message = "Ali and Sami are best friend. They play cricket and football together.";
// document.writeln(message.replaceAll('and', '&'));

// Question no. 9******
// let string = '472';
// document.writeln(`Value: ${string}<br>`)
// document.writeln(`Type: ${typeof(string)}<br>`)
// document.writeln(`Value: ${+string}<br>`)
// document.writeln(`Type: ${typeof(+string)}`)

// Question no. 10******
// let input = prompt('Enter the dry fruit name here!');
// document.writeln(`User input: ${input}<br>`)
// input = input.toUpperCase();
// document.writeln(`Upper case: ${input}`)

// Question no. 11******
// let input = prompt('Enter the programming language name');
// let firstWord = input.slice(0, 1);
// let allWords = input.slice(1);
// let fullName = firstWord.toUpperCase() + allWords;
// document.writeln(fullName);

// Question no. 12******
// let num = 35.36;
// let string = num.toString();
// let replacement = string.replace('.', '')

// document.writeln(`Number: ${num}<br>`)
// document.writeln(`Result: ${replacement}`)

// Question no. 13******
// let userName = prompt('Enter your username here!');

// for(i=0; i<userName.length; i++){
//     let code = userName.charCodeAt(i);
//     if(code === 33 || code === 44 || code === 46 || code === 64){
//         alert('Please enter a valid username without ! , . @')
//         break;
//     }
// }

// Question no. 14******
// let a = ["cake", "apple pie", "cookie", "chips", "patties"];
// let userDemand = prompt(
//   "Welcome to ABC Bakery. What do you want to order sir/ma'am"
// ).toLowerCase();

// let condition = false;
// for (i = 0; i < a.length; i++) {
//   if (userDemand === a[i]) {
//     alert(`${userDemand} is available at index ${i} in our bakery`);
//     condition = true;
//   }
// }
// if(condition !== true){
//     alert(`We are sorry, ${userDemand} is not available in our bakery`)
// }

// Question no. 15******
// function validatePassword(password){
//     if(!/[a-zA-Z]/.test(password)){
//         return "Password must contain alphabet";
//     }
//     if(!/[0-9]/.test(password)){
//         return "Password must contain alphabet";
//     }
//     if(!isNaN(password[0])){
//         return "Password not begin with a number";
//     }
//     if(password.length < 6){
//         return "Password should must be at least 6 characters";
//     }
//     return "valid";
// }
// let password;
// do{
//     password = prompt('Enter your password here!');
//     let result = validatePassword(password);
//     if(result === "valid"){
//         alert("Congratulation! password is valid");
//         break;
//     } else {
//         alert(`${result} \nPlease try again`);
//     }
// } while(true);

// Question no. 16******
// var university = "University of Karachi";

// let stringToArr = university.split("");
// document.writeln('<h2>String convert into array</h2>')
// for (i = 0; i < stringToArr.length; i++) {
//   document.writeln(`${stringToArr[i]}<br>`);
// }

// Question no. 17******
// let userInput = prompt('Enter your country name'); //Pakistan

// document.writeln(`User input: ${userInput}<br>`);
// document.writeln(`Last character of input: ${userInput[userInput.length -1]}`);

// Question no. 18******
// let text = "The quick brown fox jumps over the lazy dog";
// let texts = text.toLowerCase();

// let count = texts.split("the").length -1;

// document.writeln(`Text: ${text}<br>`)
// document.writeln(`There are ${count} occurrences of word "the"`)