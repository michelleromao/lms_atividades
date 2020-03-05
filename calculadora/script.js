let cNumber = document.getElementById("number");
let cRes = document.getElementById("res");
function numero(num) {
  if (cRes.innerText >= 0 || cRes.innerText < 0) {
    cRes.innerHTML = "";
  }
  switch (num) {
    case 0:
      cNumber.innerHTML += 0;
      break;
    case 1:
      cNumber.innerHTML += 1;
      break;
    case 2:
      cNumber.innerHTML += 2;
      break;
    case 3:
      cNumber.innerHTML += 3;
      break;
    case 4:
      cNumber.innerHTML += 4;
      break;
    case 5:
      cNumber.innerHTML += 5;
      break;
    case 6:
      cNumber.innerHTML += 6;
      break;
    case 7:
      cNumber.innerHTML += 7;
      break;
    case 8:
      cNumber.innerHTML += 8;
      break;
    case 9:
      cNumber.innerHTML += 9;
      break;

    default:
      break;
  }
}

function op(opc) {
  let content = cNumber.innerHTML.split("");
  let last = content[content.length - 1];
  switch (opc) {
    case "+":
      if (
        last === "+" ||
        last === "-" ||
        last === "*" ||
        last === "/" ||
        last == "%"
      ) {
        break;
      } else {
        cNumber.innerHTML += "+";
      }
      break;
    case "-":
      if (
        last === "+" ||
        last === "-" ||
        last === "*" ||
        last === "/" ||
        last == "%"
      ) {
        break;
      } else {
        cNumber.innerHTML += "-";
      }
      break;
    case "*":
      if (
        last === "+" ||
        last === "-" ||
        last === "*" ||
        last === "/" ||
        last == "%"
      ) {
        break;
      } else {
        cNumber.innerHTML += "*";
      }
      break;
    case "/":
      if (
        last === "+" ||
        last === "-" ||
        last === "*" ||
        last === "/" ||
        last == "%"
      ) {
        break;
      } else {
        cNumber.innerHTML += "/";
      }
      break;
    case "%":
      if (
        last === "+" ||
        last === "-" ||
        last === "*" ||
        last === "/" ||
        last == "%"
      ) {
        break;
      } else {
        cNumber.innerHTML += "%";
      }
      break;

    default:
      break;
  }
}

function equal() {
  let content = cNumber.innerHTML.split("");
  let result = eval(content.join(""));
  cRes.innerHTML = result;
  cNumber.innerHTML = "";
}

function clearC() {
  cNumber.innerHTML = "";
  cRes.innerHTML = "";
}
