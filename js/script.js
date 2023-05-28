const navbarNav = document.querySelector("navbar-nav");
const hamburgerMenu = document.querySelector("#hamburger-menu");

// Ketika hamburger-menu di klik
hamburgerMenu.addEventListener("click", function () {
  navbarNav.classList.toggle("active");
});

// Klik di luar sidebar untuk menghilangkan navbar
document.addEventListener("click", function (e) {
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
