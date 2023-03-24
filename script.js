const firstNum = 0;
const secondNum = 0;
const operator = "";

// Takes two numbers and returns their sum.
function add(a, b) {
    return a + b;
}

// Takes two numbers and returns their difference.
function subtract(a, b) {
    return a - b;
}

// Takes two numbers and returns their multiplication result.
function multiply(a, b) {
    return a * b;
}

// Takes two numbers and returns the result of dividing the first number by the second.
function divide(a, b) {
    return a / b;
}

// Takes three parameters: an operator (string) and two numbers (a and b). It performs an arithemtic operation on the two numbers based on the given operator string, and returns the result. Throws an error message if an invalid operator is provided. 
function operate(operator, a, b) {
    switch(operator) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            result = a / b;
            break;
        default:
            console.log("Invalid operator");
      }
}