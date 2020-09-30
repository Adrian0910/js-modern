

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

console.table(meses);

//Como acceder a todos los elementos del arreglo
console.log(meses.length); //Asi sabremos el tamaño de nuestro arreglo 

for(let i = 0; i < meses.length; i++) { //vamos a iterar para mostrar el arreglo entero
    console.log(meses[i]); //Cuando añadimos meses nos a a mostrar la informacion y no los indices
}