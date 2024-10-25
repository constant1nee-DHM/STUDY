var num1 = Number(prompt('Type the first number: '));
var operator = prompt('Type the operator: ');
var num2 = Number(prompt('Type the second number: '));
var result = 0

if (operator == '+') {
    result = num1 + num2;
}
else if (operator == '-') {
    result = num1 - num2;
}
else if (operator == '*') {
    result = num1 * num2;
}
else if (operator == '/' && num2 != 0) {
    result = num1 / num2;
}

console.log('Result: ' + result);