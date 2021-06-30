
var insere = document.getElementById("floco").getContext("2d");
var Neve= new Image();
function Inicio(){
    Neve.src = "Neve.png"
     Desenho();
}
function Desenho (){
    requestAnimationFrame(Desenho);
    insere.drawImage(Neve,10,10,200,200);
}
Inicio();
