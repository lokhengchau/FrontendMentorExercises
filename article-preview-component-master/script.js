const shareIcon = document.querySelector('.share-icon');
const shareDiv = document.querySelector('.share-wrapper');

document.addEventListener('click', () => {
    shareDiv.classList.remove('share-wrapper-display');
})

shareIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    shareDiv.classList.toggle('share-wrapper-display');
});