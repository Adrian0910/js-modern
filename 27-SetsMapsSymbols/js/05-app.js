// symbols =>crean propiedades únicas

const sym = Symbol('1');
const sym2 = Symbol('1');


// los symbols nunca son iguales
if(sym === sym2){
    console.log('son iguales')

}else{
    console.log('Son diferentes')
}


const nombre = Symbol();
const apellido = Symbol();

const persona = {}

// agregar nombre y apellido como llaves del obj
persona[nombre] = 'Adrian';
persona[apellido] = 'Lonmg';
persona.tipoCliente = 'Premium';
persona.saldo = 500;



console.log(persona);
console.log(persona[nombre]);

// las propiedades que utilizan un Symbol no son iterables
for(let i in persona){
    console.log(i);
}

// Definir una descripcion del Symbol
const nombreCliente = Symbol('Nombre del cliente');
const cliente = {};


cliente[nombreCliente] = 'Pedro';

console.log(cliente);

console.log(cliente[nombreCliente]);




