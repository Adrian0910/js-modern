// forOff

const pendientes = ["Tarea", "Estudiar Js", "Proyecto", "Comer"];




const carrito = [ //Este arreglo tiene objetos
    {nombre: "Monitor 27 pulgadas", precio: 5000},
    {nombre: "Television", precio: 2500},
    {nombre: "Pixel a4", precio: 11000},
    {nombre: "Mouse", precio: 250},
    {nombre: "Reloj", precio: 600},
    {nombre: "Xbox", precio: 8000}
]


// Se asigna un alias a cada elemento del arreglo
for( let pendiente of pendientes){
    console.log(pendiente);
}


// Para carrito
for( let producto of carrito){
    console.log(producto.nombre);
}

