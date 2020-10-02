// Operadores santo cavernario, el Blue Demon y el bulldog


const autenticado = false;
const puedePagar = true;


const efectivo = 800;
const credito = 1000;
const disponible = efectivo + credito;
const totalPagar = 600;


console.log(autenticado || puedePagar ? "Si puede pagar" : "No puede pagar" );


//if anidado
if(efectivo > totalPagar || credito > totalPagar || disponible > totalPagar){
    if( efectivo > totalPagar){
        console.log("Si pagaste con efectivo");
    } else {
    console.log("Otra forma de pago");
    }
} else {
    console.log("Fondos insuficientes");
}


//if anidado con cavernario
console.log(autenticado ? puedePagar ? "Si esta autenticado y puede pagar" : "No puede pagar" : "No, no esta autenticado");


