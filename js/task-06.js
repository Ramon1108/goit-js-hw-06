const input = document.querySelector("#validation-input");
function classAdjustment(a, b) {
  input.classList.remove(a);
  input.classList.add(b);
}
input.addEventListener("blur", () => {
  const inputTrueLength = parseInt(input.getAttribute("data-length"));
  const inputLength = input.value.length;
  if (inputTrueLength === inputLength) {
    classAdjustment("invalid", "valid");
  } else {
    classAdjustment("valid", "invalid");
  }
});
