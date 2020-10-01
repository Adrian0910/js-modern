//Operador && and, revisa que se cumplan 2 condiciones

const usuario = false;
const puedePagar = true;

if(usuario && puedePagar){
    console.log("El jamoncin si puede pagar");
}  else if (!puedePagar && !usuario) {
    console.log("Sáquese, no puede comprar")
}
else if(!usuario) {
    console.log("Inicia sesión o registrate");
} else if(!puedePagar){
    console.log("Eres pobre, te falta maldad");
} else if (!puedePagar && usuario) {
    console.log("Sáquese, no puede comprar")
}
else{
    console.log("No, ta chavo el sireno y pobre");
}



