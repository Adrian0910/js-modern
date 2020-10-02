// spreat operator

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// spread operatorcon arreglo de indices
const meses2 = [...meses, "Agosto"];
console.log(meses2);

// con el objeto producto, vamos a realizarlo de manera funcional, sin modificar el arreglo original
const producto = {
        nombre: "Disco duro", precio: 300
};
const carrito2 = [...carrito, producto];
console.log(carrito);
console.log(carrito2);

