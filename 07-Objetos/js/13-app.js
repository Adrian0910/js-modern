
//obj 1
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 3000,
    disponible: true
}
//obj 2
const tablet = {

}


console.log(Object.keys( producto )); //obtenemos las llaves para saber si el obj esta vacio
console.log(Object.keys( tablet ));//ejemplo obj vacio


console.log(Object.values( producto )); //retorna como Object.keys pero por la derecha
console.log(Object.values( tablet ));


console.log(Object.entries( producto )); //Retorna todo en pares
console.log(Object.entries( tablet ));