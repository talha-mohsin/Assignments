let subject = 100;

let sub1 = prompt("Enter your subject 1 name");
let sub2 = prompt("Enter your subject 2 name");
let sub3 = prompt("Enter your subject 3 name");

let marks1 = prompt(`Enter your ${sub1} marks`);
let marks2 = prompt(`Enter your ${sub2} marks`);
let marks3 = prompt(`Enter your ${sub3} marks`);

marks1 = Number(marks1);
marks2 = Number(marks2);
marks3 = Number(marks3);

let totalMarks = subject * 3;
let obtainedMarks = marks1 + marks2 + marks3;
let percentage = (obtainedMarks * 100) / totalMarks;

let percentage1 = `${marks1}%`;
let percentage2 = `${marks2}%`;
let percentage3 = `${marks3}%`;

document.write(
  `<table> 
    <tr>
     <th>Subject</th> <th>Total Marks</th> <th>Obtained Marks</th> <th>Percentage</th> 
    </tr>
    <tr> 
     <td>${sub1}</td> <td>${subject}</td> <td>${marks1}</td> <td>${percentage1}</td>
    </tr>
    <tr> 
     <td>${sub2}</td> <td>${subject}</td> <td>${marks2}</td> <td>${percentage2}</td>
    </tr>
    <tr> 
     <td>${sub3}</td> <td>${subject}</td> <td>${marks3}</td> <td>${percentage3}</td>
    </tr>
    <tr> 
     <td>Total</td> <td>${totalMarks}</td> <td>${obtainedMarks}</td> <td>${percentage}%</td>
    </tr>
   </table>`
);
