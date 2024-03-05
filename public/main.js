const mobileMenuButton = document.getElementById("mobile-btn-menu");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", () =>{
    mobileMenu.classList.toggle("hidden")
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetSection = document.querySelector(this.getAttribute('href'));
      const navHeight = document.querySelector('ul').offsetHeight; // Adjust selector
      let extraPadding = 0;
      if (window.innerWidth >= 768) {
        extraPadding = 50; // Apply extra padding only on larger devices
  }

      window.scrollTo({
          top: targetSection.offsetTop - navHeight - extraPadding,
          behavior: 'smooth'
      });

      // Reset URL to root path when a link is clicked
  if (window.location.hash) {
      window.location.replace(window.location.pathname);
  }

  });
});