function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function lockScroll(){
    $html = $('html'); 
    $body = $('body'); 
    var initWidth = $body.outerWidth();
    var initHeight = $body.outerHeight();

    var scrollPosition = [
        self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
        self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
    ];
    $html.data('scroll-position', scrollPosition);
    $html.data('previous-overflow', $html.css('overflow'));
    $html.css('overflow', 'hidden');
    window.scrollTo(scrollPosition[0], scrollPosition[1]);   

    var marginR = $body.outerWidth()-initWidth;
    var marginB = $body.outerHeight()-initHeight; 
    $body.css({'margin-right': marginR,'margin-bottom': marginB});
} 

function unlockScroll(){
    $html = $('html');
    $body = $('body');
    $html.css('overflow', $html.data('previous-overflow'));
    var scrollPosition = $html.data('scroll-position');
    window.scrollTo(scrollPosition[0], scrollPosition[1]);    

    $body.css({'margin-right': 0, 'margin-bottom': 0});
}

let arrow = document.getElementById("flecha")
let divStop = document.getElementById("divstop")
let scrollBox = document.getElementById("scrollbox");

/* Se clicar na flecha -> prox seção */
arrow.addEventListener("click", () => {
    divStop.scrollIntoView({block: "end", behavior: "smooth"});
})











/* 

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting == true) {
        document.body.setAttribute('style','overflow:hidden;');
        console.log(entry.target.offsetTop);
        observer.unobserve(scrollBox)

        setTimeout(function(){
         document.body.setAttribute('style','overflow:visible;');       
         divStop.scrollIntoView({block: "end", behavior: "smooth"});
         }, 250);
  
      }
    });
  },
  {threshold: 0},
);


observer.observe(scrollBox);

 */



/* 
const scroller = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
        document.body.setAttribute('style','overflow:hidden;');
        console.log("aa")
        setTimeout(function(){
         document.body.setAttribute('style','overflow:visible;');       
         entry.target.scrollIntoView(true);
         }, 250);
    }
  });
});

scroller.observe(scrollBox);

 */









/* window.scroll(0, y); */


/* let cases = document.getElementsByClassName('cases__caseBox')
var windowHeight = window.innerHeight;  height da pagina 
var elementTop = cases[0].getBoundingClientRect().top;
var elementVisible = 100;

for(var i = 0; i < cases.length; i++)
{
     var elementTop = cases[i].getBoundingClientRect().top;
     if(elementTop < windowHeight - elementVisible)  distancia ate o topo < altura da pag - altura da revelação 
     {                                         
          for(var l = 0; l < cases.length; l++)
          {
               cases[i].classList.remove("cases__caseBox--invisivel")
          }
     } 
}

if(cases[2].getBoundingClientRect().top < windowHeight - elementVisible)
{
     for(var j = 0; j < cases.length; j++)
     {
          sleep(17000);
          cases[j].style.transition = "all .3s"
     }
}

 */