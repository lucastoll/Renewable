const sections = [...document.querySelectorAll("section")];
let backbutton = document.querySelector("[data-backbutton]")

let options = {
  rootMargin: "0px",
  threshold: 0.25
};

const callback = (entries, observer) => {
  entries.forEach(entry => {
const { target } = entry;
/* console.log(entry, target) */

if (entry.intersectionRatio >= 0.25) {
target.classList.add("is-visible");

if(target.classList.contains("home"))
{
  backbutton.style.animation = "backbuttonLeave 0.5s forwards"
}
else
{
  backbutton.style.animation = "backbuttonEnter 0.5s forwards"
}




}
  });
};

const observer = new IntersectionObserver(callback, options);

sections.forEach((section, index) => {
  observer.observe(section);
});

/* window.onload(removeClass()); */

/* const animaBackbutton = function scrollOpacity () {
  backbutton.style.opacity = "0.50"
  backbutton.style.opacity = "0.50"
  backbutton.style.opacity = "0.50"
  backbutton.style.opacity = "0.50"
  backbutton.style.opacity = "0.50"
  backbutton.style.opacity = "0.50"
  backbutton.style.opacity = "0.50"
  backbutton.style.opacity = "0.50"
  backbutton.style.opacity = "0.50"
  backbutton.style.opacity = "0.50"
  backbutton.style.opacity = "0.50"
  backbutton.style.opacity = "0.50"
  backbutton.style.opacity = "0.50"
  backbutton.style.opacity = "0.50"
  backbutton.style.opacity = "0.50"
  backbutton.style.opacity = "0.50"
  backbutton.style.opacity = "0.50"
  backbutton.style.opacity = "0.50"
  backbutton.style.opacity = "0.50"
  backbutton.style.opacity = "0.50"
  backbutton.style.opacity = "1"

}
 */

let didScroll = false;

var main = document.getElementById("main")
main.onscroll = () => didScroll = true;

setInterval(() => {
    if ( didScroll ) {
        didScroll = false;
        backbutton.style.opacity = "0.50"
    }
    else{
      backbutton.style.opacity = "1"
    }
}, 100);


/* main.addEventListener("scroll", animaBackbutton); */