const hamburgerBtn = document.querySelector(".header__hamburger-btn");
const navMenu = document.querySelector(".header__nav-links");
const body = document.body;
const screenSize = window.matchMedia("(min-width: 46.875em)");

function openCloseMenu() {
  navMenu.classList.toggle("show");
  body.classList.toggle("no-scroll");

  // aria-expanded
  const isOpen = navMenu.getAttribute("aria-expanded") === "true";
  navMenu.setAttribute("aria-expanded", !isOpen);
}

function closeOnWindowResizing(e) {
  if (e.matches) {
    navMenu.classList.remove("show");
    body.classList.remove("no-scroll");
  }
}

closeOnWindowResizing(screenSize);
hamburgerBtn.addEventListener("click", openCloseMenu);
screenSize.addEventListener("change", closeOnWindowResizing);
