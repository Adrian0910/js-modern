
// every
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];


// Todos los elementos de un arreglo deben cumplir esa condicion para regresar un true


const resultado = carrito.every( producto => producto.precio < 500);
console.log(resultado);



