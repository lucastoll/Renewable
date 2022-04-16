const sections = [...document.querySelectorAll("section")];
let backbutton = document.querySelector("[data-backbutton]")

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
  });
};

const observer = new IntersectionObserver(callback, options);

sections.forEach((section, index) => {
  observer.observe(section);
});



var main = document.getElementById("main")



