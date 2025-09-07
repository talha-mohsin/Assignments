// (...) -->> spread operator 
// Math.max(...a) -->> it's find largest value from array
// Math.min(...a) -->> it's find smallest value from array
// .join(" ") method for joining multiple elements into 1 string
// .sort((a, b) => a - b) -->> method used for ascending & .sort((a, b) => b - a) for descending
// let objectNotation = new Array(3); -->> //this array has 3 slots for storing elements.
// name.charCodeAt(5) -->> it's provide the character code at 0 index to last index.
// !/[a-zA-Z]/.test(password) → Password does not contain any alphabet.
// !/[0-9]/.test(password) → Password does not contain any number.
// !isNaN(password[0]) → Password starts with a number.
// do { } while(true); → Runs code repeatedly until manually stopped (infinite loop).
// university.split(" ") -->> convert string into array of words " " & array of individual character ""
// texts.split("the").length - 1 → gives the number of times "the" occurs in the string.
// MORE CLARITY ABOUT THE NUMBER OF "THE" ACCURRENCES
// texts → The string you are working with.
// .split("the") → Breaks the string into an array whenever the word "the" appears.
// .length → Tells how many parts were created.
// - 1 → Subtract 1 because the number of "the" occurrences is always one less than the number of parts.

// ✅ **General Rule in 1 Line:**
// `split()` empty string `""` tab deta hai jab **separator start ya end me ho, ya do separators back-to-back aajayein.**
// ### Examples:
// "the cat".split("the")   
// // ["", " cat"]   (start me "the" → empty string aya)
// "cat the".split("the")   
// // ["cat ", ""]   (end me "the" → empty string aya)
// "thethe".split("the")   
// // ["", "", ""]   (back-to-back separators → multiple empty strings)

// Math.abs(num) //returns the absolute (always positive) value of num.
// Math.floor(Math.random() * 2) + 1 //hamesha sirf 1 ya 2 return karega. ✅
// parseFloat(userInput) //string se number nikalne ke liye use hota hai.
// copyOfNow.setHours(now.getHours() - 1); // it set hours of copyOfNow date object, .setHours() ismain number mention krna tha to hour get krka -1 kara dia update hota raha ga
// let numberOfDays = Math.floor(diffMilliSecs / (1000 * 60 * 60 * 24)); //This line find the days, from milli seconds, and without bracket it divide only 1k and multiply others.
// let laterDate = new Date("dec 31, 2020"); // it find the 2020 date.
