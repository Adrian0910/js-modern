// set debil => weakSet


// solo se le puden pasar objetos
const weakset = new WeakSet();

const cliente = {
    nombre: 'Adrian',
    saldo: 15000
}

weakset.add(cliente);

//weakset.delete(cliente);


console.log(weakset);