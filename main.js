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

//entregas varias




function mostrarProductos(precios) {
    document.getElementById("teclado").innerHTML = "Teclado $ " + precios.teclado
    document.getElementById("mouse").innerHTML = "mouse $ " + precios.mouse
    document.getElementById("monitor").innerHTML = "monitor $ " + precios.monitor
    document.getElementById("combo").innerHTML = "combo $ " + precios.combo
}


let precios = {
    teclado: 600,
    mouse: 300,
    monitor: 1000,
    combo: 1900
}
let productos = {
    teclado: "teclado",
    mouse: "mouse",
    monitor: "monitor",
    combo: "combo"

}


let precioschango = [];
let total = 0;
let listachango = [];
let chango = 0;
let valorCuota = 0;
let cuotas = 0;

let productoingresado;



function calcularCuotas(chango, cuotas) {
    return chango / cuotas

}

function sumaDePreciosChango(precioschango) {
    let sumasChango = 0;
    precioschango.forEach((numero) => {
        sumasChango += numero

    });
    return total = sumasChango
}

function agregarProductos() {
    productoingresado = prompt('ingrese su producto ("continuar" para confirmar el medio de pago)')
    while (productoingresado != "continuar") {
        switch (productoingresado) {
            case ("teclado"):
                chango = chango + precios.teclado
                listachango.push(productos.teclado + "= $" + precios.teclado);
                precioschango.push(precios.teclado);
                break;
            case ("mouse"):
                chango = chango + precios.mouse
                listachango.push(productos.mouse + "= $" + precios.mouse);
                precioschango.push(precios.mouse);
                break;

            case ("monitor"):
                chango = chango + precios.monitor
                listachango.push(productos.monitor + "= $" + precios.monitor);
                precioschango.push(precios.monitor);
                break;

            case ("combo"):
                chango = chango + precios.combo
                listachango.push(productos.combo + "= $" + precios.combo);
                precioschango.push(precios.combo);
                break;

            case ("Teclado"):
                chango = chango + precios.teclado
                listachango.push(productos.teclado + "= $" + precios.teclado);
                break;
            case ("Mouse"):
                chango = chango + precios.mouse
                listachango.push(productos.mouse + "= $" + precios.mouse);
                precioschango.push(precios.mouse);
                break;

            case ("Monitor"):
                chango = chango + precios.monitor
                listachango.push(productos.monitor + "= $" + precios.monitor);
                precioschango.push(precios.monitor);
                break;

            case ("Combo"):
                chango = chango + precios.combo
                listachango.push(productos.combo + "= $" + precios.combo);
                precioschango.push(precios.combo);
                break;

            default:
                alert("No hay stock en este momento")
                break;
        }

        productoingresado = prompt('Ingrese su texto ("continuar" para confirmar el medio de pago)')

    }
}

function realizarPago() {
    medioDePago = prompt('ingrese efectivo o tarjeta para continuar,para finalizar su compra escriba "finalizar"')

    while (medioDePago != "finalizar") {
        switch (medioDePago) {

            case ("efectivo"):
                chango = chango / 2
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



}

function finalizarCompra() {

    alert("Gracias por su compra")

    alert("total de la compra $" + total + ".\n Los productos que estas llevando son:\n" + listachango)

    if (cuotas != 0) {
        alert("vas a pagar " + cuotas + " cuotas de $" + valorCuota)

        sumaDePreciosChango(precioschango)
    }

}

let boton = document.getElementById("btnAceptar");
boton.addEventListener("click", respuestaClick);

function respuestaClick() {
    console.log("respuesta al aceptas");
    empezar();
    mostrarProductos(precios)
}
function empezar() {
    setTimeout(() => {
        agregarProductos();
        sumaDePreciosChango(precioschango);
        realizarPago();
        finalizarCompra();
    }, 500)

}

