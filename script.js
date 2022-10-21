let firstNum;
let secondNum;
let operand;

/*function add(...numbers) {
  let result = numbers.reduce((num1, num2) => num1 + num2);
  return result;
}
//console.log(addition(10, 2, 18));

function subtrac(...numbers) {
  let result = numbers.reduce((num1, num2) => num1 - num2);
  return result;
}
//console.log(subtraction(10, 2, 9));

function multiply(...numbers) {
  let result = numbers.reduce((num1, num2) => num1 * num2);
  return result;
}
//console.log(multiplication(10, 2));

function divise(...numbers) {
  let result = numbers.reduce((num1, num2) => num1 / num2);
  return result;
}
//console.log(division(10, 2));*/

function operate() {
  firstNum = prompt("Type the first number:");
  secondNum = prompt("Type the second number: ");
  operand = prompt("Type your operand: ");

  if (operand === "+") {
    result = parseInt(firstNum) + parseInt(secondNum);
  } else if (operand === "-") {
    result = parseInt(firstNum) - parseInt(secondNum);
  } else if (operand === "*") {
    result = parseInt(firstNum) * parseInt(secondNum);
  } else if (operand === "/") {
    result = parseInt(firstNum) / parseInt(secondNum);
  } else {
    result = "error";
  }
  return result;
}
console.log(operate());
console.log(firstNum);
console.log(secondNum);
console.log(operand);
