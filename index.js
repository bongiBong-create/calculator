const btnsOperator = document.querySelectorAll(".operator");
const btnsNumber = document.querySelectorAll('.number');
const clear = document.querySelector('.clear');
const panel = document.querySelector('.panel');
const equals = document.querySelector('.equals');

let a = null;
let b = null;
let operator = null;

const operations = {
    "add": add,
    "subtract": subtract,
    "multiply": multiply,
    "divide": divide,
}

clear.addEventListener('click', () => {
    a = null;
    b = null;
    operator = null;
    panel.innerText = 0;
})

equals.addEventListener('click', () => {
    b = panel.innerText;
    display();
})

btnsOperator.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (!operator) {
            a = panel.innerText;
            panel.innerText = ''
            operator = btn.value;
        }
    })
})

btnsNumber.forEach(btn => {
    btn.addEventListener('click', () => {
        if (panel.innerText === "0") {
            panel.innerText = btn.value;
        } else {
            panel.innerText += btn.value;
        }
    })
})

function display() {
    panel.innerText = operate(a, b, operator);
}

function add(a, b) {
    return +a + +b;
}

function subtract(a, b) {
    return +a - +b;
}

function multiply(a, b) {
    return +a * +b;
}

function divide(a, b) {
    return +a / +b;
}

function operate(a, b, operator) {
    return operations[operator](a, b)
}







