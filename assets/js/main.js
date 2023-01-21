const form = document.getElementById("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const messageError = document.getElementById("error__alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();

  reloadPage();
});

form.addEventListener("keyup", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (firstNameValue === "") {
    errorAlert("error__alert--first", "First Name cannot be empty");
    errorIcon("error__image--one");
    errorBorder("form__input--first");
  } else if (checkName(firstNameValue) !== true) {
    errorAlert(
      "error__alert--first",
      "First name must contain more than three letters and no number"
    );
    errorIcon("error__image--one");
    errorBorder("form__input--first");
  } else {
    removeErrors(
      "error__alert--first",
      "error__image--one",
      "form__input--first"
    );
  }

  if (lastNameValue === "") {
    errorAlert("error__alert--last", "Last Name cannot be empty");
    errorIcon("error__image--two");
    errorBorder("form__input--last");
  } else if (checkName(lastNameValue) !== true) {
    errorAlert(
      "error__alert--last",
      "Last name must contain more than three letters and no number"
    );
    errorIcon("error__image--two");
    errorBorder("form__input--last");
  } else {
    removeErrors(
      "error__alert--last",
      "error__image--two",
      "form__input--last"
    );
  }

  if (emailValue === "") {
    errorAlert("error__alert--email", "Email cannot be empty");
    errorIcon("error__image--three");
    errorBorder("form__input--email");
  } else if (checkEmail(emailValue) !== true) {
    errorAlert("error__alert--email", "Looks like this is not an email");
    errorIcon("error__image--three");
    errorBorder("form__input--email");
  } else {
    removeErrors(
      "error__alert--email",
      "error__image--three",
      "form__input--email"
    );
  }

  if (passwordValue === "") {
    errorAlert("error__alert--password", "Password cannot be empty");
    errorIcon("error__image--four");
    errorBorder("form__input--password");
  } else if (checkPassword(passwordValue) !== true) {
    errorAlert(
      "error__alert--password",
      "Minimum of one character uppercase, one lowercase and one special. <br>No blanks from 8 to 16 characters"
    );
    errorIcon("error__image--four");
    errorBorder("form__input--password");
  } else {
    removeErrors(
      "error__alert--password",
      "error__image--four",
      "form__input--password"
    );
  }
}

function errorAlert(element, errorMessage) {
  let errorElement = document.querySelector("." + element);
  errorElement.innerHTML = errorMessage;
}

function errorIcon(element) {
  let icon = document.querySelector("." + element);
  icon.classList.add("error__image--visible");
}

function errorBorder(element) {
  let input = document.querySelector("." + element);
  input.classList.add("form__input--error");
}

function checkName(fullName) {
  let name = /^[A-Za-z]{3,30}$/;
  return name.test(fullName);
}

function checkEmail(email) {
  let correctEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return correctEmail.test(email);
}

function checkPassword(password) {
  let correctPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-_+={}[\]|;:'",.<>?\/])[A-Za-z\d$@$!%*?&#.$($)$-_+={}[\]|;:'",.<>?\/]{8,20}$(?![\s])/;
  return correctPassword.test(password);
}

function removeErrors(alert, image, input) {
  document.querySelector("." + alert).innerHTML = "";
  document.querySelector("." + image).classList.remove("error__image--visible");
  document.querySelector("." + input).classList.remove("form__input--error");
}

function reloadPage() {
  if (
    firstName.value !== "" &&
    checkName(firstName.value) === true &&
    lastName.value !== "" &&
    checkName(lastName.value) === true &&
    email.value !== "" &&
    checkEmail(email.value) === true &&
    password.value !== "" &&
    checkPassword(password.value) === true
  ) {
    location.reload();
  }
}
