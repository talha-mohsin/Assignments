function calculate() {
  let input = document.getElementById("input");
  let needle = document.getElementById("needle");
  let output = document.getElementById("output");

  let fuel = parseFloat(input.value);

  if (isNaN(fuel) || fuel < 0) {
    output.innerText = "Please enter a valid fuel amount";
    return;
  }

  if(fuel > 100) fuel = 100;

  let angle = ((fuel / 100) * 180);
  needle.style.transform = `rotate(${angle}deg)`;

  output.innerText =
    fuel < 0.25
      ? "⚠️ Please refill the fuel \nin your car"
      : `⛽ ${fuel} litres remaining`;
}
