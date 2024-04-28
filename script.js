let num1 = "";
let num2 = "";
let operator = "";
let result = "";
let periodIsPressed = false;
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
  let stringResult = String(result);

  if (Number.isInteger(result)) {
    stringResult = result.toString();
  } else {
    stringResult = result.toString();

    if (stringResult.includes(".")) {
      stringResult = stringResult.replace(/(\.\d*?[1-9])0+$/, "$1");
    }

    if (stringResult.length > 9) {
      stringResult = stringResult.slice(0, 9);
    }
  }

  display.textContent = stringResult;

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
        if (num1.length < 9) {
          num1 += input;
          display.textContent = num1;
        }
      }
    } else {
      if (num2.length < 9) {
        num2 += input;
        display.textContent = num2;
      }
    }
  }
}

// Add button click event listener
const button = document.querySelectorAll(".button");

document.addEventListener("keydown", (event) => {
  switch (event.key) {
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
    case ".":
      if (!periodIsPressed) {
        populateDisplay(".");
        periodIsPressed = true;
      }

      break;
    case "+":
      periodIsPressed = false;

      if (num2 !== "") {
        operate(operator, num1, num2);
      }

      operator = "+";
      break;
    case "-":
      periodIsPressed = false;

      if (num2 !== "") {
        operate(operator, num1, num2);
      }

      operator = "-";
      break;
    case "*":
      periodIsPressed = false;

      if (num2 !== "") {
        operate(operator, num1, num2);
      }

      operator = "*";
      break;
    case "/":
      periodIsPressed = false;

      if (num2 !== "") {
        operate(operator, num1, num2);
      }

      operator = "/";
      break;

    case "=":
      periodIsPressed = false;
      if (operator !== "" || num2 !== "") {
        operate(operator, num1, num2);
      }

      break;
    case "C":
    case "c":
      populateDisplay("");
      num1 = "";
      num2 = "";
      operator = "";
      periodIsPressed = false;
      break;
    case "Backspace":
      if (operator === "") {
        num1 = num1.slice(0, num1.length - 1);
        if (num1 === "") {
          display.textContent = 0;
        } else {
          display.textContent = num1;
        }
      } else {
        num2 = num2.slice(0, num2.length - 1);
        if (num2 === "") {
          display.textContent = 0;
        } else {
          display.textContent = num2;
        }
      }
      break;
  }
});

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
      case ".":
        if (!periodIsPressed) {
          populateDisplay(".");
          periodIsPressed = true;
        }

        break;
      case "+":
        periodIsPressed = false;

        if (num2 !== "") {
          operate(operator, num1, num2);
        }

        operator = "+";
        break;
      case "-":
        periodIsPressed = false;

        if (num2 !== "") {
          operate(operator, num1, num2);
        }

        operator = "-";
        break;
      case "*":
        periodIsPressed = false;

        if (num2 !== "") {
          operate(operator, num1, num2);
        }

        operator = "*";
        break;
      case "/":
        periodIsPressed = false;

        if (num2 !== "") {
          operate(operator, num1, num2);
        }

        operator = "/";
        break;
      case "=":
        periodIsPressed = false;

        if (operator !== "" || num2 !== "") {
          operate(operator, num1, num2);
        }

        break;
      case "C":
        populateDisplay("");
        num1 = "";
        num2 = "";
        operator = "";
        periodIsPressed = false;
        break;
      case "Delete":
        if (operator === "") {
          num1 = num1.slice(0, num1.length - 1);
          if (num1 === "") {
            display.textContent = 0;
          } else {
            display.textContent = num1;
          }
        } else {
          num2 = num2.slice(0, num2.length - 1);
          if (num2 === "") {
            display.textContent = 0;
          } else {
            display.textContent = num2;
          }
        }

        break;
    }
  });
});
