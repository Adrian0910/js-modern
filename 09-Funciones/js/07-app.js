
iniciarApp();

//Forma si recomendada
function iniciarApp(){
    console.log("Iniciando App...");
    
    segundaFuncion();
}


//Forma no recomendada
function segundaFuncion(){
    console.log("Desde la segunda funcion");
    usuarioAutenticado("Pablo");

}


function usuarioAutenticado(usuario){
    console.log("Autenticando usuario...");
    console.log(`Usuario autenticado exitosamente: ${usuario} `);
}
