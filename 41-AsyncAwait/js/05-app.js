
const url = 'https://picsum.photos/list';

document.addEventListener('DOMContentLoaded', obtenerDatos());


// Promises
/* function obtenerDatos() {
    fetch(url)
        .then( respuesta => respuesta.json())
        .then( resultado => console.log(resultado))
        .catch( error => console.log(error));
} */


// async await
async function obtenerDatos(){
    try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}





