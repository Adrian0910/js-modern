const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 3000,
    disponible: true,
    informacion: { //esto es otro objeto
        peso: "1Kg",
        medida: "1m"
    }, 
    fabricacion: { //este es un obj dentro de un obj, al mismo nivel del obj informacion
        pais: "China",
        promocion: {
            dias_pedido: "Fin de semana" //este es un obj dentro de un obj dentro de un obj
        }
    }
}

//vamos a acceder al obj con destructuring
const {nombre, informacion, fabricacion: {pais}, fabricacion: {promocion: {dias_pedido}} } = producto;
console.log(nombre);
console.log(informacion);
console.log(pais);
console.log(dias_pedido);