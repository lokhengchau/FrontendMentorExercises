(() => {
    const button = document.querySelector('button');
    const unreadNumber = document.querySelector('.unread-number');

    button.addEventListener('click', () => {
        const unreadNotifs = document.querySelectorAll('.unread');

        if (unreadNotifs) {
            unreadNotifs.forEach((unreadNotif) => {
                unreadNotif.classList.remove('unread');
                unreadText = unreadNotif.querySelector('div p');
                unreadText.textContent = unreadText.textContent.replace(' 🔴', '')
            });
            unreadNumber.classList.add('invis');
        }
    })
})();