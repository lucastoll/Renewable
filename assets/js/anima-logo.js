var looper;
var graus=20;

function rotate(){
  document.querySelector("[data-divlogo-iconloop]").style.transform = `rotate(${graus}deg)`
  graus++;
  looper = setTimeout(rotate, 20);
}

setTimeout(rotate, 180);

