window.addEventListener("DOMContentLoaded", function calc() {
  // Initialization
  const percentageBtn = document.querySelector(".percent");
  const screenBtn = document.querySelector(".screen");
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

  //   Actions
  oneBtn.addEventListener("click", function() {
    screenBtn.textContent = "1";
  });
  twoBtn.addEventListener("click", function() {
    screenBtn.textContent = "2";
  });
  threeBtn.addEventListener("click", function() {
    screenBtn.textContent = "3";
  });
  fourBtn.addEventListener("click", function() {
    screenBtn.textContent = "4";
  });
  fiveBtn.addEventListener("click", function() {
    screenBtn.textContent = "5";
  });
  sixBtn.addEventListener("click", function() {
    screenBtn.textContent = "6";
  });
  sevenBtn.addEventListener("click", function() {
    screenBtn.textContent = "7";
  });
  eightBtn.addEventListener("click", function() {
    screenBtn.textContent = "8";
  });
  nineBtn.addEventListener("click", function() {
    screenBtn.textContent = "9";
  });
  zeroBtn.addEventListener("click", function() {
    screenBtn.textContent = "0";
  });
  ceBtn.addEventListener("click", function() {
    screenBtn.textContent = "0";
  });
  cBtn.addEventListener("click", function() {
    screenBtn.textContent = "0";
  });
});
