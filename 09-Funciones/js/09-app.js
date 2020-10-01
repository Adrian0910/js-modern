//Funciones dentro de un objeto o:

const reproductor = {
    reproducir: function(id){ //Métodos de propiedad
        console.log(`Reproduciendo canción número: ${id}`);
    },
    pausar: function(){
        console.log("pausando...");
    },
    borrar: function(id){
        console.log(`Borrando cancion con id ${id}`);
    },
    crearPlaylist: function(name){
        console.log(`Agregando cancióm con el nombre ${name}`);
    },
    nombrePlaylist: function(namePlaylist){
        console.log(`Nombra tu playlist ${namePlaylist}`);
    }
}

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist("Ya llegó tu tiburón");
reproductor.nombrePlaylist("Sapito/Belinda");

