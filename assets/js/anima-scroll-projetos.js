const sections = [...document.querySelectorAll("section")];
const navbar = document.querySelector(".navbar");
const home = document.getElementById("home");
const lottie = document.getElementById("svg");
const final = document.querySelector(".final");
var permissao = true;


let options = {
  rootMargin: "0px",
  threshold: 0.1
};

const callback = (entries, observer) => {
  entries.forEach(entry => {
const { target } = entry;

if (entry.intersectionRatio >= 0.1) {
target.classList.add("is-visible");
}

if(window.innerWidth < 1024)
    navbar.style.padding = "0px 40px"
else if(window. innerWidth >= 1440)  
    navbar.style.padding = "0px 100px"
else
    navbar.style.padding = "0px 80px"

  });
};  

const observer = new IntersectionObserver(callback, options);

sections.forEach((section, index) => {
  observer.observe(section);
});  

var main = document.getElementById("main")
