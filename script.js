let num1 = "";
let num2 = "";
let operator = "";
let display = document.querySelector(".display");

function add(num1, num2) {
  return Number(num1) + Number(num2);
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(operation, num1, num2) {
  switch (operation) {
    case "+":
      display.textContent = add(num1, num2);
      break;
    case "-":
      display.textContent = subtract(num1, num2);
      break;
    case "*":
      display.textContent = multiply(num1, num2);
      break;
    case "/":
      display.textContent = divide(num1, num2);
      break;
  }
}

function populateDisplay(input) {
  if (input === "") {
    display.textContent = " ";
  } else {
    if (operator === "") {
      num1 += input;
      display.textContent = num1;
    } else {
      num2 += input;
      display.textContent = num2;
    }
  }
}

// Add button click event listener
const button = document.querySelectorAll(".button");

button.forEach((buttonItem) => {
  buttonItem.addEventListener("click", () => {
    switch (buttonItem.textContent) {
      case "1":
        populateDisplay("1");
        break;
      case "2":
        populateDisplay("2");
        break;
      case "3":
        populateDisplay("3");
        break;
      case "4":
        populateDisplay("4");
        break;
      case "5":
        populateDisplay("5");
        break;
      case "6":
        populateDisplay("6");
        break;
      case "7":
        populateDisplay("7");
        break;
      case "8":
        populateDisplay("8");
        break;
      case "9":
        populateDisplay("9");
        break;
      case "0":
        populateDisplay("0");
        break;
      case "+":
        operator = "+";
        break;
      case "-":
        operator = "-";
        break;
      case "*":
        operator = "*";
        break;
      case "/":
        operator = "/";
        break;
      case "=":
        operate(operator, num1, num2);
        break;
      case "clear":
        populateDisplay("");
        num1 = "";
        num2 = "";
        operator = "";
        break;
    }
  });
});
