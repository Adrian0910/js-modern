
// new binding, es lo que se conocia como POO

function Auto(modelo, color){
    this.modelo = modelo;
    this.color = color;
}

const auto = new Auto('Camaro', 'Verde');
console.log(auto);


// window binding, asigna una variable a la ventana global

window.color = 'negro';
function hola(){
    console.log(color);
}

hola();

