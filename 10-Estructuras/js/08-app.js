//

const autenticado = true;


//Esto es un error, no se debe de hacer
if(autenticado == true){
    console.log("El usuario está autenticado");
}

//Asi se debe de hacer
if(autenticado){
    console.log("El usuario está autenticado");
}



const puntaje = 450;

function revisarPuntaje(){
    if(puntaje > 400){
        console.log("¡Excelente!")
        return;
    } 
    if(puntaje > 300) {
        console.log("Buen puntaje... felicidades");
        return;
    }
}
revisarPuntaje();

