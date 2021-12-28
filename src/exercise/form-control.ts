import isEmail from "validator/lib/isEmail";

const SHOW_ERROR_MESSAGE = "show-error-message";

const form = document.querySelector(".form") as HTMLFormElement;
const username = document.querySelector(".username") as HTMLInputElement;
const email = document.querySelector(".email") as HTMLInputElement;
const password = document.querySelector(".password") as HTMLInputElement;
const password2 = document.querySelector(".password2") as HTMLInputElement;

form.addEventListener("submit", function (e: Event) {
    e.preventDefault();
    hideErrorMessages(this);
    checkEmptyFields(username, email, password, password2);
    checkEmail(email);
    checkPasswords(password, password2);
    if (checkFormStatus(this)) window.alert("REGISTER SUCESSFULL ✔✔✔");
});

function checkEmptyFields(...inputs: HTMLInputElement[]): void {
    inputs.forEach((i) =>
        !i.value ? showErrorMessage(i, "This field cant by empty") : "",
    );
}

function checkEmail(input: HTMLInputElement): void {
    if (!isEmail(input.value)) showErrorMessage(input, "Invalid email");
}

function checkPasswords(
    password: HTMLInputElement,
    password2: HTMLInputElement,
): void {
    if (password.value !== password2.value) {
        showErrorMessage(password, "Passwords are not equal");
        showErrorMessage(password2, "Passwords are not equal");
    }
}

function hideErrorMessages(form: HTMLFormElement): void {
    form.querySelectorAll("." + SHOW_ERROR_MESSAGE).forEach((i) =>
        i.classList.remove(SHOW_ERROR_MESSAGE),
    );
}

function showErrorMessage(input: HTMLInputElement, msg: string): void {
    const formFields = input.parentElement as HTMLDivElement;
    const errorMessage = formFields.querySelector(
        ".error-message",
    ) as HTMLSpanElement;
    errorMessage.innerText = msg;
    formFields.classList.add(SHOW_ERROR_MESSAGE);
}

function checkFormStatus(form: HTMLFormElement): boolean {
    let status = true;
    form.querySelectorAll("." + SHOW_ERROR_MESSAGE).forEach(
        () => (status = false),
    );
    return status;
}
