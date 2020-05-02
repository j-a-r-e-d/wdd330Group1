function sum(x, y) {
    var result;
    result = x + y;
    return (result);
}
function subtract(x, y) {
    var result;
    result = x - y;
    return (result);
}
function multiply(x, y) {
    var result;
    result = x * y;
    return (result);
}
function divide(x, y) {
    var result;
    result = x / y;
    return (result);
}

function displayOperators() {
    var operator = document.getElementById("operator").value;
    var num1 = Number(document.getElementById('number1').value);
    var num2 = Number(document.getElementById('number2').value);

    if (operator === "multiply") {
      document.getElementById("displayDiv").innerHTML = multiply(num1, num2);
    } if (operator === "divide") {
      document.getElementById("displayDiv").innerHTML = divide(num1, num2);
    } if (operator === "subtract") {
      document.getElementById("displayDiv").innerHTML = subtract(num1, num2);
    } if (operator === "add") {
      document.getElementById("displayDiv").innerHTML = sum(num1, num2);
    }
  }