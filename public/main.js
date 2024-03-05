const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const closeMobileMenuBtn = document.getElementById('closeMobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('menu-open');
});

closeMobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('menu-open');
});