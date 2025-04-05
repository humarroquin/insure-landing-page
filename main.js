const mobileBtn = document.querySelector(".header__hamburger-btn");
const menu = document.querySelector(".header__nav-links");

function toggleMenu() {
  menu.classList.toggle("show");
  console.log("Clicked!");
}

mobileBtn.addEventListener("click", toggleMenu);
