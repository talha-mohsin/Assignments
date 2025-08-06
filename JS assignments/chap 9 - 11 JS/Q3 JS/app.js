function calculateLight() {
  let input = document.getElementById("input");
  let redLight = document.getElementById("red");
  let yellowLight = document.getElementById("yellow");
  let greenLight = document.getElementById("green");
  let output = document.getElementById("output");

  input = input.value.toLowerCase();

  if (input === "red") {
    redLight.style.backgroundColor = "red";
    yellowLight.style.backgroundColor = "rgba(70, 70, 37, 1)";
    greenLight.style.backgroundColor = "rgba(70, 70, 37, 1)";
    output.innerText = "Must Stop";
    output.style.color = "red";
  } else if (input === "yellow") {
    redLight.style.backgroundColor = "rgba(70, 70, 37, 1)";
    yellowLight.style.backgroundColor = "yellow";
    greenLight.style.backgroundColor = "rgba(70, 70, 37, 1)";
    output.innerText = "Ready to move";
    output.style.color = "yellow";
  } else if (input === "green") {
    redLight.style.backgroundColor = "rgba(70, 70, 37, 1)";
    yellowLight.style.backgroundColor = "rgba(70, 70, 37, 1)";
    greenLight.style.backgroundColor = "green";
    output.innerText = "Move now";
    output.style.color = "green";
  } else {
    redLight.style.backgroundColor = "rgba(70, 70, 37, 1)";
    yellowLight.style.backgroundColor = "rgba(70, 70, 37, 1)";
    greenLight.style.backgroundColor = "rgba(70, 70, 37, 1)";
    output.innerText = "Please enter only \ntraffic lights color";
    output.style.color = "blue";
  }
}
