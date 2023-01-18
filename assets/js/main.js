const form = document.getElementById("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const messageError = document.getElementById("error__alert");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
    console.log("Enviou");
});

function checkInputs() {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (firstNameValue === "") {
        showError("error__alert", "First Name cannot be empty");
        showIcon("error__image--one");
    }
}
function showError(errorElement, errorMessage) {
    let warning = document.querySelector("." + errorElement);
    warning.innerHTML = errorMessage;

}

function showIcon(iconElement) {
    let icon = document.getElementsByClassName(iconElement);
    icon.classList.add("error__image--visible");
}
