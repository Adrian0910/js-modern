
let DB;
let idCliente;

const nombreInput = document.querySelector('#nombre');
const empresaInput = document.querySelector('#empresa');
const telefonoInput = document.querySelector('#telefono');
const emailInput = document.querySelector('#email');

const formulario = document.querySelector('#formulario');



(function() {


    document.addEventListener('DOMContentLoaded', () => {
        conectarDB();


        // Actualiza el registro
        formulario.addEventListener('submit', actualizarCliente);


        // verificar el id de la url
        const parametrosURL = new URLSearchParams(window.location.search);
        idCliente = parametrosURL.get('id');
        if(idCliente){
            setTimeout(() => {
                obtenerCliente(idCliente);
            }, 100);
        }
    });

    function actualizarCliente(e) {
        e.preventDefault();

        if(nombreInput.value === '' || emailInput.value === '' || empresaInput === '' || telefonoInput === '' ){
            imprimirAlerta('Todos los campos son obligatorios');
            return;
        }

        // Actualizar Cliente
        const clienteActualizado = {
            nombre: nombreInput.value,
            email: emailInput.value,
            empresa: empresaInput.value,
            telefono: telefonoInput.value,
            id: Number(idCliente),
        }

        const transaction = DB.transaction(['crm'], 'readwrite');
        const objectStore = transaction.objectStore('crm');

        objectStore.put(clienteActualizado);

        transaction.oncomplete = () => {
            imprimirAlerta('Editado correctamente', 'error');

            setTimeout(() => {
                window.location.href = 'index.html'; 
            }, 3000);
        };

        transaction.onerror = () => {
            imprimirAlerta('Hubo un error');
        }

    }


    function obtenerCliente(id){
        const transaction = DB.transaction(['crm'], 'readonly');
        const objectStore = transaction.objectStore('crm');

        const cliente = objectStore.openCursor();
        cliente.onsuccess= (e) => {
            const cursor = e.target.result;

            if(cursor){
                if(cursor.value.id === Number(id)){
                    llenarFormulario(cursor.value);
                }
                cursor.continue();
            }
        }
    }

    function llenarFormulario(datosCliente){
        const { nombre, email, telefono, empresa } = datosCliente;

        nombreInput.value = nombre;
        empresaInput.value = empresa;
        telefonoInput.value = telefono;
        emailInput.value = email;
       
    }

    function conectarDB(){
        const abrirConexion = window.indexedDB.open('crm', 1);

        abrirConexion.onerror = () => {
            console.log('Hubo un error');
        };

        abrirConexion.onsuccess = () => 
        DB = abrirConexion.result;
    };
})();


