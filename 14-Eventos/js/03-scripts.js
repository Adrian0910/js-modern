const busqueda = document.querySelector(".busqueda");
busqueda.addEventListener("keydown", (e) =>{// Estamos pasando un evento e
    if(e.target === ""){
        console.log("Fallo la validacion");
    } 
 
});
// keyup - escribes pero sueltas la tecla
//blur -- puede servir para validaciones
// copy
// paste
//cut
// input - se ejecuta cuando se realiza cualquier evento anterior menos blur
// e.target
// e.value


