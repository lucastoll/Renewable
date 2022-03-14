/* Animação vetor carvão */

var looper1;
var grausroda1=0;
var grausroda2=0;

let rodas = document.getElementsByClassName("introducao__divVetores__divCarvao__roda")

function rotateRodas(){
  rodas[0].style.transform = `rotate(${grausroda1}deg)`
  rodas[1].style.transform = `rotate(${grausroda2}deg)`
  grausroda1++;
  grausroda2++;
  looper1 = setTimeout(rotateRodas, 5);
}

setTimeout(rotateRodas, 1);


/* Animação vetor petroleo */
const sleep = time => new Promise(resolve => {
    setTimeout(resolve, time)
})

let petroleoTopo = document.querySelector("[data-divVetores-divPetroleo-topo]")
var looper2

const animaPetroleo = async() => {
for(i=1;i<21;i++)
{
    petroleoTopo.style.transform = `rotate(${-i}deg)`
    await sleep(100)
}
for(i=21;i>1;i--)
{
    petroleoTopo.style.transform = `rotate(${-i}deg)`
    await sleep(100)
}
looper2 = setTimeout(animaPetroleo, 5);
}

setTimeout(animaPetroleo, 1)
