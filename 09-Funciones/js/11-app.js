

//Como pasar parametros 

const aprendiendo = function(tecnologia, tecnologia2){
    console.log(`Aprendiendo ${tecnologia} y ${tecnologia2}`);
}
aprendiendo("JavasScript", "Node.js");



//Como pasar parametros con arrow function 

const aprendiendo2 = (tecnologia, tecnologia2) => `Aprendiendo ${tecnologia} y ${tecnologia2}`; //Cuando es más de 1 parámetro, se necesita poner los parentesis
console.log(aprendiendo2("JavaScript", "Node.js"));
