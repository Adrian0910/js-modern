
//Diferencias entre los tipos de declaraciones, todo por hoisting
sumar();
function sumar(){
    console.log( 2 + 2);
}


//(Function expression)
sumar2();
const sumar2 = function(){
    console.log( 3 + 3);
}

