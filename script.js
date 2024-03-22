let num1 = 0;
let num2 = 0;
let operator;

function add(num1, num2) {
  return num1 + num2;
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
      add(num1, num2);
      break;
    case "-":
      subtract(num1, num2);
      break;
    case "*":
      multiply(num1, num2);
      break;
    case "/":
      divide(num1, num2);
      break;
  }
}

function populateDisplay(input) {
  let display = document.querySelector(".display");
  if (input === "") {
    display.textContent = "";
  } else {
    display.textContent += input;
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
        populateDisplay("+");
        break;
      case "-":
        populateDisplay("-");
        break;
      case "*":
        populateDisplay("*");
        break;
      case "/":
        populateDisplay("/");
        break;
      case "clear":
        populateDisplay("");
    }
  });
});
