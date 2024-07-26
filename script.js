function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

let oldNum = "reset";
let newNum = "reset";
let operator = "";
let typeInProg = false;

let displayVal = "";

function operate(op, first, last) {
    let value = "";
    if (op == "plus") {
        value = add(first, last);
    } else if (op == "minus") {
        value = subtract(first, last);
    } else if (op == "multiply") {
        value = multiply(first, last);
    } else if (op == "divide") {
        value = divide(first, last);
        if (value == "Infinity") {
            clearDisplay();
            value = "You know you're not allowed to do that!";
        }
    }
    console.log(value);
    clearDisplay();
    updateDisplay(value.toString());
    typeInProg = false;
    oldNum = "reset";
    newNum = "reset";
};

function clearDisplay() {
    const screen = document.querySelector(".screen");
    displayVal = " ";
    screen.textContent = displayVal;
};

function updateDisplay(input) {
    const screen = document.querySelector(".screen");
    displayVal = displayVal + input;
    screen.textContent = displayVal;
};

const buttonNum = document.querySelectorAll(".number");
buttonNum.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(Number(button.id));
        if (typeInProg) {
            updateDisplay(button.id);
        } else {
            clearDisplay();
            updateDisplay(button.id);
        }
        typeInProg = true;
    });
});

const buttonOperator = document.querySelectorAll(".operator");
buttonOperator.forEach((button) => {
    button.addEventListener("click", () => {
        oldNum = newNum;
        newNum = (displayVal);
        if (oldNum != "reset") {
            operate(operator, Number(oldNum), Number(newNum));
            operator = (button.id);
        } else {
            operator = (button.id);
        }
        typeInProg = false;
    });
});

const buttonEquals = document.querySelector("#equals");
buttonEquals.addEventListener("click", () => {
    oldNum = newNum;
    newNum = (displayVal);
    if (oldNum != "reset") {
        operate(operator, Number(oldNum), Number(newNum));
    }
    typeInProg = false;
});

const buttonClear = document.querySelector(".clear");
buttonClear.addEventListener("click", () => {
    clearDisplay();
    updateDisplay("0");
    oldNum = "reset";
    newNum = "reset";
    operator = "";
    typeInProg = false;
});

const buttonToggle = document.querySelector(".toggle");
buttonToggle.addEventListener("click", () => {
    displayVal = Number(displayVal) * -1;
    updateDisplay("");
});

const buttonDelete = document.querySelector(".delete");
buttonDelete.addEventListener("click", () => {
    displayVal = displayVal.slice(0, displayVal.length - 1);
    updateDisplay("");
});

const buttonDecimal = document.querySelector(".decimal");
buttonDecimal.addEventListener("click", () => {
    if (!displayVal.includes("."))
        if (typeInProg) {
            updateDisplay(".");
        } else {
            clearDisplay();
            updateDisplay(".");
        }
        typeInProg = true;
});