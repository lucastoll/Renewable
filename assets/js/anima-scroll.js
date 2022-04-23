const sections = [...document.querySelectorAll("section")];
const navbar = document.querySelector(".navbar");
const home = document.getElementById("home");

let options = {
  rootMargin: "0px",
  threshold: 0.25
};

const callback = (entries, observer) => {
  entries.forEach(entry => {
const { target } = entry;

if (entry.intersectionRatio >= 0.25) {
target.classList.add("is-visible");
}

if(window.innerWidth > 1440){
  if(home.getBoundingClientRect().top > -1000)
  {
    navbar.style.padding = "0px 40px"
  }
  else if(target.classList.contains("energia"))
  {
    navbar.style.padding = "0px 17px"
  }
}
  });
};

const observer = new IntersectionObserver(callback, options);

sections.forEach((section, index) => {
  observer.observe(section);
});



var main = document.getElementById("main")



