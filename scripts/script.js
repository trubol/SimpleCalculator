let inputBox = document.getElementById('inputBox');
var firstNumber;
var secondNumber;
let inputBoxTwo = document.getElementById('operatorBox');
let buttonOne=document.getElementById('buttonOne');
let buttonTwo=document.getElementById('buttonTwo');
let buttonThree=document.getElementById('buttonThree');
let buttonFour=document.getElementById('buttonFour');
let buttonFive=document.getElementById('buttonFive');
let buttonSix=document.getElementById('buttonSix');
let buttonSeven=document.getElementById('buttonSeven');
let buttonEight=document.getElementById('buttonEight');
let buttonNine=document.getElementById('buttonNine');
let buttonZero=document.getElementById('buttonZero');
let buttonPlus = document.getElementById('buttonPlus');
let buttonMinus = document.getElementById('buttonMinus');
let buttonMultiply = document.getElementById('buttonMultiply');
let buttonDivide = document.getElementById('buttonDivide');
let buttonAnswer = document.getElementById('buttonAnswer');
let buttonClear = document.getElementById('buttonClear');
let resultText = document.getElementById('resultText');

buttonOne.addEventListener("click", function (e) {
    enterNumber();
    inputBox.value=inputBox.value+1;
    console.log(inputBox.value);
})

buttonTwo.addEventListener("click", function (e) {
    enterNumber();
    inputBox.value=inputBox.value+2;
    console.log(inputBox.value);
})

buttonThree.addEventListener("click", function (e) {
    enterNumber();
    inputBox.value=inputBox.value+3;
    console.log(inputBox.value);
})

buttonFour.addEventListener("click", function (e) {
    enterNumber();
    inputBox.value=inputBox.value+4;
    console.log(inputBox.value);
})

buttonFive.addEventListener("click", function (e) {
    enterNumber();
    inputBox.value=inputBox.value+5;
    console.log(inputBox.value);
})

buttonSix.addEventListener("click", function (e) {
    enterNumber();
    inputBox.value=inputBox.value+6;
    console.log(inputBox.value);
})

buttonSeven.addEventListener("click", function (e) {
    enterNumber();
    inputBox.value=inputBox.value+7;
    console.log(inputBox.value);
})

buttonEight.addEventListener("click", function (e) {
    enterNumber();
    inputBox.value=inputBox.value+8;
    console.log(inputBox.value);
})

buttonNine.addEventListener("click", function (e) {
    enterNumber();
    inputBox.value=inputBox.value+9;
    console.log(inputBox.value);
})

buttonZero.addEventListener("click", function (e) {
    enterNumber();
    inputBox.value=inputBox.value+0;
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

function enterNumber() {
    inputBox.value=inputBox.value;
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