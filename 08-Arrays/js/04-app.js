
//Como modificar un arreglo 
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];


meses[0] = 'Nuevo Mes'; //Al igual que en los obj, los arreglos tambien pueden ser modificados
meses[5] = 'Junio'; //tambien podemos añadir elementos desde afuera del array 
meses[10] = 'Octubre'; //no se salta los indices que no estan definidos
console.table(meses);

