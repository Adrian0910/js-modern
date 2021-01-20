
const cargarAPIBtn = document.querySelector('#cargarAPI');
cargarAPIBtn.addEventListener('click', obtenerDatos);

function obtenerDatos(){
    
    fetch('https://picsum.photos/list')
        .then(respuesta => respuesta.json())
        .then( resultado => mostrarHTML(resultado))
        .catch( error => console.log(error));
}

function mostrarHTML(datos){
    const contenido = document.querySelector('.contenido');

    let html = '';

    datos.forEach( perfil => {

        const { author, post_url } = perfil;

        html += `
            <p>Author: ${author}</p>
            <a href ="${post_url}" target="_blanck">Ver Imagen</a>
        `;

    });

    contenido.innerHTML = html;
}


