// Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

// Event Listeners
eventListeners();

function eventListeners(){
    // cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet);

    // Cuando el documento esta listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse( localStorage.getItem('tweets')) || [];
        console.log(tweets);
        crearHTML();
    });
}



// Funciones
function agregarTweet(e){
    e.preventDefault();

    // TextArea donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;

    console.log(tweet);
    // Validación espacios en blanco
    if(tweet === ''){
        mostrarError('Un mensaje no puede ir vacio');
        
        return; // evita que se ejecuten mas lineas de código, funciona en un if siempre y cuando este en una funcion
    }
    const tweetObj = {
        id: Date.now(),
        //tweet: tweet cuando son iguales se puede dejar solo 1
        tweet
    }

    // Añadir al arreglo de tweets
    tweets = [...tweets, tweetObj];
    
    // Una vez agregado vamos a crear el html
    crearHTML();

    // Reiniciar el formulario
    formulario.reset();


}

// Mostrar mensaje de error
function mostrarError(error){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    // insertarlo en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);
    //Elimina la alerta despues de 3 segundos
    setTimeout(()=> {
        mensajeError.remove();
    }, 3000);
}

// Muestra un lista de los tweets
function crearHTML(){
    limpiarHTML();

    if(tweets.length > 0){
        tweets.forEach( tweet =>{

            // Agregar un boton de eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';

            // Añadir la funcion de eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }

            // Crear el html
            const li = document.createElement('li');

            // añadir el texto
            li.innerText = tweet.tweet;

            // Asiganar el botón
            li.appendChild(btnEliminar);

            // insertarlo en el html
            listaTweets.appendChild(li);
        })
    }
    sincronizarStorage();

}
// Agrega los tweets actuales a LocalStorage
function sincronizarStorage(){
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

// Elimina un tweet
function borrarTweet(id){
    tweets = tweets.filter( tweet => tweet.id !== id);
    crearHTML();
}

// limpiar el HTML
function limpiarHTML(){
    while (listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
    }
}