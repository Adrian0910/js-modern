/* 
document.addEventListener('DOMContentLoaded', obtenerDatos); */

const cargarJSONArrayBtn = document.querySelector('#cargarJSONArray');
cargarJSONArrayBtn.addEventListener('click', obtenerDatos);


function obtenerDatos(){

    fetch('data/empleados.json')
        .then( respuesta => respuesta.json())
        .then( resultado => mostrarHTML(resultado))
        .catch( error => console.log(error));

}

function mostrarHTML(empleados){

    const contenido = document.querySelector('.contenido');

    let html = '';

    empleados.forEach( empleado => {
        const { nombre, id, empresa, trabajo } = empleado;

        html += `
        <p> Empleado: ${nombre} </p>
        <p> ID: ${id} </p>
        <p> Empresa: ${empresa} </p>
        <p> Trabajo: ${trabajo} </p>
        <p> -------------------------</p>
        `;
    });

    contenido.innerHTML = html;

}



