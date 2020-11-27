// todos los obj tienen un prototype

const cliente = { //NO reutilizable y no dinamico
    nombre: 'Adrian',
    saldo: 50000,
    puesto: 'CEO'
}
const cliente2 = {
    nombre: 'Juan',
    saldo: 10000,
    puesto: 'ingeniero'
}
console.log(cliente);
console.log(cliente2);
console.log(typeof cliente);



function Cliente(nombre, saldo, puesto) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.puesto = puesto;
}

const adrian = new Cliente('Adrian', 50000, 'CEO'); // Reutilizable y dinamico
const juan = new Cliente('Juan', 10000, 'ingeniero');

console.log(adrian);
console.log(juan);

