/* explicit binding */

function persona(el1, el2){
    console.log(`Mi nombre es ${this.nombre} y escucho ${el1} y ${el2}`)
}

const informacion = {
    nombre: 'Adrian'
}

const musicaFavorita = ['Heeavy Metal', 'Rock'];


// call existe en todas las funciones de JS y puedes pasar obj y arreglos

persona.call(informacion, musicaFavorita[0], musicaFavorita[1]);

//apply si toma el arreglo, no es necesario indicar la posicion de cada elemento
persona.apply(informacion, musicaFavorita);

// tambien se puede usar bind, la diferencia es que te crea una nueva funcion
const nuevaFuncion = persona.bind(informacion, musicaFavorita[0], musicaFavorita[1]);
nuevaFuncion();
