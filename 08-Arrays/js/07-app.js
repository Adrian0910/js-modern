

const carrito = []; 

const producto = { 
    nombre: "Monitor 32 pulgadas",
    precio: 4000
}
const producto2 = {
    nombre: "Celular",
    precio: 11000
}

carrito.push(producto);
carrito.push(producto2);

const producto3 = {
    nombre: "Mouse",
    precio: 800
}
const producto4 = {
    nombre: "Pixel A4",
    precio: 10000
}
carrito.push(producto4);
carrito.unshift(producto3);

// console.table(carrito);
// //Eliminar último elemento del array
// carrito.pop();
// console.table(carrito);

// //Eliminar del inicio del array
// carrito.shift();
console.table(carrito);
//Eliminar con splice
carrito.splice(1, 1);//En este caso elimina desde el indice 1 hasta el indice 1
console.table(carrito); 
carrito.splice(1, 2);//Aqui desde el indice 1 hasta el indice 2
console.table(carrito);