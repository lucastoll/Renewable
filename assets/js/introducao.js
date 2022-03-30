/* Animação vetor carvão */

var looper1;
var grausroda1=0;
var grausroda2=0;

let rodas = document.getElementsByClassName("introducao__divVetores__divCarvao__roda")

function rotateRodas(){
  if(rodas[0].getBoundingClientRect().top < 1000 && rodas[0].getBoundingClientRect().top > 200){
    grausroda1++;
    grausroda2++;
    rodas[0].style.transform = `rotate(${grausroda1}deg)`
    rodas[1].style.transform = `rotate(${grausroda2}deg)`
  }
  looper1 = setTimeout(rotateRodas, 20);
}

setTimeout(rotateRodas, 200);


/* Animação vetor petroleo */
const sleep = time => new Promise(resolve => {
    setTimeout(resolve, time)
})

let petroleoTopo = document.querySelector("[data-divVetores-divPetroleo-topo]")
let petroleoTopoDesktop = document.querySelector("[data-divVetores-divPetroleo-topo-desktop]")

var looper2

const animaPetroleo = async() => {
if((petroleoTopo.getBoundingClientRect().top < 1000 && petroleoTopo.getBoundingClientRect().top > 200) || (petroleoTopoDesktop.getBoundingClientRect().top < 1000 && petroleoTopoDesktop.getBoundingClientRect().top > 200)){
    for(i=1;i<21;i++)
    {
        petroleoTopo.style.transform = `rotate(${-i}deg)`
        petroleoTopoDesktop.style.transform = `rotate(${-i}deg)`
        await sleep(100)
    }
    for(i=21;i>1;i--)
    {
        petroleoTopo.style.transform = `rotate(${-i}deg)`
        petroleoTopoDesktop.style.transform = `rotate(${-i}deg)`
        await sleep(100)
    }
}
looper2 = setTimeout(animaPetroleo, 20);
}

setTimeout(animaPetroleo, 200)


/* Trocar imagem da animação petroleo media querie */
/* 
const mediaQuery = window.matchMedia('(max-width: 1024px)')

function mobileslidechange(e){
  if (e.matches) {
    petroleoTopo.src = ""
  }
}

mediaQuery.addListener(mobileslidechange)
mobileslidechange(mediaQuery) */