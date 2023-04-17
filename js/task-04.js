let counterValue = 0;
const counter = document.querySelector("#value");
const btnDecr = document.querySelector('[data-action="decrement"]');

const btnIncr = document.querySelector('[data-action="increment"]');

btnDecr.addEventListener("click", () => {
  counterValue--;
  counter.textContent = counterValue;
});

btnIncr.addEventListener("click", () => {
  counterValue++;
  counter.textContent = counterValue;
});
