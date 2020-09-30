
//Unir arreglos con spread operator

const carrito = []; 

const producto = { 
    nombre: "Monitor 32 pulgadas",
    precio: 4000
}
const producto2 = {
    nombre: "Celular",
    precio: 11000
}
const producto3 = {
    nombre: "Mouse",
    precio: 800
}

//Vamos a agregarlo al carrito con spread
let resultado = [...carrito, producto, producto2, producto3]; //Añadiendo de manera declarativa (creando una copia de carrito)
//Este si depende de como se pasan los datos 
console.table(resultado);
