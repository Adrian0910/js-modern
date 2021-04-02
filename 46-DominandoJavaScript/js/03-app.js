/* coercion es la conversion automatica o implicita de valores de un tipo dado a otro.*/

const numero1 = 20;
const numero2 = "40";

console.log(numero1 + numero2); /* Se esta forzando a que JS aplique coercion implicita*/


console.log(Number(numero2)); /* coercion explicita */

console.log(numero1.toString()); /* explicita */

const pedido = [1,2,3,4];
console.log(pedido.toString());
console.log(JSON.stringify(pedido));


