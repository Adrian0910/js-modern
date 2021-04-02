/* implicit blinding (palabras this) */

const usuario= {
    nombre: 'Adrian',
    edad: 23,
    informacion(){
        console.log(`Mi nombre es ${this.nombre} y mi edad es ${this.edad}`) /* this esta indicando en donde se encuentran los valroes */
    },
    mascota: {
        nombre: 'Hook',
        edad: 1,
        informacion(){
            console.log(`Mi nombre es ${this.nombre} y mi edad es ${this.edad}`)
        }
    }
}

usuario.informacion();
usuario.mascota.informacion();