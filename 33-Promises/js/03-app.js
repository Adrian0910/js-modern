const aplicarDescuento = new Promise( (resolve, reject) => {

    const descuento = true;

    if(descuento){

        resolve('Descuento aplicado')

    }else{
        reject('No se puede aplicar el descuento')
    }
} );


aplicarDescuento
    .then( resultado => descuento(resultado))
    .catch(error => console.log(error))


// Hay 3 valores posibles para un promise
// fulfilled --> El promise se cumplió
// reject --> NO se cumplio el promise
// pending --> No se ha cumplido y tampoco fue rechazado

function descuento(mensaje){
    console.log(mensaje);
}


