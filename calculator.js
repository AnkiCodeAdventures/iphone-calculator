"use strict";

const calculator = document.querySelector(".calculator");
let key;
let number = "";
let workingNumber = 0;
let operator = "";

calculator.addEventListener("click", (event) => {
  key = event.target.textContent;
  if (isNaN(key)) {
    //It is a symbol
    operator = key;

    handlesMath();
  } else {
    //It is a number

    handlesNumber();
  }
});

function handlesNumber() {
  number = number + key;
  rerender(number);
}

function rerender(num) {
  document.querySelector("#screen").innerText = num;
}

function handlesMath() {
  switch (key) {
    case "C":
      document.querySelector("#screen").innerText = 0;
      break;
    case "←":
      number = number.substring(0, number.length - 1); //removes last digit
      rerender(number);
      break;
    case "+":
      workingNumber = workingNumber + parseInt(number);
      number = "";
      console.log(workingNumber);
      rerender(workingNumber);

      break;
    case "-":
      workingNumber = workingNumber - parseInt(number);
      number = "";
      console.log(workingNumber);
      rerender(workingNumber);

      break;
  }
}
