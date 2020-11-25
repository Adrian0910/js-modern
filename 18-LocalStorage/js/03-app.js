// Eliminar elementos de localStorage

localStorage.removeItem('nombre');


// Actualizar un registro
const mesArray = JSON.parse(localStorage.getItem('meses'));
console.log(mesArray);
mesArray.push('Nuevo mes');
console.log(mesArray);
localStorage.setItem('meses', JSON.stringify(mesArray));

//Esto limpia todo localStorage
localStorage.clear(); 
