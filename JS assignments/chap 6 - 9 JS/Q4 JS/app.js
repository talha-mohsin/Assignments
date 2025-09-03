// Note: Q4 is empty in book assignment so, here Q5 is Q4.

let num = prompt("Enter any number here to get its table.");


if (num === "") {
  for (i = 1; i <= 10; i++) {
    document.writeln(`<h3> ${5} x ${i} = ${5 * i} </h3>`);
  }
} else {
  for (i = 1; i <= 10; i++) {
    document.writeln(`<h3> ${num} x ${i} = ${num * i} </h3>`);
  }
}
