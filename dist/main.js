const burger = document.querySelector(".burger");
const menu = document.querySelector(".mobile__menu");

burger.addEventListener("click", () => {
  burger.classList.toggle("open");
  menu.classList.toggle("open");
});
