var looper;
var graus=20;
let icone = document.querySelector("[data-divlogo-iconloop]")

function rotate(){
  if(icone.getBoundingClientRect().top > -100)
  {
    graus++;
    icone.style.transform = `rotate(${graus}deg)`
  }
  looper = setTimeout(rotate, 20);
}

const fodase = setTimeout(rotate, 200);
