// Find index

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Con forEach
meses.forEach( (mes, i) => {
    if(mes === "Abril"){
        console.log(`Encontrado en el índice ${i}`);
    }
});

// findIndex ... encontrar el índice de Abril
const indice = meses.findIndex( mes => mes === "Abril");
console.log(indice);


// Encontrar indice en el arreglo de obj ... findIndex solamente trae el primero que encuentre (Si esque hay mas de 1)

const indice2 = carrito.findIndex( producto => producto.precio === 400 );
console.log(indice2);
