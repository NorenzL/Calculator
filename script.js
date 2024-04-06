let num1 = "";
let num2 = "";
let operator = "";
let result = "";
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
  if (num2 === "0") {
    return "HUH?";
  }

  return num1 / num2;
}

function operate(operation, numb1, numb2) {
  result = 0;

  switch (operation) {
    case "+":
      result = add(numb1, numb2);
      break;
    case "-":
      result = subtract(numb1, numb2);
      break;
    case "*":
      result = multiply(numb1, numb2);
      break;
    case "/":
      result = divide(numb1, numb2);
      break;
  }

  display.textContent = result;

  num1 = result;
  num2 = "";
  operator = "";
}

function populateDisplay(input) {
  if (input === "") {
    display.textContent = "0";
  } else {
    if (operator === "") {
      if (result !== "") {
        num1 = input;
        result = "";
        display.textContent = num1;
      } else {
        num1 += input;
        display.textContent = num1;
      }
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
        if (num2 !== "") {
          operate(operator, num1, num2);
        }

        operator = "+";
        break;
      case "-":
        if (num2 !== "") {
          operate(operator, num1, num2);
        }

        operator = "-";
        break;
      case "*":
        if (num2 !== "") {
          operate(operator, num1, num2);
        }

        operator = "*";
        break;
      case "/":
        if (num2 !== "") {
          operate(operator, num1, num2);
        }

        operator = "/";
        break;
      case "=":
        if (operator !== "" || num2 !== "") {
          operate(operator, num1, num2);
        }

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
