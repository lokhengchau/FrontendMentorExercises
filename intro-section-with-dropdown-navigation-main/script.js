(() => {
    const menuButton = document.querySelector(".mobile-menu");
    const nav = document.querySelector('nav');
    const dropDivs = document.querySelectorAll('.dropdiv');
    const overlayDiv = document.querySelector('.overlay');

    let hideMobileMenu = true;

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 900) {
            nav.classList.remove('slidein');
            nav.classList.remove('slideout');
            menuButton.classList.add('menu-closed');
            overlayDiv.classList.remove('overlayshow');
            dropDivs.forEach(dropDiv => {
                dropDiv.nextElementSibling.classList.remove('expand')
                dropDiv.querySelector('img').classList.remove('rotate');});
            hideMobileMenu = true;
        }}
    )

    menuButton.addEventListener('click', () => {
        if (hideMobileMenu) {
            nav.classList.add('slidein');
            hideMobileMenu = false;
        } else {
            nav.classList.toggle('slideout');
        }
        menuButton.classList.toggle('menu-closed');
        overlayDiv.classList.toggle('overlayshow');
    });

    dropDivs.forEach(dropDiv => {
        dropDiv.addEventListener('click', () => {
            const dropdownDiv = dropDiv.nextElementSibling;
            dropdownDiv.classList.toggle('expand');
            dropDiv.querySelector('img').classList.toggle('rotate');
        })
    })
})();