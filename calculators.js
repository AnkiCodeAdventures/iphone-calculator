"use strict";

let number = "";
let previousOperator = "";
let operator = "";
let runningTotal = "";

const calculator = document.querySelector("#calculator");
const result = document.querySelector("#result");

calculator.addEventListener("click", onClick);

function calculation(num, symbol) {
  runningTotal= 
}

function onClick(event) {
  onButtonClick(event.target.innerText);
}

function onButtonClick(value) {
  if (isNaN(value)) {
    //It is a symbol
    handleSymbol(value);
  } else {
    // It is a value
    handleNumber(value);
  }
}

function rerender(value) {
  result.innerText = value;
}

function handleNumber(clickedNumber) {
  if (clickedNumber === "0" && number === "") {
    return;
  }
  number = number + clickedNumber;
  rerender(number);
}

function handleMath(value) {
  if (operator == "") previousOperator = value;
  console.log(previousOperator);
}

function handleSymbol(value) {
  switch (value) {
    case "←":
      if (number.length <= 1) {
        rerender("0");
        number = "";
      } else {
        number = number.substring(0, number.length - 1);
        rerender(number);
      }
      break;
    case "C":
      number = "";
      rerender("0");
      break;
    case "÷":
    case "×":
    case "+":
    case "−":
      calculator(number, "+");
      operator = value;
      handleMath(value);
      break;
  }
}
