
//Obj literal
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 3000,
    disponible: true
}


//Obj Constructor
function Producto(nombre, precio, marca){
    this.nombre = nombre;
    this.precio = precio;
    this.marca = marca;
    this.disponible = true;
}

const producto2 = new Producto('Monitor de 24 pulgadas', 3500, "Sony");
console.log(producto2);