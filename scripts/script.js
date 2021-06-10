let inputBox = document.getElementById('inputBox');
var firstNumber;
var secondNumber;
let inputBoxTwo = document.getElementById('operatorBox');
let buttonOne=document.getElementById('buttonOne');
let buttonPlus = document.getElementById('buttonPlus');
let buttonMinus = document.getElementById('buttonMinus');
let buttonMultiply = document.getElementById('buttonMultiply');
let buttonDivide = document.getElementById('buttonDivide');
let buttonAnswer = document.getElementById('buttonAnswer');
let buttonClear = document.getElementById('buttonClear');
let resultText = document.getElementById('resultText');

// I can't figure out how to get a number button to add its value and display in the input field.
buttonOne.addEventListener("click", function (e) {
    enterNumber();
    console.log(inputBox.value);
})

buttonPlus.addEventListener("click", function (e) {
    numberPlus();
})

buttonMinus.addEventListener("click", function (e) {
    numberMinus();
})

buttonMultiply.addEventListener("click", function (e) {
    numberMultiply();
})

buttonDivide.addEventListener("click", function (e) {
    numberDivide();
})

inputBoxTwo.addEventListener("click", function (e) {
    operationEnter();
})

buttonAnswer.addEventListener("click", function (e) {
    answer();
})

buttonClear.addEventListener("click", function (e) {
    clear();
})

// My attempt at trying to get the number button to add its value to the inputBox
function enterNumber() {
    inputBox.value=inputBox.value+inputBox.value;
}

function numberPlus() {
    console.log(inputBox.value);
    firstNumber = Number(inputBox.value);
    operatorBox.innerText = '+';
    inputBox.value=null;
}

function numberMinus() {
    console.log(inputBox.value);
    firstNumber = Number(inputBox.value);
    operatorBox.innerText = '-';
    inputBox.value=null;
}

function numberMultiply() {
    console.log(inputBox.value);
    firstNumber = Number(inputBox.value);
    operatorBox.innerText = '*';
    inputBox.value=null;
}

function numberDivide() {
    console.log(inputBox.value);
    firstNumber = Number(inputBox.value);
    operatorBox.innerText = '/'
    inputBox.value=null;
}

function answer() {
    console.log(inputBox.value);
    switch (operatorBox.innerText) {
        case '+':
            {
                secondNumber = Number(inputBox.value);
                resultText.innerText = firstNumber + secondNumber;
            }
            break;

        case '-':
            {
                secondNumber = Number(inputBox.value);
                resultText.innerText = firstNumber - secondNumber;
            }
            break;

        case '*':
            {
                secondNumber = Number(inputBox.value);
                resultText.innerText = firstNumber * secondNumber;
            }
            break;

        case '/':
            {
                secondNumber = Number(inputBox.value);
                resultText.innerText = firstNumber / secondNumber;
            }
            break;

        default:
            resultText.innerText = "Please pick an operation";
    }


} function clear() {
    inputBox.value = null;
    operatorBox.innerText = 'You selected the operator';
    resultText.innerText='Result';

}