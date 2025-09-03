let userInput = prompt('Enter your name or age');
if(isNaN(userInput)){
    console.log(`Input is not a number: ${userInput}`);
    
    // GET THE ASCII CODE OF THE FIRST CHARACTER
    let asciiCode = userInput.charCodeAt(0)
    console.log(`ASCII code of ${userInput} is: ${asciiCode}`);

    // NOW CHECK IF IT'S UPPERCASE OR LOWERCASE
    if(asciiCode >= 65 && asciiCode <= 90){
        console.log("It's an UPPERCASE letter.");
    } else if(asciiCode >= 97 && asciiCode <= 122){
        console.log("It's an lowercase letter.");
    }
} else {
    console.log(`Input is a number: ${userInput}`);
}
