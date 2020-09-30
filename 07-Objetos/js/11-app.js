//this se refiere a los valores que existen en el mismo objeto
const nombre = "LG";
const precio = 5000;

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 3000,
    disponible: true,
    mostrarinfo: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`)
        console.log(`El producto: ${nombre} tiene un precio de: ${precio}`)//Aqui se puede
        //observar la diferencia, mientras que en this.nombre obtiene la informacion asignada dentro
        //del obj, abajo que no tiene this esta obteniendo la informacion de las variables declaradas arriba,
    }
}
producto.mostrarinfo(); 

