const controler = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

function changeFontSize() {
  text.style.fontSize = `${controler.value}px`;
}
controler.addEventListener("input", changeFontSize);
