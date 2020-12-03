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
// Herencia
class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria) {
        super(nombre,saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }
    static bienvenida() { // reescribir un método
        return `Bienvenido al cajero de empresas`;
    }
}



const juan = new Cliente('Juan', 500);
const empresa = new Empresa('Investing', 1025, 56235486, 'Inversion en bolsa de valores');

console.log(empresa.mostrarInformacion());
console.log(empresa);

console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());