const numberButtons = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".btn-math");
const equalsButton = document.querySelector(".btn-equals");
const deleteButton = document.querySelector(".btn-delete");
const clearButton = document.querySelector(".btn-clear");
const prevNumber = document.querySelector(".prevNumber");
const newNumber = document.querySelector(".newNumber");
const addition = document.getElementById("add");
const subtraction = document.getElementById("substract");
const multi = document.getElementById("multiply");
const divi = document.getElementById("divide");

let operator;
let compute;

clear();

function checkLength() {
  if (compute.length > 8) {
    compute = compute.slice(0, 8);
    newNumber.innerText = compute;
  }
}

function add(numOne, numTwo) {
  compute = newNumber.innerText = +numOne + +numTwo;
  compute = compute.toString();
  checkLength();
  console.log(compute);
}

function substract(numOne, numTwo) {
  compute = newNumber.innerText = +numOne - +numTwo;
  compute = compute.toString();
  checkLength();
  console.log(compute);
}

function multiply(numOne, numTwo) {
  compute = newNumber.innerText = +numOne * +numTwo;
  compute = compute.toString();
  checkLength();
  console.log(compute);
}

function divide(numOne, numTwo) {
  compute = newNumber.innerText = +numOne / +numTwo;
  compute = compute.toString();
  checkLength();
  console.log(compute);
}

function operate(operator, numOne, numTwo) {
  switch (operator) {
    case "+":
      add(numOne, numTwo);
      break;
    case "-":
      substract(numOne, numTwo);
      break;
    case "×":
      multiply(numOne, numTwo);
      break;
    case "÷":
      divide(numOne, numTwo);
  }
}

function clear() {
  newNumber.innerText = "";
  prevNumber.innerText = "";
  operation = undefined;
}

function backspace(number) {
  let sliced = number.slice(0, -1);
  newNumber.innerText = sliced;
}

function appendNumber(number) {
  if (
    (number === "." && newNumber.innerText.includes(".")) ||
    (number === "0" && newNumber.innerText.includes("0"))
  )
    return;
  newNumber.innerText += number;
}

function chooseOperation(operation) {
  operator = operation;
  if (newNumber.innerText != "") prevNumber.innerText = newNumber.innerText;
  newNumber.innerText = "";
  prevNumber.removeAttribute("hidden");
}

function updateDisplay() {
  newNumber.innerText;
}

function resetOperations() {
  operationButtons.forEach((mathButton) => {
    mathButton.removeAttribute("disabled");
  });
}

function numberClick(button) {
  resetOperations();
  prevNumber.setAttribute("hidden", true);
  newNumber.removeAttribute("hidden");
  if (newNumber.innerText.length < 8) {
    appendNumber(button);
  }
  updateDisplay();
}

function operationClick(button) {
  newNumber.setAttribute("hidden", true);
  prevNum = prevNumber.innerText;
  newNum = newNumber.innerText;

  if (prevNum != "" && newNum != "") {
    prevNum = operate(operator, prevNum, newNum);
  }
  resetOperations();
  chooseOperation(button);
}

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    numberClick(button.innerText);
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    operationClick(button.innerText);
    const targetOperator = e.target;
    targetOperator.setAttribute("disabled", true);
  });
});

equalsButton.addEventListener("click", () => {
  prevNum = prevNumber.innerText;
  newNum = newNumber.innerText;
  operate(operator, prevNum, newNum);
  prevNumber.innerText = "";
});

deleteButton.addEventListener("click", () => {
  backspace(newNumber.innerText);
  updateDisplay();
});

clearButton.addEventListener("click", () => {
  clear();
  resetOperations();
});

// Keyboard functionality

window.addEventListener("keydown", (e) => {
  if (
    e.key == "1" ||
    e.key == "2" ||
    e.key == "3" ||
    e.key == "4" ||
    e.key == "5" ||
    e.key == "6" ||
    e.key == "7" ||
    e.key == "8" ||
    e.key == "9" ||
    e.key == "0" ||
    e.key == "."
  ) {
    numberClick(e.key);
  }
  if (e.key == "+") {
    operationClick(e.key);
  } else if (e.key == "-") {
    operationClick(e.key);
  } else if (e.key == "*") {
    operationClick("×");
  } else if (e.key == "/") {
    operationClick("÷");
  } else if (e.key == "=" || e.key == "Enter") {
    prevNum = prevNumber.innerText;
    newNum = newNumber.innerText;
    operate(operator, prevNum, newNum);
    prevNumber.innerText = "";
  } else if (e.key == "Backspace") {
    backspace(newNumber.innerText);
  } else if (e.key == "Escape" || e.key == " ") {
    clear();
    resetOperations();
  }
});
