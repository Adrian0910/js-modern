//  

const encabezado = document.querySelector(".contenido-hero h1").textContent; // Tambien se puede seleccionar directamente aqui
console.log(encabezado);


console.log(encabezado.innerText); // Si en el CSS visibility: hidden; no lo va a encontrar
console.log(encabezado.textContent);// Este si lo va a encontrar
console.log(encabezado.innerHTML); // Se trae el HTML


//Se puede realizar asi el cambio
// const nuevoHeading = "Nuevo Heading";
// document.querySelector(".contenido-hero h1").textContent = nuevoHeading;

// o asi
// document.querySelector(".contenido-hero h1").textContent = "Nuevo heading";



// De esta manera modificariamos una imagen directamente en el DOM
const imagen = document.querySelector(".card img");
imagen.src = "img/hacer2.jpg"

