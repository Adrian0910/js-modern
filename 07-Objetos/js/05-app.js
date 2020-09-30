//Obj dentro de otro Obj


const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 3000,
    disponible: true,
    informacion: { //esto es otro objeto
        peso: "1Kg",
        medida: "1m"
    }, 
    fabricacion: { //este es un ob dentro de un obj, al mismo nivel del obj informacion
        pais: "China",
        promocion: {
            dias: "Fin de semana"
        }
    }
}
console.log(producto);
console.log(producto.informacion.peso); //asi accedemos a los datos dentro de ese obj
console.log(producto.fabricacion.pais);
console.log(producto.fabricacion.promocion.dias); //Aqui estamos solicitando un obj dentro de un obj dentro de un obj
