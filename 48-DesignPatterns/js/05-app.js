// Module Pattern
// Para organizar código

const mostrarCliente = nombre =>  {
    console.log(nombre);
}

export default mostrarCliente;

const modulo1 = (function(){
    const nombre = 'Juan';

    function hola(){
        console.log('hola');
    }

    return{
        nombre,
        hola
    }
})();



