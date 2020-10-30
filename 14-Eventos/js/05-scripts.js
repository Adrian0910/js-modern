// eventos con scroll
window.addEventListener("scroll", () =>{
    /* const scrollPX = window.scrollY;
    console.log(scrollPX); */
    //console.log("scrolling");
    const premium = document.querySelector(".premium");
    const ubicacion = premium.getBoundingClientRect();
    if(ubicacion.top < 784){
        console.log("El elemento ya esta visible");
    }else{
        console.log("Aun no, da mas scroll");
    }
})

