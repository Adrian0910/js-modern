
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 3000,
    disponible: true,
}

// agregar mas propiedades al obj, despues de la ejecucion del proyecto

producto.imagen = "imagen.jpg"; //como ya estamos por fuera del obj hay que ocupar = en lugar de :
delete producto.disponible; //eliminando disponible del obj


console.log(producto);