// IIFE para que no se confunda el código

export const nombreCliente = 'Juan';
export const ahorro = 20000;

export function mostrarInformacion(nombre, ahorro) {
    return `Cliente: ${nombre} - Ahorro: ${ahorro}`;
}


export function tieneSaldo(ahorro){
    if(ahorro > 0) {
        console.log('Si tienes saldo')
    }else {
        console.log('El cliente no tiene saldo')
    }
}


export class Cliente {
    constructor(nombre, ahorro){
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro}`;
    }

}


export default function nuevaFuncion(){
    console.log('Este es el expor default');
}








