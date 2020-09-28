let timer = 30;
let seconds;

let partidaUsuario = {
    nombre: '',
    puntos: 0,
    tiempo: timer //seconds
};


/*  Funciones Modal */
$(function () {
    $("#myModalUser").modal('show');
});

const enviar = document.getElementById('enviar');
enviar.addEventListener('click', () => {
    let usuario = document.getElementById('usuario').value;
    if (usuario == '') {
        swal("Queremos saber como se llama tu nombre!");
    } else {
        swal("Bienvenido " + usuario + "." + "¡Vamos a jugar!");
        document.getElementById('mostrar').value = usuario;

        storageGame(usuario);
        $("#myModalUser").modal('hide');
        runTimer();
    }
});


function storageGame(usuario) {
    let partidaLS = localStorage.getItem('partidaUsuario');
    if ((partidaLS != null) && (JSON.parse(partidaLS).nombre == usuario)) {
        partidaUsuario = JSON.parse(partidaLS);
    }
    else {
        partidaUsuario.nombre = usuario;
    }

    localStorage.setItem('usuario', usuario);
    localStorage.setItem('partidaUsuario', JSON.stringify(partidaUsuario));
    seconds = partidaUsuario.tiempo;
}

function runTimer() {
    partidaUsuario.tiempo = seconds;
    partidaUsuario.puntos = puntos;
    localStorage.setItem('partidaUsuario', JSON.stringify(partidaUsuario));

    let remainingMinutes = parseInt(seconds / 60);
    let remainingSeconds = seconds % 60;
    if (remainingSeconds < 10)
        remainingSeconds = "0" + remainingSeconds;
    document.getElementById('countdown').innerHTML = remainingMinutes + ":" + remainingSeconds;

    if (seconds == 0) {
        document.getElementById('countdown').innerHTML = "Tiempo Finalizado";
        swal('Se te acabó el tiempo')
            .then((value) => {
                list();
            });
        $("#myModalList").modal('show');
        savePunctuation();
    }
    else if (counter == 5) {
        savePunctuation();
    }
    else {
        seconds--;
        setTimeout("runTimer()", 1000);
    }
}

function savePunctuation() {
    let partidas = [];
    let partidasLS = localStorage.getItem('partidas');
    if (partidasLS != null) {
        partidas = JSON.parse(partidasLS);
    }
    partidas.push(partidaUsuario);
    localStorage.setItem('partidas', JSON.stringify(partidas));
    localStorage.removeItem('partidaUsuario');
}

let puntos = document.getElementById('puntos').value = 0; //incializa en 0 el campo puntos
let realizado1 = false; //valida si se realizó la seleccion previa de una imagen
let realizado2 = false;
let realizado3 = false;
let realizado4 = false;
let realizado5 = false;
let counter = 0;


const imgFoto1 = document.getElementById("foto1");
const imgFoto2 = document.getElementById("foto2");
const imgFoto3 = document.getElementById("foto3");
const imgFoto4 = document.getElementById("foto4");
const imgFoto5 = document.getElementById("foto5");

//FUNCIONES VALIDACION DE INTENTO EN LAS IMAGENES
imgFoto1.addEventListener("click", () => {
    imgFoto1.classList.add('photo1');
    if (realizado1 == false) { } else {
        document.getElementById('foto1').disabled = true;
        swal('Intenta con otra imagen!!!')
    }
});

imgFoto2.addEventListener("click", () => {
    imgFoto2.classList.add('photo2');
    if (realizado2 == false) { } else {
        document.getElementById('foto2').disabled = true;
        swal('Intenta con otra imagen!!!')
    }
});

imgFoto3.addEventListener("click", () => {
    imgFoto3.classList.add('photo3');
    if (realizado3 == false) { } else {
        document.getElementById('foto3').disabled = true;
        swal('Intenta con otra imagen!!!')
    }
});

imgFoto4.addEventListener("click", () => {
    imgFoto4.classList.add('photo4');
    if (realizado4 == false) { } else {
        document.getElementById('foto4').disabled = true;
        swal('Intenta con otra imagen!!!')
    }
});

imgFoto5.addEventListener("click", () => {
    imgFoto5.classList.add('photo5');
    if (realizado5 == false) { } else {
        document.getElementById('foto5').disabled = true;
        swal('Intenta con otra imagen!!!')
    }
});


//FUNCIONES VALIDACION BOTONES MODAL
//BOTON MODAL IMG 1

btnModal1.onclick = function () {
    if (document.getElementById('kevinModal1').checked) {
        puntos++;
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
    finaliza();
    counter++;
}

btnModal2.onclick = function () {
    if (document.getElementById('joseModal2').checked) {
        puntos++;
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
    finaliza();
    counter++;
}


btnModal3.onclick = function () {
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
    finaliza();
    counter++;
}

btnModal4.onclick = function () {
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
    finaliza();
    counter++;
}

btnModal5.onclick = function () {
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
    finaliza();
    counter++;
}

function finaliza() {
    if (realizado1 == true && realizado2 == true && realizado3 == true && realizado4 == true && realizado5 == true) {
        swal('Realizaste todas las preguntas y lograste ' + puntos + ' puntos')
            .then((value) => {
                list();
            });
    }
}

function list() {
    const pointsTable = document.getElementById('pointsTable');
    let pointsArray = JSON.parse(localStorage.getItem('partidas'));
    if (pointsArray != null) {
        pointsArray.sort(function (a, b) {
            if (parseInt(a.puntos) > parseInt(b.puntos))
                return -1;
            else if (parseInt(a.puntos) < parseInt(b.puntos))
                return 1;
            else {
                if (a.tiempo < b.tiempo)
                    return 1;
                else if (a.tiempo > b.tiempo)
                    return -1;
                else
                    return 0;
            }

        });

        for (let i = 0; i < pointsArray.length; i++) {
            pointsTable.innerHTML += `
            <tr>
                <th class="text-center" scope="row">${i + 1}</th>
                <td class="text-center">${pointsArray[i].nombre}</td>
                <td class="text-center">${timeElapsedToString(pointsArray[i].tiempo)}</td>
                <td class="text-center">${pointsArray[i].puntos}</td>
            </tr>
        `
        }
    }
    $("#myModalList").modal('show');
}

again.onclick = () => {
    location.reload();
}

function timeElapsedToString(time) {
    let elapsedTime = timer - time;
    let elapsedMinutes = parseInt(elapsedTime / 60);
    let elapsedSeconds = elapsedTime % 60;
    if (elapsedSeconds < 10)
        elapsedSeconds = '0' + elapsedSeconds;
    return '0' + elapsedMinutes + ':' + elapsedSeconds;
}

again.onclick = () => {
    location.reload();

}

perfil.onclick = () => {
    window.location.href = "../../perfiles.html";
}