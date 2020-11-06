// VARIABLES

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];


cargarEventListeners();
function cargarEventListeners() {
    // Cuando agregas un curso presionando "Agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);

    // elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    // vaciar el carrito 
    vaciarCarrito.addEventListener('click', () => {
        articulosCarrito = []; // resetea el arreglo
        limpiarHTML(); // eliminamos todo el html
    });

};

// Funciones
function agregarCurso(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso( cursoSeleccionado);
    }  
}

// elimina un curso del carrito
function eliminarCurso(e){
    console.log(e.target.classList);
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');
        // Elimina del arreglo de articuloCarrito por el data-id
        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId)
        carritoHTML(); // Iterar sobre el carrito y mostrar su HTML
    }
}


// Lee el contenido del HTML al que le dimos click y extrae la informacion del curso
function leerDatosCurso(curso){
    console.log(curso);

    // Crear un OBJ con el contenido
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }
    // Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id );
    if(existe){
        // Actualizar la cantidad
        const cursos = articulosCarrito.map( curso => {
            if(curso.id === infoCurso.id){
                curso.cantidad++;
                return curso; // Retorna el obj actualizado
            }else{
                return curso; // Retorna los obj que no son duplicados pero siguen siendo importantes
            }
        });
        articulosCarrito = [...cursos];
    }else{
        // Agregamos el curso al carrito
    articulosCarrito = [...articulosCarrito, infoCurso];
    }

    carritoHTML();
}

// muestra el carrito de compras en el HTML
function carritoHTML(){

    // Limpiar el HTML
    limpiarHTML();

    // Recorre el carrito y genera el HTML
    articulosCarrito.forEach ( curso => {
        const { imagen, titulo, precio, cantidad, id} = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
        <td><img src"${imagen}" width="50"></td>
        <td>${titulo}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td>
            <a href="#" class="borrar-curso" data-id="${id}"> X </a>
        </td>
        `;

        // Agrega el HTMl del carrito al tbody
        contenedorCarrito.appendChild(row);  

    })
}

// Elimina los cursos del HTML
function limpiarHTML(){
    // forma lenta de limpiar 
    //contenedorCarrito.innerHTML = '';

    // forma rápida de limpiar 
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }

}


