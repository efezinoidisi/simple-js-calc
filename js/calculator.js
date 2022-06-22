let firstNumber = null;
let secondNumber = null;
let result = null;

alert("Welcome to my simple Javascript Calculator");
firstNumber = parseFloat(prompt("Enter the first number:"));
operatorChoice = prompt("choose an operator + - / * : ");
secondNumber = parseFloat(prompt("Enter the second number:"));

if (operatorChoice == "+") {
	result = firstNumber + secondNumber;
} else if (operatorChoice == "-") {
	result = firstNumber - secondNumber;
} else if (operatorChoice == "/") {
	result = firstNumber / secondNumber;
} else if (operatorChoice == "*") {
	result = firstNumber * secondNumber;
} else {
	alert("Invalid selection, Refresh and try again");
}

alert(`${firstNumber}+${secondNumber}= ${result}`);
