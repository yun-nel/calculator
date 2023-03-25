let firstNum = 0;
let secondNum = 0;
let operator = "";
const display = document.querySelector(".display")
let displayValue = 0;
const numButtons = document.querySelectorAll(".num-button");
const opButtons = document.querySelectorAll(".operator") 
const equalsButton = document.querySelector(".equals")
let operatorStatus = false;
let hasFirstNum = false;
let noNum = false;

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
    a = Number(a);
    b = Number(b);

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
            if (display.textContent === "0") {
                display.textContent = "";
            }
            
            display.textContent += button.textContent;
            displayValue = display.textContent;

            if (operatorStatus) {
                operatorStatus = false;
                display.textContent = "";
                display.textContent += button.textContent;
                displayValue = display.textContent;
                hasFirstNum = true;
            }

        });
    });
}

function clickOperator() {
    opButtons.forEach(button => {
        button.addEventListener("click", () => {
            if (hasFirstNum) {
                // If we already have a first number, calculate with the second number
                secondNum = display.textContent;
                result = operate(operator, firstNum, secondNum);
                console.log(`${firstNum} ${operator} ${secondNum}`)
                display.textContent = result;
                firstNum = result;
                secondNum = 0;
                operator = button.id;
            } else {
                // If we don't have a first number yet, store the current value as the first number
                firstNum = displayValue;
                operator = button.id;
                hasFirstNum = true;
            }
            operatorStatus = true;
        });
    });
}

function clickEquals() {
    equalsButton.addEventListener("click", () => {
      if (hasFirstNum) {
        // If we have a first number, calculate with the second number
        secondNum = displayValue;
        result = operate(operator, firstNum, secondNum);
        display.textContent = result;
        firstNum = result;
        secondNum = 0;
        operator = "";
        hasFirstNum = false;
        operatorStatus = true;
      }
    });
  }

displayNum()
clickOperator()
clickEquals()
