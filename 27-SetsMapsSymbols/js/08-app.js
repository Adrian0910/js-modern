// Iteradores "nuevos"


const ciudades = ['londres', 'New York', 'Paris', 'Madrid'];
const ordenes = new Set([ 123, 231, 131, 102]);
const datos = new Map();

datos.set('nombre', 'Juan');
datos.set('profesion', 'Desarrollador');

// Default => cada uno de estos iteradores tiene un Default
for( let ciudad of ciudades){
    console.log(ciudad);
}

for( let orden of ordenes){
    console.log(orden);
}

for( let dato of datos){
    console.log(dato);
}


console.log('*******************************');
// Entries iterator
for (let entry of ciudades.entries()) {
    console.log(entry);
}

// aqui se esta agregando la llave (porque no existe) cuando se manda a imprimir 
for (let entry of ordenes.entries()) {
    console.log(entry);
}

for (let entry of datos.entries()) {
    console.log(entry);
}


console.log('*****************************');

// Values iterator

for( let value of ciudades.values() ){
    console.log(value);
}

//ordenes
for( let value of ordenes.values() ){
    console.log(value);
}

//datos
for( let value of datos.values() ){
    console.log(value);
}

console.log('****************************');


//keys iterator

for( let keys of ciudades.keys() ){
    console.log(keys);
}

// si no hay llaves se generan con los datos que tenemos
for( let keys of ordenes.keys() ){
    console.log(keys);
}


for( let keys of datos.keys() ){
    console.log(keys);
}






