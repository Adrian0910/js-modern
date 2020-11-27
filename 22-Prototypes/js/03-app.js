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


// Instancia
const adrian = new Cliente('Adrian', 500000);
console.log(adrian.tipoCliente());
console.log(adrian.nombreClienteSaldo());
adrian.retiraSaldo(1000);
console.log(adrian.nombreClienteSaldo());


console.log(adrian);



function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}
Empresa.prototype.tipoEmpresa = function (){
    console.log(this.saldo)
}

const CCJ = new Empresa('Codigo con Juan', 4100, 'Cursos en linea');
CCJ.tipoEmpresa();
console.log(CCJ);









