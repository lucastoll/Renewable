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

console.log(entry.intersectionRatio)
if (entry.intersectionRatio >= 0.1) {
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
if(final.getBoundingClientRect().top < 1000 && permissao == true) 
{
  permissao = false;
  lottie.classList.remove("hide");
  setTimeout(()=>{
    animItem.goToAndPlay(0,true);
  }, 1000)

  setTimeout(()=>{
    permissao = true
  }, 3000)
}  

  });
};  

const observer = new IntersectionObserver(callback, options);

sections.forEach((section, index) => {
  observer.observe(section);
});  



var main = document.getElementById("main")



const animItem = bodymovin.loadAnimation({
  wrapper: lottie,
  animType: 'svg',
  loop: false,
  autoplay: false,
  path: 'https://assets2.lottiefiles.com/packages/lf20_fehtbnef.json'
});

animItem.setSpeed(0.75);

