// event loop... como se va ejecutando el c+odigo de JS
/* El código de JS es de un solo hilo, solo se ejecuta una cosa a la vez */

console.log('Primero');

setTimeout(() => {
    console.log('Segundo');
}, 0);

console.log('Tercero');

setTimeout(() => {
    console.log('Cuarto');
}, 0);


new Promise(function(resolve){
    resolve('Desconocido...')
}).then(console.log)
console.log('Ultimo');


function hola(){
    console.log('hola')
}
hola();



