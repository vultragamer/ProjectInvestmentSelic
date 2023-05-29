let element1 = document.getElementById("tesouroSelic");
let element2 = document.getElementById("tesouroprefixado");
let element3 = document.getElementById("tesouro_ipc+juros");
let element4 = document.getElementById("tesouroipca+");



function alterarTesouroS(){

  if (element1.classList.contains("oculto")) {
    element1.classList.remove("oculto");
    element2.classList.add("oculto");
    element3.classList.add("oculto");
    element4.classList.add("oculto");
  }   
}
function mudarTesouroPrefixado(){

if(element2.classList.contains("oculto")){
  element1.classList.add("oculto");
  element2.classList.remove("oculto");
  element3.classList.add("oculto");
  element4.classList.add("oculto");
}
}

function mudarTesouroIpcaJUROS(){
  if(element3.classList.contains("oculto")){
  element1.classList.add("oculto");
  element2.classList.add("oculto");
  element3.classList.remove("oculto");
  element4.classList.add("oculto");
  }
}

function mudarTesouroIpcaDATA(){
  if(element4.classList.contains("oculto")){
  element1.classList.add("oculto");
  element2.classList.add("oculto");
  element3.classList.add("oculto");
  element4.classList.remove("oculto");}
}