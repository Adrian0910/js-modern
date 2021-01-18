
const paises = [];

function nuevopais(pais, callback){
    paises.push(pais);
    console.log(`Agregado: ${pais}`);
    callback();
}


function mostrarPaises(){
    console.log(paises);
}

function iniciarCallbackHell(){
    setTimeout(() => {
        nuevopais('Alemania', mostrarPaises);

        setTimeout(() => {
            nuevopais('Francia', mostrarPaises);

            setTimeout(() => {
                nuevopais('México', mostrarPaises);
            }, 3000);

        }, 3000);

    }, 3000);
}


iniciarCallbackHell();



