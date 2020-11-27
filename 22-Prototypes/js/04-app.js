// implementare lo mismo que en el ejercicio 2 pero con prototypes

function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}
Cliente.prototype.tipoCliente = function() {
    let tipo;

    if(this.saldo > 10000){
        tipo = 'Gold';
    }else if(this.saldo > 5000){
        tipo = 'Platinum';
    }else{
        tipo = 'Normal';
    }
    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function(){
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`;
}


Cliente.prototype.retiraSaldo = function(retira){
    this.saldo -= retira;
}


function Persona(nombre, saldo, telefono) {
    //this.nombre = nombre;
    //this.saldo = saldo;
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
}

Persona.prototype = Object.create( Cliente.prototype );

Persona.prototype.constructor = Cliente;

// Instanciarlo
const adrian = new Persona('Adrian', 50000, 56348100);
console.log(adrian);
console.log(adrian.nombreClienteSaldo);

Persona.prototype.mostrarTelefono = function(){
    return `El telefono de esta persona es: ${this.telefono}`;
}

console.log(adrian.mostrarTelefono());
