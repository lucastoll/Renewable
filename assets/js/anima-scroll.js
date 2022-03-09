let divStop = document.getElementById('divstop')
var elementDivStopTop = divStop.getBoundingClientRect().top
let passport = 1;

function ScrollCaseBox(controle){
    let scrollBox = document.getElementById('scrollbox') /* M */
    var elementTop = scrollBox.getBoundingClientRect().top; /* m */
    var windowHeight = window.innerHeight;  /* height do dispositivo */ 
    var elementVisible = 200;


    console.log("elementTop = ", elementTop, "elementDivStopTop = ", elementDivStopTop, "scrollBox off height = ", scrollBox.offsetHeight, "controle = ", controle)

    if(elementTop > 500){
        if(elementTop < windowHeight - elementVisible && controle == 1)  /* distancia ate o topo < altura da pag - altura da revelação  */
        {                                     
            scrollBox.style.backgroundColor = "green"
            divStop.scrollIntoView(true);
        }
        else{scrollBox.style.backgroundColor = "red"} 
    }
}



window.addEventListener("scroll", function (){
    ScrollCaseBox(passport)
});


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