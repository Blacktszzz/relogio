
function atualizartempo(){
    var display = document.querySelector(".display");

    var agora = new Date();

    var horario = corrigirhora(agora.getHours()) + ':' + corrigirhora(agora.getMinutes()) + ':' + corrigirhora(agora.getSeconds());    


    display.textContent = horario;

}

function corrigirhora(numero){
    if(numero < 10){
        numero = '0' + numero;
    }
    return numero;
}

atualizartempo();
setInterval(atualizartempo,1000);

console.log(horario);
