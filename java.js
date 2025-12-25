const display = document.getElementById("result");
const buttons = document.querySelectorAll(".btn");

let currentNumber = "";
let previousNumber = "";
let operation = null;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (!isNaN(value)) {
      addNumber(value);
    } 
    else if (value === "+" || value === "-") {
      setOperation(value);
    } 
    else if (value === "=") {
      calculate();
    } 
    else if (value === "C") {
      clearDisplay();
    }
  });
});

function addNumber(number) {
  currentNumber += number;
  display.value = currentNumber;
}

function setOperation(op) {
  if (currentNumber === "") return;

  operation = op;
  previousNumber = currentNumber;
  currentNumber = "";
}

function calculate() {
  if (previousNumber === "" || currentNumber === "") return;

  let result;

  if (operation === "+") {
    result = Number(previousNumber) + Number(currentNumber);
  } 
  else if (operation === "-") {
    result = Number(previousNumber) - Number(currentNumber);
  }

  display.value = result;
  currentNumber = result.toString();
  previousNumber = "";
  operation = null;
}

function clearDisplay() {
  currentNumber = "";
  previousNumber = "";
  operation = null;
  display.value = "";
}