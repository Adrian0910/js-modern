

const carrito = [ //Este arreglo tiene objetos
    {nombre: "Monitor 27 pulgadas", precio: 5000},
    {nombre: "Television", precio: 2500},
    {nombre: "Pixel a4", precio: 11000},
    {nombre: "Mouse", precio: 250},
    {nombre: "Reloj", precio: 600},
    {nombre: "Xbox", precio: 8000}
]


for(let i = 0; i < carrito.length; i++ ){
    console.log( `${carrito[i].nombre} - Precio: ${carrito[i].precio}` );
}
console.log("/////////////////////////////");
//Ahora con array Method forEach
carrito.forEach( function(producto){ //carrito = pural, producto = cada elemento dentro de carrito
    console.log( `${producto.nombre} - Precio: ${producto.precio}` );
} );


