// Maps => listas ordenadas en llave y valor

// los maps pueden recibir cualquier tipo de valor
const cliente = new Map();

cliente.set('nombre', 'Karen');
cliente.set('tipo', 'premium');
cliente.set('saldo', '1,000,000');
cliente.set(true, true);



console.log(cliente.size);

console.log(cliente.has('nombre'));

console.log(cliente.get('saldo'));

cliente.delete('saldo');

console.log(cliente.has('saldo'));

console.log(cliente.get('saldo'));



console.log('*****************************');
// limpiar el map

cliente.clear();
console.log(cliente);


// un map puede iniciarse con valores

const paciente = new Map([ ['nombre', 'paciente'], ['cuarto', 'no definido'] ]);

paciente.set('nombre', 'Juan'); // reescribiendo estos valores
paciente.set('dr', 'Doctor Asignado'); // asignando nuevos valores al map

console.log(paciente);

paciente.forEach( (datos, index) => {
    console.log(index);
})

