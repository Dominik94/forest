const hamburgerBtn = document.querySelector('.hamburger-btn')
const nav = document.querySelector('.nav-items')

const handleHamburger = () => {
    hamburgerBtn.classList.toggle('hamburger-active');
    nav.classList.toggle('nav-active');
}

hamburgerBtn.addEventListener('click', handleHamburger)