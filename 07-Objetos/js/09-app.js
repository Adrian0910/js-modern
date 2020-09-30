"use strict"; 
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 3000,
    disponible: true,
}

producto.precio = 2500;
console.log(producto);
//A diferencia de freeze, seal si nos permite modificar las propiedades existentes del obj
Object.seal(producto); 

console.log(Object.isSealed(producto));