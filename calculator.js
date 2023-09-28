const result = document.querySelector("#screen");
let bufferNumber = "0";
let previousOperator = "+";
let runningTotal = "0";

document.querySelector(".calculator").addEventListener("click", onClick);

function onClick(event) {
  value = event.target.innerText;
  if (isNaN(value)) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  rerender();
}

function rerender() {
  result.innerText = bufferNumber;
}
function handleNumber(value) {
  if (bufferNumber === "0") {
    bufferNumber = value;
  } else {
    bufferNumber = bufferNumber + value;
  }
}

function handleSymbol(value) {
  switch (value) {
    case "C":
      bufferNumber = "0";
      runningTotal = "0";
      break;
    case "←":
      if (bufferNumber.length === 1) {
        bufferNumber = "0";
      } else {
        bufferNumber = bufferNumber.substring(0, bufferNumber.length - 1);
      }
      break;
    case "÷":
    case "x":
    case "+":
    case "-":
      handleMath(value);
      break;
    case "=":
      flushOperation();
      bufferNumber = runningTotal.toString();
      runningTotal = "0";
  }
}

function handleMath(value) {
  previousOperator = value;
  if (runningTotal === "0") {
    runningTotal = parseInt(bufferNumber);
    bufferNumber = "0";
  } else {
    flushOperation();
  }
}

function flushOperation() {
  if (previousOperator === "+") {
    runningTotal = parseInt(bufferNumber) + parseInt(runningTotal);
    console.log(runningTotal);
  }
  if (previousOperator === "-") {
    runningTotal = parseInt(runningTotal) - parseInt(bufferNumber);
    console.log(runningTotal);
  }
  if (previousOperator === "x") {
    runningTotal = parseInt(bufferNumber) * parseInt(runningTotal);
    console.log(runningTotal);
  }
  if (previousOperator === "÷") {
    runningTotal = parseInt(runningTotal) / parseInt(bufferNumber);
    console.log(runningTotal);
  }
}
