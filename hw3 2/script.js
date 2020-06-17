let selectAct = prompt('Select an action:');
let firstNum = +prompt('Enter the first number:');
let secondNum = +prompt('Enter the second number:');

switch(selectAct){
    case '+' : add(firstNum,secondNum); break;
    case '-' : sub(firstNum,secondNum); break;
    case '*' : mult(firstNum,secondNum); break;
    case '/' : div(firstNum,secondNum); break;
    default: alert('Please enter correct math action'); break;
}

function add(a,b) {
    let result = a + b;
    console.log(`Result: ${a} + ${b} = ${result}`);
    return result;
}; 

function sub(a,b){
    let result = a - b;
    console.log(`Result: ${a} - ${b} = ${result}`);
    return result;
}; 

function mult(a,b){
    let result = a * b;
    console.log(`Result: ${a} * ${b} = ${result}`);
    return result;
}; 

function div(a,b){
    let result = a / b;
    console.log(`Result: ${a} / ${b} = ${result}`);
    return result;
}; 

