

const carrito = [ //Este arreglo tiene objetos
    {nombre: "Monitor 27 pulgadas", precio: 5000},
    {nombre: "Television", precio: 2500},
    {nombre: "Pixel a4", precio: 11000},
    {nombre: "Mouse", precio: 250},
    {nombre: "Reloj", precio: 600},
    {nombre: "Xbox", precio: 8000}
]

//Method forEach
const nuevoArreglo = carrito.forEach( function(producto){ //forEach NO crea un nuevo array
    console.log( `${producto.nombre} - Precio: ${producto.precio}` );
} );

//Ahora con map
const nuevoArreglo2 = carrito.map( function(producto){ //.map te crea un array nuevo array, por eso esta vacio
    console.log( `${producto.nombre} - Precio: ${producto.precio}` );
} );
console.log(nuevoArreglo);
console.log(nuevoArreglo2);
