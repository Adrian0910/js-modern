// Reduce

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


// Con un forEach

let total = 0;
carrito.forEach( producto => total += producto.precio);
console.log(total);

// Podemos hacer lo mismo pero con un reduce
let resultado = carrito.reduce( (total, producto) => total + producto.precio, 0 );
console.log(resultado);

