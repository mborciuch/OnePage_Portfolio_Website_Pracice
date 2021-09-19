const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header-container');

hamburger.addEventListener('click', (evt => {
    evt.currentTarget.classList.toggle('active');
    mobile_menu.classList.toggle('active');
}))

