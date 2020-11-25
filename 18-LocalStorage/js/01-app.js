// Como agregar elementos a localStorage
// localStorage no soporta otra cosa que no sean strings
localStorage.setItem('nombre', 'Adrian');

const producto = {
    nombre: 'Monitor 24 pulgadas',
    precio: 2300
}

const productoString = JSON.stringify( producto ); // Convierte el obj en un string
localStorage.setItem('producto', productoString);

const mes = ['Enero', 'Febrero', 'Marzo'];
//const mesesString = JSON.stringify( meses );
localStorage.setItem( 'meses', JSON.stringify(mes)); // asi nos evitamos crear la variable