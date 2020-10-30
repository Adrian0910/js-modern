const nav = document.querySelector(".navegacion");


//Registrar un evento con mouse
nav.addEventListener("mouseenter", () =>{ 
    console.log("entrando en nav");


    nav.style.backgroundColor = "green";
})

nav.addEventListener("mouseout", () =>{ 
    console.log("saliendo en nav");
    nav.style.backgroundColor = "transparent";
})
//mousedown - similar a click,
//click,
// mouseup - cuando sueltas el mouse, 
//dblcick - doble click


