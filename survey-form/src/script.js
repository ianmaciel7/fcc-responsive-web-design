// coded by @lasjorg
// eslint-disable-next-line no-unused-vars
const projectName = "survey-form";

let button = document.querySelector("button");

function validateInputs() {
  let inputs = document.querySelectorAll("[required]");
  inputs.forEach(function (item) {
    item.classList.add("b-error-color");
  });
}