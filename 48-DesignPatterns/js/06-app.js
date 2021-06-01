
//Mixin Pattern

class Persona{
    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email;
    }
}

class Cliente{
    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email;
    }
}
const funcionesPersona = {
    mostrarInformacion(){
        console.log(`Nombre Persona: ${this.nombre}, Email: ${this.email}`);
    },
    mostrarNombre(){
        console.log(`Mi nombre es ${this.nombre}`);
    }
}

//Añadir funciones persona a la clase de persona
Object.assign(Persona.prototype, funcionesPersona);
Object.assign(Cliente.prototype, funcionesPersona);

const cliente = new Persona('Adrian', 'correo@correo.com');

console.log(cliente);
cliente.mostrarInformacion();

const cliente2= new Cliente('Cliente', 'cliente@cliente.com');
console.log(cliente2);
cliente2.mostrarInformacion();
cliente2.mostrarNombre();



