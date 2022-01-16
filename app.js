const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");

const counterSpan = document.getElementById("counter");

let counter = 0;
decreaseBtn.addEventListener("click", function () {
  counter--;
  counterSpan.textContent = counter;
});

increaseBtn.addEventListener("click", function () {
  counter++;
  counterSpan.textContent = counter;
});

resetBtn.addEventListener("click", function () {
  counter = 0;
  counterSpan.textContent = counter;
});
