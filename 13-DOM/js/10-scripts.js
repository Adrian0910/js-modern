//Creando elementos

const enlace = document.createElement("A");

//Agregando el texto
enlace.textContent = "Nuevo enlace";

//añadiendo href
enlace.href = "/nuevo-enlace";

console.log(enlace);

enlace.target = "_blank";

enlace.setAttribute("data-enlace", "nuevo-enlace");
enlace.classList.add("alguna-clase");

enlace.onclick = miFuncion;


//Seleccionar la navegacion donde se mostrara el enlace

const navegacion = document.querySelector(".navegacion");
console.log(navegacion.children);

navegacion.insertBefore(enlace, navegacion.children[2]);

function miFuncion(){
    alert("Diste click");
}


// Crear un CARD de forma dinamica *************************

const parrafo1 = document.createElement("P");
parrafo1.textContent = "concierto";
parrafo1.classList.add("categoria", "concierto");


const parrafo2 = document.createElement("P");
parrafo2.textContent = "Concierto de rock";
parrafo2.classList.add("titulo");


const parrafo3 = document.createElement("P");
parrafo3.textContent = "800 por persona";
parrafo3.classList.add("precio");

// Crear div con la clase de info
const info = document.createElement("div");
info.classList.add("info");
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//Crear la imagen
const imagen = document.createElement("img");
imagen.src = "img/hacer2.jpg";
imagen.classList.add("img-fluid");
imagen.alt = "Texto alternativo";

// Crear el card
const card = document.createElement("div");
card.classList.add("card");

// Asignar la imagen
card.appendChild(imagen);

// Asignar info
card.appendChild(info);
console.log(imagen);

// Insertar en el HTMl
const contenedor = document.querySelector(".hacer .contenedor-cards");
contenedor.appendChild(card);
//contenedor.insertBefore(card, contenedor.children[0]);


