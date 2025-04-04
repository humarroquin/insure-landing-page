const mobileBtn = document.querySelector(".mobile-btn");
const menu = document.querySelector(".nav-links");

function toggleMenu() {
  menu.classList.toggle("show");
  console.log("Clicked!");
}

mobileBtn.addEventListener("click", toggleMenu);
