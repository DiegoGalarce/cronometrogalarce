let milesima = 0;
let secons = 0;
let minut = 0;

function Empezar() {
    control = setInterval(cronometro, 10);
    document.getElementById("Empezar").disabled = true;
    document.getElementById("Reiniciar").disabled = false;
    document.getElementById("Parar").disabled = false;
}
function Parar() {
    clearInterval(control);
    document.getElementById("Parar").disabled = true;
}
function Reiniciar() {
    clearInterval(control);
    milesima = 0;
    secons = 0;
    minut = 0;
    MileSima.innerHTML = "00";
    Segundos.innerHTML = "00";
    Minutos.innerHTML = "00";
    document.getElementById("Empezar").disabled = false;
    document.getElementById("Reiniciar").disabled = true;
    document.getElementById("Parar").disabled = true;
}
function cronometro() {
    milesima = milesima + 1;
    //MileSima.innerHTML = milesima;
    if (milesima < 10) {
        MileSima.innerHTML = "0" + milesima;
    } else {
        MileSima.innerHTML = milesima;
    }

    if (milesima == 59) {
        milesima = 0;
        secons++;
        if (secons < 10) {
            Segundos.innerHTML = "0" + secons;
        } else {
            Segundos.innerHTML = secons;
        }
        if (secons == 59) {
            secons = 0;
            minut++;
            if (minut < 10) {
                Minutos.innerHTML = "0" + minut;
            } else {
                Minutos.innerHTML = minut;
            }
        }
    }
}