// Existen 2 formas de declarar una clase


// forma #1 class declaration
class Cliente {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }
    static bienvenida() { // Recuerda que las static no requieren una instancia para ser mostradas
        return `Bienvenido al cajero`;
    }
}

const juan = new Cliente('Juan', 500);
console.log(juan.mostrarInformacion());
console.log(juan);

console.log(Cliente.bienvenida());

// forma #2 class expresion
const Cliente2 = class {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
    mostrarInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }
}

const juan2 = new Cliente2('Juan', 400);
console.log(juan2.mostrarInformacion());
console.log(juan2);


