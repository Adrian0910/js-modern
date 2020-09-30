
"use strict"; //Comparador estrico para que los atributos de nuestros obj no se puedan modificar
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 3000,
    disponible: true,
}

Object.freeze(producto); //con esto evitamos la modificacion de informacion en el obj producto

//Como hacer para que los atributos del obj no se puedan cambiar?
// producto.disponible = false;
// producto.imagen = "imagen.jpg"

console.log(Object.isFrozen(producto)); //Nos informa si el obj esta o no congelado
//métodos de obj

