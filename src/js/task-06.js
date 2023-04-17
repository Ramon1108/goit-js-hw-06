const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
  const inputTrueLength = parseInt(input.getAttribute("data-length"));
  const inputLength = input.value.length;
  if (inputTrueLength === inputLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
