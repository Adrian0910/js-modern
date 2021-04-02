
/* El scope es cuando creas una variable y esta puede ser vista por una funcion un bloque de código
    Ademas existen 2 tipos, globales y en una funcion o bloque de código */

    const cliente = 'Juan'; /* scope global */

    function mostrarCliente(){
        const cliente = 'Pedro'; /* scope local, tiene prioridad sobre la globla, por eso muestra en consola Pedro */
        console.log(cliente);
    }

    mostrarCliente();

