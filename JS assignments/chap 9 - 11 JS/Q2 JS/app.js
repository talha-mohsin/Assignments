function calculate(){
    let input = document.getElementById('input');
    let output = document.getElementById('output');
    let user = input.value.toLowerCase();
    
    if(user === 'male'){
        output.innerText = 'Good Morning Sir!';
    } else {
        output.innerText = 'Good Morning Maam!';
    }
   
}