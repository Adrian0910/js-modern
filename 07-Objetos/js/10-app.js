//Como unir obj

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 3000,
    disponible: true,
}
const medidas = {
    peso: "1Kg",
    medida: "1m"
}
console.log(producto);
console.log(medidas);


//una manera de unirlos es asi
const resultado = Object.assign(producto, medidas);

///Spread Operator o Rest Operator
const resultado2 = { ...producto, ...medidas}//los puntos indican que hay que copiar esos obj

console.log(resultado);
console.log(resultado2);