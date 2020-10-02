//break y continue



// //For que se detiene al detectar el elemento 5
// for(let i = 0; i <= 10; i++){
    
//     if(i=== 5){
//         console.log("Este es el número 5");
//         break;
//     }
//     console.log(`Número: ${i}`);
// }


// //este for llega al número 5 pero continua
// for(let i = 0; i <= 10; i++){
    
//     if(i=== 5){
//         console.log("Número: CINCO");
//         continue;
//     }
//     console.log(`Número: ${i}`);
// }



const carrito = [ 
    {nombre: "Monitor 27 pulgadas", precio: 5000},
    {nombre: "Television", precio: 2500},
    {nombre: "Pixel a4", precio: 11000, descuento: true},
    {nombre: "Mouse", precio: 250},
    {nombre: "Reloj", precio: 600},
    {nombre: "Xbox", precio: 8000}
]


for(let i = 0; i < carrito.length; i++){
    if(carrito[i].descuento){
        console.log(`El aritculo ${carrito[i].nombre} tiene descuento `);
        continue;
    }
    console.log(carrito[i].nombre);
}

