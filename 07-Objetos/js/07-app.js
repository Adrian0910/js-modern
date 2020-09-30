

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 3000,
    disponible: true,
}

producto.disponible = false; //las propiedades de los obj si se pueden modificar...
console.log(producto);
delete producto.precio; //incluso se pueden borrar!
