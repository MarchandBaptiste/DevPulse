const menuBtn = document.querySelector(".nav__menu-burger");
const navList = document.querySelector(".nav__list");
const overlay = document.querySelector(".overlay");
const navLinks = document.querySelectorAll(".nav__link");

function setMenu(isOpen) {
  menuBtn.classList.toggle("nav__menu-burger--open", isOpen);
  navList.classList.toggle("nav__list--open", isOpen);
  overlay.classList.toggle("overlay--active", isOpen);
  menuBtn.setAttribute("aria-expanded", isOpen);
}

menuBtn.addEventListener("click", () => {
  setMenu(!navList.classList.contains("nav__list--open"));
});

overlay.addEventListener("click", () => setMenu(false));

navLinks.forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") setMenu(false);
});

// Toggle de class
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((l) => l.classList.remove("is-active"));
    link.classList.add("is-active");
  });
});
