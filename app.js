// const decreaseBtn = document.getElementById("decreaseBtn");
// const resetBtn = document.getElementById("resetBtn");
// const increaseBtn = document.getElementById("increaseBtn");

// const counterSpan = document.getElementById("counter");

// let counter = 0;
// let prevCounter = counter;
// decreaseBtn.addEventListener("click", function () {
//   counter--;
//   counterSpan.textContent = counter;
// if (prevCounter > counter) {
//   counterSpan.style.color = "red";
// }
// prevCounter = counter;
// });

// increaseBtn.addEventListener("click", function () {
//   counter++;
//   counterSpan.textContent = counter;
// if (prevCounter < counter) {
//   counterSpan.style.color = "green";
// }
// prevCounter = counter;
// });

// resetBtn.addEventListener("click", function () {
//   counter = 0;
//   counterSpan.textContent = counter;
//   counterSpan.style.color = "black";
//   prevCounter = counter;
// });

let counter = 0;
let prevCounter = counter;

const btns = document.querySelectorAll(".btn");
const counterSpan = document.getElementById("counter");

btns.forEach(function (btn) {
  console.log(btn);
  btn.addEventListener("click", function (e) {
    console.log(e.currentTarget);
    if (e.currentTarget.classList.contains("decrease")) {
      counter--;
      counterSpan.textContent = counter;
      if (prevCounter > counter) {
        counterSpan.style.color = "red";
      }
      prevCounter = counter;
    } else if (e.currentTarget.classList.contains("increase")) {
      counter++;
      counterSpan.textContent = counter;
      if (prevCounter < counter) {
        counterSpan.style.color = "green";
      }
      prevCounter = counter;
    } else {
      counter = 0;
      counterSpan.textContent = counter;
      counterSpan.style.color = "black";
      prevCounter = counter;
    }
  });
});
