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
  if (ex[ex.length-1] == ' ') {
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
  ex += `${answer}`;
  input.textContent = ex;
}

function calc() {
  let op = "+";
  let x = "";
  for (let i = 0; i < ex.length; i++) {
    if (ex[i] == "+" || ex[i] == "-" || ex[i] == "/" || ex[i] == "x") {
      if (
        ex[i - 1] == "+" ||
        ex[i - 1] == "-" ||
        ex[i - 1] == "/" ||
        ex[i - 1] == "x"
      ) {
        output.textContent = "Error";
        output.style.fontWeight = "bold";
        return;
      }

      if (op == "+") {
        res += Number(x);
      } else if (op == "-") {
        res -= Number(x);
      } else if (op == "x") {
        res *= Number(x);
      } else if (op == "/") {
        res /= Number(x);
      }

      op = ex[i];
      x = "";
    } else if (ex[i] == " ") {
      continue;
    } else {
      x += ex[i];
    }
  }
  if (op == "+") {
    res += Number(x);
  } else if (op == "-") {
    res -= Number(x);
  } else if (op == "x") {
    res *= Number(x);
  } else if (op == "/") {
    res /= Number(x);
  }

  output.textContent = res;
  answer = res;
}
