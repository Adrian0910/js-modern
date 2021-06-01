//Contructor Pattern
//Se utiliza una clase base que sirve como plano para que las demas clases hereden sobre esta

class Persona{
    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email;
    }
}

class Cliente extends Persona{
    constructor(nombre, email, empresa){
        super(nombre, email);
        this.empresa = empresa;
    }
}

const persona = new Persona('Juan', 'juan@gmail.com');
console.log(persona);

const cliente = new Cliente('Adrian', 'adrian@gmail.com', 'MexiDevs');
console.log(cliente);

