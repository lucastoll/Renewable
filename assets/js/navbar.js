// search-box open close js code
let navbar = document.querySelector(".navbar");

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function () {
  navLinks.style.left = "0";
};
menuCloseBtn.onclick = function () {
  navLinks.style.left = "-100%";
};

// sidebar submenu open close js code

let li = document.querySelector(".liClick");
let ul = document.querySelector(".htmlCss-sub-menu");

li.onclick = function () {
  navLinks.classList.toggle("show1");
  ul.style.animation = "altura 10s ease-in;" /* Fodase */
}
