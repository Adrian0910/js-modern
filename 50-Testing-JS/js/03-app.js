
//Probar dos valores
function suma(a, b){
    return a + b;
}

function restar(a, b){
    return a - b;
}

//async
async function sumaAsync(a,b){
    return Promise.resolve( suma(a,b));
}
//async


//Datos validacion
let resultado = suma(1, 2);
let esperado = 3;

expected(esperado).toBe(resultado);
expected(esperado).toEqual(resultado);

// let resultado2 = restar(12, 2);
// let esperado2 = 3;

// expected(esperado2).toEqual(resultado2);
//Datos validacion


// Funciones
test('Suma 10 + 20 y el resultado debe ser 30', async () => {
    const resultado = await sumaAsync(10,20);
    const esperado = 31;
    expected(esperado).toBe(resultado);
})

async function test(mensaje, callback){
    try {
        await callback();
        console.log(`El test: ${mensaje} se ejecutó correctamente`)
    } catch (error) {
        console.error('Error');
        console.error(error);
    }
}


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
// Funciones
