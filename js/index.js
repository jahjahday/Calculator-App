window.addEventListener("DOMContentLoaded", function calc() {
  // Initialization
  let globalStore = [];
  let result = [];
  let globalSign = "";
  const percentageBtn = document.querySelector(".percent");
  const screen = document.querySelector(".screen");
  const ceBtn = document.querySelector(".ce");
  const cBtn = document.querySelector(".c");
  const divideBtn = document.querySelector(".divide");
  const sevenBtn = document.querySelector(".seven");
  const eightBtn = document.querySelector(".eight");
  const nineBtn = document.querySelector(".nine");
  const multiplyBtn = document.querySelector(".multiply");
  const fourBtn = document.querySelector(".four");
  const fiveBtn = document.querySelector(".five");
  const sixBtn = document.querySelector(".six");
  const minusBtn = document.querySelector(".minus");
  const oneBtn = document.querySelector(".one");
  const twoBtn = document.querySelector(".two");
  const threeBtn = document.querySelector(".three");
  const plusBtn = document.querySelector(".plus");
  const backspaceBtn = document.querySelector(".backspace");
  const zeroBtn = document.querySelector(".zero");
  const dotBtn = document.querySelector(".dot");
  const activeBtn = document.querySelector(".active");

  //   Event Handlers

  oneBtn.addEventListener("click", function() {
    screen.textContent = "1";
    globalStore.push(1);
  });
  twoBtn.addEventListener("click", function() {
    screen.textContent = "2";
    globalStore.push(2);
  });
  threeBtn.addEventListener("click", function() {
    screen.textContent = "3";
    globalStore.push(3);
  });
  fourBtn.addEventListener("click", function() {
    screen.textContent = "4";
    globalStore.push(4);
  });
  fiveBtn.addEventListener("click", function() {
    screen.textContent = "5";
    globalStore.push(5);
  });

  plusBtn.addEventListener("click", function() {
    globalSign = "+";
  });

  minusBtn.addEventListener("click", function() {
    globalSign = "-";
  });

  divideBtn.addEventListener("click", function() {
    globalSign = "/";
  });

  multiplyBtn.addEventListener("click", function() {
    globalSign = "*";
  });

  sixBtn.addEventListener("click", function() {
    screen.textContent = "6";
    globalStore.push(6);
  });
  sevenBtn.addEventListener("click", function() {
    screen.textContent = "7";
    globalStore.push(7);
  });
  eightBtn.addEventListener("click", function() {
    screen.textContent = "8";
    globalStore.push(8);
  });
  nineBtn.addEventListener("click", function() {
    screen.textContent = "9";
    globalStore.push(9);
  });
  zeroBtn.addEventListener("click", function() {
    screen.textContent = "0";
  });
  ceBtn.addEventListener("click", function() {
    screen.textContent = "0";
    globalStore = [];
  });
  cBtn.addEventListener("click", function() {
    screen.textContent = "0";
    globalStore = [];
  });
  activeBtn.addEventListener("click", function() {
    screen.textContent = signCalculations(globalStore, globalSign);
  });
});

// Actions
function addition(a, b) {
  let result = a + b;
  return result;
}

function subtraction(a, b) {
  let result = a - b;
  return result;
}

function divition(a, b) {
  let result = a / b;
  return result;
}

function multiplication(a, b) {
  let result = a * b;
  return result;
}

function signCalculations(num, sign) {
  switch (sign) {
    case "+":
      return addition(num[0], num[1]);
    case "-":
      return subtraction(num[0], num[1]);
    case "*":
      return multiplication(num[0], num[1]);
    case "/":
      return divition(num[0], [1]);

    default:
  }
}
