let submittedRatingId = null;
let submittedRating = null;

const ratingButtons = document.querySelectorAll('.rating');
const submitButton = document.querySelector('#submit');
const submitDiv = document.querySelector('.submit-wrapper');
const submittedDiv = document.querySelector('.submitted-wrapper');
const scoreSpan = document.querySelector('.submitted-rating')

ratingButtons.forEach(ratingButton => {
    ratingButton.addEventListener('click', removeRating);
    ratingButton.addEventListener('click', selectRating);
});

function selectRating() {
    this.dataset.selected = 'true';
    submittedRatingId = this.id;
    submittedRating = this.textContent;
    submitButton.disabled = false;
};

function removeRating() {
    if (submittedRatingId !== null) {
        const activeRatingButton = document.getElementById(submittedRatingId);
        activeRatingButton.dataset.selected = 'false';
    }
};

submitButton.addEventListener('click', function() {
    submitDiv.style.display = 'none';
    submittedDiv.style.display = 'flex';
    scoreSpan.textContent = submittedRating;
});
