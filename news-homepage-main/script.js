(() => {

    const menuMobileIcon = document.querySelector('.menu-icon');
    const menuNav = document.querySelector('nav');

    let isMenuActive = false;

    //init check
    if (window.innerWidth <= 590) {
        menuMobileIcon.classList.remove('hidden');
        menuNav.classList.add('hidden');
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth <= 590) {
            if (!isMenuActive) {
                menuMobileIcon.classList.remove('hidden');
                menuNav.classList.add('hidden');
            } 
        } else {
            // reset to non-mobile state
            menuMobileIcon.classList.add('hidden');
            menuMobileIcon.src = "./assets/images/icon-menu.svg";
            menuNav.classList.remove('hidden');
            isMenuActive = false;
        }
    })

    menuMobileIcon.addEventListener('click', () => {
        if (isMenuActive) {
            menuMobileIcon.src = "./assets/images/icon-menu.svg";
            menuNav.classList.add('hidden');
            isMenuActive = false;
        } else {
            menuMobileIcon.src = "./assets/images/icon-menu-close.svg";
            menuNav.classList.remove('hidden');
            isMenuActive = true;
        }
    })
})();