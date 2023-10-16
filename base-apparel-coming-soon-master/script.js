const emailInput = document.querySelector('#email');
const emailInputErrorMsg = document.querySelector('.invalid-message');
const emailPatternRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/;

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    if(!emailPatternRegex.test(emailInput.value)) {
        emailInputErrorMsg.classList.add('invalid-message-show');
        e.preventDefault();
    }
})

emailInput.addEventListener('input', () => {
    emailInputErrorMsg.classList.remove('invalid-message-show');
})

