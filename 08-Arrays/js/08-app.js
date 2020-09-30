const carrito = []; 

const producto = { 
    nombre: "Monitor 32 pulgadas",
    precio: 4000
}


//Destructuring con obj
const {nombre} = producto;

console.log(nombre);

//Destructuring con arrays
const numeros = [10, 20, 30, 40, 50];

// const [primero] = numeros; //Aqui si se pueden nombrar como tú quieras
// console.log(primero);
// const [ , , tercero ] = numeros; //Asi podemos acceder a un elemento en especifio, las comas es de que valen 0
// console.log(tercero);

const [ primero, , ...tercero ] = numeros; //Este te muestra todos los elementos despues del nombrado
console.log(tercero);