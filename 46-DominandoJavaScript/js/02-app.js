/* hoisting, se refiere a como funcionan los contextos en JS  
    Estio vendria siendo un ejemplo de function declaration, gracias a que
    JS ejecuta el código en dos fases se puede llamar a la funcion antes del código que la crea.
    Esto se debe a que JS ya construyó el código para eso.*/

obtenerCliente('Adrian');

function obtenerCliente(nombre){
    console.log(`El nombre del cliente es ${nombre}`);
}


/* En este caso, si movemos el llamado de la función arriba, antes de crearla aqui SI nos va a dar error.
    Esto se debe al hoisting, ya que aunque esta sea una funcion tiene una sintaxis de variable */
const obtenerCliente2 = function(nombre){
    console.log(`El nombre del cliente es ${nombre}`);
}
obtenerCliente2('Luis');
