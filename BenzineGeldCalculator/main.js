import "./style.css";

const calcBtn = document.getElementById("calcBtn");
const fuelType = document.getElementById("fuelSelect").value;

calcBtn.onclick = () => {
  const distance = document.getElementById("distance").value;
  const fuelPrice = document.getElementById("fuelPrice").value;
  const efficiency = document.getElementById("efficiency").value;

  if (!distance && !fuelType && !fuelPrice && !efficiency) return;

  const price = Math.round((distance / efficiency) * fuelPrice * 100) / 100;

  const paragraph = document.createElement("p");
  paragraph.classList.add("result");
  paragraph.innerHTML = `\u20AC${price}`;
  document.getElementById("app").appendChild(paragraph);
};
