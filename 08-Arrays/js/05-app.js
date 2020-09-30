
const meses = ['Enero', 'Febrero', 'Marzo'];



//Métodos del arreglo
meses.push('Abril'); //Asi podemos agregar elementos al array sin conocer su indice
meses.push('Mayo');


console.table(meses);



const carrito = []; //Esto es un arreglo vacio

//definir un producto

const producto = { //obj
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

//Vamos a agregarlo al carrito


carrito.push(producto);
carrito.push(producto2);
carrito.unshift(producto3);//Este agrega un elemento al inicio del arreglo 
console.table(carrito);