const faqRows = document.querySelectorAll('.faq-row');

faqRows.forEach(faqRow => {
    faqRow.addEventListener('click', updateFaqDisplay);
});

function updateFaqDisplay() {
    const currentFaqAnswer = this.querySelector('.faq-answer');
    const currentArrow = this.querySelector('.arrow');
    const currentQuestion = this.querySelector('.faq-question');

    //if current row is shown, collapse
    if (currentFaqAnswer.classList.contains('display-show')) {
        currentFaqAnswer.classList.remove('display-show');
        currentArrow.classList.remove('up');
        currentQuestion.classList.remove('bold');
    }

    //if current row is not shown, collapse the other active then show current

    else {
        const activeFaqAnswer = document.querySelector('.display-show');
        const activeArrow = document.querySelector('.up');
        const activeQuestion = document.querySelector('.bold');

        if (activeFaqAnswer !== null) {
            activeFaqAnswer.classList.remove('display-show');
            activeArrow.classList.remove('up');
            activeQuestion.classList.remove('bold');
        }

        currentFaqAnswer.classList.add('display-show');
        currentArrow.classList.add('up');
        currentQuestion.classList.add('bold');
    }
}

