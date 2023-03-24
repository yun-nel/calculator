const firstNum = 0;
const secondNum = 0;
const operator = "";
const display = document.querySelector(".display")
let displayValue = 0;
const numButtons = document.querySelectorAll(".num-button");

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

// Takes three arguments: an operator (string) and two numbers (a and b). Calls an existing arithmetic function to perform an operation on the two numbers based on the given operator string, and returns the result. Throws an error message if an invalid operator is provided. 
function operate(operator, a, b) {
    let result = 0;

    switch(operator) {
        case "+":
            result = add(a, b);
            break;
        case "-":
            result = subtract(a, b);
            break;
        case "*":
            result = multiply(a, b);
            break;
        case "/":
            result = divide(a, b);
            break;
        default:
            console.log("Invalid operator");
      }
    
    return result;
}

function displayNum() {
    numButtons.forEach(button => {
        button.addEventListener("click", () => {
            display.textContent += button.textContent;
            displayValue = display.textContent;
        });
    });
}

displayNum()
