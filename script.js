function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a , b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let oldNum = "reset";
let newNum = "reset";
let operator = "";

let displayVal = "";

function operate(op, first, last) {
    if (op == "plus") {
        return add(first, last);
    } else if (op == "minus") {
        return subtract(first, last);
    } else if (op == "multiply") {
        return multiply(first, last);
    } else if (op == "divide") {
        return divide(first, last);
    }
}

function updateDisplay(input) {
    const screen = document.querySelector(".screen");
    displayVal = displayVal + input;
    screen.textContent = displayVal;
}

const buttonNum = document.querySelectorAll(".number");
buttonNum.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(Number(button.id));
        updateDisplay(button.id);
    });
});

const buttonOperator = document.querySelectorAll(".operator");
buttonOperator.forEach((button) => {
    button.addEventListener("click", () => {
        newNum = (displayVal);
        if (oldNum != "reset") {

        } else {
            operator = (button.id);
        }
    })
})