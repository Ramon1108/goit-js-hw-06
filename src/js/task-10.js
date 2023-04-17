function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesDiv = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = input.value;
  let boxSize = 30;
  let boxesHtml = "";

  for (let i = 0; i < amount; i++) {
    const color = getRandomHexColor();
    boxesHtml += `<div style="background-color: ${color}; width: ${boxSize}px; height: ${boxSize}px;"></div>`;
    boxSize += 10;
  }

  boxesDiv.insertAdjacentHTML("beforeend", boxesHtml);
}

function destroyBoxes() {
  boxesDiv.innerHTML = "";
}
