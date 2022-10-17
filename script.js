function addition(...numbers) {
  let result = numbers.reduce((num1, num2) => num1 + num2);
  return result;
}
//console.log(addition(10, 2, 18));

function subtraction(...numbers) {
  let result = numbers.reduce((num1, num2) => num1 - num2);
  return result;
}
//console.log(subtraction(10, 2, 9));

function multiplication(...numbers) {
  let result = numbers.reduce((num1, num2) => num1 * num2);
  return result;
}
//console.log(multiplication(10, 2));

function division(...numbers) {
  let result = numbers.reduce((num1, num2) => num1 / num2);
  return result;
}
//console.log(division(10, 2));
