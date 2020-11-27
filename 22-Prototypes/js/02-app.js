// que problema soluciona el prototype?

function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const adrian = new Cliente('Adrian', 50000);


function formatearCliente(cliente){
    const {nombre, saldo} = cliente;
    return `El cliente ${ nombre } tiene un saldo de ${saldo}`;
}
function formatearEmpresa(empresa){
    const {nombre, saldo, categoria} = empresa;
    return `El cliente ${ nombre } tiene un saldo de ${saldo} y pertenece a la categoria ${categoria}`;
}

console.log( formatearCliente (adrian) );

function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const CCJ = new Empresa('Codigo con Juan', 4100, 'Cursos en linea');
console.log(formatearEmpresa(CCJ));

