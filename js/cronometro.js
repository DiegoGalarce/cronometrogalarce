let contadorS = 0;
let contadorM = 0;
function crono(){
    let pHora = document.getElementById("horas");
    let pMinutos = document.getElementById("minutos");
    let pSegundos = document.getElementById("segundos");

window.setInterval(
    function(){
        if(contadorS==60){
            contadorS = 0;
            contadorM++;
            pMinutos.innerHTML = "0" + contadorM;
            if(contadorM==0){
               contadorM=0;
            }
            pSegundos.innerHTML = "0" + contadorS;
         }
    }
,1000);

} 