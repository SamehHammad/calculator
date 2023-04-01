let screen = document.getElementById("screen");
function getValue(val) {
  screen.value += val;
}
let clearScreen = function () {
  screen.value = "";
};

let del = function () {
  let num = screen.value;
  screen.value = num.substring(0, num.length - 1);
};
function resultCalc() {
  if (screen.value === ''||screen.value == " ERROR") {
    screen.value = "";
  } else {
    try {
      screen.value = eval(screen.value);
    } catch (err) {
      screen.value = "ERROR";
    }
  }
}
