const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const passwordRegex = /^\S{12,}$/;

const form = document.querySelector('form');
const firstNameInput = document.querySelector('#first-name');
const lastNameInput = document.querySelector('#last-name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

const firstNameError = document.querySelector('.first-name-error');
const lastNameError = document.querySelector('.last-name-error');
const emailError = document.querySelector('.email-error');
const passwordError = document.querySelector('.password-error');

form.addEventListener('submit', (e) => {
    let checkSum = 0;

    checkSum += firstNameValidate();
    checkSum += lastNameValidate();
    checkSum += emailValidate();
    checkSum += passwordValidate();
    if (checkSum !== 4) {
        e.preventDefault()
    }
})

firstNameInput.addEventListener('input', () => {
    firstNameError.classList.remove('error-display');
    firstNameInput.classList.remove('invalid-input');
})

lastNameInput.addEventListener('input', () => {
    lastNameError.classList.remove('error-display');
    lastNameInput.classList.remove('invalid-input');
})

emailInput.addEventListener('input', () => {
    emailError.classList.remove('error-display');
    emailInput.classList.remove('invalid-input');
})

passwordInput.addEventListener('input', () => {
    passwordError.classList.remove('error-display');
    passwordInput.classList.remove('invalid-input');
})

function firstNameValidate() {
    if (firstNameInput.validity.valueMissing) {
        firstNameError.classList.add('error-display');
        firstNameInput.classList.add('invalid-input');
        return false;
    } else {
        return true;
    }
}

function lastNameValidate() {
    if (lastNameInput.validity.valueMissing) {
        lastNameError.classList.add('error-display');
        lastNameInput.classList.add('invalid-input');
        return false;
    } else {
        return true;
    }
}

function emailValidate() {
    if (!emailRegex.test(emailInput.value)) {
        emailError.classList.add('error-display');
        emailInput.classList.add('invalid-input');
        return false;
    } else {
        return true;
    }
}

function passwordValidate() {
    if (!passwordRegex.test(passwordInput.value)) {
        passwordError.classList.add('error-display');
        passwordInput.classList.add('invalid-input');
        return false;
    } else {
        return true;
    }
}