// Proyecto con clases

// Variables y selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');


// Eventos
eventListener(); //llamando a la funcion

function eventListener(){
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto); //addEvent => eventListener

    formulario.addEventListener('submit', agregarGasto);
}


// Clases
class Presupuesto {
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    nuevoGasto(gasto){
        this.gastos= [...this.gastos, gasto];
        this.calcularRestante();
    }

    calcularRestante(){
        const gastado = this.gastos.reduce( (total, gasto ) => total + gasto.cantidad, 0);
        this.restante = this.presupuesto - gastado;
        
    }
}

class UI {
    // método
    insertarPresupuesto( cantidad ){ 
        // Primero extraemos el valor
        const { presupuesto, restante } = cantidad;

        // Ahora los agregamos al HTML
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    // método
    imprimirAlerta(mensaje, tipo){ 
        // crear el div
        const divMensaje = document.createElement('div')
        divMensaje.classList.add('text-center', 'alert');
        
        if(tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        }else{
            divMensaje.classList.add('alert-success');
        }

        // Mensaje de error
        divMensaje.textContent = mensaje;

        // Insertar en el HTML
        document.querySelector('.primario').insertBefore(divMensaje, formulario);
        // Quitar el mensaje
        setTimeout( () => {
            divMensaje.remove();
        }, 2000);
    }
    agregarGastoListado(gastos){

        this.limpiarHTML(); // Limpia el HTML

        // Iterar sobre los gastos
        gastos.forEach( gasto => {
            const{ cantidad, nombre, id } = gasto;

            // Crear un LI
            const nuevoGasto = document.createElement('li');
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
            nuevoGasto.dataset.id = id;

            // Agregamos el HTML del gasto
            nuevoGasto.innerHTML = `${nombre} <span class="badge badge-primary badge-pill"> $ ${cantidad} </span>`;

            // Boton para borrar el gasto
            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
            btnBorrar.innerHTML = 'Borrar &times;'
            nuevoGasto.appendChild(btnBorrar);

            // Agregar al HTML
            gastoListado.appendChild(nuevoGasto);

        });
    }
    limpiarHTML(){
        while( gastoListado.firstChild ){
            gastoListado.removeChild(gastoListado.firstChild);
        }
    }

    actualizarRestante(restante){
        document.querySelector('#restante').textContent = restante;

    }

    comprobarPresupuesto(presupuestoObj){
        const{ presupuesto, restante } = presupuestoObj;

        const restanteDiv = document.querySelector('.restante');

        // Comprobar el 25%
        if( (presupuesto / 4 ) > restante){
            restanteDiv.classList.remove('alert-success', 'alert-warning');
            restanteDiv.classList.add('alert-danger');
            // Comprobar el 50%
        }else if( (presupuesto / 2 > restante)){
            restanteDiv.classList.remove('alert-success');
            restanteDiv.classList.add('alert-warning');
        }

        // si el total es 0 o menor
        if(restante <= 0){
            ui.imprimirAlerta('El presupuesto se ha agotado', 'error');

            formulario.querySelector('button[type="submit"]').disabled=true;
        }
    }

}

// Instanciar 
const ui = new UI();
let  presupuesto; // Esta variable nos ayuda a pasar el presupuesto a la clase



// Funciones
function preguntarPresupuesto(){ // preguntarPresupuesto => addEvent
    const presupuestoUsuario = prompt('¿Cual es tu presupuesto?');
    console.log(Number(presupuestoUsuario));

    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0){ // is Not a number
        window.location.reload();
    }

    // Presupuesto
    presupuesto = new Presupuesto(presupuestoUsuario); // obj
    
    ui.insertarPresupuesto(presupuesto);
}

function agregarGasto(e){
    e.preventDefault();

    // Leer los datos del formulario
    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);

    // Validar
    if(nombre ==='' || cantidad ===''){
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error');
        return;

    }else if( cantidad <= 0 || isNaN(cantidad) ){
        ui.imprimirAlerta('Cantidad no válida', 'error');
        return;
    }

    // Crear un objeto con el Gasto y object literal
    const gasto = {nombre, cantidad, id: Date.now() }

    // añade un nuevo gasto
    presupuesto.nuevoGasto( gasto );

    // Mensaje todo bien
    ui.imprimirAlerta('Gasto agregado correctamente');

    // Imprimir los gastos
    const { gastos, restante } = presupuesto;
    ui.agregarGastoListado(gastos);
    ui.actualizarRestante(restante);
    ui.comprobarPresupuesto(presupuesto);

    // Reinicia el formulario
    formulario.reset();

}



