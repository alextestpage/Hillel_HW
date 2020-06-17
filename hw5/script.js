let operation = getOperation();
let operands = getOperands();
let userNumbers = checkNumbers(operands);
calculate(operation, userNumbers);


function getOperation() {
    let userInput;

    do {
        userInput = prompt(`Enter required math action:`, ` +  -  * / `);
    }
    while (!checkAction(userInput));

    return userInput;
}

function checkAction(inputValue) {
    switch (inputValue) {
        case "+":
        case "-":
        case "*":
        case "/":
            return inputValue;
    }
}

function getOperands() {
    let userInput;
    do {
        userInput = prompt(`Enter operands:`)
    } while (userInput === '');
    return userInput;
}

function checkNumbers(operands) {
    let arr = operands.split(' ');
    let numbers = [];
    for (let key of arr) {
        if (!isNaN(key)) {
            numbers.push(key);
        }
    }
    return numbers;
}

function calculate(operation, operands) {
    switch (operation) {
        case '+':
            sum(operands);
            break;
        case '-':
            sub(operands);
            break;
        case '*':
            mult(operands);
            break;
        case '/':
            div(operands);
            break;
    }
}

function sum(operands) {
    let result = operands[0];

    for (let i = 1; i < operands.length; i++) {
        result = Number(result) + Number(operands[i]);
    }

    console.log(`Result: ${result}`)

}

function sub(operands) {
    let result = operands[0];

    for (let i = 1; i < operands.length; i++) {
        result = result - operands[i];
    }

    console.log(`Result: ${result}`)

}

function mult(operands) {
    let result = operands[0];

    for (let i = 1; i < operands.length; i++) {
        result = result * operands[i];
    }

    console.log(`Result: ${result}`)

}

function div(operands) {
    let result = operands[0];

    for (let i = 1; i < operands.length; i++) {
        result = result / operands[i];
    }

    console.log(`Result: ${result}`)

}