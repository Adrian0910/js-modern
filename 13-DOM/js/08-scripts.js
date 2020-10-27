// traversing the dom ... para recorrer el dom

const navegacion = document.querySelector('.navegacion');

 console.log(navegacion.firstElementChild);
 console.log(navegacion.lastElementChild);
/*
console.log(navegacion.childNodes); // Los espacios en blanco son considerados elementos
console.log(navegacion.children); //Si va a listar unicamente elementos reales (código html) */



/* console.log(navegacion.children[1].nodeName); 
console.log(navegacion.children[1].nodeType);  */ //Esto nos ayuda a obtener inf sobre las etiquetas

//Vamos a seleccionar un card

 const car = document.querySelector('.card');
/* car.children[1].children[1].textContent = 'Modificando el texto desde traversing the dom'
console.log(car.children[1].children[1].textContent);


car.children[0],src = 'img/hacer3.jpg';
console.log(car.children[0]);  */

//traversing al padre
//console.log(car.parentNode);
//console.log(car.parentElement.parentElement.parentElement); //Este verifica por elementos VALIDOS en el html

/* console.log(car);
console.log(car.nextElementSibling); //recorre entre hermanos hacia adelante */

/* const ultimoCar = document.querySelector('.car:nth-child(4)');
console.log(ultimoCar.previousElementSibling); //Recorre hacia el elemento anterior */


