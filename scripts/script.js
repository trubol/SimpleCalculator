let inputBox=document.getElementById('inputBox');
var firstNumber;
let inputBoxTwo=document.getElementById('operatorBox');
var result=inputBox.value+inputBox.value;
let buttonPlus=document.getElementById('buttonPlus');
let buttonMinus=document.getElementById('buttonMinus');
let buttonMultiply=document.getElementById('buttonMultiply');
let buttonDivide=document.getElementById('buttonDivide');
let resultText=document.getElementById('resultText');

buttonPlus.addEventListener("click", function(e) {
    numberPlus();
})

buttonMinus.addEventListener("click", function(e) {
    numberMinus();
})

buttonMultiply.addEventListener("click", function(e) {
    numberMultiply();
})

buttonDivide.addEventListener("click", function(e) {
    numberDivide();
})

inputBoxTwo.addEventListener("click", function(e) {
    operationEnter();
})

function numberPlus() {
    console.log(inputBox.value);
    firstNumber=Number(inputBox.value);
    operatorBox.innerText='+';
    resultText.innerText=firstNumber+4;
}

function numberMinus() {
    console.log(inputBox.value);
    firstNumber=Number(inputBox.value);
    resultText.innerText=firstNumber-4;
}

function numberMultiply() {
    console.log(inputBox.value);
    firstNumber=Number(inputBox.value);
    resultText.innerText=firstNumber*4;
}

function numberDivide() {
    console.log(inputBox.value);
    firstNumber=Number(inputBox.value);
    resultText.innerText=firstNumber/4;
}


function operationEnter() {
    console.log(inputBoxTwo.value);
    switch (inputBoxTwo.value) {
        case '+':
            {
                resultText.innerText=result;
            }
            break;
    
    default:
    resultText.innerText="Please pick an operation";
}
}