let input = document.getElementById("input");
let output = document.getElementById("output");
let ex = "";
let res = 0;
let answer = "";

function number(x) {
  if (output.textContent != "") {
    ex = "";
    res = 0;
    output.textContent = "";
  }
  ex += `${x}`;
  input.textContent = ex;
}

function operator(op) {
  ex += ` ${op} `;
  input.textContent = ex;
}

function del() {
  if (ex[ex.length - 1] == " ") {
    ex = ex.slice(0, -2);
  } else {
    ex = ex.slice(0, -1);
  }

  input.textContent = ex;
}

function ac() {
  ex = "";
  input.textContent = ex;
  res = 0;
  output.textContent = "";
}

function ans() {
  if (output.textContent != "") {
    ex = "";
    res = 0;
    output.textContent = "";
  }
  ex += `${answer}`;
  input.textContent = ex;
}

function calc() {
  let op = "+";
  let x = "";
  let operators = ["+", "-", "/", "x"];
  for (let i = 0; i < ex.length; i++) {
    if (operators.includes(ex[i])) {
      if (operators.includes(ex[i - 1])) {
        output.textContent = "Error";
        output.style.fontWeight = "bold";
        return;
      }

      res = calculate(res, Number(x), op);
      op = ex[i];
      x = "";
    } else if (ex[i] !== " ") {
      x += ex[i];
    } 
  }
  res = calculate(res, Number(x), op);
  output.textContent = res;
  answer = res;
}

function calculate(res, num, operator) {
  switch (operator) {
    case "+": return res + num;
    case "-": return res - num;
    case "x": return res * num;
    case "/": return res / num;
    default: return res;
  }
}
