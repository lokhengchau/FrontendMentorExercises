const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const emailInvalidMsg = document.querySelector('.invalid-email-message')
const form = document.querySelector('form');
const emailInput = document.querySelector("input[type='email']");
const submitButton = document.querySelector("button[type='submit']");

form.addEventListener('submit', (e) => {
    if(!emailRegex.test(emailInput.value)) {
        submitButton.classList.add('button-invalid');
        emailInvalidMsg.classList.add('invalid-email-message-show');
        emailInput.classList.add('invalid-email-input');
        e.preventDefault()
    }
})

emailInput.addEventListener('input', () => {
    submitButton.classList.remove('button-invalid');
    emailInvalidMsg.classList.remove('invalid-email-message-show');
    emailInput.classList.remove('invalid-email-input');
})