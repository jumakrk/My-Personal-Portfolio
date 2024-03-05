// JavaScript to toggle mobile menu
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

function toggleMobileMenu() {
  mobileMenu.classList.toggle('hidden');
}

mobileMenuToggle.addEventListener('click', toggleMobileMenu);

// Close mobile menu when clicking on a menu item
const mobileMenuItems = document.querySelectorAll('#mobile-menu a');

mobileMenuItems.forEach(item => {
  item.addEventListener('click', () => {
    if (!mobileMenu.classList.contains('hidden')) {
      toggleMobileMenu();
    }
  });
});