/* ANIMAÇÃO VETOR ENERGIA EOLICA */

let helice = document.querySelector("[data-desenvolvimento-divVetores-divEolica-helice]")
let heliceDesktop = document.querySelector("[data-desenvolvimento-divVetores-divEolica-helice-desktop]")

var looper3
var graushelice=0;

const animaEolica = async() => {
if((helice.getBoundingClientRect().top < 1000 && helice.getBoundingClientRect().top > -200) || (heliceDesktop.getBoundingClientRect().top < 1000 && heliceDesktop.getBoundingClientRect().top > -200)){
    helice.style.transform = `rotate(${graushelice}deg)` 
    heliceDesktop.style.transform = `rotate(${graushelice}deg)`       
    graushelice--;
}

looper3 = setTimeout(animaEolica, 10);
}

const Eolica = setTimeout(animaEolica, 200)

/* ANIMAÇÃO VETOR ENERGIA HIDRICA */

let rodaHidrica = document.querySelector("[data-desenvolvimento-divVetores-divHidreletrica-rodaHidrica]")
let rodaHidricaDesktop = document.querySelector("[data-desenvolvimento-divVetores-divHidreletrica-rodaHidrica-desktop]")

var looper4
var grausRodaHidrica=0;

const animaHidrica = async() => {
if((rodaHidrica.getBoundingClientRect().top < 1000 && rodaHidrica.getBoundingClientRect().top > -200) || (rodaHidricaDesktop.getBoundingClientRect().top < 1000 && rodaHidricaDesktop.getBoundingClientRect().top > -200)){
    rodaHidrica.style.transform = `rotate(${grausRodaHidrica}deg)`
    rodaHidricaDesktop.style.transform = `rotate(${grausRodaHidrica}deg)`        
    grausRodaHidrica--;
}
looper3 = setTimeout(animaHidrica, 30);
}

const Hidrica = setTimeout(animaHidrica, 200)


