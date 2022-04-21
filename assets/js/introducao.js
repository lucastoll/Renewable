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


