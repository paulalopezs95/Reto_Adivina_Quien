var acierto = 0;
var realizado = 0; //valida si se realizó la seleccion previa de una imagen

const imgFoto1 = document.getElementById("foto1");
const imgFoto2 = document.getElementById("foto2");
const imgFoto3 = document.getElementById("foto3");
const imgFoto4 = document.getElementById("foto4");
const imgFoto5 = document.getElementById("foto5");

const puntos = document.getElementById('campoPuntos');

imgFoto1.addEventListener("click", () => {
    imgFoto1.classList.add('photo1');
    if (realizado == 0) {
        realizado = 1;
    } else {
        swal('Ya no tienes más intentos')
    }
});

/* document.getElementById('modal1').addEventListener("click", validar1) */

imgFoto2.addEventListener("click", () => {
    imgFoto2.classList.add('photo2');


});

imgFoto3.addEventListener("click", () => {
    imgFoto3.classList.add('photo3');

});

imgFoto4.addEventListener("click", () => {
    imgFoto4.classList.add('photo4');

});

imgFoto5.addEventListener("click", () => {
    imgFoto5.classList.add('photo5');

});




modal1.onclick = function validar1() {

    if (document.getElementById('kevinModal1').checked) {
        var puntos = 1;
        swal('Adivinaste, tienes ' + puntos + ' punto!')
        document.getElementById('puntos').value = puntos;
        imgFoto1.classList.remove('button2')
        imgFoto1.classList.add('photo1')
    } else {
        swal('Qué mal! tienes que conocer más a tus compañeros');
        imgFoto1.classList.remove('photo1');
    }

}


//Usuario

enviar.onclick = function usuarios() {
    let usuario = document.getElementById('usuario').value;
    if (usuario == '') {
        swal("Queremos saber como se llama tu nombre!");
    } else {
        localStorage.setItem('usuario', usuario);
        swal("Bienvenido " + usuario + "." + "¡Vamos a jugar!")
        document.getElementById('mostrar').value = usuario;
        $("#myModalUser").modal('hide');
    }
}

//contador 5 min
var seconds = 20;

function secondPassed() {
    if (usuario.value != '') {
        var minutes = Math.round((seconds - 30) / 60);
        var remainingSeconds = seconds % 60;
        if (remainingSeconds < 10) {
            remainingSeconds = "0" + remainingSeconds;
        }
        document.getElementById('countdown').innerHTML = minutes + ":" + remainingSeconds;
        if (seconds == 0) {
            clearInterval(countdownTimer);
            document.getElementById('countdown').innerHTML = "Tiempo Finalizado";
            $("#myModalUser").modal('show');
        } else {
            seconds--;
        }
    }

}

var countdownTimer = setInterval('secondPassed()', 1000);
//



const usuarioEnStorage = () => {
    const guardarUsuario = localStorage.getItem('usuario');
    document.getElementById('mostrar').innerHTML = guardarUsuario;
}
usuarioEnStorage()

$(function() {
    $("#myModalUser").modal('show');
});