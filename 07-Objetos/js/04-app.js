
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 3000,
    disponible: true,
}

//Esta era la forma anterior de extraer los datos del obj
// const nombre = producto.nombre;
// console.log(nombre);

//ahora podemos hacer esto con obj destructuring
// const {nombre} = producto;
// const {precio} = producto;
// const {disponible} = producto;
// console.log(nombre);
// console.log(precio);
// console.log(disponible);


//todo lo de arriba se puede resumir en esta linea
const {nombre, precio, disponible} = producto; //destructuring
console.log(nombre);
console.log(precio);
console.log(disponible);
