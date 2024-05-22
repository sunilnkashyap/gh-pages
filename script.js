const validChar = [
  "+",
  "-",
  "*",
  "/",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "C",
  "=",
  "Enter",
  "Escape",
  ".",
];

let allowDot = true;

function validate(value) {
  // 1 - to check if the value is a number
  console.log(value, "===");
  if (+value) {
    console.log("number");
    return true;
  } else {
    if (validChar.includes(value)) {
      const oldValueRef = document.getElementById("calculator-screen");
      const oldValue = oldValueRef.innerText;

      if (value === "." && allowDot) {
        allowDot = false;
        return true;
      } else if (value != "." && typeof value == "string") {
        allowDot = true;
        return true;
      } else if (oldValue.slice(-1) === value) {
        return false;
      } else if (+oldValue.slice(-1)) {
        return true;
      } else {
        const replaceValue = oldValue.slice(0, -1);
        oldValueRef.innerText = replaceValue;
        console.log("not number", replaceValue);
        return true;
      }
      return true;
    }
    return false;
  }

  return true;
}

function calculator(value) {
  const screen = document.getElementById("calculator-screen");

  console.log(value);

  if (value === "C" || value === "Escape") {
    screen.innerText = "0";
  } else if (value === "=" || value === "Enter") {
    try {
      screen.innerText = eval(screen.innerText);
    } catch (e) {
      screen.innerText = "Error";
    }
  } else {
    if (validate(value)) {
      if (screen.innerText === "0" || screen.innerText === "Error") {
        screen.innerText = value;
      } else {
        screen.innerText += value;
      }
    }
  }
}

function handleClick(button) {
  const value = button.getAttribute("data-value");
  calculator(value);
}

document.addEventListener("keyup", (value) => {
  if (validChar.includes(value.key)) {
    calculator(value.key);
  }
});
