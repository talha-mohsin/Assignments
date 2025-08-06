let userInput = prompt("Enter a character here!");
let vowels = ["a", "e", "i", "o", "u"];

let condition = false;

if (userInput.length == 1) {
  for (let i = 0; i < vowels.length; i++) {
    if (userInput === vowels[i]) {
      alert(`${userInput} is a vowel character.`);
      condition = true;
    }
  }
  if(condition !== true){
    alert(`${userInput} is not a vowel character.`);
  }
} else {
  alert('Please, enter only one character.')
}