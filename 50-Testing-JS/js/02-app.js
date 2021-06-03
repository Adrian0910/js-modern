
//Probar dos valores
function suma(a, b){
    return a + b;
}

function restar(a, b){
    return a - b;
}

let resultado = suma(1, 2);
let esperado = 3;

let resultado2 = restar(12, 2);
let esperado2 = 3;



expected(esperado).toBe(resultado);

expected(esperado2).toEqual(resultado2);

function expected( esperado ){
    return{
        toBe(resultado) {
            if(resultado !== esperado){
                console.log(`El ${resultado} es diferente a lo esperado, la prueba no paso`);
            }else{
                console.log("la prueba paso correctamente");
            }
        },
        toEqual(resultado2){
            if(resultado2 !== esperado2){
                console.log(`El ${resultado2} no es igual a lo esperado, la prueba no paso`);
            }else{
                console.log("la prueba paso correctamente");
            }
        }
    }
}

