const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const operatorChars = ["%", "*", "/", "-", "+", "="];
let outcome = "";

const count = (btnValue) => {
  if (btnValue === "=" && outcome !== "") {
    outcome = eval(outcome.replace("%", "/100"));
  } else if (btnValue === "AC") {
    outcome = "";
  } else if (btnValue === "DEL") {
    outcome = outcome.toString().slice(0, -1);
  } else {
    if (outcome === "" && operatorChars.includes(btnValue)) return;
    outcome += btnValue;
  }
  display.value = outcome;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => count(e.target.dataset.value));
});