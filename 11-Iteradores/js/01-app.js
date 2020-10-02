//for loop

//Identificar números pares y nones con for

// for(let i = 0; i <= 20; i++){
//     if( i % 2 === 0 ){
//         console.log(`El número ${i} es par`);
//     }else{
//         console.log(`El número ${i} es inpar`);
//     }
// }


const carrito = [ 
    {nombre: "Monitor 27 pulgadas", precio: 5000},
    {nombre: "Television", precio: 2500},
    {nombre: "Pixel a4", precio: 11000},
    {nombre: "Mouse", precio: 250},
    {nombre: "Reloj", precio: 600},
    {nombre: "Xbox", precio: 8000}
]

console.log(carrito.length);

for(let i = 0; i < carrito.length; i++){
    console.log(carrito[i].nombre);
}

