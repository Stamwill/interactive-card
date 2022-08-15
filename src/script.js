// const input = document.querySelector("input");

// input.addEventListener("invalid", function (event) {
//   if (event.target.validity.valueMissing) {
//     event.target.setCustomValidity("This is a teeeest");
//   }
// });

const nameInput = document.getElementById("name");
const nameError = document.querySelector("#name + .error");

const numInput = document.getElementById("num");
const numError = document.querySelector("#num + .error");

nameInput.addEventListener("input", (e) => {
  const inputIsValid = e.target.value.length < 3;
  if (inputIsValid === true) {
    nameError.innerText = "Name is too short";
    nameError.classList.add("visible");
  } else {
    nameError.classList.remove("visible");
  }
});

numInput.addEventListener("input", (e) => {
  const inputIsValid = e.target.value.length < 15;
  if (inputIsValid === true) {
    numError.innerText = "Number is too short";
    numError.classList.add("visible");
  } else {
    numError.classList.remove("visible");
  }
});

// input.addEventListener("change", function (event) {
//   event.target.setCustomValidity("");
// });
