//Miau miau

function sumar(a, b){
    return a+b;
}

const resultado = sumar(5, 6);

console.log(resultado);



//Ejemplo más avanzado

let total = 0; //Paradigma de programacióm :eyes:
function agregarCarrito(precio){
    return total += precio;
}
function calcularImpuesto(total){
    return total * 1.16;
}

total = agregarCarrito(1000);
total = agregarCarrito(100);
total = agregarCarrito(1590);


const totalPagar = calcularImpuesto(total);
console.log(`El total a pagar es de: ${totalPagar}`);
console.log(total);