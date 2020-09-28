const pointsTable = document.getElementById('pointsTable');

let pointsArray = JSON.parse(localStorage.getItem('partidas'));
if(pointsArray != null){
    pointsArray.sort(function(a, b){
        if(parseInt(a.puntos) > parseInt(b.puntos))
            return -1;
        else if(parseInt(a.puntos) < parseInt(b.puntos))
            return 1;
        else{
            if(a.tiempo < b.tiempo)
                return 1;
            else if(a.tiempo > b.tiempo)
                return -1;
            else
                return 0;
        }
            
    });
    
    for(let i = 0; i < pointsArray.length; i++){
        poinstTable.innerHTML += `
            <tr>
                <th class="text-center" scope="row">${i+1}</th>
                <td class="text-center">${pointsArray[i].nombre}</td>
                <td class="text-center">${timeElapsedToString(pointsArray[i].tiempo)}</td>
                <td class="text-center">${pointsArray[i].puntos}</td>
            </tr>
        `
    }
}

function timeElapsedToString(time){
    let elapsed = 300 - time;
    let minutes = parseInt(elapsed / 60);
    let seconds = elapsed % 60;
    if (seconds < 10)
        seconds = '0' + seconds;
    return '0' + minutes + ':' + seconds;   
}


const endBtn = document.getElementById('endBtn');
endBtn.onclick = function endSession(){
/* 
    Cerrar sesión
    Borrar variable de usuario en local Storage
    localStorage.removeItem('user');

 */    
    location.href='../../index.html';
};
