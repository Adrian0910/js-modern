// ForIn
const automovil = {
    modelo: "Camaro",
    year: 1969,
    motor: "6.0"
}

for( let propiedad in automovil){ // for in itera sobre el objeto
    console.log(`${automovil[propiedad]}`);
}


// Iterar sobre los valores de un objeto 
for ( let [llave, valor] of Object.entries(automovil)){
    console.log(valor);
    console.log(llave);
}
