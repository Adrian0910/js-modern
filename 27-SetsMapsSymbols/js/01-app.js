// sets => permiten crear listas de valores sin duplicados

const carrito = new Set();


// Solo valor, sin llave
carrito.add('Camisa');
carrito.add('Disco 1');
carrito.add('Disco 2');
carrito.add('Disco 3');

// eliminar algun elemento del set
console.log(carrito.delete('Disco 3'));

// como camisa 2 no se encuentra en el set no puede borrarlo
console.log(carrito.delete('camisa '));
console.log('****************************');



// como saber si nuestro set tiene algun elemento
console.log(carrito.has('Disco 2'));
console.log(carrito.has('Disco 3'));

// obtener el tamaño del set
console.log(carrito.size);

// los setes SI son iterables
carrito.forEach(producto => console.log(producto));


console.log(carrito);


// vaciar el carrito
carrito.clear();

console.log('****************************');
console.log(carrito);

// Ejemplo de aplicacion de un set
// Del sigueinte arreglo eliminar los duplicados
const numeros = [10,20,30,40,50,10,20];

const noDuplicados = new Set(numeros);

console.log(noDuplicados);