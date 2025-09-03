let a = 2;
let b = 1;

let result = --a - --b + ++b + b--;

--a;
--a - --b;
--a - --b + ++b;
--a - --b + ++b + b--;

document.writeln('a is: ', a, '<br>');
document.writeln('b is: ', b, '<br>');
document.writeln('result is: ', result);