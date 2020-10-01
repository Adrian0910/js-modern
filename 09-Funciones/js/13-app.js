//Funciones dentro de un objeto o:

const reproductor = {//Métodos de propiedad
    cancion: "",
    reproducir: id => console.log(`Reproduciendo canción número: ${id}`),
    pausar: () => console.log("pausando..."),
    borrar: id => console.log(`Borrando cancion con id ${id}`),
    crearPlaylist: name => console.log(`Agregando cancióm con el nombre ${name}`),
    nombrePlaylist: namePlaylist =>console.log(`Nombra tu playlist ${namePlaylist}`),
    set nuevaCancion(cancion){
    this.cancion = cancion;
    console.log(`Añadiendo ${cancion}`);
    },
    get obtenerCancion(){
        console.log(`${this.cancion}`);
    }
}
reproductor.nuevaCancion = "La tusa";
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist("Ya llegó tu tiburón");
reproductor.nombrePlaylist("Sapito/Belinda");

