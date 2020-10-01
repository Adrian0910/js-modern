// Switch - Will Smith

const metodoPago = "tarjeta";

switch(metodoPago) { //En el parentesis lo que quieres comprobar
    case "efectivo": //Case 1
    pagar()
        // console.log(`Pagaste con ${metodoPago}`);
        break; //Break para que no se quede ahi
    case "cheque":
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case "tarjeta":
        console.log(`Pagaste con ${metodoPago}`)
        break;
    default:
        console.log("Selecciona un método de pago, bruto y los pejedolares no valen");
        break;
}

function pagar () {
    console.log("Pagando...");
}

