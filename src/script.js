const nameInput = document.getElementById("name");
const nameError = document.querySelector("#name + .error");

const numInput = document.getElementById("num");
const numError = document.querySelector("#num + .error");

const monthInput = document.getElementById("month");
const monthError = document.querySelector("#month + .error");

const yearInput = document.getElementById("year");
const yearError = document.querySelector("#year + .error");

const cvcInput = document.getElementById("cvc");
const cvcError = document.querySelector("#cvc + .error");

const inputList = [nameInput, numInput, monthInput, yearInput, cvcInput];

const errorList = [nameError, numError, monthError, yearError, cvcError];

const error = (e) => {
  for (let i = 0; i < errorList.length; i++) {
    e.target.classList.add("borderError");
  }
};

const success = (e) => {
  for (let i = 0; i < errorList.length; i++) {
    e.target.classList.add("borderSuccess");
    e.target.classList.remove("borderError");
  }
};

nameInput.addEventListener("input", (e) => {
  const inputIsValid = e.target.value.length < 3;
  if (inputIsValid === true) {
    nameError.innerText = "Name is too short";
    nameError.classList.add("visible");
    error(e);
  } else {
    nameError.classList.remove("visible");
    success(e);
  }
});

numInput.addEventListener("input", (e) => {
  const inputIsValid = e.target.value.length < 15;
  if (inputIsValid === true) {
    numError.innerText = "Number is too short";
    numError.classList.add("visible");
    error(e);
  } else {
    numError.classList.remove("visible");
    success(e);
  }
});

monthInput.addEventListener("input", (e) => {
  const inputIsValid = e.target.value.length < 2;
  if (inputIsValid === true) {
    monthError.classList.add("visible");
    monthError.innerText = "Can't be blank";
    error(e);
  } else {
    monthError.classList.remove("visible");
    success(e);
  }
});

yearInput.addEventListener("input", (e) => {
  const inputIsValid = e.target.value.length < 2;
  if (inputIsValid === true) {
    yearError.classList.add("visible");
    yearError.innerText = "Can't be blank";
    error(e);
  } else {
    yearError.classList.remove("visible");
    success(e);
  }
});

cvcInput.addEventListener("input", (e) => {
  const inputIsValid = e.target.value.length < 3;
  if (inputIsValid === true) {
    cvcError.innerText = "Can't be blank";
    cvcError.classList.add("visible");
    error(e);
  } else {
    cvcError.classList.remove("visible");
    success(e);
  }
});

const cardNum = document.getElementById("cardNum");
const cardName = document.getElementById("cardHolder");
const cardMonth = document.getElementById("cardMonth");
const cardYear = document.getElementById("cardYear");
const cardCvc = document.getElementById("cardCvc");

nameInput.addEventListener("input", nameUpdate);
numInput.addEventListener("input", numUpdate);
monthInput.addEventListener("input", monthUpdate);
yearInput.addEventListener("input", yearUpdate);
cvcInput.addEventListener("input", cvcUpdate);

function nameUpdate(e) {
  cardName.textContent = e.target.value;
}

function numUpdate(e) {
  e.target.value = e.target.value
    .replace(/[^\dA-Z]/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();
  cardNum.textContent = e.target.value;
}

function monthUpdate(e) {
  cardMonth.textContent = e.target.value;
}

function yearUpdate(e) {
  cardYear.textContent = e.target.value;
}

function cvcUpdate(e) {
  cardCvc.textContent = e.target.value;
}
