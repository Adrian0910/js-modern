// Funciones que retornan una funcion

const obtenerCliente = () => () => console.log('Adrian');

const fn = obtenerCliente();

fn();