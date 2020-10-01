

//else if

const dinero =1000;
const totalAPagar = 500;
// const tarjeta = false;
const cheque = true;

if( dinero >= totalAPagar){
    console.log("Si le alcanza al jamoncin");
}else if(cheque){
    console.log("No puedes pagar porque no tienes cheques");
}
else if(tarjeta){
    console.log("Si puedes pagar porque traes tu tarjeta");
}
else{
    console.log("ni modo jamoncin, tas pobre y no traes tu tarjeta F :(");
}
