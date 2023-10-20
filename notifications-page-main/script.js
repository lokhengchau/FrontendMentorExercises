(() => {
    const button = document.querySelector('button');
    const unreadNumber = document.querySelector('.unread-number');

    button.addEventListener('click', () => {
        const unreadNotifs = document.querySelectorAll('.unread');

        if (unreadNotifs) {
            unreadNotifs.forEach((unreadNotif) => {
                unreadNotif.classList.remove('unread');
                redCircle = unreadNotif.querySelector('div p .red-circle');
                redCircle.classList.add('invis');
            });
            unreadNumber.classList.add('invis');
        }
    })
})();