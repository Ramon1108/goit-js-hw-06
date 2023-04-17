const el = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};
el.input.addEventListener("input", changeInput);
function changeInput(event) {
  const eventValue = event.currentTarget.value;

  if (eventValue) {
    el.output.textContent = eventValue;
  } else {
    el.output.textContent = `Anonymous`;
  }
}
