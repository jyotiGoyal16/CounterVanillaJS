import "./styles.css";

/*commented part is normal click event on each individual buttons
without any event delegation */

let counterValue = 0;
// let btnReset = document.querySelector(".reset");
// let btnIncrease = document.querySelector(".increase");
// let btnDecrease = document.querySelector(".decrease");

// btnReset.addEventListener("click", () => {
//   counterValue = 0;
//   updateCounter();
// });

// btnIncrease.onclick = function () {
//   counterValue = counterValue + 1;
//   updateCounter();
// };

// btnDecrease.onclick = function () {
//   counterValue = counterValue - 1;
//   updateCounter();
// };

let buttonCont = document.querySelector(".button-cont");

//using event delegation
buttonCont.onclick = function (event) {
  if (event.target.className === "decrease button") {
    counterValue = counterValue - 1;
  } else if (event.target.className === "increase button") {
    counterValue = counterValue + 1;
  } else if (event.target.className === "reset button") {
    counterValue = 0;
  }
  updateCounter();
};

function updateCounter() {
  let counter = document.querySelector(".counter");
  let color = {
    positive: "green",
    negative: "red",
    zero: "black"
  };
  counter.innerHTML = counterValue;
  if (counterValue < 0) {
    counter.style.color = color.negative;
  } else if (counterValue > 0) {
    counter.style.color = color.positive;
  } else {
    counter.style.color = color.zero;
  }
}
