let a = 2;
let b = 1;

let result = --a - --b + ++b + b--;

--a;
--a - --b;
--a - --b + ++b;
--a - --b + ++b + b--;

document.write('a is: ', a, '<br>');
document.write('b is: ', b, '<br>');
document.write('result is: ', result);