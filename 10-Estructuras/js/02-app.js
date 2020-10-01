


const puntaje = 1000;
const puntaje2 = "1000";
console.log(typeof puntaje);
console.log(typeof puntaje2);

// if(puntaje != 1000){//If diferente a 1000
//     console.log("si es diferente");
// }

if(puntaje === "1000"){ // === Operador estricto, == operador no estricto
    console.log("si es diferente");
}else{
    console.log("no, no es diferente");
}