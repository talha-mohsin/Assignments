let originalPassword = 'student@123';
let userPassword = prompt('Enter your password');

if(userPassword === ''){
    alert(`Please, enter the password`);
} else if(userPassword === originalPassword){
    alert(`Correct! The password matches.`);
} else{
    alert(`Incorrect! please enter the valid password`);
}