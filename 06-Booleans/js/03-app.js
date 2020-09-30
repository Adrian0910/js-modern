//Buenas practicas al comparar booleans

const boolean1 = true;


//Asi no, estas validando algo que ya esta implicito
// if(boolean1 === true){
//     console.log("Si puedes ver Netflix");
// }else{
//     console.log("No puedes ver Netflix");
// }
if(boolean1){ //El if ya reconoce el primer valor como un true, no es necesario ponerlo
   console.log("Si puedes ver Netflix");
}else{
   console.log("No puedes ver Netflix");
 }


 //Con operador ternario

 console.log(boolean1 ? 'Si puede ver Netflix' : 'No puede ver netflix');
