/* const primerEnlace = document.querySelector('a');
//Eliminar un elemento por si mismo con .remove
primerEnlace.remove(); */

//Eliminar desde el padre...
const navegacion = document.querySelector('.navegacion');

console.log(navegacion.children);//Primero consultamos los hijos que tiene 

navegacion.removeChild( navegacion.children[2] ); //ya con esto lo eliminamos 

