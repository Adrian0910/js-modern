//Map y each con arrow function

const carrito = [ //Este arreglo tiene objetos
    {nombre: "Monitor 27 pulgadas", precio: 5000},
    {nombre: "Television", precio: 2500},
    {nombre: "Pixel a4", precio: 11000},
    {nombre: "Mouse", precio: 250},
    {nombre: "Reloj", precio: 600},
    {nombre: "Xbox", precio: 8000}
]

//Method forEach
carrito.forEach( producto => 
    console.log(`${producto.nombre} - Precio: ${producto.precio}`));//forEach NO crea un nuevo array
 

//Ahora con map
const nuevoArreglo2 = carrito.map( producto => `${producto.nombre} - Precio: ${producto.precio}`);//.map te crea un array nuevo array, por eso esta vacío

console.log(nuevoArreglo2);
