let firstNum;
let secondNum;
let operand;
let result;

function add() {
  result = parseInt(firstNum) + parseInt(secondNum);
  return result;
}
//console.log(addition(10, 2, 18));

function subtract() {
  result = firstNum - secondNum;
  return result;
}
//console.log(subtraction(10, 2, 9));

function multiply() {
  result = firstNum * secondNum;
  return result;
}
//console.log(multiplication(10, 2));

function divide() {
  result = firstNum / secondNum;
  return result;
}
//console.log(division(10, 2));

function operate() {
  firstNum = prompt("Type the first number:");
  secondNum = prompt("Type the second number: ");
  operand = prompt("Type your operand: ");

  if (operand === "+") {
    return add();
  } else if (operand === "-") {
    return subtract();
  } else if (operand === "*") {
    return multiply();
  } else if (operand === "/") {
    return divide();
  } else {
    result = "error";
  }
  return result;
}
console.log(operate());
console.log(firstNum);
console.log(secondNum);
console.log(operand);
