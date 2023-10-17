const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const emailErrorMsg = document.querySelector('.invalid-email-message');
const emailSpan = document.querySelector('.submitted-email');
const dismissButton = document.querySelector('#dismiss');

const signupContainer = document.querySelector('.sign-up-container');
const thankyouContainer = document.querySelector('.thank-you-container');

emailInput.addEventListener('input', () => {
    emailErrorMsg.classList.add('display-none');
    emailInput.classList.remove('border-invalid');
})

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(!emailRegex.test(emailInput.value)){
        emailErrorMsg.classList.remove('display-none');
        emailInput.classList.add('border-invalid');
        emailInput.focus();
    } else {
        const formData = new FormData();
        formData.append('email', emailInput.value);
        fetch('.',
            {
                body: formData,
                method: "post"
            });
        emailSpan.textContent = emailInput.value;
        toThankYouPage();
    }
});

dismissButton.addEventListener('click', () => {
    window.location.reload();
})

function toThankYouPage() {
    signupContainer.classList.add('display-none');
    thankyouContainer.classList.remove('display-none');
}