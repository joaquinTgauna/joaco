//primer entraga
/*
let entrada = prompt('Ingrese su texto ("salir" para finalizar)')

while (entrada != "salir") {
    switch (entrada) {
        case ("hola"):
            console.log("Hola como estas")
            break;
        case ("chau"):
            console.log("Chau,hasta luego")
            break;
        default:
            console.log("No entiendo")
            break;
    }
    entrada = prompt('Ingrese su texto ("salir" para finalizar)')
    
}
console.log ("Gracias,vuelvas prontos")
*/

//segunda entrega

let teclado = 600;
let mouse = 300;
let monitor = 1000;
let chango = 0;
let valorCuota = 0;
let cuotas = 0;
let combo = (monitor + teclado + mouse) / 2

let productos = prompt('ingrese su producto ("continuar" para confirmar el medio de pago)')

while (productos != "continuar") {
    switch (productos) {
        case ("teclado"):
            chango = chango + teclado
            break;
        case ("mouse"):
            chango = chango + mouse
            break;

        case ("monitor"):
            chango = chango + monitor
            break;

        case ("combo"):
            chango = chango + combo
            break;

        case ("Teclado"):
            chango = chango + teclado
            break;
        case ("Mouse"):
            chango = chango + mouse
            break;

        case ("Monitor"):
            chango = chango + monitor
            break;

        case ("Combo"):
            chango = chango + combo
            break;

        default:
            alert("No hay stock en este momento")
            break;
    }

    productos = prompt('Ingrese su texto ("continuar" para confirmar el medio de pago)')

}
medioDePago = prompt('ingrese efectivo o tarjeta para continuar,para finalizar su compra escriba "finalizar"')

while (medioDePago != "finalizar") {
    switch (medioDePago) {

        case ("efectivo"):
            chango = divPorDos(chango)
            break;

        case ("tarjeta"):
            cuotas = prompt("indique cantida de cuotas")
            valorCuota = calcularCuotas(chango, cuotas)
            console.log(valorCuota + "resultado de las cuotas")
            break;


        default:
            alert("medio de pago incorrecto")
            break;


    }

    medioDePago = prompt('ingrese Efectivo o Tarjeta,para finalizar su compra escriba "finalizar"')

}
alert("Gracias por su compra")

alert("total de la compra $" + chango)

if (cuotas != 0) {
    alert("vas a pagar " + cuotas + " cuotas de $" + valorCuota)
}

function divPorDos(chango) {
    return chango / 2

}
function calcularCuotas(chango, cuotas) {
    return chango / cuotas

}