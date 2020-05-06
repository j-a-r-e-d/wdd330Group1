function sum(x, y) {
  return x + y;
}
function subtract(x, y) {
  return x - y;
}
function multiply(x, y) {
  return x * y;
}
function divide(x, y) {
  return x / y;
}

function displayOperators() {
  const operator = document.getElementById("operator").value;
  const displayDiv = document.getElementById('displayDiv');
  const num1 = Number(document.getElementById('number1').value);
  const num2 = Number(document.getElementById('number2').value);

  if (operator === "multiply") {
    displayDiv.innerHTML = multiply(num1, num2);
  }
  else if (operator === "divide") {
    displayDiv.innerHTML = divide(num1, num2);
  }
  else if (operator === "subtract") {
    displayDiv.innerHTML = subtract(num1, num2);
  }
  else if (operator === "add") {
    displayDiv.innerHTML = sum(num1, num2);
  }
}

function callBackOperator() {
  var operator = document.getElementById("operator").value;
  var num1 = parseFloat(document.getElementById("number1").value);
  var num2 = parseFloat(document.getElementById("number2").value);
  var addCallback = (num1, num2) => num1 + num2;
  var subtractCallback = (num1, num2) => num1 - num2;
  var multiplyCallback = (num1, num2) => num1 * num2;
  var divideCallback = (num1, num2) => num1 / num2;

  if (operator === "multiply") {
      document.getElementById("displayDiv").innerHTML = multiplyCallback(num1, num2);
  } if (operator === "divide") {
      document.getElementById("displayDiv").innerHTML = divideCallback(num1, num2);
  } if (operator === "subtract") {
      document.getElementById("displayDiv").innerHTML = subtractCallback(num1, num2);
  } if (operator === "add") {
      document.getElementById("displayDiv").innerHTML = addCallback(num1, num2);
  }
}
