let operand1 = +prompt('Enter the first number:');
let operand2 = +prompt('Enter the second number:');

addition(operand1,operand2);

function addition(num1,num2) {
    let add = num1 + num2;
    console.log('Result: ' + num1 + ' + ' + num2 + ' = ' + add);
}; 


substraction(operand1,operand2);

function substraction(num1,num2){
    let sub = num1 - num2;
    console.log('Result: ' + num1 + ' - ' + num2 + ' = ' + sub);
}; 



multiplication(operand1,operand2);

function multiplication(num1,num2){
    let mult = num1 * num2;
    console.log('Result: ' + num1 + ' * ' + num2 + ' = ' + mult);
}; 


division(operand1,operand2);

function division(num1,num2){
    let div = num1 / num2;
    console.log('Result: ' + num1 + ' / ' + num2 + ' = ' + div);
}; 

