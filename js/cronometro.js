let secons = 0;
let minut = 0;
let hora = 0;

function Empezar(){
    control = setInterval(cronometro, 10);
    document.getElementById("Empezar").disabled = true;
    document.getElementById("Reiniciar").disabled = false;
    document.getElementById("Parar").disabled = false;
} console.log("Parar")

function Parar(){
    clearInterval(control);
    document.getElementById("Parar").disabled = true;
}

function Reiniciar(){
clearInterval(control);
secons = 0;
minut = 0; 
hora = 0;
Segundos.innerHTML = "00";
Minutos.innerHTML = "00";
Hora.innerHTML = "00";
document.getElementById("Empezar").disabled = false;
document.getElementById("Reiniciar").disabled = true;
document.getElementById("Parar").disabled = true;
}


function cronometro(){
   if (minut == 0) {
        secons++;
        if (secons < 10) { secons = "0"+ secons }
        Segundos.innerHTML = secons;
       }
    if(secons == 59){
        secons = -1;
    }
    if(secons == 0){
        minut++;
        if(minut < 10){
            minut = "0" + minut;
        }
        Minutos.innerHTML = minut;
    }
    if(minut == 59){
        minut = -1
    }
    if(secons == 0 && minut == 0){
       hora++;
       if(hora < 10){
       hora = "0" + hora
       }
       Horas.innerHTML = hora
    }
    
    

}