// forEach, es ideal para recorrer arreglos y se ejecutara una vez por elemento


const pendientes = ["Tarea", "Estudiar Js", "Proyecto", "Comer"];

pendientes.forEach( (pendiente, i) => console.log(`${i} : ${pendiente}`));



const carrito = [ //Este arreglo tiene objetos
    {nombre: "Monitor 27 pulgadas", precio: 5000},
    {nombre: "Television", precio: 2500},
    {nombre: "Pixel a4", precio: 11000},
    {nombre: "Mouse", precio: 250},
    {nombre: "Reloj", precio: 600},
    {nombre: "Xbox", precio: 8000}
]

// Con forEach
const nuevoArreglo = carrito.forEach( (producto) => producto.nombre);

// Ahora con Map
const nuevoArreglo2 = carrito.map( (producto) => producto.nombre);


console.log(nuevoArreglo);
console.log(nuevoArreglo2);