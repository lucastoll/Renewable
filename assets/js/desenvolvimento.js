/* ANIMAÇÃO VETOR ENERGIA EOLICA */

let helice = document.querySelector("[data-desenvolvimento-divVetores-divEolica-helice]")
var looper3
var graushelice=0;

const animaEolica = async() => {
if(helice.getBoundingClientRect().top < 1000 && helice.getBoundingClientRect().top > -200){
    helice.style.transform = `rotate(${graushelice}deg)`    
    graushelice--;
}

looper3 = setTimeout(animaEolica, 10);
}

const Eolica = setTimeout(animaEolica, 200)

/* ANIMAÇÃO VETOR ENERGIA HIDRICA */

let rodaHidrica = document.querySelector("[data-desenvolvimento-divVetores-divHidreletrica-rodaHidrica]")
var looper4
var grausRodaHidrica=0;

const animaHidrica = async() => {
if(rodaHidrica.getBoundingClientRect().top < 1000 && rodaHidrica.getBoundingClientRect().top > -200){
    rodaHidrica.style.transform = `rotate(${grausRodaHidrica}deg)`    
    grausRodaHidrica--;
}
looper3 = setTimeout(animaHidrica, 30);
}

const Hidrica = setTimeout(animaHidrica, 200)


