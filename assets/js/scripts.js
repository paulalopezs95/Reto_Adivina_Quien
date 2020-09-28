/** Harold: sistema de usuarios improvisado */
let points = 3;
let estado = ['inicial', 'inicial', 'exitoso', 'fallido', 'inicial'];

var seconds = 40;
let partidaUsuario = {
    nombre: localStorage.getItem('usuario'),
    puntos: 0,
    tiempo: 300, //seconds
    estado: estado
};

if (localStorage.getItem('partidaUsuario') != null) {
    seconds = parseInt(JSON.parse(localStorage.getItem('partidaUsuario')).tiempo);
}
/** Harold: sistema de usuarios improvisado */


var acierto = 0;
var realizado = 0; //valida si se realizó la seleccion previa de una imagen

var puntos = document.getElementById('puntos').value = 0; //incializa en 0 el campo puntos
var realizado1 = false; //valida si se realizó la seleccion previa de una imagen
var realizado2 = false;
var realizado3 = false;
var realizado4 = false;
var realizado5 = false;
var count = 0;


const imgFoto1 = document.getElementById("foto1");
const imgFoto2 = document.getElementById("foto2");
const imgFoto3 = document.getElementById("foto3");
const imgFoto4 = document.getElementById("foto4");
const imgFoto5 = document.getElementById("foto5");

//FUNCIONES VALIDACION DE INTENTO EN LAS IMAGENES
imgFoto1.addEventListener("click", () => {
    imgFoto1.classList.add('photo1');
    if (realizado1 == false) {} else {
        document.getElementById('foto1').disabled = true;
        swal('Intenta con otra imagen!!!')
    }
});

imgFoto2.addEventListener("click", () => {
    imgFoto2.classList.add('photo2');
    if (realizado2 == false) {} else {
        document.getElementById('foto2').disabled = true;
        swal('Intenta con otra imagen!!!')
    }
});

imgFoto3.addEventListener("click", () => {
    imgFoto3.classList.add('photo3');
    if (realizado3 == false) {} else {
        document.getElementById('foto3').disabled = true;
        swal('Intenta con otra imagen!!!')
    }
});

imgFoto4.addEventListener("click", () => {
    imgFoto4.classList.add('photo4');
    if (realizado4 == false) {} else {
        document.getElementById('foto4').disabled = true;
        swal('Intenta con otra imagen!!!')
    }
});

imgFoto5.addEventListener("click", () => {
    imgFoto5.classList.add('photo5');
    if (realizado5 == false) {} else {
        document.getElementById('foto5').disabled = true;
        swal('Intenta con otra imagen!!!')
    }
});


//FUNCIONES VALIDACION BOTONES MODAL
//BOTON MODAL IMG 1

btnModal1.onclick = function() {
    if (document.getElementById('kevinModal1').checked) {
        puntos++;
        console.log(puntos)
        swal('Adivinaste, tienes ' + puntos + ' punto!')
        document.getElementById('puntos').value = puntos;
        imgFoto1.classList.add('correcto')
    } else {
        swal('Qué mal! tienes que conocer más a tus compañeros');
        imgFoto1.classList.add('incorrecto')
    }
    imgFoto1.classList.remove('button2')
    imgFoto1.classList.add('photo1');
    realizado1 = true;
    finaliza()
}

btnModal2.onclick = function() {
    if (document.getElementById('joseModal2').checked) {
        puntos++;
        console.log(puntos)
        swal('Adivinaste, tienes ' + puntos + ' puntos!')
        document.getElementById('puntos').value = puntos;
        imgFoto2.classList.add('correcto')
    } else {
        swal('Qué mal! tienes que conocer más a tus compañeros');
        imgFoto2.classList.add('incorrecto')
    }
    imgFoto2.classList.remove('button2')
    imgFoto2.classList.add('photo2');
    realizado2 = true;
    finaliza()
}


btnModal3.onclick = function() {
    if (document.getElementById('haroldModal3').checked) {
        puntos++;
        console.log(puntos)
        swal('Adivinaste, tienes ' + puntos + ' puntos!')
        document.getElementById('puntos').value = puntos;
        imgFoto3.classList.add('correcto')
    } else {
        swal('Qué mal! tienes que conocer más a tus compañeros');
        imgFoto3.classList.add('incorrecto')

    }
    imgFoto3.classList.remove('button2')
    imgFoto3.classList.add('photo3');
    realizado3 = true;
    finaliza()
}

btnModal4.onclick = function() {
    if (document.getElementById('jorgeModal4').checked) {
        puntos++;
        console.log(puntos)
        swal('Adivinaste, tienes ' + puntos + ' puntos!')
        document.getElementById('puntos').value = puntos;
        imgFoto4.classList.add('correcto')
    } else {
        swal('Qué mal! tienes que conocer más a tus compañeros');
        imgFoto4.classList.add('incorrecto')
    }
    imgFoto4.classList.remove('button2')
    imgFoto4.classList.add('photo4');
    realizado4 = true;
    finaliza()
}

btnModal5.onclick = function() {
    if (document.getElementById('paulaModal5').checked) {
        puntos++;
        console.log(puntos)
        swal('Adivinaste, tienes ' + puntos + ' puntos!')
        document.getElementById('puntos').value = puntos;
        imgFoto5.classList.add('correcto')
    } else {
        swal('Qué mal! tienes que conocer más a tus compañeros');
        imgFoto5.classList.add('incorrecto')
    }
    imgFoto5.classList.remove('button2')
    imgFoto5.classList.add('photo5');
    realizado5 = true;
    finaliza()
}

function finaliza() {
    if (realizado1 == true && realizado2 == true && realizado3 == true && realizado4 == true && realizado5 == true) {
        swal('Realizaste todas las preguntas y lograste ' + puntos + ' puntos')
            .then((value) => {
                list();
            });
    } else {

    }

}

/** Almacena partidas (Deberia ser cuando se finalice el juego, no antes)*/
let partidas = [];
let partidasLS = localStorage.getItem('partidas');
if (partidasLS != null) {
    partidas = JSON.parse(partidasLS);
}
partidas.push(partidaUsuario);
localStorage.setItem('partidas', JSON.stringify(partidas));


/** Harold: sistema de usuarios improvisado */


again.onclick = () => {
    location.reload();

}

perfil.onclick = () => {
    window.location.href = "../../perfiles.html";
}

/*  Paula: Usuarios */

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

/*  Funciones Modal */

$(function() {
    $("#myModalUser").modal('show');
});

function list() {
    $("#myModalList").modal('show');
}

//contador 5 min
var seconds = 30;

function secondPassed() {
    if (usuario.value != '') {
        partidaUsuario.tiempo = seconds;
        localStorage.setItem('partidaUsuario', JSON.stringify(partidaUsuario));

        var minutes = Math.round((seconds - 30) / 60);
        var remainingSeconds = seconds % 60;
        if (remainingSeconds < 10) {
            remainingSeconds = "0" + remainingSeconds;
        }
        document.getElementById('countdown').innerHTML = minutes + ":" + remainingSeconds;
        if (seconds == 0) {
            clearInterval(countdownTimer);
            document.getElementById('countdown').innerHTML = "Tiempo Finalizado";
            swal('Se te acabó el tiempo')
                .then((value) => {
                    location.reload();
                });

        } else {
            seconds--;
        }
    }

}

var countdownTimer = setInterval('secondPassed()', 1000);